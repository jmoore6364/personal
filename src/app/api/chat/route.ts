import { NextRequest, NextResponse } from 'next/server';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Jason's comprehensive knowledge base
const JASON_CONTEXT = `
You are an AI assistant representing Jason Moore, a Senior Software Engineer and Technical Leader with 25+ years of experience.

BACKGROUND:
- 25+ years of software engineering and leadership experience
- Expert in scaling SaaS platforms and building high-performing distributed teams
- Led cloud-native transformations and architected resilient microservices
- Consistently aligned engineering operations with business strategy

CURRENT ROLE & EXPERTISE:
- Senior Software Engineer & Technical Leader
- Specializes in team scaling (3-20+ engineers), cloud architecture, and AI/ML integration
- Expert in C#, .NET Core/.NET 9, Azure, AWS, microservices, and modern web technologies
- Currently exploring AI/ML with Python, PyTorch, and cloud ML platforms

KEY TECHNOLOGIES:
Leadership & Management: Team Leadership (10/10), Technical Architecture (10/10), Product Strategy (9/10)
Backend: C# (10/10), .NET Core/.NET 9 (10/10), Azure (9/10), AWS (8/10), Microservices (9/10)
Frontend: Blazor (9/10), React (8/10), Angular (8/10), iOS/Swift (7/10), MAUI (8/10)
DevOps: Kubernetes (8/10), Docker (9/10), Azure DevOps (9/10), Infrastructure as Code (8/10)
AI/ML: AI/ML Integration (7/10), Python (7/10), LLMs & AI Tools (8/10)
Database: SQL Server (9/10), PostgreSQL (8/10), NoSQL (8/10)

CAREER HIGHLIGHTS:
- Scaled teams from 3 to 20+ engineers across multiple organizations
- Led cloud migrations handling millions of requests
- Built enterprise-grade distributed systems
- Mentored and coached technical teams
- Aligned engineering with business strategy across multiple companies

RECENT EXPERIENCE:
- ONEFlight International (2023-2024): Sr. Software Engineer, scaled operations platform
- Codeup.com (2022-2023): Lead Instructor, trained 100+ developers
- ORHP (2021-2022): Software Architect, optimized home warranty operations
- NB Pro (2019-2021): Senior Developer, built e-commerce platform
- Various consulting and leadership roles from 2004-2019

CURRENT INTERESTS:
- AI/ML implementation in enterprise applications
- Cloud-native architecture patterns
- Team leadership and scaling strategies
- Modern development practices and DevOps
- Speaking engagements on engineering leadership

CONTACT:
- Email: jasonwamoore@gmail.com
- Phone: (925) 321-9772
- LinkedIn: https://www.linkedin.com/in/jmoore-engineer/
- Location: Available for remote work

PERSONALITY:
- Problem solver who excels at complex, ambiguous challenges
- Collaborative leader who works well across organizations
- Passionate about technology and continuous learning
- Direct communicator focused on practical solutions
- Mentoring-oriented with a focus on team development

Answer questions as if you are Jason Moore, using first person ("I have", "My experience", etc.).
Be conversational, helpful, and provide specific examples when possible.
If asked about specific projects, reference the companies and timeframes mentioned above.
If asked about availability or hiring, mention that you're open to discussing opportunities.
Keep responses concise but informative, typically 2-4 sentences unless more detail is specifically requested.
`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages format' }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      // Enhanced mock response system
      const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || '';

      let mockResponse = '';

      // Technology-specific questions
      if (lastMessage.includes('python')) {
        if (lastMessage.includes('know') || lastMessage.includes('familiar') || lastMessage.includes('experience')) {
          mockResponse = "Yes, I'm actively learning and using Python for AI/ML projects! I have about 3 years of experience with Python, focusing on PyTorch, Flask, and automation scripts. My current skill level is 7/10, and I'm constantly improving through hands-on AI/ML implementation projects.";
        } else {
          mockResponse = "I use Python primarily for AI/ML integration projects. I work with PyTorch for machine learning models, Flask for web APIs, and various automation scripts. It's become an essential tool in my current exploration of enterprise AI implementations.";
        }
      } else if (lastMessage.includes('c#') || lastMessage.includes('csharp') || lastMessage.includes('c sharp')) {
        mockResponse = "C# is my primary language with 22 years of experience - I'd rate myself 10/10. I've used it across all versions and have deep expertise in .NET Core/.NET 9, ASP.NET, and building enterprise-scale applications. It's been the foundation of most of my career.";
      } else if (lastMessage.includes('javascript') || lastMessage.includes('js')) {
        mockResponse = "I have solid JavaScript experience, particularly with modern frameworks. I work with React (8/10), Angular (8/10), and TypeScript regularly. I've built complex SPAs and component libraries, always focusing on maintainable, scalable code.";
      } else if (lastMessage.includes('react')) {
        mockResponse = "I have 6 years of React experience with a skill level of 8/10. I've built complex SPA applications, component libraries, and modern web interfaces. I particularly enjoy working with React hooks and building reusable component architectures.";
      } else if (lastMessage.includes('blazor')) {
        mockResponse = "Blazor is one of my strongest frontend technologies with 4 years of experience (9/10 skill level). I work with both WebAssembly and Server-side Blazor, building modern web applications that leverage my C# expertise on both frontend and backend.";
      } else if (lastMessage.includes('azure')) {
        mockResponse = "I have extensive Azure experience (9/10 skill level) with 7 years of hands-on work. I've led cloud migrations, implemented microservices on Azure, worked with AKS, Azure DevOps, and various Azure services for enterprise-scale applications.";
      } else if (lastMessage.includes('aws')) {
        mockResponse = "I have solid AWS experience (8/10 skill level) with 6 years of working with microservices, Lambda, Step Functions, containers, and various AWS services. I've architected and deployed scalable solutions on AWS infrastructure.";
      } else if (lastMessage.includes('kubernetes') || lastMessage.includes('k8s')) {
        mockResponse = "I have 4 years of Kubernetes experience with container orchestration and Azure AKS (8/10 skill level). I've implemented deployment strategies, managed cluster configurations, and scaled applications using Kubernetes in production environments.";
      } else if (lastMessage.includes('docker')) {
        mockResponse = "Docker is one of my strong DevOps skills (9/10) with 6 years of experience. I use containerization extensively for deployment strategies, development environments, and microservices architecture. It's essential for my cloud-native development approach.";
      } else if (lastMessage.includes('ios') || lastMessage.includes('swift')) {
        mockResponse = "I have iOS and Swift experience (7/10 skill level) with 5 years of building native mobile apps, including AR applications. I enjoy working on mobile projects and have built several production iOS applications.";
      } else if (lastMessage.includes('sql') || lastMessage.includes('database')) {
        mockResponse = "I have extensive database experience, particularly with SQL Server (9/10) with 20 years of complex queries, optimization, and architecture. I also work with PostgreSQL (8/10) and NoSQL databases like CosmosDB and MongoDB (8/10).";

      // Experience and background questions
      } else if (lastMessage.includes('experience') || lastMessage.includes('background')) {
        mockResponse = "I have 25+ years of software engineering and leadership experience, specializing in scaling SaaS platforms and building high-performing teams. I've led cloud-native transformations and consistently aligned engineering operations with business strategy across multiple organizations.";
      } else if (lastMessage.includes('technology') || lastMessage.includes('tech') || lastMessage.includes('skills')) {
        mockResponse = "My core expertise includes C#/.NET (10/10), Azure/AWS cloud platforms (9/10), microservices architecture (9/10), and team leadership (10/10). I'm currently exploring AI/ML integration with Python and PyTorch. I'm also experienced in React, Angular, Blazor, and mobile development.";
      } else if (lastMessage.includes('ai') || lastMessage.includes('machine learning') || lastMessage.includes('ml')) {
        mockResponse = "I'm actively studying AI/ML implementation in enterprise applications using Python, PyTorch, Hugging Face, and cloud ML platforms. My current focus is on practical AI integration strategies and helping organizations adopt these technologies effectively.";
      } else if (lastMessage.includes('team') || lastMessage.includes('leadership') || lastMessage.includes('manage') || lastMessage.includes('mentor')) {
        mockResponse = "I've scaled engineering teams from 3 to 20+ engineers across multiple organizations. My leadership philosophy centers on mentoring engineers to maximize their performance and impact through hands-on guidance, code reviews, and fostering technical ownership. I'm passionate about creating collaborative, test-driven environments where teams thrive.";
      } else if (lastMessage.includes('cloud')) {
        mockResponse = "I have extensive experience with cloud-native architectures on both Azure and AWS. I've led migrations of legacy systems to microservices, implemented container orchestration with Kubernetes, and established DevOps practices for scalable deployments.";
      } else if (lastMessage.includes('contact') || lastMessage.includes('hire') || lastMessage.includes('available')) {
        mockResponse = "I'm always interested in discussing new opportunities! You can reach me at jasonwamoore@gmail.com or (925) 321-9772. I'm particularly drawn to roles involving engineering leadership, cloud architecture, or AI/ML integration projects.";
      } else if (lastMessage.includes('project') || lastMessage.includes('work')) {
        mockResponse = "Recently, I worked at ONEFlight International scaling their operations platform, and at Codeup.com training 100+ developers. I've built everything from e-commerce platforms to home warranty systems, always focusing on scalable, maintainable solutions.";
      } else if (lastMessage.includes('salary') || lastMessage.includes('rate') || lastMessage.includes('compensation')) {
        mockResponse = "I'm open to discussing compensation based on the role, responsibilities, and company. My focus is on finding the right fit where I can add significant value through technical leadership and team scaling. Feel free to reach out at jasonwamoore@gmail.com to discuss specifics.";
      } else if (lastMessage.includes('remote') || lastMessage.includes('location') || lastMessage.includes('where')) {
        mockResponse = "I'm experienced with remote and hybrid work arrangements, having successfully led distributed teams across multiple organizations. I'm open to remote opportunities and have proven experience building strong team culture and communication in remote environments.";
      } else if (lastMessage.includes('refactor') || lastMessage.includes('performance') || lastMessage.includes('reliability')) {
        mockResponse = "I have extensive experience with large-scale refactors, performance optimization, and reliability engineering. I've modernized legacy systems safely, identified and resolved performance bottlenecks, and built fault-tolerant distributed systems with strong ownership over all aspects of the product area.";
      } else if (lastMessage.includes('code quality') || lastMessage.includes('documentation') || lastMessage.includes('test')) {
        mockResponse = "I'm passionate about building well-structured, maintainable, well-documented code. I believe in comprehensive test coverage, clean architecture following SOLID principles, and fostering collaborative, test-driven environments where quality is everyone's responsibility.";
      } else if (lastMessage.includes('customer') || lastMessage.includes('user') || lastMessage.includes('experience')) {
        mockResponse = "I'm passionate about creating memorable experiences for customers. My approach prioritizes user-centric design in technical decisions, performance optimization for fast user experiences, thorough quality assurance, and continuous improvement based on user feedback.";
      } else {
        mockResponse = "Hi! I'm Jason Moore, a Senior Software Engineer with 25+ years of experience in team leadership and cloud architecture. I'd be happy to discuss my background, technical expertise, or potential opportunities. What would you like to know?";
      }

      return NextResponse.json({
        message: mockResponse,
        isDemo: true
      });
    }

    // Real OpenAI API call
    const systemMessage: ChatMessage = {
      role: 'system',
      content: JASON_CONTEXT
    };

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // More cost-effective than gpt-4
        messages: [systemMessage, ...messages],
        max_tokens: 500,
        temperature: 0.7,
        frequency_penalty: 0.2,
        presence_penalty: 0.1,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const assistantMessage = data.choices[0]?.message?.content;

    if (!assistantMessage) {
      throw new Error('No response from OpenAI API');
    }

    return NextResponse.json({
      message: assistantMessage,
      isDemo: false
    });

  } catch (error) {
    console.error('Chat API error:', error);

    return NextResponse.json({
      message: "I apologize, but I'm having trouble connecting right now. Please feel free to reach out directly at jasonwamoore@gmail.com or (925) 321-9772 for any questions about my experience or potential opportunities!",
      isDemo: true,
      error: 'API temporarily unavailable'
    });
  }
}