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

  // AI-powered tech suggestions based on search input
  const aiSuggestions = useMemo(() => {
    if (!searchTerm.trim()) return [];

    const term = searchTerm.toLowerCase();

    // Smart matching with AI-like logic
    const exactMatches = allTechnologies.filter(tech =>
      tech.toLowerCase().includes(term)
    );

    // AI-powered related technology suggestions
    const relatedTechs: { [key: string]: string[] } = {
      'react': ['Next.js', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript'],
      'angular': ['React', 'TypeScript', 'JavaScript', 'Node.js'],
      'vue': ['React', 'Angular', 'JavaScript', 'TypeScript'],
      'net': ['C#', 'Blazor', 'Azure', 'SQL Server', 'ASP.NET'],
      'c#': ['.NET Core', 'Blazor', 'Azure', 'SQL Server', 'ASP.NET'],
      'blazor': ['C#', '.NET Core', 'Azure', 'SignalR'],
      'azure': ['AWS', 'Kubernetes', 'Docker', 'C#', '.NET Core'],
      'aws': ['Azure', 'Kubernetes', 'Docker', 'Lambda', 'EC2'],
      'kubernetes': ['Docker', 'Azure', 'AWS', 'DevOps'],
      'docker': ['Kubernetes', 'Azure', 'AWS', 'DevOps'],
      'python': ['PyTorch', 'Flask', 'Django', 'AI', 'Machine Learning'],
      'ai': ['Python', 'PyTorch', 'Machine Learning', 'OpenAI'],
      'ml': ['Python', 'PyTorch', 'AI', 'Machine Learning'],
      'mobile': ['iOS', 'Swift', 'Android', 'Kotlin', 'React Native', 'MAUI'],
      'ios': ['Swift', 'Objective-C', 'Android', 'Mobile Development'],
      'android': ['Kotlin', 'Java', 'iOS', 'Mobile Development'],
      'database': ['SQL Server', 'PostgreSQL', 'MongoDB', 'CosmosDB'],
      'sql': ['SQL Server', 'PostgreSQL', 'MySQL', 'Database'],
      'nosql': ['MongoDB', 'CosmosDB', 'Redis'],
      'devops': ['Azure DevOps', 'GitHub', 'CI/CD', 'Docker', 'Kubernetes'],
      'cloud': ['Azure', 'AWS', 'Kubernetes', 'Docker']
    };

    const related = Object.keys(relatedTechs)
      .filter(key => term.includes(key) || key.includes(term))
      .flatMap(key => relatedTechs[key])
      .filter(tech => allTechnologies.includes(tech));

    // Combine and deduplicate
    const combined = [...new Set([...exactMatches, ...related])];

    return combined
      .filter(tech => !selectedTechs.includes(tech))
      .slice(0, 8); // Limit suggestions
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
          placeholder="Search technologies (try 'AI', 'cloud', 'mobile'...)"
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
          💡 Try searching for technologies like &quot;React&quot;, &quot;Azure&quot;, &quot;AI&quot;, or &quot;mobile&quot; to see smart suggestions and filter Jason&apos;s experience.
        </p>
      )}
    </motion.div>
  );
}