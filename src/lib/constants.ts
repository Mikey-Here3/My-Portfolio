import type {
  Project,
  Experience,
  SkillCategory,
  Certification,
  Education,
  Stat,
  NavItem,
  SocialLink,
} from "@/types";

// ─── Personal Info ───────────────────────────────────────────────────────────

export const PERSONAL_INFO = {
  name: "Ashan Mir",
  firstName: "Ashan",
  lastName: "Mir",
  initials: "AM",
  title: "Full Stack Developer",
  tagline: "Building digital experiences that matter",
  bio: "I'm a Full Stack Developer and Software Engineering student at NUML, Islamabad. I specialize in crafting high-performance web applications with modern technologies like Next.js, React, TypeScript, and TailwindCSS. I believe in writing clean, scalable code and building products that genuinely solve problems.",
  email: "ashanmirofficial@gmail.com",
  phone: "+923190799711",
  whatsapp: "923190799711",
  location: "Islamabad, Pakistan",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/avatar.jpg",
} as const;

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ─── Social Links ────────────────────────────────────────────────────────────

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/Mikey-Here3",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/ashan-mir/",
    icon: "linkedin",
  },
  {
    platform: "Email",
    url: "mailto:ashanmirofficial@gmail.com",
    icon: "mail",
  },
  {
    platform: "WhatsApp",
    url: "https://wa.me/923190799711",
    icon: "messageCircle",
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: "studyhouse",
    title: "StudyHouse",
    description:
      "A full-stack university resource archive where NUML students can access past papers, notes, and exams — all verified, organized, and completely free. Features smart search, instant PDF previews, community uploads, and department-wise browsing.",
    problem:
      "Students at NUML needed centralized access to verified academic resources — past papers, notes, and exams — without paywalls or scattered, unreliable sources.",
    image: "/images/projects/studyhouse.png",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Neon",
      "NextAuth",
      "JWT",
      "TailwindCSS",
      "REST APIs",
      "Git",
    ],
    features: [
      "Smart search with filters for department, subject, and year",
      "Instant paper previews without downloading",
      "One-click PDF downloads for offline study",
      "Community uploads with moderation pipeline",
      "Department-wise browsing and categorization",
      "Trending papers based on views and downloads",
      "Student reviews and ratings on resources",
      "Integrated blog for academic tips and guides",
    ],
    challenges:
      "Implementing a robust authentication system with role-based access, optimizing database queries for large datasets of papers across multiple departments, and building a content moderation pipeline for community uploads.",
    githubUrl: "https://github.com/Mikey-Here3",
    liveUrl: "https://www.studyhouse.online/",
    featured: true,
  },
  {
    id: "stockpilot-pro",
    title: "StockPilot Pro",
    description:
      "A complete inventory management solution featuring real-time analytics, comprehensive stock tracking, sales management, and detailed reporting — all wrapped in a sleek dark interface designed for efficiency.",
    problem:
      "Businesses needed a precision inventory management system with real-time analytics and reporting to track stock levels, manage sales, and make data-driven decisions.",
    image: "/images/projects/stockpilot.png",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Recharts"],
    features: [
      "Full CRUD operations with advanced search, filter, sort, and pagination",
      "Interactive charts for revenue tracking and category distribution",
      "Stock adjustments with threshold alerts and complete audit history",
      "Sales recording with automatic stock reduction and order tracking",
      "Comprehensive dashboard with key performance metrics",
      "Export reports in multiple formats",
    ],
    challenges:
      "Building real-time analytics with performant chart rendering, implementing stock threshold alerts with audit trails, and ensuring data consistency across concurrent sales operations.",
    liveUrl: "https://stockpilot-pro.vercel.app/",
    featured: false,
  },
  {
    id: "solevault",
    title: "SoleVault",
    description:
      "A premium sneaker marketplace and e-commerce platform featuring a dark theme with gold accents. Built for sneaker enthusiasts who demand a curated, authenticated shopping experience.",
    problem:
      "Sneaker enthusiasts needed a curated, visually premium marketplace with authenticated products, advanced filtering, and a seamless shopping experience.",
    image: "/images/projects/solevault.png",
    techStack: ["Next.js", "TypeScript", "TailwindCSS"],
    features: [
      "Product grid with advanced filtering and sorting",
      "NEW and SALE badges with dynamic pricing",
      "Category browsing: Sneakers, Apparel, Accessories, Exclusives",
      "Wishlist functionality with persistent storage",
      "Shopping cart with quantity management",
      "Global search with instant results",
    ],
    challenges:
      "Designing a visually striking dark theme with gold accent hierarchy, implementing smooth product filtering without page reloads, and building a responsive grid that maintains premium aesthetics across devices.",
    liveUrl: "https://solevault-final.vercel.app/",
    featured: false,
  },
  {
    id: "luxe-ecommerce",
    title: "LUXE E-Commerce",
    description:
      "A modern, production-ready e-commerce template with a clean light design. Built as a fully customizable foundation for online stores with comprehensive filtering, responsive layouts, and cart functionality.",
    problem:
      "Developers and businesses needed a production-ready, highly customizable e-commerce template that could be quickly adapted for any product category.",
    image: "/images/projects/luxe.png",
    techStack: ["Next.js", "TypeScript", "TailwindCSS"],
    features: [
      "Product grid with category filtering",
      "Price range slider for budget-based shopping",
      "Rating filters for quality-based discovery",
      "Fully responsive design across all devices",
      "Shopping cart with real-time updates",
      "Clean, minimal UI ready for customization",
    ],
    challenges:
      "Creating a template architecture that balances opinionated design with easy customization, implementing smooth client-side filtering with multiple simultaneous filter criteria, and optimizing image loading for large product catalogs.",
    liveUrl: "https://ecommerce-template-kohl.vercel.app/shop",
    featured: false,
  },
];

// ─── Experience ──────────────────────────────────────────────────────────────

export const EXPERIENCE: Experience[] = [
  {
    id: "synctom-intern",
    role: "Full Stack Developer Intern",
    company: "Synctom",
    duration: "3 Months",
    location: "Islamabad, Pakistan",
    type: "Onsite",
    responsibilities: [
      "Developed and maintained full-stack web applications using Next.js, React, and Node.js",
      "Collaborated with senior developers on production-level codebases and code reviews",
      "Built RESTful APIs and integrated third-party services for client projects",
      "Implemented responsive UI components using TailwindCSS and modern design patterns",
      "Participated in agile workflows including daily standups, sprint planning, and retrospectives",
      "Optimized application performance and resolved bugs in existing production features",
    ],
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "TailwindCSS",
      "PostgreSQL",
      "Git",
    ],
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "monitor",
    skills: [
      "React",
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "HTML/CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["Node.js", "Express", "REST APIs", "NextAuth", "JWT"],
  },
  {
    title: "Database",
    icon: "database",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "Neon"],
  },
  {
    title: "Tools & Platforms",
    icon: "wrench",
    skills: ["Git", "GitHub", "Vercel", "Figma", "VS Code", "Postman"],
  },
];

// ─── Certifications ──────────────────────────────────────────────────────────

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Fundamentals of Encryption & Quantum-Safe Techniques",
    issuer: "IBM",
    issuedBy: "Cognitive Class",
    date: "January 2025",
    description:
      "Comprehensive certification covering modern encryption fundamentals, quantum computing threats to current cryptographic systems, and quantum-safe cryptographic techniques for future-proofing data security.",
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta",
    issuedBy: "Coursera",
    date: "2024",
    description:
      "Industry-recognized 9-course professional certificate program covering React, JavaScript, HTML/CSS, UX/UI design principles, version control, and front-end development best practices.",
  },
];

// ─── Education ───────────────────────────────────────────────────────────────

export const EDUCATION: Education = {
  degree: "BS Software Engineering",
  university: "National University of Modern Languages (NUML)",
  location: "Islamabad, Pakistan",
  year: "2022 – 2026",
  highlights: [
    "Focused on full-stack web development and software architecture",
    "Built multiple real-world projects including StudyHouse for the university community",
    "Active participant in coding communities and tech events",
    "Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Web Development",
  ],
};

// ─── Stats ───────────────────────────────────────────────────────────────────

export const STATS: Stat[] = [
  { label: "Projects Built", value: "10", suffix: "+" },
  { label: "Months Internship", value: "3", suffix: "" },
  { label: "Technologies Used", value: "15", suffix: "+" },
  { label: "Production Deployments", value: "5", suffix: "+" },
];

// ─── StudyHouse Case Study ───────────────────────────────────────────────────

export const CASE_STUDY = {
  problem:
    "Students at NUML had no centralized, reliable platform to access past papers, notes, and exam resources. Existing solutions were either paywalled, scattered across WhatsApp groups, or lacked proper organization and verification.",
  architecture:
    "StudyHouse follows a modern full-stack architecture with Next.js handling both the frontend and API routes. The application uses server-side rendering for SEO-critical pages and client-side rendering for interactive features. Prisma serves as the ORM layer connecting to a PostgreSQL database hosted on Neon, providing type-safe database access and easy migrations.",
  stack: [
    "Next.js for full-stack framework with SSR and API routes",
    "Prisma ORM for type-safe database queries and migrations",
    "PostgreSQL (Neon) for scalable, serverless database hosting",
    "NextAuth with JWT for secure, session-based authentication",
    "TailwindCSS for rapid, utility-first UI development",
    "REST APIs for clean client-server communication",
  ],
  challenges:
    "The biggest technical challenges were implementing efficient full-text search across thousands of academic documents, building a robust content moderation system for community uploads, and optimizing PDF preview rendering for instant access without full downloads. Authentication required careful role-based access control to differentiate between students, moderators, and administrators.",
  authentication:
    "NextAuth handles the authentication layer with JWT tokens for stateless sessions. The system supports multiple authentication providers and implements role-based access control (RBAC) with three tiers: students (browse and download), contributors (upload resources), and moderators (approve/reject submissions and manage content).",
  deployment:
    "The application is deployed on Vercel with automatic CI/CD from the GitHub repository. The PostgreSQL database runs on Neon's serverless platform, providing automatic scaling and branching for development environments. Environment variables manage all secrets and configuration across development, staging, and production.",
  results:
    "StudyHouse successfully serves the NUML student community with a growing library of verified academic resources. The platform has streamlined how students discover and access study materials, eliminating the reliance on scattered WhatsApp groups and unreliable third-party sites.",
} as const;
