interface Project {
  title: string;
  description: string;
  impact: string;
  technologies: string[];
  category: string;
}

const projects: Project[] = [
  {
    title: "Book a Jet (BAJ) Platform",
    description: "Leading development of ONEFlight's proprietary private aviation booking platform serving global network of private jets. Built enterprise-grade gRPC APIs, MAUI Blazor hybrid mobile app, and Infrastructure as Code with Azure Kubernetes Service. Integrated flight logistics APIs and enhanced security/compliance for aviation industry.",
    impact: "Streamlined private jet booking with real-time availability and transparent pricing",
    technologies: [".NET Core", "Blazor", "MAUI", "gRPC", "Azure AKS", "PostgreSQL", "Bicep", "SignalR"],
    category: "Aviation Technology"
  },
  {
    title: "Insurance Platform Modernization",
    description: "Re-architected auto/home insurance platform from ground up using .NET 9, Blazor, and microservices architecture. Led team through complete technology transformation while maintaining business operations.",
    impact: "Grew product from limited revenue to million-dollar quarters",
    technologies: [".NET 9", "Blazor", "Azure Functions", "CosmosDB", "Azure DevOps"],
    category: "Platform Engineering"
  },
  {
    title: "DevOps Transformation",
    description: "Directed complete transition from SVN/CruiseControl to modern Azure DevOps CI/CD pipelines across 20-person engineering organization, implementing enterprise SSO with Okta integration.",
    impact: "Dramatically improved deployment speed and security posture",
    technologies: ["Azure DevOps", "CI/CD", "Okta SSO", "Enterprise Security"],
    category: "DevOps & Infrastructure"
  },
  {
    title: "Retail Mobile Applications",
    description: "Led development of mobile apps for store communications and learning management systems at Sephora. Architected fraud management and scan gun applications, migrating from legacy devices to modern iOS platforms.",
    impact: "Modernized retail operations and improved store efficiency",
    technologies: ["iOS", "Swift", "AWS", "Azure", "Machine Learning"],
    category: "Mobile Development"
  },
  {
    title: "SaaS Platform Development",
    description: "Built new SaaS web and mobile product from scratch using Node.js and Couchbase, taking it from idea to market. Managed full product lifecycle including team building and hiring processes.",
    impact: "Successfully launched market-ready SaaS product with 5-person team",
    technologies: ["Node.js", "Couchbase", "Angular", "AWS", "Mobile Development"],
    category: "Product Development"
  },
  {
    title: "E-commerce Platform Scaling",
    description: "Designed and built full ecommerce stack with custom cart, admin tools, and search features. Led team modernization and platform optimization efforts.",
    impact: "Doubled company sales in first year through platform improvements",
    technologies: [".NET", "SQL Server", "E-commerce", "Custom Development"],
    category: "E-commerce Solutions"
  },
  {
    title: "AI/ML Integration & Innovation",
    description: "Currently exploring and implementing AI/ML solutions using Python, PyTorch, and cloud ML platforms. Introduced AI development tools like Cursor and Claude to accelerate team productivity.",
    impact: "Pioneering AI adoption and modern development practices",
    technologies: ["Python", "PyTorch", "Azure AI", "LangChain", "OpenAI", "Cursor", "Claude"],
    category: "AI & Machine Learning"
  }
];

export default function ProjectsShowcase() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">
          Notable Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  {project.title}
                </h3>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Impact:</h4>
                <p className="text-green-600 dark:text-green-400 font-medium">
                  {project.impact}
                </p>
              </div>

              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}