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
  const summary = `Strategic and execution-focused engineering leader with 25+ years of experience scaling SaaS platforms, building high-performing distributed teams, and leading cloud-native transformations. Proven success in architecting resilient microservices, integrating complex systems, and aligning engineering operations with business strategy.`;

  const summaryLines = pdf.splitTextToSize(summary, 170);
  pdf.text(summaryLines, 20, yPosition);
  yPosition += (summaryLines.length * 5) + 10;

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
      period: 'June 2025 - Present',
      description: 'Leading development of Book a Jet (BAJ) platform - proprietary private aviation booking system. Architecting scalable microservices, MAUI Blazor hybrid mobile app, and Infrastructure as Code with Azure Kubernetes Service.',
      technologies: '.NET Core, Blazor, MAUI, Azure AKS, Kubernetes, PostgreSQL, gRPC, SignalR'
    },
    {
      title: 'Senior Software Engineer & Technical Lead',
      company: 'Quinstreet',
      period: 'June 2020 - June 2025 (5 years)',
      description: 'Led QuinStreet Routing Platform (QRP) handling millions of customer inquiries. Grew product from limited revenue to million-dollar quarters. Directed transition from SVN to Azure DevOps across 20-person engineering org.',
      technologies: '.NET Core, C#, Blazor, Azure, SQL Server, MySQL, Microservices, Okta SSO'
    },
    {
      title: 'Senior Software Engineer / Technical Lead',
      company: 'Sephora',
      period: 'June 2018 - June 2020 (2 years)',
      description: 'Architected critical microservices for ordering/cart systems. Key contributor to fraud detection system saving $11M monthly. Led development of mobile apps and AR applications.',
      technologies: 'C#, .NET Core, Azure, AWS, iOS, Swift, Android, Kotlin, Python, Flask, MongoDB'
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