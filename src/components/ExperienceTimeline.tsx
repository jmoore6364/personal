interface Experience {
  title: string;
  company: string;
  period: string;
  years: string;
  description: string;
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "ONEFlight International",
    period: "June 2025 - Present",
    years: "6 months",
    description: "Architecting scalable services for Book a Jet (BAJ) platform - a proprietary private aviation booking system serving global network of private jets. Leading development of MAUI Blazor hybrid mobile app connecting clients, pilots, concierge and crew. Built Infrastructure as Code with Bicep/PowerShell for Azure Kubernetes Service, managing enterprise-grade gRPC APIs with Blazor WebAssembly frontend.",
    technologies: [".NET Core", "C#", "Blazor", "MAUI", "Azure AKS", "Kubernetes", "PostgreSQL", "CosmosDB", "SignalR", "gRPC", "Bicep", "PowerShell", "Azure Key Vault", "Notification Hub"]
  },
  {
    title: "Senior Software Engineer & Technical Lead",
    company: "Quinstreet",
    period: "June 2020 - June 2025",
    years: "5 years",
    description: "Led team of 7 on-shore and 3 off-shore engineers, growing product from limited revenue to million-dollar quarters. Re-architected auto/home insurance platform using microservices. Directed transition from SVN to Azure DevOps CI/CD across 20-person engineering org.",
    technologies: [".NET 9", "Blazor", "Azure Functions", "SQL Server", "CosmosDB", "Azure DevOps", "Okta SSO"]
  },
  {
    title: "Senior Software Engineer / Technical Lead",
    company: "Sephora",
    period: "June 2018 - June 2020",
    years: "2 years",
    description: "Managed cross-functional team delivering mobile apps for store communications and learning management. Architected critical microservices for ordering and cart systems. Led fraud management and scan gun applications migration from legacy to iOS platforms.",
    technologies: ["AWS", "Azure", "iOS", "Swift", "Machine Learning", "AI"]
  },
  {
    title: "Senior Software Engineer",
    company: "Swirl (Contractor)",
    period: "April 2018 - June 2018",
    years: "3 months",
    description: "Built Microsoft Cortana skill in Node.js and C# for Microsoft store demonstration centers, showcasing calendar, home, car and entertainment system integrations. Developed front-end voice interaction modules in React/Electron and Angular components for property management web application.",
    technologies: ["C#", "Node.js", "Angular", "React", "Cortana", "Azure Services", "Docker", "PHP", "Electron"]
  },
  {
    title: "Sr. Software Engineering Manager / Lead",
    company: "Mobitor",
    period: "Aug 2016 - Mar 2018",
    years: "1.5 years",
    description: "Built new SaaS web and mobile product from scratch using Node.js and Couchbase. Managed team of 5 engineers, designed hiring processes and performance review frameworks. Championed front-end modernization including Angular migration.",
    technologies: ["Node.js", "Couchbase", "Angular", "AWS"]
  },
  {
    title: "Senior Software Engineer / Lead",
    company: "Lawroom",
    period: "Oct 2014 - Aug 2016",
    years: "2 years",
    description: "Enhanced scalable online learning platform for employment and education. Led AWS transition and implemented coding standards. Mentored junior developers and introduced agile best practices.",
    technologies: ["AWS", ".NET", "Agile"]
  },
  {
    title: "Director of Software Engineering",
    company: "Digital Hoop, Inc.",
    period: "2007 - 2009",
    years: "2 years",
    description: "Built team of ten on-shore and off-shore engineers. Designed and built full ecommerce stack with custom cart, admin tools, and search. Doubled company sales in first year through platform modernization.",
    technologies: ["C#", "SQL", "MVC", "ASP.NET", "JavaScript", "AJAX"]
  },
  {
    title: "Senior Software Engineer",
    company: "Disclosure Source",
    period: "Nov 2009 - 2014",
    years: "5 years",
    description: "Developed web solutions for Natural Hazard Disclosure (NHD) Reports for Real Estate professionals. Created state-of-the-art entity-based data access and secured existing systems. Instituted development standards and mentored developers.",
    technologies: ["C#", "SQL", "Java", "ASP.NET", "JavaScript", "jQuery", "XML Web Services"]
  },
  {
    title: "Software Engineer",
    company: "CHRIMS, Inc",
    period: "2006 - 2007",
    years: "1 year",
    description: "Developed data storage and reporting solutions for Northern California Horse Racing tracks. Built database and web application for horse statistics and family trees. Enhanced reporting performance and facilitated major client acquisition.",
    technologies: ["ASP.NET", "SQL", "C#", "JavaScript", "XML Web Services"]
  },
  {
    title: "Software Engineer",
    company: "GatorStudios",
    period: "2002 - 2006",
    years: "4 years",
    description: "Provided web development services for startups, creating online presence and ecommerce solutions. Helped companies with digital growth strategies and inventory management. Worked with clients including Amerimade, ComCity, and others.",
    technologies: ["ASP.NET", "Java", "Flash", "SQL", "C#", "JavaScript", "XML"]
  },
  {
    title: "Software Engineer",
    company: "ORHP, Inc",
    period: "1999 - 2002",
    years: "3 years",
    description: "Led large-scale website redesign project working with marketing and executives. Built online ordering system to replace outdated platforms. Implemented SEO strategies and improved site performance.",
    technologies: ["ASP.NET", "ColdFusion", "Java", "SQL", "C#", "JavaScript"]
  }
];

export default function ExperienceTimeline() {
  return (
    <section className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">
          Career Journey
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-blue-200 dark:bg-blue-800"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start mb-12">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-800 z-10"></div>

              {/* Content */}
              <div className="ml-16 bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {exp.title}
                  </h3>
                  <div className="flex flex-col md:items-end">
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {exp.period}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-500">
                      {exp.years}
                    </span>
                  </div>
                </div>

                <h4 className="text-lg text-slate-700 dark:text-slate-300 mb-3 font-medium">
                  {exp.company}
                </h4>

                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {exp.description}
                </p>

                {exp.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}