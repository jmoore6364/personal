"use client";

interface KeySystem {
  name: string;
  description: string;
}

interface SideProject {
  title: string;
  company?: string;
  companyUrl?: string;
  role?: string;
  period: string;
  description: string;
  highlights?: string[];
  keySystems?: KeySystem[];
  technologies: string[];
  category: string;
  featured?: boolean;
}

const ventures: SideProject[] = [
  {
    title: "DojoSage",
    company: "Peekbit LLC",
    companyUrl: "https://www.dojosage.com",
    role: "Founder & Technical Lead",
    period: "2024 – Present",
    description: "Multi-tenant SaaS platform for martial arts school management — architected and shipped from concept to production as sole engineer. Serves early-adopter dojos with student rosters, attendance, rank tracking, and billing workflows.",
    highlights: [
      "Designed production AWS infrastructure on ECS Fargate, RDS PostgreSQL, and CloudFront, fully managed via Terraform",
      "Implemented secure private-network access using SSM Session Manager through a bastion host",
      "Dockerized deployment with GitHub Actions CI/CD, S3 document storage, SES email, Sentry error monitoring, and PostHog analytics",
      "126 unit/integration test files (Jest, React Testing Library) and 50 E2E test files (Playwright across 5 browser targets)",
      "Presented to American Jujitsu Institute (AJJF) national leadership; secured initial customers ahead of AJJF national convention"
    ],
    keySystems: [
      { name: "Payments & Billing", description: "Stripe Connect (Express) with per-org accounts, recurring billing, prorated refunds, class credit packs, drop-in pay-per-visit, dunning notifications, and revenue analytics" },
      { name: "Authentication & Multi-Org", description: "JWT auth with multi-org switching, OAuth2 provider (authorization code flow), parent-child account linking, and role-based access control" },
      { name: "Email Deliverability", description: "SES with bounce/complaint webhooks, domain reputation monitoring, auto-pause on threshold breach, separate transactional/marketing domains" },
      { name: "Attendance & QR Check-In", description: "Real-time QR code session generation, parent check-in for children, class credit auto-deduction on attendance" },
      { name: "Website Builder", description: "Drag-and-drop page editor (Puck) with AI page generation, custom domains, and per-org branding" },
      { name: "Curriculum & Grading", description: "Belt ranking system, grading test scheduling with rubric-based evaluation, technique progress tracking, auto-achievements on attendance/promotion milestones" },
      { name: "CRM & Analytics", description: "Student lifecycle tracking, lead source attribution, retention metrics, campaign email marketing with engagement analytics" },
      { name: "Events & Tournaments", description: "Event management with pricing tiers, tournament bracket generation, and registration workflows" }
    ],
    technologies: ["Next.js 15", "React 19", "TypeScript", "Node.js", "Express", "PostgreSQL", "Sequelize ORM", "Tailwind CSS", "Stripe Connect", "AWS ECS", "RDS", "S3", "SES", "CloudFront", "Terraform", "Docker", "GitHub Actions", "Sentry", "PostHog", "Playwright", "Jest"],
    category: "SaaS / Founder",
    featured: true
  },
  {
    title: "Musician SaaS Platform",
    period: "In Progress",
    description: "Multi-tenant platform for musicians with offline sync, a desktop version in Electron, and a hybrid mobile app in Ionic/Capacitor.",
    technologies: ["React 19", "Next.js", "Shadcn", "Node.js", "PostgreSQL", "Electron", "Ionic", "Capacitor"],
    category: "Personal Project"
  },
  {
    title: "Media SaaS Platform",
    period: "In Progress",
    description: "Media management platform with a Python/Flask backend and a modern React frontend.",
    technologies: ["Python", "Flask", "SQLAlchemy", "MongoDB", "React", "Next.js", "Shadcn"],
    category: "Personal Project"
  }
];

export default function SideVenturesShowcase() {
  const featured = ventures.filter(v => v.featured);
  const others = ventures.filter(v => !v.featured);

  return (
    <section className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">
          Projects & Side Ventures
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-center mb-12">
          Personal projects built outside of work — from idea to production.
        </p>

        {/* Featured project */}
        {featured.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full mb-3">
                  {project.category}
                </span>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {project.title}
                  </h3>
                  {project.companyUrl && (
                    <a
                      href={project.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                    >
                      {project.companyUrl.replace('https://', '')} ↗
                    </a>
                  )}
                </div>
                {project.company && (
                  <p className="text-slate-500 dark:text-slate-400 mt-1">
                    {project.company} · {project.role} · {project.period}
                  </p>
                )}
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
              {project.description}
            </p>

            {project.highlights && (
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2 text-slate-600 dark:text-slate-400">
                      <span className="text-green-500 mt-1 shrink-0">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.keySystems && (
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Key Systems Built</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.keySystems.map((sys, i) => (
                    <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
                      <span className="font-medium text-slate-800 dark:text-slate-200 text-sm">{sys.name}</span>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{sys.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Other personal projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-6 shadow-sm"
            >
              <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm rounded-full mb-3">
                {project.category}
              </span>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
                {project.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">{project.period}</p>
              <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
