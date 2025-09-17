interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Leadership & Management",
    skills: ["Team Leadership (10+)", "Agile/Scrum", "Cross-functional Collaboration", "Technical Vision", "Hiring & Team Building", "Performance Reviews", "OKRs", "Coaching & Mentoring"],
    color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
  },
  {
    title: "Backend & Cloud",
    skills: ["C#", ".NET Core/.NET 9", "Azure", "AWS", "Azure AKS", "Kubernetes", "Docker", "Azure Functions", "gRPC", "Microservices", "PostgreSQL", "SQL Server", "CosmosDB", "MongoDB"],
    color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
  },
  {
    title: "Frontend & Mobile",
    skills: ["Blazor", "Blazor WebAssembly", "React", "Angular", "Vue.js", "Node.js", "Swift", "Objective-C", "MAUI Blazor Hybrid", "iOS Development", "Android Development", "Ionic", "Capacitor", "Electron"],
    color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
  },
  {
    title: "DevOps & Infrastructure",
    skills: ["Azure DevOps", "GitHub", "CI/CD", "TeamCity", "Kubernetes", "Docker", "Terraform", "Bicep", "PowerShell", "Infrastructure as Code", "Azure Key Vault", "VNET", "Managed Identity", "Observability"],
    color: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200"
  },
  {
    title: "AI/ML & Emerging Tech",
    skills: ["Python", "PyTorch", "Hugging Face", "LangChain", "Azure AI Studio", "OpenAI", "RAG", "Prompt Engineering", "GitHub Copilot", "Cursor", "Claude AI"],
    color: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
  },
  {
    title: "Databases & Integration",
    skills: ["PostgreSQL", "SQL Server", "CosmosDB", "Azure Cosmos Postgres", "MongoDB", "Couchbase", "SQL Alchemy", "RabbitMQ", "SignalR", "gRPC APIs", "REST APIs", "Azure Storage", "Notification Hub", "Okta SSO", "Enterprise Integration"],
    color: "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200"
  }
];

export default function SkillsSection() {
  return (
    <section className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">
          Technical Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Personal Projects Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center">
            Current Personal Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Musician SaaS Platform
              </h4>
              <p className="text-slate-600 dark:text-slate-400 mb-3">
                Multi-tenant platform with offline sync, desktop version in Electron, and hybrid mobile in Ionic/Capacitor
              </p>
              <div className="flex flex-wrap gap-2">
                {["React 19", "Next.js", "Shadcn", "Node.js", "PostgreSQL", "Electron", "Ionic", "Capacitor"].map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Media SaaS Platform
              </h4>
              <p className="text-slate-600 dark:text-slate-400 mb-3">
                Full-stack media platform with modern Python backend and React frontend
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "Flask", "SQL Alchemy", "MongoDB", "React", "Next.js", "Shadcn"].map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600 dark:text-slate-400">
              Also exploring: <strong>Go, Gin, Cassandra, 3D Game Development (C++, DirectX)</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}