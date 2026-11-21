import { NextResponse } from 'next/server';

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
}

interface GitHubRepo {
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  pushed_at: string;
  html_url: string;
}

// Cache duration in seconds (5 minutes)
const CACHE_DURATION = 300;
let cache: {
  data: unknown;
  timestamp: number;
} | null = null;

export async function GET() {
  try {
    // Check cache first
    if (cache && (Date.now() - cache.timestamp) < CACHE_DURATION * 1000) {
      return NextResponse.json(cache.data);
    }

    const username = 'jmoore6364'; // Replace with your GitHub username
    const token = process.env.GITHUB_TOKEN; // Optional: Add GitHub token for higher rate limits

    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Portfolio-App'
    };

    if (token) {
      headers['Authorization'] = `token ${token}`;
    }

    // Fetch user data
    const userResponse = await fetch(`https://api.github.com/users/${username}`, {
      headers,
      next: { revalidate: CACHE_DURATION }
    });

    if (!userResponse.ok) {
      throw new Error(`GitHub API error: ${userResponse.status}`);
    }

    const userData: GitHubUser = await userResponse.json();

    // Fetch repositories
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, {
      headers,
      next: { revalidate: CACHE_DURATION }
    });

    if (!reposResponse.ok) {
      throw new Error(`GitHub API error: ${reposResponse.status}`);
    }

    const reposData: GitHubRepo[] = await reposResponse.json();

    // Calculate total stars
    const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);

    // Format repository data
    const repositories = reposData.slice(0, 6).map(repo => ({
      name: repo.name,
      description: repo.description || 'No description available',
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language || 'Unknown',
      lastCommit: formatTimeAgo(repo.pushed_at),
      url: repo.html_url
    }));

    // Try to fetch contribution data (this requires GraphQL API)
    let contributionsThisYear = 0;
    try {
      if (token) {
        const contributionsQuery = `
          query($username: String!) {
            user(login: $username) {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                }
              }
            }
          }
        `;

        const contributionsResponse = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            ...headers,
            'Authorization': `bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: contributionsQuery,
            variables: { username }
          })
        });

        if (contributionsResponse.ok) {
          const contributionsData = await contributionsResponse.json();
          contributionsThisYear = contributionsData.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions || 0;
        }
      }
    } catch (error) {
      console.warn('Could not fetch contributions data:', error);
    }

    const result = {
      publicRepos: userData.public_repos,
      followers: userData.followers,
      following: userData.following,
      totalStars,
      totalCommits: 0, // This would require more complex API calls
      contributionsThisYear,
      repositories,
      lastUpdated: new Date().toISOString()
    };

    // Update cache
    cache = {
      data: result,
      timestamp: Date.now()
    };

    return NextResponse.json(result);

  } catch (error) {
    console.error('GitHub API error:', error);

    // Return mock data on error
    const mockData = {
      publicRepos: 24,
      followers: 127,
      following: 89,
      totalStars: 156,
      totalCommits: 2847,
      contributionsThisYear: 342,
      repositories: [
        {
          name: "cloud-migration-toolkit",
          description: "Automated tools for migrating legacy applications to cloud-native architectures",
          stars: 42,
          forks: 8,
          language: "C#",
          lastCommit: "2 days ago",
          url: "#"
        },
        {
          name: "microservices-patterns",
          description: "Implementation patterns for scalable microservices architecture",
          stars: 38,
          forks: 12,
          language: "TypeScript",
          lastCommit: "5 days ago",
          url: "#"
        },
        {
          name: "ai-integration-examples",
          description: "Practical examples of AI/ML integration in enterprise applications",
          stars: 29,
          forks: 6,
          language: "Python",
          lastCommit: "1 week ago",
          url: "#"
        }
      ],
      lastUpdated: new Date().toISOString(),
      error: 'Using mock data - GitHub API unavailable'
    };

    return NextResponse.json(mockData);
  }
}

function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  if (diffInSeconds < 2419200) return `${Math.floor(diffInSeconds / 604800)} weeks ago`;

  return date.toLocaleDateString();
}