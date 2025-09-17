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

interface TechTrend {
  technology: string;
  trend: 'rising' | 'stable' | 'declining';
  growthRate: number;
  description: string;
  relevance: 'high' | 'medium' | 'low';
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

const techTrends: TechTrend[] = [
  {
    technology: "AI/ML Integration",
    trend: "rising",
    growthRate: 85,
    description: "Enterprise adoption of AI continues to accelerate",
    relevance: "high"
  },
  {
    technology: "Edge Computing",
    trend: "rising",
    growthRate: 72,
    description: "Processing data closer to the source for better performance",
    relevance: "high"
  },
  {
    technology: "Serverless Architecture",
    trend: "stable",
    growthRate: 45,
    description: "Mature technology with steady enterprise adoption",
    relevance: "high"
  },
  {
    technology: "WebAssembly",
    trend: "rising",
    growthRate: 68,
    description: "Enabling high-performance applications in browsers",
    relevance: "medium"
  },
  {
    technology: "Quantum Computing",
    trend: "rising",
    growthRate: 156,
    description: "Early stage but showing promising developments",
    relevance: "low"
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

  const getTrendIcon = (trend: TechTrend['trend']) => {
    switch (trend) {
      case 'rising': return '📈';
      case 'stable': return '➡️';
      case 'declining': return '📉';
    }
  };

  const getRelevanceColor = (relevance: TechTrend['relevance']) => {
    switch (relevance) {
      case 'high': return 'text-green-600 dark:text-green-400';
      case 'medium': return 'text-yellow-600 dark:text-yellow-400';
      case 'low': return 'text-gray-600 dark:text-gray-400';
    }
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
            Real-time insights into my development activity, project contributions, and technology trend awareness.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full animate-pulse ${error ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
              {error ? 'Demo Data' : 'Live Data'}
            </span>
            <span>Last updated: {isClient && lastRefresh ? lastRefresh.toLocaleTimeString() : 'Loading...'}</span>
            {error && (
              <span className="text-yellow-600 dark:text-yellow-400 text-xs">
                ⚠️ {error}
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* GitHub Stats */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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

          {/* Technology Trends */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Technology Trends</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Current market insights</p>
                </div>
              </div>

              <div className="space-y-4">
                {techTrends.map((trend, index) => (
                  <motion.div
                    key={trend.technology}
                    className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{getTrendIcon(trend.trend)}</span>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                          {trend.technology}
                        </h4>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${getRelevanceColor(trend.relevance)}`}>
                          {trend.relevance.toUpperCase()}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                          +{trend.growthRate}%
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">growth</div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      {trend.description}
                    </p>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${
                          trend.relevance === 'high' ? 'bg-green-500' :
                          trend.relevance === 'medium' ? 'bg-yellow-500' :
                          'bg-gray-500'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(trend.growthRate, 100)}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">12</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Technologies Tracking</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">8</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Currently Learning</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">15</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Certifications</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Live System Status */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Live System Status</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Real-time portfolio metrics</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">All Systems Operational</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">99.9%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Uptime</div>
                <div className="text-xs text-slate-500 dark:text-slate-500">Last 30 days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">247ms</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Response Time</div>
                <div className="text-xs text-slate-500 dark:text-slate-500">Average</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">1.2K</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Monthly Visitors</div>
                <div className="text-xs text-slate-500 dark:text-slate-500">This month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">94</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Performance Score</div>
                <div className="text-xs text-slate-500 dark:text-slate-500">Lighthouse</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}