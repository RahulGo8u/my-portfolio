// Central data file — all CV content lives here
export const PROFILE = {
  name: "Rahul Anand",
  title: "Senior Software Engineer",
  subtitle: "Full Stack .NET · AI Agent Developer · Cloud Architect",
  tagline: "12+ years building enterprise software. Now building intelligent systems with Generative AI.",
  email: "rrsimt.rahul@gmail.com",
  phone: "+91-9696692864",
  location: "Bangalore, India",
  linkedin: "https://www.linkedin.com/in/rahulgo8u/",
  github: "https://github.com/RahulGo8u",
  about: `Senior .NET Full Stack Developer with 12+ years of experience delivering enterprise-grade applications across fintech, banking, media, IoT/smart grid, and geospatial domains. Currently building Generative AI agents on AWS Bedrock — designing intelligent pipelines for document understanding, LLM-powered automation, and workflow orchestration.

Deep expertise in C#, .NET Core, Angular, and cloud-native architectures on Azure and AWS. Proven track record leading teams, mentoring developers, and driving end-to-end technical delivery across India and the UAE. Passionate about leveraging AI to build smarter, more autonomous systems.`,
};

export const SKILLS = [
  {
    category: "AI & Generative AI",
    accent: true,
    items: ["AWS Bedrock", "Generative AI Agents", "AI Agent Core", "LLM Integration", "Prompt Engineering", "RAG Pipelines", "OpenAI APIs", "AI-Assisted Development"],
  },
  {
    category: "Backend & Core",
    items: ["C#", ".NET Core / .NET 6/8", "ASP.NET MVC", "Web API", "ADO.NET", "Entity Framework Core", "GoLang", "WCF", "Microservices"],
  },
  {
    category: "Frontend",
    items: ["Angular", "TypeScript", "JavaScript", "HTML5 / CSS3", "jQuery", "GraphQL", "AngularJS"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Azure", "AWS (EC2, ECS, Lambda, Bedrock)", "IIS", "CI/CD Pipelines", "Azure DevOps", "Jenkins", "Docker", "Git / TFS / Mercurial"],
  },
  {
    category: "Database",
    items: ["MS SQL Server", "Oracle", "DynamoDB", "Entity Framework", "ADO.NET"],
  },
  {
    category: "Architecture",
    items: ["Event-Driven Architecture", "Microservices", "3-Tier", "MVC / MVP", "SOLID Principles", "Design Patterns", "Distributed Systems"],
  },
];

export const EXPERIENCE = [
  {
    title: "Senior Software Engineer",
    company: "EagleView",
    location: "Bangalore, India",
    period: "Oct 2023 – Present",
    duration: "2 yrs 9 mos",
    ai: true,
    stack: ["C#", ".NET Core", "GoLang", "AWS Bedrock", "Generative AI", "SQL Server", "Oracle", "AWS", "DevOps"],
    bullets: [
      "Build and integrate Generative AI agents using AWS Bedrock to automate intelligent workflows, document understanding, and data extraction pipelines.",
      "Design, develop, and maintain scalable web, API, and backend applications in a multi-stack environment using C#, .NET Core, ASP.NET MVC, and GoLang.",
      "Develop and optimize database solutions using SQL Server and Oracle with Entity Framework Core, ensuring high performance and data integrity.",
      "Collaborate in DevOps and AWS cloud environments, managing IIS deployments, building RESTful Web APIs, and enhancing application security.",
    ],
  },
  {
    title: "Technology Lead Analyst",
    company: "Techcarrot (Client: OSN Media)",
    location: "Dubai, UAE",
    period: "May 2021 – Oct 2023",
    duration: "2 yrs 6 mos",
    ai: false,
    stack: ["C#", ".NET Core", "Angular", "SQL Server", "Oracle", "Azure", "DevOps", "WEB API"],
    bullets: [
      "Led end-to-end development of the Lead to Cash platform — a business-critical system spanning marketing to revenue collection for OSN Media ($520M revenue).",
      "Responsible for developing and maintaining the web application, ensuring security and data protection across the full stack.",
      "Mentored junior developers and authored technical documentation; managed source control and participated in sprint planning.",
    ],
  },
  {
    title: "Full Stack .NET Developer",
    company: "Omnix International (Client: ADCB)",
    location: "Abu Dhabi, UAE",
    period: "Mar 2019 – May 2021",
    duration: "2 yrs 2 mos",
    ai: false,
    stack: ["C#", ".NET Core", "Angular", "SQL Server", "Azure", "CI/CD", "Entity Framework"],
    bullets: [
      "Built web-enabled internal applications for Abu Dhabi Commercial Bank enabling efficient business process automation end-to-end.",
      "Involved in requirement gathering, effort estimation, design analysis, technical specification authoring, coding, and TDD unit testing.",
      "Operated within a DevOps team using CI/CD pipelines; performed peer code reviews to improve code quality.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Gemalto (now Thales)",
    location: "Noida, India",
    period: "Dec 2017 – Mar 2019",
    duration: "1 yr 3 mos",
    ai: false,
    stack: ["C#", "ASP.NET", "SQL Server", "Entity Framework", "WCF"],
    bullets: [
      "Developed features for AllAboutMe — a global platform allowing users to personalize Debit/Credit cards online with custom imagery.",
      "Developed user stories, maintained source control, conducted code reviews, and mentored junior developers.",
    ],
  },
  {
    title: "Software Developer (.NET)",
    company: "Landis+Gyr Limited",
    location: "Noida, India",
    period: "Feb 2016 – Dec 2017",
    duration: "1 yr 10 mos",
    ai: false,
    award: "GEM Award — Jun 2017",
    stack: ["C#", "ASP.NET", "SQL Server", "Oracle", "WinForms", "WPF", "WCF"],
    bullets: [
      "Contributed to the Meter Data Management System (MDMS) — a Smart Grid component for utility companies handling AMI/AMR data.",
      "Developed user stories, maintained TFS source control, performed requirement analysis, bug fixing, and client interaction.",
    ],
  },
  {
    title: "System Engineer (.NET Developer)",
    company: "Infosys Limited",
    location: "Hyderabad, India",
    period: "Feb 2014 – Feb 2016",
    duration: "2 yrs",
    ai: false,
    stack: ["C#", "ASP.NET", "MVC", "LINQ", "WCF", "WPF", "SQL Server"],
    bullets: [
      "Worked in Manufacturing Application Development & Maintenance unit on projects for enterprise clients including Microsoft.",
      "Projects: Controller Workspace (Win 8 financial tools), Automating Audit Framework, Library Management System, Healthcare Management System.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "Generative AI Agent — Document Intelligence",
    company: "EagleView",
    description: "Architected and built intelligent AI agents using AWS Bedrock to automate document understanding, data extraction, and workflow orchestration for geospatial data pipelines.",
    impact: "Reduced manual processing by 70%, enabling fully automated end-to-end document pipelines.",
    stack: ["AWS Bedrock", "C#", ".NET Core", "Lambda", "S3", "DynamoDB", "Generative AI"],
    accent: true,
  },
  {
    name: "Lead to Cash Platform",
    company: "OSN Media via Techcarrot",
    description: "End-to-end business platform spanning marketing through revenue collection for a major MENA broadcast media company (901+ employees, $520M revenue).",
    impact: "Unified 6+ business systems into a single platform, reducing processing time significantly.",
    stack: ["C#", ".NET Core", "Angular", "SQL Server", "Oracle", "Azure", "DevOps"],
    accent: false,
  },
  {
    name: "ADCB Banking Web Applications",
    company: "Abu Dhabi Commercial Bank",
    description: "Enterprise web-enabled internal banking applications built end-to-end with TDD and CI/CD. Enabled efficient business process automation for one of UAE's largest banks.",
    impact: "Delivered applications used by 7,600+ bank employees across 42 countries.",
    stack: ["C#", ".NET Core", "Angular", "SQL Server", "Azure", "Entity Framework"],
    accent: false,
  },
  {
    name: "Meter Data Management System",
    company: "Landis+Gyr",
    description: "Smart Grid MDMS component providing long-term data storage and management for utility companies' Advanced Metering Infrastructure (AMI/AMR) systems.",
    impact: "Deployed to utility companies across 37 countries managing millions of smart meter data points.",
    stack: ["C#", "ASP.NET", "WCF", "SQL Server", "Oracle", "WinForms", "WPF"],
    accent: false,
  },
];

export const CERTIFICATIONS = [
  { name: "Microsoft Certified Professional: Programming in C# (70-483)", issuer: "Microsoft", year: "2015" },
  { name: "MCPS: Microsoft Certified Professional", issuer: "Microsoft", year: "2015" },
  { name: "Robotics Process Automation Workshop", issuer: "Futuristshub", year: "2019" },
  { name: "AMCAT Certified Data Processing Specialist", issuer: "Aspiring Minds", year: "2014" },
  { name: "AMCAT Certified Software Development Trainee", issuer: "Aspiring Minds", year: "2014" },
];

export const STATS = [
  { value: "12+", label: "Years Experience" },
  { value: "6", label: "Companies" },
  { value: "2", label: "Countries (India & UAE)" },
  { value: "Gen AI", label: "AWS Bedrock Specialist" },
];
