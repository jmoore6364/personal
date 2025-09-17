"use client";

import jsPDF from 'jspdf';

export const generateResumePDF = () => {
  const pdf = new jsPDF('p', 'mm', 'a4');

  // Set font
  pdf.setFont('helvetica', 'normal');

  // Header
  pdf.setFontSize(24);
  pdf.setFont('helvetica', 'bold');
  pdf.text('JASON MOORE', 105, 20, { align: 'center' });

  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Senior Software Engineer & Technical Leader', 105, 30, { align: 'center' });

  // Contact Info
  pdf.setFontSize(11);
  pdf.text('925-321-9772 | jasonwamoore@gmail.com | https://www.linkedin.com/in/jmoore-engineer/', 105, 40, { align: 'center' });

  let yPosition = 55;

  // Professional Summary
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('PROFESSIONAL SUMMARY', 20, yPosition);
  yPosition += 10;

  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  const summary = `Strategic and execution-focused engineering leader with 25+ years of experience scaling SaaS platforms, building high-performing distributed teams, and leading cloud-native transformations. Expert in mentoring engineers to maximize their impact, leading large-scale refactors, and creating memorable customer experiences through well-structured, maintainable code and collaborative, test-driven environments.`;

  const summaryLines = pdf.splitTextToSize(summary, 170);
  pdf.text(summaryLines, 20, yPosition);
  yPosition += (summaryLines.length * 5) + 5;

  // Leadership Philosophy
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('LEADERSHIP PHILOSOPHY', 20, yPosition);
  yPosition += 8;

  pdf.setFontSize(9);
  pdf.setFont('helvetica', 'normal');
  const leadership = [
    '• Mentoring Excellence: Hands-on guidance, code reviews, fostering technical ownership and continuous learning',
    '• Technical Excellence: Large-scale refactors, performance optimization, reliability engineering, code quality standards',
    '• Customer Focus: User-centric design, memorable experiences, quality assurance, continuous improvement',
    '• Collaborative Culture: Test-driven development, comprehensive documentation, team ownership'
  ];

  leadership.forEach((item) => {
    const lines = pdf.splitTextToSize(item, 170);
    pdf.text(lines, 20, yPosition);
    yPosition += (lines.length * 4) + 2;
  });
  yPosition += 5;

  // Core Expertise
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('CORE EXPERTISE', 20, yPosition);
  yPosition += 10;

  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');

  const expertise = [
    'Leadership & Management: Team Leadership (10+), Agile/Scrum, Cross-functional Collaboration, Technical Vision',
    'Technical Stack: C#, .NET Core/.NET 9, Azure, AWS, Kubernetes, Docker, Blazor, MAUI, PostgreSQL, CosmosDB',
    'Cloud & DevOps: Azure AKS, Infrastructure as Code, CI/CD, Terraform, Bicep, PowerShell, Observability',
    'AI/ML: Python, PyTorch, LangChain, Azure AI Studio, OpenAI, RAG, Prompt Engineering, Cursor, Claude AI'
  ];

  expertise.forEach((item) => {
    const lines = pdf.splitTextToSize(item, 170);
    pdf.text(lines, 20, yPosition);
    yPosition += (lines.length * 5) + 3;
  });

  yPosition += 5;

  // Professional Experience
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('PROFESSIONAL EXPERIENCE', 20, yPosition);
  yPosition += 10;

  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'ONEFlight International',
      period: 'June 2025 - Present (6 months)',
      description: 'ONEFlight is a private aviation company that provides members with streamlined access to a global network of private jets through its proprietary platform, Book a Jet (BAJ). Leading team to build new features in MAUI Blazor hybrid mobile app connecting clients, pilots, concierge and crew. Introduced AI concepts and tools like Cursor and Claude to accelerate development efforts.',
      technologies: '.NET Core, C#, Blazor, Blazor WebAssembly, MAUI, Azure AKS, Kubernetes, PostgreSQL, Azure Cosmos Postgres, CosmosDB, SignalR, gRPC, Bicep, PowerShell'
    },
    {
      title: 'Senior Software Engineer & Technical Lead',
      company: 'Quinstreet',
      period: 'June 2020 - June 2025 (5 years)',
      description: 'QuinStreet is a leader in performance marketing and online lead generation. Worked on QRP (QuinStreet Routing Platform), a high-volume system routing millions of customer inquiries in real time. Restructured and modernized codebase, played integral role in growing engineering team from small group to scalable platform generating million-dollar quarters.',
      technologies: '.NET Core, .NET 7, C#, Blazor, Azure, SQL Server, MySQL, Azure DevOps, Microservices, Okta SSO, React, Angular'
    },
    {
      title: 'Senior Software Engineer / Technical Lead',
      company: 'Sephora',
      period: 'June 2018 - June 2020 (2 years)',
      description: 'Sephora is a leading global beauty retailer. Architected and built critical microservices supporting ordering and cart systems across AWS. Key contributor to fraud detection system that saved the company $11 million per month. Built POC for mobile Augmented Reality to show personalized deals in-store.',
      technologies: 'C#, .NET Core, Azure, AWS, iOS, Swift, Android, Kotlin, Ionic, Capacitor, Angular, PHP, Python, Flask, MongoDB, SQL Server, Kubernetes, Lambda'
    },
    {
      title: 'Senior Software Engineer',
      company: 'Swirl (Contractor)',
      period: 'April 2018 - June 2018 (3 months)',
      description: 'Swirl (part of mcgarrybowen) is a digital agency focused on delivering innovative marketing solutions. Built Microsoft Cortana skill in Node.js and C# for Microsoft store demonstration centers. Developed front-end voice interaction modules in React/Electron for seamless user experiences.',
      technologies: 'C#, .NET, Node.js, Angular, React, PHP, Cortana, Azure Services, Docker, Electron'
    },
    {
      title: 'Sr. Software Engineering Manager / Lead',
      company: 'Mobitor',
      period: 'Aug 2016 - Mar 2018 (1.5 years)',
      description: 'Built new SaaS web and mobile product from scratch using Node.js and Couchbase. Managed team of 5 engineers, designed hiring processes and performance review frameworks. Championed front-end modernization including Angular migration.',
      technologies: 'Node.js, Couchbase, Angular, AWS'
    },
    {
      title: 'Senior Software Engineer / Lead',
      company: 'Lawroom',
      period: 'Oct 2014 - Aug 2016 (2 years)',
      description: 'Enhanced scalable online learning platform for employment and education. Led AWS transition and implemented coding standards. Mentored junior developers and introduced agile best practices.',
      technologies: 'AWS, .NET, Agile'
    },
    {
      title: 'Senior Software Engineer',
      company: 'Disclosure Source',
      period: 'Nov 2009 - 2014 (5 years)',
      description: 'Developed web solutions for Natural Hazard Disclosure (NHD) Reports for Real Estate professionals. Created state-of-the-art entity-based data access and secured existing systems. Instituted development standards and mentored developers.',
      technologies: 'C#, SQL, Java, ASP.NET, JavaScript, jQuery, XML Web Services'
    },
    {
      title: 'Director of Software Engineering',
      company: 'Digital Hoop, Inc.',
      period: '2007 - 2009 (2 years)',
      description: 'Built team of ten on-shore and off-shore engineers. Designed and built full ecommerce stack with custom cart, admin tools, and search. Doubled company sales in first year through platform modernization.',
      technologies: 'C#, SQL, MVC, ASP.NET, JavaScript, AJAX'
    },
    {
      title: 'Software Engineer',
      company: 'CHRIMS, Inc',
      period: '2006 - 2007 (1 year)',
      description: 'Developed data storage and reporting solutions for Northern California Horse Racing tracks. Built database and web application for horse statistics and family trees. Enhanced reporting performance and facilitated major client acquisition.',
      technologies: 'ASP.NET, SQL, C#, JavaScript, XML Web Services'
    },
    {
      title: 'Software Engineer',
      company: 'GatorStudios',
      period: '2002 - 2006 (4 years)',
      description: 'Provided web development services for startups, creating online presence and ecommerce solutions. Helped companies with digital growth strategies and inventory management. Worked with clients including Amerimade, ComCity, and others.',
      technologies: 'ASP.NET, Java, Flash, SQL, C#, JavaScript, XML'
    },
    {
      title: 'Software Engineer',
      company: 'ORHP, Inc',
      period: '1999 - 2002 (3 years)',
      description: 'Led large-scale website redesign project working with marketing and executives. Built online ordering system to replace outdated platforms. Implemented SEO strategies and improved site performance.',
      technologies: 'ASP.NET, ColdFusion, Java, SQL, C#, JavaScript'
    }
  ];

  experiences.forEach((exp) => {
    if (yPosition > 250) {
      pdf.addPage();
      yPosition = 20;
    }

    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text(`${exp.title} | ${exp.company}`, 20, yPosition);

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'italic');
    pdf.text(exp.period, 20, yPosition + 5);

    yPosition += 12;

    pdf.setFont('helvetica', 'normal');
    const descLines = pdf.splitTextToSize(exp.description, 170);
    pdf.text(descLines, 20, yPosition);
    yPosition += (descLines.length * 4) + 3;

    pdf.setFont('helvetica', 'bold');
    pdf.text('Technologies: ', 20, yPosition);
    pdf.setFont('helvetica', 'normal');
    pdf.text(exp.technologies, 45, yPosition);
    yPosition += 10;
  });

  // Education & Additional Info
  if (yPosition > 230) {
    pdf.addPage();
    yPosition = 20;
  }

  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('EDUCATION & CERTIFICATIONS', 20, yPosition);
  yPosition += 10;

  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.text('High School Diploma - California High School', 20, yPosition);
  pdf.text('Continuously learning: ML, LLMs, and AI programming', 20, yPosition + 5);

  // Save the PDF
  pdf.save('Jason_Moore_Resume.pdf');
};

export const generateDetailedResumePDF = () => {
  // This could be an expanded version with more details, projects, etc.
  generateResumePDF();
};