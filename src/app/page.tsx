"use client";

import ExperienceTimeline from '@/components/ExperienceTimeline';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import SkillsSection from '@/components/SkillsSection';
import SkillAssessment from '@/components/SkillAssessment';
import LiveMetrics from '@/components/LiveMetrics';
import ContactSection from '@/components/ContactSection';
import AIChatbot from '@/components/AIChatbot';
import ParticleBackground from '@/components/ParticleBackground';
import { generateResumePDF } from '@/utils/generatePDF';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative">
      {/* Particle Background */}
      <ParticleBackground />
      {/* Hero Section */}
      <section className="relative py-20 px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Jason Moore
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 mb-8">
            Senior Software Engineer & Technical Leader
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
            Strategic and execution-focused engineering leader with 25+ years of experience scaling SaaS platforms,
            building high-performing distributed teams, and leading cloud-native transformations. Expert in mentoring engineers
            to maximize their impact, leading large-scale refactors, and creating memorable customer experiences through
            well-structured, maintainable code and collaborative, test-driven environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:jasonwamoore@gmail.com"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>
            <button
              onClick={generateResumePDF}
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </button>
            <a
              href="https://www.linkedin.com/in/jmoore-engineer/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <a
              href="#leadership"
              className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              🧑‍🏫 Leadership
            </a>
            <a
              href="#experience"
              className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              📋 Experience
            </a>
            <a
              href="#projects"
              className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              🚀 Projects
            </a>
            <a
              href="#skills"
              className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              ⚡ Skills
            </a>
            <a
              href="#skills-assessment"
              className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              📊 Skills Assessment
            </a>
            <a
              href="#live-metrics"
              className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              ⚡ Live Metrics
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              💬 Contact
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-6 bg-white dark:bg-slate-900 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-slate-600 dark:text-slate-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-slate-600 dark:text-slate-400">Teams Led</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-slate-600 dark:text-slate-400">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center">
            About Me
          </h2>
          <div className="prose prose-lg mx-auto text-slate-700 dark:text-slate-300">
            <p>
              With 25+ years of experience, I specialize in scaling SaaS platforms and building
              high-performing distributed teams. I&apos;ve led cloud-native transformations, architected
              resilient microservices, and consistently aligned engineering operations with business strategy.
            </p>
            <p>
              Jason is a problem solver and engineering leader who excels at tackling complex, ambiguous
              challenges—whether working independently or guiding teams to successful outcomes. He has deep
              expertise in building highly scalable, distributed systems from the ground up, including
              architecting solutions, establishing SDLC practices, driving product development, and breaking
              down initiatives into actionable stories and tasks.
            </p>
            <p>
              I collaborate effectively across organizations—partnering with support, sales, marketing,
              accounting, platform engineering, IT, and business stakeholders to align technology with business
              goals. Experienced in building and scaling teams, managing high-impact workloads, and fostering
              a culture of delivery, innovation, and continuous improvement.
            </p>
            <p>
              Currently exploring AI/ML innovations with Python, PyTorch, and cloud ML platforms while
              leading engineering teams in modern technologies like .NET 9, Blazor, Azure, and Kubernetes.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section id="leadership" className="py-20 px-6 bg-white dark:bg-slate-900 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">
            Leadership Philosophy
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🧑‍🏫</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Mentoring Excellence
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                I believe in mentoring engineers to maximize their performance and impact. My approach focuses on:
              </p>
              <ul className="text-slate-600 dark:text-slate-400 space-y-2">
                <li>• <strong>Skill development</strong> through hands-on guidance and code reviews</li>
                <li>• <strong>Career growth</strong> by identifying strengths and growth opportunities</li>
                <li>• <strong>Technical ownership</strong> encouraging engineers to take pride in their work</li>
                <li>• <strong>Knowledge sharing</strong> fostering a culture of continuous learning</li>
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Technical Excellence
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Experience with large-scale refactors, performance optimization, and reliability engineering:
              </p>
              <ul className="text-slate-600 dark:text-slate-400 space-y-2">
                <li>• <strong>Large-scale refactors</strong> modernizing legacy systems safely</li>
                <li>• <strong>Performance optimization</strong> identifying and resolving bottlenecks</li>
                <li>• <strong>Reliability engineering</strong> building fault-tolerant distributed systems</li>
                <li>• <strong>Code quality</strong> establishing standards and best practices</li>
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Customer Focus
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Passionate about creating memorable experiences for customers through:
              </p>
              <ul className="text-slate-600 dark:text-slate-400 space-y-2">
                <li>• <strong>User-centric design</strong> prioritizing customer needs in technical decisions</li>
                <li>• <strong>Performance optimization</strong> ensuring fast, reliable user experiences</li>
                <li>• <strong>Quality assurance</strong> thorough testing and error handling</li>
                <li>• <strong>Continuous improvement</strong> iterating based on user feedback</li>
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Collaborative Culture
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Appreciation for collaborative, test-driven environments where teams thrive:
              </p>
              <ul className="text-slate-600 dark:text-slate-400 space-y-2">
                <li>• <strong>Test-driven development</strong> ensuring code reliability and maintainability</li>
                <li>• <strong>Code reviews</strong> fostering knowledge sharing and quality</li>
                <li>• <strong>Documentation</strong> creating well-documented, understandable systems</li>
                <li>• <strong>Team ownership</strong> building shared responsibility for product success</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Code Quality Standards
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              I believe in building well-structured, maintainable, well-documented code that stands the test of time
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Clean Architecture</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">SOLID principles & design patterns</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">Test Coverage</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Comprehensive unit & integration tests</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Documentation</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Clear, comprehensive technical docs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">Performance</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Optimized, scalable implementations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <div id="experience" className="relative z-10">
        <ExperienceTimeline />
      </div>

      {/* Projects Showcase */}
      <div id="projects" className="relative z-10">
        <ProjectsShowcase />
      </div>

      {/* Skills Section */}
      <div id="skills" className="relative z-10">
        <SkillsSection />
      </div>

      {/* Interactive Skills Assessment */}
      <div id="skills-assessment" className="relative z-10">
        <SkillAssessment />
      </div>

      {/* Live Metrics & Integrations */}
      <div id="live-metrics" className="relative z-10">
        <LiveMetrics />
      </div>

      {/* Contact Section */}
      <div id="contact" className="relative z-10">
        <ContactSection />
      </div>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
}
