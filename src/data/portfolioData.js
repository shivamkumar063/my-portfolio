////////////////////////////introduction/////////////////////////////////////////
export const portfolioData = {
  profile: {
    name: "Shivam Kumar",
    role: "Electronics Engineer",
    tagline: "Transforming demand & schematics into design & embedded design",
    bio: [
    "Hi, I'm Shivam Kumar",
    "Electronics Engineer | Embedded Systems | Industrial automation | Technology Enthusiast",
    "I am electronics and Communication Engineer graduated with a passion for developing innovative technologies and solve real word engineering problem",
    "I have practical industrial experince working with elctronics system, HVAC, Solar cold room, Solar & Grid IMC, Solar and Grid BMC, Solar powered HVAC systems, embedded controllers, sensor. I enjoy exploring the connection between hardware and software to build efficient, reliable and intellegent solution",
    "My technical interests including arduino programming, circuit design, industrial communication protocal, automation, renewable energy",
    "I believe in continuous learning, experment with the new technologies and transform ideas into practical solution"
  ],
    location: "Hapur, India (Available Worldwide)",
    //status: "Available for high-impact roles & consulting",
    statusAvailable: true,
    email: "shivamkumarecee@gmail.com",
    github: "https://github.com/shivamkumar063",
    linkedin: "https://www.linkedin.com/in/63shivam/",
    twitter: "https://x.com/ShivamK31242076",
    yearsOfExp: "1+",
    projectsCompleted: "2+",
    //happyUsers: "150K+",
    //codeQuality: "99.9%"
  },
///////////////////////////skills//////////////////////////////////////////////
  skills: [
    { name: "Circuit Designing", category: "Hardeare", level: "Advanced", icon: "Code2" },
    { name: "Analog Circuit", category: "Hardware", level: "Expert", icon: "FileCode" },
    { name: "Arduino Programming", category: "software", level: "Expert", icon: "Palette" },
    { name: "C programming", category: "software", level: "Proficient", icon: "Layers" },
    { name: "Digital Electronics", category: "software", level: "Expert", icon: "Server" },
    { name: "Python", category: "programming", level: "Advanced", icon: "Terminal" },
    { name: "Communication protocal", category: "hardware & software", level: "Advanced", icon: "Database" },
    // { name: "Redis & In-Memory Caching", category: "backend", level: "Proficient", icon: "Zap" },
    // { name: "Docker & Containerization", category: "devops", level: "Advanced", icon: "Box" },
    // { name: "AWS Cloud (S3, Lambda, EC2)", category: "devops", level: "Proficient", icon: "Cloud" },
    // { name: "CI/CD & GitHub Actions", category: "devops", level: "Advanced", icon: "GitBranch" },
    // { name: "System Design & Microservices", category: "architecture", level: "Advanced", icon: "Network" },
    // { name: "REST & GraphQL APIs", category: "architecture", level: "Expert", icon: "Cpu" },
    // { name: "Web Security & Auth (JWT/OAuth)", category: "architecture", level: "Advanced", icon: "ShieldCheck" }
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
    }
  ],
///////////////////////experience/////////////////////////////////////////////////
  experiences: [
    {
      period: "2026 — Present",
      role: "Electronics Engineer",
      company: "Inficold India Private Limited",
      location: "Hapur, India",
      type: "Full-Time",
      description: "Design embedded systems for practical use, including circuit design, PCB layout, and firmware development. Collaborate with cross-functional teams to deliver innovative solutions for industrial automation and HVAC systems.",
      achievements: [
        "Supervision in the NISE project form design to installation and commissioning of solar powered cold room",
        "Estable communication protocal between VFD and embedded controller also estable communication between temperature comtrollar and embedded controller",
        
      ]
    },
    {
      period: "2025 — 2026",
      role: "Electronics Engineer Trainee",
      company: "Inficold India Private Limited",
      location: "Hapur, India",
      type: "Full-Time",
      description: "Hands on experince with delta MS300 & Yaskawa V1000 VFDs, Circuit designing, Embedded system, work with the site engineer, complete installation in abroad",
      achievements: [
        "I have designed stablizer protection circuit and automation code.",
        "I have designed relay circuit for heating and cooling system.",
      ]
    }
  ],

  testimonials: []
};
