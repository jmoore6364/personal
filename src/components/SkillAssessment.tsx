"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number; // 1-10 scale
  category: string;
  description: string;
  yearsExperience: number;
  color: string;
}

const skills: Skill[] = [
  // Leadership & Management
  { name: "Team Leadership", level: 10, category: "Leadership", description: "Led teams of 3-20 engineers across multiple organizations", yearsExperience: 15, color: "from-blue-500 to-blue-600" },
  { name: "Technical Architecture", level: 10, category: "Leadership", description: "Designed scalable systems handling millions of requests", yearsExperience: 20, color: "from-blue-500 to-blue-600" },
  { name: "Product Strategy", level: 9, category: "Leadership", description: "Aligned engineering with business goals across multiple companies", yearsExperience: 12, color: "from-blue-500 to-blue-600" },

  // Backend Technologies
  { name: "C#", level: 10, category: "Backend", description: "Primary language for 20+ years, expert in all versions", yearsExperience: 22, color: "from-green-500 to-green-600" },
  { name: ".NET Core/.NET 9", level: 10, category: "Backend", description: "Deep expertise in modern .NET ecosystem", yearsExperience: 8, color: "from-green-500 to-green-600" },
  { name: "Azure", level: 9, category: "Backend", description: "Extensive cloud architecture and services experience", yearsExperience: 7, color: "from-green-500 to-green-600" },
  { name: "AWS", level: 8, category: "Backend", description: "Microservices, Lambda, Step Functions, containers", yearsExperience: 6, color: "from-green-500 to-green-600" },
  { name: "Microservices", level: 9, category: "Backend", description: "Architected enterprise-grade distributed systems", yearsExperience: 8, color: "from-green-500 to-green-600" },

  // Frontend & Mobile
  { name: "Blazor", level: 9, category: "Frontend", description: "WebAssembly, Server, and Hybrid applications", yearsExperience: 4, color: "from-purple-500 to-purple-600" },
  { name: "React", level: 8, category: "Frontend", description: "Built complex SPA applications and component libraries", yearsExperience: 6, color: "from-purple-500 to-purple-600" },
  { name: "Angular", level: 8, category: "Frontend", description: "Enterprise applications and modern frameworks", yearsExperience: 7, color: "from-purple-500 to-purple-600" },
  { name: "iOS/Swift", level: 7, category: "Frontend", description: "Native mobile apps and AR applications", yearsExperience: 5, color: "from-purple-500 to-purple-600" },
  { name: "MAUI", level: 8, category: "Frontend", description: "Cross-platform mobile development", yearsExperience: 2, color: "from-purple-500 to-purple-600" },

  // DevOps & Infrastructure
  { name: "Kubernetes", level: 8, category: "DevOps", description: "Container orchestration and Azure AKS", yearsExperience: 4, color: "from-orange-500 to-orange-600" },
  { name: "Docker", level: 9, category: "DevOps", description: "Containerization and deployment strategies", yearsExperience: 6, color: "from-orange-500 to-orange-600" },
  { name: "Azure DevOps", level: 9, category: "DevOps", description: "CI/CD pipelines and deployment automation", yearsExperience: 6, color: "from-orange-500 to-orange-600" },
  { name: "Infrastructure as Code", level: 8, category: "DevOps", description: "Terraform, Bicep, and automated provisioning", yearsExperience: 5, color: "from-orange-500 to-orange-600" },

  // AI & Emerging Tech
  { name: "AI/ML Integration", level: 7, category: "AI/ML", description: "Python, PyTorch, OpenAI, and practical implementations", yearsExperience: 2, color: "from-red-500 to-red-600" },
  { name: "Python", level: 7, category: "AI/ML", description: "Flask, ML libraries, and automation scripts", yearsExperience: 3, color: "from-red-500 to-red-600" },
  { name: "LLMs & AI Tools", level: 8, category: "AI/ML", description: "Claude, OpenAI, Cursor, and development acceleration", yearsExperience: 1, color: "from-red-500 to-red-600" },

  // Databases
  { name: "SQL Server", level: 9, category: "Database", description: "Complex queries, optimization, and architecture", yearsExperience: 20, color: "from-teal-500 to-teal-600" },
  { name: "PostgreSQL", level: 8, category: "Database", description: "Advanced features and performance tuning", yearsExperience: 3, color: "from-teal-500 to-teal-600" },
  { name: "NoSQL (CosmosDB, MongoDB)", level: 8, category: "Database", description: "Document databases and distributed systems", yearsExperience: 5, color: "from-teal-500 to-teal-600" }
];

const categories = Array.from(new Set(skills.map(s => s.category)));

const SkillBar = ({ skill }: { skill: Skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="mb-6"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          {skill.name}
        </h4>
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {skill.yearsExperience} yr{skill.yearsExperience !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="relative">
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
            initial={{ width: 0 }}
            animate={{ width: `${skill.level * 10}%` }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          >
            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 2,
                delay: 1.5,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>

        {/* Level indicator */}
        <div className="flex justify-between text-xs text-slate-400 dark:text-slate-500 mt-1">
          <span>Beginner</span>
          <span>Expert</span>
        </div>
      </div>

      {/* Expandable description */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isHovered ? 'auto' : 0,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 px-2 py-1 bg-slate-50 dark:bg-slate-800 rounded">
          {skill.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default function SkillAssessment() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  const categoryColors: { [key: string]: string } = {
    'Leadership': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    'Backend': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    'Frontend': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
    'DevOps': 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
    'AI/ML': 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
    'Database': 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200'
  };

  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Interactive Skills Assessment
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Explore my technical expertise with interactive skill level indicators.
            Hover over skills for detailed descriptions and experience context.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === 'All'
                ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All Skills
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? categoryColors[category]
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={selectedCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillBar skill={skill} />
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {skills.filter(s => s.level >= 9).length}
            </div>
            <div className="text-slate-600 dark:text-slate-400">Expert Level Skills</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {Math.round(skills.reduce((acc, s) => acc + s.yearsExperience, 0) / skills.length)}
            </div>
            <div className="text-slate-600 dark:text-slate-400">Avg Years per Skill</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              {categories.length}
            </div>
            <div className="text-slate-600 dark:text-slate-400">Skill Categories</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}