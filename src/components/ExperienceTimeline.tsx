"use client";

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import TechSearch from './TechSearch';

interface Experience {
  title: string;
  company: string;
  industry: string;
  period: string;
  years: string;
  description: string;
  details?: {
    overview?: string;
    responsibilities?: string[];
  };
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "ONEFlight International",
    industry: "Private Aviation",
    period: "June 2025 - Present",
    years: "6 months",
    description: "ONEFlight is a private aviation company that provides members with streamlined access to a global network of private jets through its proprietary platform, Book a Jet (BAJ). The platform simplifies private jet booking, enabling real-time availability, transparent pricing, and concierge-level travel experiences.",
    details: {
      overview: "At ONEFlight, I work across a modern cloud-based stack that includes .NET Core, C#, Blazor, Azure, microservices, PostgreSQL Server, and mobile technologies. My role involves architecting and leading development of scalable services, integrating third-party APIs for flight logistics, enhancing security and compliance, and optimizing the booking and payment workflows. I've also contributed to building customer-facing applications (web and mobile), and improving system reliability through monitoring, automation, and CI/CD pipelines.",
      responsibilities: [
        "Leading team to build new features in MAUI Blazor hybrid mobile app connecting clients, pilots, concierge and crew",
        "Introduced AI concepts and tools like Cursor and Claude to accelerate development efforts",
        "Managing web accessibility improvements through SiteImprove by identifying issues and creating work items",
        "Maintaining and developing rich, robust enterprise-grade streamed gRPC APIs",
        "Building interactions with Blazor Web Assembly and SignalR backend for seamless user updates",
        "Built Infrastructure as Code in Bicep and PowerShell (Azure Kubernetes Service, Key Vault, VNET, etc.)",
        "Gaining hands-on experience with MAUI for iOS and Android development"
      ]
    },
    technologies: [".NET Core", "C#", "Blazor", "Blazor WebAssembly", "MAUI", "Azure AKS", "Kubernetes", "PostgreSQL", "Azure Cosmos Postgres", "CosmosDB", "SignalR", "gRPC", "Bicep", "PowerShell", "Azure Key Vault", "VNET", "Azure Storage", "Managed Identity", "Notification Hub", "SiteImprove"]
  },
  {
    title: "Senior Software Engineer & Technical Lead",
    company: "Quinstreet",
    industry: "Performance Marketing & Lead Generation",
    period: "June 2020 - June 2025",
    years: "5 years",
    description: "QuinStreet is a leader in performance marketing and online lead generation, connecting consumers with brands through data-driven advertising and digital media. The company partners with some of the largest financial services, education, and home services providers, delivering measurable customer acquisition at scale.",
    details: {
      overview: "Worked on QuinStreet's QRP (QuinStreet Routing Platform), a high-volume system responsible for intelligently routing millions of customer inquiries to the right clients in real time. The platform leverages C#, .NET Core, Azure, SQL Server, and microservices architecture. My work involved designing and optimizing routing logic, scaling services to handle large data throughput, integrating with downstream APIs, and modernizing legacy components into cloud-native services. I also contributed to performance improvements, observability (monitoring/logging), and deployment automation using CI/CD pipelines.",
      responsibilities: [
        "Restructured and modernized codebase and development processes by improving architecture, enhancing security, streamlining deployments, increasing testability, and introducing Agile practices",
        "Played integral role in growing engineering team and product from small group with limited revenue to scalable platform generating million-dollar quarters",
        "Led team of 3 engineers to build multiple microservices to handle prefill data for insurance quotes in .NET 7, MySQL",
        "Directed transition from SVN/CruiseControl to Azure DevOps CI/CD pipelines across 20-person engineering organization",
        "Collaborated with UX/UI designers and QA engineers to deliver intuitive, responsive, and accessible web applications",
        "Spearheaded migration to Okta for enterprise SSO integration, improving security and user access management",
        "Partnered with executive leadership (CTO, VP Engineering, Product Owners) to define system design patterns and product roadmaps",
        "Mentored new hires, conducted interviews, and led onboarding processes to scale the engineering team",
        "Mentored and coached engineering teams in Blazor, .NET Core, and modern front-end frameworks (React, Angular)",
        "Introduced performance review frameworks, coaching strategies, and structured 1:1s with direct reports",
        "Guided engineers through goal-setting exercises and personal development planning",
        "Championed Agile practices, leading to improved team velocity and cross-functional collaboration"
      ]
    },
    technologies: [".NET Core", ".NET 7", "C#", "Blazor", "Azure", "SQL Server", "MySQL", "Azure DevOps", "Microservices", "Okta SSO", "React", "Angular"]
  },
  {
    title: "Senior Software Engineer / Technical Lead",
    company: "Sephora",
    industry: "Beauty & Retail",
    period: "June 2018 - June 2020",
    years: "2 years",
    description: "Sephora is a leading global beauty retailer recognized for its innovative digital experiences and omnichannel shopping platform, serving millions of customers worldwide.",
    details: {
      overview: "At Sephora, I worked on scaling and modernizing e-commerce and in-store digital platforms using C#, .NET Core, Azure, AWS, microservices, SQL Server, and mobile technologies (iOS/Ionic/Angular/PHP/Python). My contributions spanned from enterprise-scale communication solutions to cutting-edge augmented reality applications.",
      responsibilities: [
        "Managed cross-functional team to deliver mobile apps for store communications and learning management systems",
        "Architected and built critical microservices supporting ordering and cart systems across AWS, Step Functions, Lambda, Kubernetes, SQS, SNS, Kinesis",
        "Key contributor to fraud detection system development that saved the company $11 million per month",
        "Led development of retail scan gun applications in .NET on Windows Mobile, transitioning from legacy devices to iOS platforms",
        "Coordinated closely with stakeholders to prioritize features and ensure successful product launches",
        "Hands-on with emerging technologies (Machine Learning & AI applications) to explore new product capabilities and maintain competitive edge",
        "Created Ionic, Capacitor, Angular hybrid mobile app with Python/Flask/MongoDB to solve enterprise-scale communication problems",
        "Built POC for mobile Augmented Reality to show personalized deals in-store with directions and pricing using Android Kotlin and iOS Swift",
        "Managed enterprise retail store knowledge management platform",
        "Oversaw full product lifecycle from requirements gathering through deployment and ongoing support"
      ]
    },
    technologies: ["C#", ".NET Core", "Azure", "AWS", "iOS", "Swift", "Android", "Kotlin", "Ionic", "Capacitor", "Angular", "PHP", "Python", "Flask", "MongoDB", "SQL Server", "Kubernetes", "Lambda", "Step Functions", "SQS", "SNS", "Kinesis", "Machine Learning", "Augmented Reality"]
  },
  {
    title: "Senior Software Engineer",
    company: "Swirl (Contractor)",
    industry: "Digital Marketing Agency",
    period: "April 2018 - June 2018",
    years: "3 months",
    description: "Swirl (part of mcgarrybowen) is a digital agency focused on delivering innovative marketing, commerce, and customer engagement solutions for global brands. The company specializes in creating seamless digital experiences that connect creative strategy with scalable technology.",
    details: {
      overview: "At Swirl, I worked across a diverse technology stack including C#, .NET, Angular, React, and PHP to build and enhance client-facing web applications and digital platforms. My contributions involved developing scalable backend services, modernizing legacy codebases, and creating responsive, high-performing user interfaces. I collaborated closely with design, marketing, and client teams to deliver technology solutions that supported business campaigns, e-commerce initiatives, and customer engagement strategies.",
      responsibilities: [
        "Built Microsoft Cortana skill in Node.js and C# for Microsoft store demonstration centers, showcasing calendar, home, car and entertainment system integrations",
        "Developed front-end voice interaction modules in React/Electron for seamless user experiences",
        "Created Angular components for property management web application with enhanced functionality",
        "Collaborated with design and marketing teams to align technology solutions with creative strategies",
        "Developed scalable backend services to support client campaigns and e-commerce initiatives",
        "Modernized legacy codebases to improve performance and maintainability",
        "Created responsive, high-performing user interfaces for global brand clients"
      ]
    },
    technologies: ["C#", ".NET", "Node.js", "Angular", "React", "PHP", "Cortana", "Azure Services", "Docker", "Electron"]
  },
  {
    title: "Sr. Software Engineering Manager / Lead",
    company: "Mobitor",
    industry: "SaaS Technology",
    period: "Aug 2016 - Mar 2018",
    years: "1.5 years",
    description: "Built new SaaS web and mobile product from scratch using Node.js and Couchbase. Managed team of 5 engineers, designed hiring processes and performance review frameworks. Championed front-end modernization including Angular migration.",
    technologies: ["Node.js", "Couchbase", "Angular", "AWS"]
  },
  {
    title: "Senior Software Engineer / Lead",
    company: "Lawroom",
    industry: "Legal Technology",
    period: "Oct 2014 - Aug 2016",
    years: "2 years",
    description: "Enhanced scalable online learning platform for employment and education. Led AWS transition and implemented coding standards. Mentored junior developers and introduced agile best practices.",
    technologies: ["AWS", ".NET", "Agile"]
  },
  {
    title: "Director of Software Engineering",
    company: "Digital Hoop, Inc.",
    industry: "E-commerce",
    period: "2007 - 2009",
    years: "2 years",
    description: "Built team of ten on-shore and off-shore engineers. Designed and built full ecommerce stack with custom cart, admin tools, and search. Doubled company sales in first year through platform modernization.",
    technologies: ["C#", "SQL", "MVC", "ASP.NET", "JavaScript", "AJAX"]
  },
  {
    title: "Senior Software Engineer",
    company: "Disclosure Source",
    industry: "Real Estate Technology",
    period: "Nov 2009 - 2014",
    years: "5 years",
    description: "Developed web solutions for Natural Hazard Disclosure (NHD) Reports for Real Estate professionals. Created state-of-the-art entity-based data access and secured existing systems. Instituted development standards and mentored developers.",
    technologies: ["C#", "SQL", "Java", "ASP.NET", "JavaScript", "jQuery", "XML Web Services"]
  },
  {
    title: "Software Engineer",
    company: "CHRIMS, Inc",
    industry: "Horse Racing & Sports",
    period: "2006 - 2007",
    years: "1 year",
    description: "Developed data storage and reporting solutions for Northern California Horse Racing tracks. Built database and web application for horse statistics and family trees. Enhanced reporting performance and facilitated major client acquisition.",
    technologies: ["ASP.NET", "SQL", "C#", "JavaScript", "XML Web Services"]
  },
  {
    title: "Software Engineer",
    company: "GatorStudios",
    industry: "Web Development Agency",
    period: "2002 - 2006",
    years: "4 years",
    description: "Provided web development services for startups, creating online presence and ecommerce solutions. Helped companies with digital growth strategies and inventory management. Worked with clients including Amerimade, ComCity, and others.",
    technologies: ["ASP.NET", "Java", "Flash", "SQL", "C#", "JavaScript", "XML"]
  },
  {
    title: "Software Engineer",
    company: "ORHP, Inc",
    industry: "Home Warranty",
    period: "1999 - 2002",
    years: "3 years",
    description: "Led large-scale website redesign project working with marketing and executives. Built online ordering system to replace outdated platforms. Implemented SEO strategies and improved site performance.",
    technologies: ["ASP.NET", "ColdFusion", "Java", "SQL", "C#", "JavaScript"]
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const timelineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const dotVariants = {
  hidden: {
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.2,
      ease: [0.18, 0.89, 0.32, 1.28]
    }
  }
};

export default function ExperienceTimeline() {
  const [filteredTechs, setFilteredTechs] = useState<string[]>([]);

  // Get all unique technologies from experiences
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    experiences.forEach(exp => {
      if (exp.technologies) {
        exp.technologies.forEach(tech => techs.add(tech));
      }
    });
    return Array.from(techs).sort();
  }, []);

  // Filter experiences based on selected technologies
  const filteredExperiences = useMemo(() => {
    if (filteredTechs.length === 0) return experiences;

    return experiences.filter(exp => {
      if (!exp.technologies) return false;
      return filteredTechs.some(filterTech =>
        exp.technologies!.includes(filterTech)
      );
    });
  }, [filteredTechs]);

  // Force re-render when filters change
  const experiencesToShow = filteredTechs.length === 0 ? experiences : filteredExperiences;

  return (
    <section className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Career Journey
        </motion.h2>

        {/* AI Tech Search */}
        <TechSearch
          onFilterChange={setFilteredTechs}
          allTechnologies={allTechnologies}
        />

        {/* Results Summary */}
        {filteredTechs.length > 0 && (
          <motion.div
            className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              <strong>{experiencesToShow.length}</strong> experience{experiencesToShow.length !== 1 ? 's' : ''} found
              with <strong>{filteredTechs.join(', ')}</strong>
              {experiencesToShow.length === 0 && (
                <span className="block mt-1 text-blue-600 dark:text-blue-400">
                  Try different technologies or clear filters to see all experiences.
                </span>
              )}
            </p>
          </motion.div>
        )}

        <motion.div
          key={`timeline-${filteredTechs.join('-')}`}
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Animated Timeline line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-px bg-blue-200 dark:bg-blue-800 origin-top"
            variants={timelineVariants}
          ></motion.div>

          {experiencesToShow.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}-${filteredTechs.length}`}
              className="relative flex items-start mb-12"
              variants={cardVariants}
            >
              {/* Animated Timeline dot */}
              <motion.div
                className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-800 z-10"
                variants={dotVariants}
                whileHover={{
                  scale: 1.3,
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                  transition: { duration: 0.2 }
                }}
              ></motion.div>

              {/* Animated Content */}
              <motion.div
                className="ml-16 bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 }
                }}
              >
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

                <div className="mb-3">
                  <h4 className="text-lg text-slate-700 dark:text-slate-300 font-medium">
                    {exp.company}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-500 italic">
                    {exp.industry}
                  </p>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {exp.description}
                </p>

                {exp.details && (
                  <>
                    {exp.details.overview && (
                      <p className="text-slate-600 dark:text-slate-400 mb-4">
                        {exp.details.overview}
                      </p>
                    )}

                    {exp.details.responsibilities && (
                      <div className="mb-4">
                        <h5 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Key Contributions:</h5>
                        <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1 text-sm">
                          {exp.details.responsibilities.map((responsibility, idx) => (
                            <li key={idx}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}

                {exp.technologies && (
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.3
                        }
                      }
                    }}
                  >
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        variants={{
                          hidden: { opacity: 0, scale: 0.8, y: 10 },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            transition: { duration: 0.3 }
                          }
                        }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(59, 130, 246, 0.2)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}