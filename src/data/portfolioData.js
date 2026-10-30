////////////////////////////introduction/////////////////////////////////////////
export const portfolioData = {
  profile: {
    name: "Shivam Kumar",
    role: "Electronics Engineer",
    tagline: "Working with the microcontroller Atmega1284p and Atmega328p",
    bio: "I am a electronics engineer passionate about building scalable embadded and automatiobn products from ground zero to production. With deep expertise across arduino IDE.",
    location: "Hapur, India (Available Worldwide)",
    status: "Available for high-impact roles & consulting",
    statusAvailable: true,
    email: "shivamkumarecee@gmail.com",
    github: "https://github.com/shivamkumar063",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    yearsOfExp: "4+",
    projectsCompleted: "25+",
    happyUsers: "150K+",
    codeQuality: "99.9%"
  },
///////////////////////////skills//////////////////////////////////////////////
  skills: [
    { name: "React 19 & Next.js", category: "frontend", level: "Advanced", icon: "Code2" },
    { name: "TypeScript", category: "frontend", level: "Expert", icon: "FileCode" },
    { name: "Tailwind CSS & CSS Grid", category: "frontend", level: "Expert", icon: "Palette" },
    { name: "Vue.js 3", category: "frontend", level: "Proficient", icon: "Layers" },
    { name: "Node.js & Express", category: "backend", level: "Expert", icon: "Server" },
    { name: "Python & FastAPI", category: "backend", level: "Advanced", icon: "Terminal" },
    { name: "PostgreSQL & Prisma", category: "backend", level: "Advanced", icon: "Database" },
    { name: "Redis & In-Memory Caching", category: "backend", level: "Proficient", icon: "Zap" },
    { name: "Docker & Containerization", category: "devops", level: "Advanced", icon: "Box" },
    { name: "AWS Cloud (S3, Lambda, EC2)", category: "devops", level: "Proficient", icon: "Cloud" },
    { name: "CI/CD & GitHub Actions", category: "devops", level: "Advanced", icon: "GitBranch" },
    { name: "System Design & Microservices", category: "architecture", level: "Advanced", icon: "Network" },
    { name: "REST & GraphQL APIs", category: "architecture", level: "Expert", icon: "Cpu" },
    { name: "Web Security & Auth (JWT/OAuth)", category: "architecture", level: "Advanced", icon: "ShieldCheck" }
  ],
///////////////////////////projects//////////////////////////////////////////////
  projects: [
    {
      id: "money-tracker",
      title: "Money Tracker & Analytics Hub",
      category: "Full Stack",
      featured: true,
      description: "A comprehensive personal finance and expense dashboard with real-time budget forecasting, interactive spending analytics, and custom category management.",
      highlights: [
        "Interactive analytics charts with dynamic category breakdown",
        "Instant budget health alerts & recurring subscription tracking",
        "Offline-first capability with smooth local persistence",
        "Sub-100ms interaction latency with zero bloat"
      ],
      techStack: ["React 19", "Tailwind CSS", "Vite", "Canvas Confetti", "Lucide Icons"],
      demoUrl: "https://money-tracker-demo.vercel.app",
      githubUrl: "https://github.com/shivamkumar/money-tracker",
      imageGrad: "from-blue-600 via-indigo-600 to-purple-600",
      accent: "#4f46e5",
      metrics: "Sub-50ms UI response"
    },
    {
      id: "nexus-cloud-engine",
      title: "Nexus Distributed Task Orchestrator",
      category: "Backend & Systems",
      featured: true,
      description: "Fault-tolerant distributed job scheduling and worker queue system designed for high-concurrency event ingestion and background task processing.",
      highlights: [
        "Capable of sustaining 15,000+ jobs/second with sub-second acknowledgment",
        "Automated exponential backoff retries and dead-letter queue routing",
        "Live WebSocket dashboard with cluster health telemetry",
        "Zero-downtime rolling upgrades and node discovery"
      ],
      techStack: ["Node.js", "Redis", "TypeScript", "Docker", "Prometheus"],
      demoUrl: "https://nexus-engine-demo.vercel.app",
      githubUrl: "https://github.com/shivamkumar/nexus-cloud-engine",
      imageGrad: "from-emerald-600 via-teal-600 to-cyan-600",
      accent: "#059669",
      metrics: "15k+ tasks/sec"
    },
    {
      id: "devpulse-metrics",
      title: "DevPulse Engineering Telemetry",
      category: "Full Stack",
      featured: true,
      description: "Developer velocity and repository health dashboard providing automated insights into PR turnaround, test coverage trends, and commit cadence.",
      highlights: [
        "GitHub Webhook sync with automated review bottleneck detection",
        "Custom D3 / SVG metric visualizations for sprint velocity",
        "Team performance benchmarks with privacy-first aggregation",
        "Role-based access control with SSO integration"
      ],
      techStack: ["Next.js", "FastAPI", "PostgreSQL", "Tailwind CSS", "Recharts"],
      demoUrl: "https://devpulse-demo.vercel.app",
      githubUrl: "https://github.com/shivamkumar/devpulse",
      imageGrad: "from-violet-600 via-purple-600 to-pink-600",
      accent: "#9333ea",
      metrics: "40% faster PR cycle"
    },
    {
      id: "aether-ai-canvas",
      title: "Aether AI Agent Workflow Studio",
      category: "AI & Tools",
      featured: false,
      description: "Visual node-based diagramming canvas for orchestrating autonomous AI multi-agent workflows, prompt chains, and automated external API calls.",
      highlights: [
        "Interactive drag-and-drop node graph with execution trace inspector",
        "Real-time token streaming with live markdown rendering",
        "Custom tool integration via OpenAPI spec importation",
        "Exportable workflow recipes as executable Python/Node scripts"
      ],
      techStack: ["React Flow", "TypeScript", "WebSockets", "FastAPI", "Tailwind CSS"],
      demoUrl: "https://aether-ai-studio.vercel.app",
      githubUrl: "https://github.com/shivamkumar/aether-ai-canvas",
      imageGrad: "from-amber-500 via-orange-600 to-red-600",
      accent: "#ea580c",
      metrics: "5x faster prototyping"
    },
    {
      id: "omnisearch-vector",
      title: "OmniSearch Neural Retrieval API",
      category: "Backend & Systems",
      featured: false,
      description: "High-speed hybrid semantic vector search microservice for technical document bases, combining dense neural embeddings with BM25 keyword matching.",
      highlights: [
        "Sub-15ms p95 search latency across 500,000 document chunks",
        "Automatic text chunking and multilingual embedding pipeline",
        "Built-in caching layer with Redis for common search queries",
        "Comprehensive REST & gRPC endpoints with OpenAPI documentation"
      ],
      techStack: ["Python", "Qdrant", "FastAPI", "Docker", "HuggingFace"],
      demoUrl: "https://omnisearch-docs.vercel.app",
      githubUrl: "https://github.com/shivamkumar/omnisearch-vector",
      imageGrad: "from-sky-500 via-blue-600 to-indigo-700",
      accent: "#2563eb",
      metrics: "12ms p95 query speed"
    },
    {
      id: "pulse-design-system",
      title: "Pulse UI Component Primitives",
      category: "Frontend",
      featured: false,
      description: "An accessible, themeable React component system built with strict WCAG AAA guidelines, keyboard navigation, and zero runtime CSS overhead.",
      highlights: [
        "35+ primitives including modals, tooltips, popovers, and virtual tables",
        "Full keyboard navigation with automatic ARIA attribute generation",
        "Zero CSS bundle penalty using Tailwind CSS v4 design tokens",
        "Tested across Chrome, Safari, Firefox, and screen readers"
      ],
      techStack: ["React 19", "Tailwind CSS v4", "TypeScript", "Storybook"],
      demoUrl: "https://pulse-ui-primitives.vercel.app",
      githubUrl: "https://github.com/shivamkumar/pulse-ui",
      imageGrad: "from-rose-500 via-pink-600 to-purple-600",
      accent: "#e11d48",
      metrics: "100% WCAG AAA pass"
    }
  ],
///////////////////////experience/////////////////////////////////////////////////
  experiences: [
    {
      period: "2024 — Present",
      role: "Lead Full Stack Engineer",
      company: "Apex Digital Systems",
      location: "Bengaluru, India (Hybrid)",
      type: "Full-Time",
      description: "Architecting cloud-native web architectures, leading a 6-engineer pod, and scaling platform services to handle millions of daily events.",
      achievements: [
        "Reduced p99 server response time from 380ms to 92ms by optimizing database indexing and Redis cache layers.",
        "Pioneered migration from legacy monolithic frontend to modern React 19 architecture, improving Lighthouse Core Web Vitals to 98+.",
        "Mentored junior engineers and instituted automated CI/CD pipeline checks, cutting deployment errors by 65%."
      ]
    },
    {
      period: "2022 — 2024",
      role: "Software Development Engineer",
      company: "CloudScale Technologies",
      location: "Bengaluru, India",
      type: "Full-Time",
      description: "Built high-throughput backend microservices, transactional processing flows, and real-time operational analytics dashboards.",
      achievements: [
        "Designed and implemented automated event webhook worker system processing 5M+ notifications daily.",
        "Integrated multi-tenant Stripe and PayPal checkout flows with idempotent payment validation.",
        "Refactored state management across core dashboard apps, reducing client-side memory footprint by 35%."
      ]
    },
    {
      period: "2020 — 2022",
      role: "Frontend Engineer & Open Source Contributor",
      company: "Hyperion Labs",
      location: "Remote",
      type: "Contract",
      description: "Created interactive web user interfaces, developed developer tools, and contributed to open-source UI libraries.",
      achievements: [
        "Developed custom canvas visualizations and interactive dashboard widgets for enterprise SaaS clients.",
        "Authored reusable open-source CLI utilities and React hooks with over 25k lifetime downloads."
      ]
    }
  ],

  testimonials: [
    {
      quote: "Shivam possesses the rare combination of deep systems engineering insight and an impeccable eye for UX design. He tackled our most complex distributed caching bottlenecks while delivering an interface our users fell in love with.",
      author: "Rahul Sharma",
      role: "VP of Engineering at Apex Digital",
      avatarInitials: "RS"
    },
    {
      quote: "Working with Shivam was effortless. His commitment to code quality, automated test coverage, and clear documentation set the gold standard across our entire organization.",
      author: "Priya Nair",
      role: "Product Director at CloudScale",
      avatarInitials: "PN"
    },
    {
      quote: "Shivam took our vague initial product requirements and transformed them into a production-ready, beautifully responsive SaaS application ahead of schedule. Truly top-tier engineering talent.",
      author: "David Chen",
      role: "Founder & CTO at NexusForge",
      avatarInitials: "DC"
    }
  ]
};
