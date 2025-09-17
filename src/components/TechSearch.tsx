"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TechSearchProps {
  onFilterChange: (filteredTechs: string[]) => void;
  allTechnologies: string[];
}

export default function TechSearch({ onFilterChange, allTechnologies }: TechSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // AI-powered semantic search with fuzzy matching and intelligent relationships
  const aiSuggestions = useMemo(() => {
    if (!searchTerm.trim()) return [];

    const term = searchTerm.toLowerCase();

    // Advanced similarity scoring function
    const calculateSimilarity = (tech: string, searchTerm: string): number => {
      const techLower = tech.toLowerCase();
      let score = 0;

      // Exact match gets highest score
      if (techLower === searchTerm) score += 100;

      // Starts with search term
      if (techLower.startsWith(searchTerm)) score += 80;

      // Contains search term
      if (techLower.includes(searchTerm)) score += 60;

      // Fuzzy matching - character overlap
      const overlap = [...searchTerm].filter(char => techLower.includes(char)).length;
      score += (overlap / searchTerm.length) * 20;

      // Levenshtein distance for typo tolerance
      const distance = levenshteinDistance(techLower, searchTerm);
      if (distance <= 2) score += 40 - (distance * 10);

      return score;
    };

    // Levenshtein distance for fuzzy matching
    const levenshteinDistance = (str1: string, str2: string): number => {
      const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));

      for (let i = 0; i <= str1.length; i += 1) matrix[0][i] = i;
      for (let j = 0; j <= str2.length; j += 1) matrix[j][0] = j;

      for (let j = 1; j <= str2.length; j += 1) {
        for (let i = 1; i <= str1.length; i += 1) {
          const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
          matrix[j][i] = Math.min(
            matrix[j][i - 1] + 1,
            matrix[j - 1][i] + 1,
            matrix[j - 1][i - 1] + indicator
          );
        }
      }

      return matrix[str2.length][str1.length];
    };

    // Semantic technology relationships with confidence scores
    const semanticRelationships: { [key: string]: { tech: string; confidence: number }[] } = {
      'frontend': [
        { tech: 'React', confidence: 0.9 }, { tech: 'Angular', confidence: 0.9 },
        { tech: 'Vue.js', confidence: 0.8 }, { tech: 'Blazor', confidence: 0.7 },
        { tech: 'TypeScript', confidence: 0.8 }, { tech: 'JavaScript', confidence: 0.9 }
      ],
      'backend': [
        { tech: 'C#', confidence: 0.9 }, { tech: '.NET Core', confidence: 0.9 },
        { tech: 'Node.js', confidence: 0.8 }, { tech: 'Python', confidence: 0.8 },
        { tech: 'ASP.NET', confidence: 0.7 }
      ],
      'cloud': [
        { tech: 'Azure', confidence: 0.9 }, { tech: 'AWS', confidence: 0.9 },
        { tech: 'Kubernetes', confidence: 0.8 }, { tech: 'Docker', confidence: 0.8 }
      ],
      'ai': [
        { tech: 'Python', confidence: 0.9 }, { tech: 'PyTorch', confidence: 0.9 },
        { tech: 'Machine Learning', confidence: 0.9 }, { tech: 'OpenAI', confidence: 0.7 }
      ],
      'mobile': [
        { tech: 'iOS', confidence: 0.8 }, { tech: 'Swift', confidence: 0.8 },
        { tech: 'Android', confidence: 0.8 }, { tech: 'MAUI', confidence: 0.7 },
        { tech: 'React Native', confidence: 0.7 }
      ],
      'database': [
        { tech: 'SQL Server', confidence: 0.9 }, { tech: 'PostgreSQL', confidence: 0.8 },
        { tech: 'MongoDB', confidence: 0.8 }, { tech: 'CosmosDB', confidence: 0.7 }
      ]
    };

    // Intent detection from search terms
    const detectIntent = (searchTerm: string): string[] => {
      const intents: string[] = [];
      const intentKeywords = {
        'frontend': ['ui', 'interface', 'web', 'browser', 'client'],
        'backend': ['server', 'api', 'service', 'logic'],
        'cloud': ['deploy', 'scale', 'infrastructure', 'hosting'],
        'ai': ['intelligent', 'smart', 'learning', 'neural', 'llm'],
        'mobile': ['phone', 'app', 'native', 'cross-platform'],
        'database': ['data', 'storage', 'query', 'db']
      };

      Object.entries(intentKeywords).forEach(([intent, keywords]) => {
        if (keywords.some(keyword => searchTerm.includes(keyword))) {
          intents.push(intent);
        }
      });

      return intents;
    };

    // Score all technologies
    const scoredTechs = allTechnologies.map(tech => ({
      tech,
      score: calculateSimilarity(tech, term)
    }));

    // Add semantic suggestions based on detected intents
    const intents = detectIntent(term);
    const semanticSuggestions = intents.flatMap(intent =>
      semanticRelationships[intent]?.map(({ tech, confidence }) => ({
        tech,
        score: confidence * 50 // Convert confidence to score
      })) || []
    );

    // Combine and sort by score
    const allSuggestions = [...scoredTechs, ...semanticSuggestions]
      .filter(({ tech, score }) =>
        score > 10 && // Minimum relevance threshold
        allTechnologies.includes(tech) &&
        !selectedTechs.includes(tech)
      )
      .sort((a, b) => b.score - a.score)
      .reduce((unique, current) => {
        // Remove duplicates, keeping highest score
        if (!unique.find(item => item.tech === current.tech)) {
          unique.push(current);
        }
        return unique;
      }, [] as { tech: string; score: number }[])
      .slice(0, 8)
      .map(({ tech }) => tech);

    return allSuggestions;
  }, [searchTerm, allTechnologies, selectedTechs]);

  const handleTechSelect = (tech: string) => {
    const newSelected = [...selectedTechs, tech];
    setSelectedTechs(newSelected);
    onFilterChange(newSelected);
    setSearchTerm('');
    setShowSuggestions(false);
  };

  const handleTechRemove = (tech: string) => {
    const newSelected = selectedTechs.filter(t => t !== tech);
    setSelectedTechs(newSelected);
    onFilterChange(newSelected);
  };

  const clearAll = () => {
    setSelectedTechs([]);
    onFilterChange([]);
    setSearchTerm('');
  };

  return (
    <motion.div
      className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            AI Tech Search
          </h3>
          <span className="px-2 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 text-purple-700 dark:text-purple-300 text-xs rounded-full">
            AI-Powered
          </span>
        </div>
      </div>

      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          placeholder="Search with natural language (try 'smart apps', 'web development', 'data storage'...)"
          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-slate-100"
        />

        {/* AI Suggestions */}
        <AnimatePresence>
          {showSuggestions && aiSuggestions.length > 0 && (
            <motion.div
              className="absolute z-10 w-full mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="p-2">
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  AI Suggestions
                </div>
                {aiSuggestions.map((tech, index) => (
                  <motion.button
                    key={tech}
                    onClick={() => handleTechSelect(tech)}
                    className="w-full text-left px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {tech}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Selected Technologies */}
      {selectedTechs.length > 0 && (
        <motion.div
          className="mt-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-wrap gap-2 mb-3">
            {selectedTechs.map((tech) => (
              <motion.span
                key={tech}
                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                layout
              >
                {tech}
                <button
                  onClick={() => handleTechRemove(tech)}
                  className="ml-1 hover:bg-blue-200 dark:hover:bg-blue-800 rounded-full p-0.5"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.span>
            ))}
          </div>
          <button
            onClick={clearAll}
            className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
          >
            Clear all filters
          </button>
        </motion.div>
      )}

      {selectedTechs.length === 0 && (
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
          🧠 AI-powered search understands natural language! Try &quot;web development&quot;, &quot;smart applications&quot;, &quot;cloud deployment&quot;, or even typos like &quot;reactt&quot; or &quot;azrue&quot;.
        </p>
      )}
    </motion.div>
  );
}