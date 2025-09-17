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
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                  <img
                    src="/jason_profile.png"
                    alt="Jason Moore - Senior Software Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badges */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">💻</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Jason Moore
                </h1>
                <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 mb-4">
                  Senior Software Engineer & Technical Leader
                </h2>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    25+ Years Experience
                  </span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                    Team Leadership
                  </span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                    Cloud Architecture
                  </span>
                  <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
                    AI/ML Integration
                  </span>
                </div>
              </div>

              <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-3xl">
                Strategic and execution-focused engineering leader with 25+ years of experience scaling SaaS platforms,
                building high-performing distributed teams, and leading cloud-native transformations. Expert in mentoring engineers
                to maximize their impact, leading large-scale refactors, and creating memorable customer experiences through
                well-structured, maintainable code and collaborative, test-driven environments.
              </p>

              {/* Contact Info Row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>jasonwamoore@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Available Remote</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>925-321-9772</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons Section */}
      <section className="relative py-12 px-6 z-10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:jasonwamoore@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Contact Me
            </a>
            <button
              onClick={generateResumePDF}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </button>
            <a
              href="https://www.linkedin.com/in/jmoore-engineer/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              LinkedIn Profile
            </a>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <a
              href="#leadership"
              className="px-5 py-3 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:from-slate-200 hover:to-slate-300 dark:hover:from-slate-600 dark:hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-medium"
            >
              🧑‍🏫 Leadership
            </a>
            <a
              href="#experience"
              className="px-5 py-3 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:from-slate-200 hover:to-slate-300 dark:hover:from-slate-600 dark:hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-medium"
            >
              📋 Experience
            </a>
            <a
              href="#projects"
              className="px-5 py-3 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:from-slate-200 hover:to-slate-300 dark:hover:from-slate-600 dark:hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-medium"
            >
              🚀 Projects
            </a>
            <a
              href="#skills"
              className="px-5 py-3 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:from-slate-200 hover:to-slate-300 dark:hover:from-slate-600 dark:hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-medium"
            >
              ⚡ Skills
            </a>
            <a
              href="#skills-assessment"
              className="px-5 py-3 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:from-slate-200 hover:to-slate-300 dark:hover:from-slate-600 dark:hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-medium"
            >
              📊 Skills Assessment
            </a>
            <a
              href="#live-metrics"
              className="px-5 py-3 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:from-slate-200 hover:to-slate-300 dark:hover:from-slate-600 dark:hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-medium"
            >
              ⚡ Live Metrics
            </a>
            <a
              href="#contact"
              className="px-5 py-3 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:from-slate-200 hover:to-slate-300 dark:hover:from-slate-600 dark:hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-medium"
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
