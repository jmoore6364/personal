import ExperienceTimeline from '@/components/ExperienceTimeline';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:jasonwamoore@gmail.com"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/jmoore-engineer/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              LinkedIn Profile
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
              Currently exploring AI/ML innovations with Python, PyTorch, and cloud ML platforms while
              leading engineering teams in modern technologies like .NET 9, Blazor, Azure, and Kubernetes.
              My passion is fostering collaborative, growth-minded cultures that drive technical innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <ExperienceTimeline />

      {/* Projects Showcase */}
      <ProjectsShowcase />

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
