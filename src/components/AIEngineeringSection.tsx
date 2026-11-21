interface CompanyWork {
  company: string;
  role: string;
  period: string;
  headline: string;
  points: string[];
  tags: string[];
}

const companyWork: CompanyWork[] = [
  {
    company: "JDXpert",
    role: "Senior Software Engineer",
    period: "January 2026 - Present",
    headline: "Leading the team's AI-assisted development practice",
    points: [
      "Lead the AI-assisted development practice on the team, with Cursor and Claude in the daily loop",
      "Use AI to accelerate connector and workflow development on a greenfield, multi-tenant integration platform syncing with Workday, Salesforce, ADP, UKG, and iCIMS",
      "Keep quality and architecture intact with spec-first design, review gates, and architectural guardrails on AI-generated code",
      "Own the connector abstraction layer and API contracts as a spec-first interface, giving both engineers and AI tools the context they need to ship new integrations"
    ],
    tags: ["Cursor", "Claude", "Spec-First Design", "Review Gates", "Architectural Guardrails", ".NET 10", "Wolverine FX", "Marten"]
  },
  {
    company: "ONEFlight International",
    role: "Senior Software Engineer",
    period: "June 2025 - January 2026",
    headline: "Introducing AI tooling to the engineering team",
    points: [
      "Introduced and championed AI-assisted development with Cursor and Claude, speeding up delivery across the team",
      "Brought AI concepts and tools into a team building the Book a Jet platform: streamed gRPC APIs, Blazor WebAssembly, a MAUI Blazor hybrid mobile app, and Azure infrastructure as code"
    ],
    tags: ["Cursor", "Claude", "AI Tooling Adoption", "Team Enablement", ".NET", "Blazor", "MAUI", "gRPC"]
  }
];

const practices = [
  {
    title: "Agentic coding in the daily loop",
    description: "Cursor, Claude Code, and GitHub Copilot are part of how the work gets done every day, not a side experiment."
  },
  {
    title: "Spec-first context engineering",
    description: "Design-first specs and API contracts give AI the context it needs to produce code that fits the architecture."
  },
  {
    title: "Review gates on AI-generated code",
    description: "Review gates and architectural guardrails let AI multiply velocity without outrunning quality."
  },
  {
    title: "Team adoption and enablement",
    description: "Introduced AI tooling to engineering teams at two companies and coached engineers on using it well."
  }
];

export default function AIEngineeringSection() {
  return (
    <section className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">
          AI &amp; Agentic Engineering
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 text-center max-w-3xl mx-auto">
          I lead AI-native development in practice, not theory. At my last two companies I brought
          agentic coding tools into the team&apos;s daily workflow and built the guardrails that keep
          AI-generated code up to standard.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {companyWork.map((work) => (
            <div
              key={work.company}
              className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  {work.company}
                </h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">{work.period}</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{work.role}</p>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{work.headline}</p>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300 mb-6 flex-1">
                {work.points.map((point, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-6 text-center">
          How I run AI-native teams
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {practices.map((practice) => (
            <div
              key={practice.title}
              className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700"
            >
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                {practice.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">{practice.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 text-center">
          <p className="text-slate-700 dark:text-slate-300">
            <strong>Also shipping AI in product:</strong> I built LLM-powered page generation into the
            website builder of{" "}
            <a href="#ventures" className="text-blue-600 dark:text-blue-400 hover:underline">
              DojoSage
            </a>
            , my production SaaS platform for martial arts schools.
          </p>
        </div>
      </div>
    </section>
  );
}
