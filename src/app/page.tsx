"use client";

import ExperienceTimeline from '@/components/ExperienceTimeline';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import SkillsSection from '@/components/SkillsSection';
import SkillAssessment from '@/components/SkillAssessment';
import ContactSection from '@/components/ContactSection';
import { generateResumePDF } from '@/utils/generatePDF';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Jason Moore
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 mb-8">
            Senior Software Engineer & Technical Leader
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
            Strategic and execution-focused engineering leader with 25+ years of experience scaling SaaS platforms,
            building high-performing distributed teams, and leading cloud-native transformations. Expert in architecting
            resilient microservices and aligning engineering operations with business strategy.
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
              href="#contact"
              className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              💬 Contact
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-6 bg-white dark:bg-slate-900">
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
      <section className="py-20 px-6">
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

      {/* Experience Timeline */}
      <div id="experience">
        <ExperienceTimeline />
      </div>

      {/* Projects Showcase */}
      <div id="projects">
        <ProjectsShowcase />
      </div>

      {/* Skills Section */}
      <div id="skills">
        <SkillsSection />
      </div>

      {/* Interactive Skills Assessment */}
      <div id="skills-assessment">
        <SkillAssessment />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}
