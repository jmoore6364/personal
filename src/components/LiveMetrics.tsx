"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  totalCommits: number;
  contributionsThisYear: number;
  lastUpdated: string;
}

interface Repository {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  lastCommit: string;
  url: string;
}

// Mock data - replace with real API calls
const mockGitHubStats: GitHubStats = {
  publicRepos: 24,
  followers: 127,
  following: 89,
  totalStars: 156,
  totalCommits: 2847,
  contributionsThisYear: 342,
  lastUpdated: new Date().toISOString()
};

const mockRepositories: Repository[] = [
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
];

const languageColors: { [key: string]: string } = {
  "C#": "bg-purple-500",
  "TypeScript": "bg-blue-500",
  "Python": "bg-yellow-500",
  "JavaScript": "bg-orange-500",
  "Go": "bg-cyan-500",
  "Rust": "bg-red-500"
};

export default function LiveMetrics() {
  const [gitHubStats, setGitHubStats] = useState<GitHubStats>(mockGitHubStats);
  const [repositories, setRepositories] = useState<Repository[]>(mockRepositories);
  const [isLoading, setIsLoading] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Fetch real GitHub data
  const fetchGitHubData = async () => {
    try {
      const response = await fetch('/api/github');
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub data');
      }
      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setError(null);
      }

      setGitHubStats(data);
      setRepositories(data.repositories || []);
      setLastRefresh(new Date());
    } catch (err) {
      console.error('Error fetching GitHub data:', err);
      setError('Failed to load real-time data');
      // Keep using mock data on error
    }
  };

  // Set client-side flag and load data on component mount
  useEffect(() => {
    setIsClient(true);
    setLastRefresh(new Date());
    fetchGitHubData();
  }, []);

  // Auto-refresh every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      fetchGitHubData();
    }, 300000); // 5 minutes

    return () => clearInterval(interval);
  }, []);

  const refreshData = async () => {
    setIsLoading(true);
    await fetchGitHubData();
    setIsLoading(false);
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <section className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Live Development Metrics
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-6">
            Live GitHub activity and recent repositories.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full animate-pulse ${error ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
              {error ? 'Demo Data' : 'Live Data'}
            </span>
            <span>Last updated: {isClient && lastRefresh ? lastRefresh.toLocaleTimeString() : 'Loading...'}</span>
            {error && (
              <span className="text-yellow-600 dark:text-yellow-400 text-xs flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                {error}
              </span>
            )}
            <button
              onClick={refreshData}
              disabled={isLoading}
              className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <div className="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin"></div>
                  Refreshing...
                </>
              ) : (
                <>
                  🔄 Refresh
                </>
              )}
            </button>
          </div>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white dark:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">GitHub Activity</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Live development metrics</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {formatNumber(gitHubStats.publicRepos)}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Repositories</div>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {formatNumber(gitHubStats.totalStars)}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Total Stars</div>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {formatNumber(gitHubStats.contributionsThisYear)}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Contributions</div>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    {formatNumber(gitHubStats.followers)}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Followers</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">Recent Repositories</h4>
                <div className="space-y-3">
                  {repositories.slice(0, 3).map((repo, index) => (
                    <motion.div
                      key={repo.name}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={`w-3 h-3 rounded-full ${languageColors[repo.language] || 'bg-gray-500'} mt-1.5 flex-shrink-0`}></div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">
                          {repo.name}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                          {repo.description}
                        </div>
                        <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                          <span>⭐ {repo.stars}</span>
                          <span>🍴 {repo.forks}</span>
                          <span>{repo.lastCommit}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}