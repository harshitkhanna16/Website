export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  extendedDescription?: string;
  details: string[];
  metrics?: { label: string; value: string }[];
  technologies: string[];
  liveDemo?: string;
  github?: string;
  githubNote?: string;
  architecture?: { title: string; flow: string[] }[];
  featured?: boolean;
  domain: string;
  status: "Live" | "Completed" | "In Development";
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  details: string[];
  technologies: string[];
  metrics: { label: string; value: string; trend?: "up" | "down" }[];
  github?: string;
}

export interface DomainCard {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  skills: string[];
  description: string;
  connectedProjects: string[];
}

export interface SkillNode {
  id: string;
  name: string;
  category: "Language" | "Backend" | "Systems" | "Cloud" | "AI/ML" | "Mobile";
  proficiency: "Primary" | "Advanced" | "Building & Expanding";
  connectedProjects: string[];
  connectedExperience?: string[];
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Harshit Khanna",
    shortName: "HK",
    title: "Software Engineer",
    subheading: "Software Engineer • Backend Systems • AI/ML • Data Engineering • Cloud",
    mainStatement: "I build scalable software, intelligent systems, and polished products.",
    supportingText:
      "Final-year Computer Science undergraduate at Graphic Era University, focused on building reliable backend systems, data pipelines, AI-powered applications, developer infrastructure, and high-quality software products.",
    aboutText:
      "I’m Harshit Khanna, a final-year Computer Science Engineering student at Graphic Era University, graduating in 2027 with a CGPA of 8.45. I enjoy building software at the intersection of backend engineering, data engineering, AI, and product development. My work ranges from high-performance REST APIs, database optimization, and vectorized ETL pipelines to reinforcement-learning simulations, AI-powered applications, and native iOS experiences. I care about writing software that is not only functional, but scalable, measurable, secure, and thoughtfully designed.",
    cgpa: "8.45",
    graduationYear: "2027",
    university: "Graphic Era University",
    location: "Dehradun, Uttarakhand, India",
    phone: "+91 7017864012",
    email: "harshitkhanna2003@gmail.com",
    links: {
      github: "https://github.com/harshitkhanna16",
      linkedin: "https://www.linkedin.com/in/harshit-khanna-26301a289",
      leetcode: "https://leetcode.com/u/Harshit_717/",
      email: "mailto:harshitkhanna2003@gmail.com",
      phone: "tel:+917017864012",
    },
  },

  stats: [
    { label: "Undergraduate CGPA", value: "8.45", sub: "Graphic Era Univ." },
    { label: "P95 Latency Reduction", value: "40%", sub: "FastAPI REST at Bluestock" },
    { label: "Database Query Speedup", value: "35%", sub: "Normalized Schema & Indexing" },
    { label: "ML Classification Accuracy", value: "93%", sub: "Enhanced from 71% Baseline" },
    { label: "Simulated Threat Scenarios", value: "50+", sub: "Multi-Agent AI War Room" },
    { label: "Specialized AI Intents", value: "17", sub: "On-Device Apple Intelligence" },
  ],

  domains: [
    {
      id: "backend",
      title: "Scalable Backend Systems",
      subtitle: "Performance, Concurrency & Microservices",
      icon: "Server",
      description:
        "Architecting high-throughput REST APIs and async event services with low latency budgets, schema validation, and optimized connection pooling.",
      skills: ["FastAPI", "REST APIs", "gRPC", "Async Programming", "Microservices", "Performance Engineering"],
      connectedProjects: ["ai-war-room", "kavachgo", "credential-honeypot"],
    },
    {
      id: "aiml",
      title: "AI / Machine Learning",
      subtitle: "Multi-Agent RL, LLMs & Vision",
      icon: "Brain",
      description:
        "Building intelligent workflows combining reinforcement learning simulations, fine-tuned NLP pipelines, and multimodal camera inference.",
      skills: ["LLMs", "NLP", "Multimodal AI", "Reinforcement Learning", "TensorFlow/Keras", "Gemini 2.5 Flash"],
      connectedProjects: ["ai-war-room", "myra", "kavachgo", "seq2seq"],
    },
    {
      id: "cloud",
      title: "Cloud & Infrastructure",
      subtitle: "Containers, CI/CD & Deployments",
      icon: "Cloud",
      description:
        "Containerizing backend services, setting up automated CI/CD test gates, and studying scalable orchestrations across container registries.",
      skills: ["AWS (Expanding)", "Docker", "Kubernetes (Expanding)", "Linux", "CI/CD", "GitHub Actions"],
      connectedProjects: ["ai-war-room", "kavachgo", "credential-honeypot"],
    },
    {
      id: "security",
      title: "Security Engineering",
      subtitle: "Defense-in-Depth & Threat Traps",
      icon: "ShieldAlert",
      description:
        "Designing defensive software architectures with rate-limiting, honeypots, canary credential traps, and JWT authorization rings.",
      skills: ["API Security", "Authentication", "Rate Limiting", "Secure Backend Architecture", "Threat Intelligence", "Honeypot Engineering"],
      connectedProjects: ["credential-honeypot", "ai-war-room"],
    },
    {
      id: "ios",
      title: "iOS Development",
      subtitle: "Native Swift & Apple Intelligence",
      icon: "Smartphone",
      description:
        "Crafting fluid iOS user experiences integrating Apple HealthKit, AVFoundation camera pipelines, local SQLite3 caching, and on-device neural intents.",
      skills: ["Swift", "UIKit", "SwiftUI", "Firebase", "HealthKit", "AVFoundation", "Apple Intelligence"],
      connectedProjects: ["myra", "loan-management"],
    },
    {
      id: "data-engineering",
      title: "Data Engineering & Systems",
      subtitle: "ETL Pipelines, Warehousing & Query Optimization",
      icon: "Database",
      description:
        "Building vectorized ETL pipelines with Pandas and schema validation, optimizing relational queries with multi-table indexing, and configuring in-memory Redis caching.",
      skills: ["Vectorized ETL", "Pandas & NumPy", "MySQL / PostgreSQL", "Redis Caching", "Data Warehousing", "Schema Normalization", "Query Tuning"],
      connectedProjects: ["kavachgo", "credential-honeypot"],
    },
  ] as DomainCard[],

  coreSkills: [
    {
      id: "python",
      name: "Python",
      category: "Language",
      proficiency: "Primary",
      description: "Primary language for backend services, data modeling, multi-agent reinforcement learning, and ML inference.",
      connectedProjects: ["ai-war-room", "kavachgo", "seq2seq"],
      connectedExperience: ["bluestock"],
    },
    {
      id: "data-engineering-skill",
      name: "Data Engineering",
      category: "Backend",
      proficiency: "Primary",
      description: "Vectorized ETL data pipelines, Pandas processing, 6-table normalized schema design, and Redis request caching.",
      connectedProjects: ["kavachgo", "credential-honeypot"],
      connectedExperience: ["bluestock"],
    },
    {
      id: "fastapi",
      name: "FastAPI",
      category: "Backend",
      proficiency: "Primary",
      description: "Asynchronous REST endpoints, strict Pydantic schemas, dependency injection, and low-latency microservices.",
      connectedProjects: ["kavachgo"],
      connectedExperience: ["bluestock"],
    },
    {
      id: "sql-databases",
      name: "SQL / Databases",
      category: "Backend",
      proficiency: "Primary",
      description: "Schema normalization, B-Tree index optimization, transaction isolation, and query execution plan tuning.",
      connectedProjects: ["kavachgo", "credential-honeypot"],
      connectedExperience: ["bluestock"],
    },
    {
      id: "cpp",
      name: "C++",
      category: "Language",
      proficiency: "Advanced",
      description: "Strong algorithmic foundations, performance-critical problem solving, and Data Structures & Algorithms practice.",
      connectedProjects: ["ai-war-room"],
    },
    {
      id: "rest-apis",
      name: "REST APIs",
      category: "Backend",
      proficiency: "Primary",
      description: "Fault-tolerant endpoint design, rate limiting, token authentication, and robust HTTP contract architecture.",
      connectedProjects: ["kavachgo", "credential-honeypot"],
      connectedExperience: ["bluestock", "infosys"],
    },
    {
      id: "system-design",
      name: "System Design",
      category: "Systems",
      proficiency: "Advanced",
      description: "Architecting modular microservices, decoupled queues, caching strategies, and defensive backend boundaries.",
      connectedProjects: ["ai-war-room", "kavachgo", "credential-honeypot"],
      connectedExperience: ["bluestock"],
    },
    {
      id: "docker",
      name: "Docker",
      category: "Cloud",
      proficiency: "Primary",
      description: "Multi-stage container builds, minimal production images, developer sandbox replication, and isolated services.",
      connectedProjects: ["ai-war-room", "credential-honeypot"],
    },
    {
      id: "aws-cloud",
      name: "AWS / Cloud",
      category: "Cloud",
      proficiency: "Building & Expanding",
      description: "Actively expanding practical cloud architecture expertise across EC2, S3, IAM policies, and cloud networking.",
      connectedProjects: ["ai-war-room"],
    },
    {
      id: "aiml-core",
      name: "AI / Machine Learning",
      category: "AI/ML",
      proficiency: "Primary",
      description: "Multi-agent reinforcement learning, attention sequence models, multimodal camera analysis, and predictive pricing.",
      connectedProjects: ["ai-war-room", "myra", "kavachgo", "seq2seq"],
    },
  ] as SkillNode[],

  experiences: [
    {
      id: "infosys",
      company: "Infosys",
      role: "iOS Developer Intern",
      location: "Mysore DC",
      period: "June 2026 – July 2026",
      details: [
        "Engineered native frontend experiences for a comprehensive Loan Management System using Swift, UIKit, and SwiftUI.",
        "Developed a responsive Admin Panel and integrated Firebase-backed REST APIs for database connectivity in an isolated sandbox environment.",
        "Delivered sprint commitments within Agile/Scrum workflows with Jira issue tracking and cross-functional peer code reviews.",
        "Collaborated with backend engineers and product teams during sprint planning, dependency handoffs, and daily execution.",
      ],
      technologies: ["Swift", "UIKit", "SwiftUI", "Firebase", "REST APIs", "Jira", "Agile/Scrum"],
      metrics: [
        { label: "Platform", value: "iOS Native" },
        { label: "Sprint Delivery", value: "100%" },
        { label: "API Integrations", value: "REST / Firebase" },
      ],
      github: "https://github.com/RajatM-56/Loan-Management-System",
    },
    {
      id: "bluestock",
      company: "Bluestock",
      role: "Software Development Intern",
      location: "Remote",
      period: "December 2025 – January 2026",
      details: [
        "Deployed 4 fault-tolerant REST API endpoints with FastAPI handling 1,200+ daily operational transaction records.",
        "Reduced P95 latency by 40% to under 500ms through async execution pipelines and payload pruning.",
        "Rebuilt the ETL pipeline using vectorized Pandas algorithms and strict schema validation, slashing processing time by 25%.",
        "Improved downstream ML model classification accuracy from 71% to 93% via clean data preprocessing.",
        "Designed and normalized MySQL relational schema across 6 core tables, slashing average query time by 35%.",
        "Configured in-memory request caching and token-bucket rate limiting, decreasing redundant database hits by 30%.",
      ],
      technologies: ["Python", "FastAPI", "MySQL", "Pandas", "REST APIs", "Caching", "Rate Limiting", "ETL", "SQL"],
      metrics: [
        { label: "P95 Latency Reduction", value: "40% ↓", trend: "down" },
        { label: "Average Query Time", value: "35% ↓", trend: "down" },
        { label: "Redundant DB Hits", value: "30% ↓", trend: "down" },
        { label: "ML Accuracy Boost", value: "71% → 93%", trend: "up" },
      ],
    },
  ] as Experience[],

  projects: [
    {
      id: "ai-war-room",
      title: "AI War Room",
      subtitle: "Cyber & Drone Defense Simulator",
      category: "Multi-Agent RL • Tactical Systems • Distributed Nodes",
      domain: "AI / Machine Learning",
      status: "Live",
      featured: true,
      description:
        "An AI-driven multi-agent reinforcement learning simulator designed to model cyber and drone defense scenarios across complex tactical topologies.",
      extendedDescription:
        "Engineered as an advanced AI research and tactical command interface, the simulation models over 50 concurrent threat scenarios across 3 difficulty tiers. Agents continuously adapt using reward shaping and policy optimization under adversarial stress.",
      details: [
        "Multi-agent Reinforcement Learning simulator with dynamic policy evaluation.",
        "Models 50+ concurrent tactical threat vectors across multi-node topologies.",
        "3 dynamic difficulty tiers testing adversarial resilience and swarm coordination.",
        "Reward shaping and policy optimization delivering a 35% improvement in agent response efficiency.",
        "Interactive live command center interface with threat indicators, telemetry nodes, and real-time status panels.",
      ],
      metrics: [
        { label: "Agent Efficiency", value: "+35%" },
        { label: "Concurrent Threats", value: "50+" },
        { label: "Difficulty Tiers", value: "3 Modes" },
      ],
      technologies: ["Python", "Reinforcement Learning", "Multi-Agent Systems", "Policy Optimization", "Hugging Face Spaces", "System Simulation"],
      liveDemo: "https://harshitkhanna16-ai-war-room.hf.space/",
      architecture: [
        {
          title: "Adversarial RL Simulation Loop",
          flow: ["Threat Generator", "Multi-Node Grid", "Agent Sensor Layer", "Policy Network", "Reward Shaping", "Tactical Action Dispatch"],
        },
      ],
    },
    {
      id: "myra",
      title: "Myra",
      subtitle: "PMOS Companion App",
      category: "iOS • Health Intelligence • Apple Intelligence • Multimodal AI",
      domain: "iOS Development",
      status: "Completed",
      featured: true,
      description:
        "A full-featured native iOS companion application combining on-device Apple Intelligence, multimodal AI meal analysis, health data telemetry, and personalized recommendations.",
      extendedDescription:
        "Built natively with Swift and UIKit, Myra integrates 6+ health modules with HealthKit biometric streams, SQLite3 local persistence, and Google Gemini 2.5 Flash for multimodal vision analysis. Features 17 specialized AI intents providing contextual wellness insights.",
      details: [
        "Full-featured iOS architecture featuring 6+ modular health and wellness domains.",
        "On-device Apple Intelligence assistant driven by 17 specialized wellness intents.",
        "Gemini 2.5 Flash multimodal food & meal scanning directly from camera input.",
        "Native HealthKit telemetry ingestion combined with SQLite3 offline persistence.",
        "Adaptive workout regimens, symptom tracking, cycle analysis, and guided meditations.",
        "Modular integrations with AVFoundation, PhotosUI, PDFKit export, and UserNotifications.",
      ],
      metrics: [
        { label: "AI Intents", value: "17 Intents" },
        { label: "Health Modules", value: "6+ Domains" },
        { label: "Multimodal Engine", value: "Gemini 2.5 Flash" },
      ],
      technologies: ["Swift", "UIKit", "Firebase", "SQLite3", "HealthKit", "AVFoundation", "PhotosUI", "PDFKit", "UserNotifications", "Apple Intelligence", "Gemini 2.5 Flash"],
      github: undefined,
      githubNote: "GitHub link coming soon",
      architecture: [
        {
          title: "Multimodal Camera Ingestion",
          flow: ["AVFoundation Camera", "Image Preprocessing", "Gemini 2.5 Flash Multimodal AI", "Nutritional Decomposition", "Personalized Insight"],
        },
        {
          title: "Biometric AI Intent Pipeline",
          flow: ["HealthKit Biometrics", "SQLite3 Data Layer", "Apple Intelligence Intent Engine", "Adaptive UI Cards"],
        },
      ],
    },
    {
      id: "kavachgo",
      title: "KavachGo",
      subtitle: "AI-Powered Income Insurance Platform",
      category: "Parametric FinTech • Automated Triggers • ML Pricing",
      domain: "Scalable Backend Systems",
      status: "Completed",
      featured: true,
      description:
        "Parametric income insurance backend featuring automated environmental/operational triggers, instant claims processing, and a 10-feature ML pricing engine.",
      extendedDescription:
        "Engineered a resilient parametric insurance engine capable of processing over 500 claims autonomously with sub-200ms API response latency, backed by a predictive pricing model outperforming rule-based systems.",
      details: [
        "Parametric insurance backend with deterministic trigger evaluation.",
        "Processes 500+ claim evaluations autonomously with sub-200ms latency.",
        "10-feature ML pricing model yielding a 28% improvement in premium accuracy over legacy baselines.",
        "Automated claim lifecycle: risk assessment → trigger event → settlement dispatch.",
      ],
      metrics: [
        { label: "Claim Latency", value: "< 200ms" },
        { label: "Pricing Accuracy", value: "+28% vs Baseline" },
        { label: "Claims Evaluated", value: "500+" },
      ],
      technologies: ["Python", "FastAPI", "Machine Learning", "Parametric Contracts", "REST APIs", "FinTech Architecture"],
      github: "https://github.com/harshitkhanna16/kavachgo-devtrails",
      architecture: [
        {
          title: "Parametric Settlement Lifecycle",
          flow: ["User Enrolls", "10-Feature Risk Engine", "Real-Time Trigger Detection", "Claim Automation", "Instant Settlement"],
        },
      ],
    },
    {
      id: "credential-honeypot",
      title: "Credential Honeypot System",
      subtitle: "Active Deception & Intrusion Detection Portal",
      category: "Security Engineering • Threat Telemetry • Deception Ops",
      domain: "Security Engineering",
      status: "Completed",
      featured: true,
      description:
        "A security-focused honeypot system designed to simulate authentic corporate login portals, trap unauthorized penetration attempts, detect planted canary credentials, and notify admins.",
      extendedDescription:
        "Features a realistic authentication interface that tracks failed attempts, locks out attackers after 3 strikes, detects planted credentials, and restricts odd-hour access (e.g., after 12:00 AM) while logging forensic telemetry to MongoDB.",
      details: [
        "Realistic authentication decoy portal designed to intercept adversary reconnaissance.",
        "3-strike lockout policy redirecting intruders to forensic access-denied containment.",
        "Canary credential trap: triggers immediate admin quarantine upon planted credential entry.",
        "Odd-hour intrusion rule: flags anomalous login requests after 12:00 AM with instant mail dispatch.",
        "Forensic telemetry logging: stores IP address, user-agent, attack timestamp, and failure rationale in MongoDB.",
      ],
      metrics: [
        { label: "Lockout Threshold", value: "3 Strikes" },
        { label: "Alert Dispatch", value: "Real-Time Mail" },
        { label: "Odd-Hour Policy", value: "> 12:00 AM" },
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "Nodemailer", "Security Architecture", "Forensic Logging"],
      github: "https://github.com/harshitkhanna16/credential_honeypot_system",
      architecture: [
        {
          title: "Honeypot Interception Pipeline",
          flow: ["Login Request", "Odd-Hour / Canary Check", "3-Strike Threshold Filter", "Forensic DB Write", "Nodemailer Admin Alert"],
        },
      ],
    },
    {
      id: "seq2seq",
      title: "Seq2Seq Machine Translation",
      subtitle: "Encoder-Decoder Attention Network",
      category: "Deep Learning • NLP • Sequence Modeling",
      domain: "AI / Machine Learning",
      status: "Completed",
      featured: false,
      description:
        "Neural machine translation architecture utilizing recurrent encoder-decoder networks augmented with Bahdanau attention mechanism trained on 10,000+ sentence pairs.",
      extendedDescription:
        "Constructed in TensorFlow/Keras to perform bilingual sequence-to-sequence translation. The attention layer computes dynamic context vectors over encoder hidden states for high-fidelity text generation.",
      details: [
        "Encoder-decoder architecture with bidirectional representation layers.",
        "Bahdanau additive attention mechanism overcoming fixed-length context bottlenecks.",
        "Trained on 10,000+ bilingual sentence pairs with custom tokenization and masking.",
        "Demonstrates deep comprehension of sequence generation, beam search, and vector embeddings.",
      ],
      metrics: [
        { label: "Training Pairs", value: "10K+ Sentences" },
        { label: "Mechanism", value: "Additive Attention" },
        { label: "Framework", value: "TensorFlow / Keras" },
      ],
      technologies: ["Python", "TensorFlow", "Keras", "Seq2Seq", "Attention Mechanism", "NLP"],
      github: "https://github.com/harshitkhanna16/Translator-Project",
      architecture: [
        {
          title: "Attention Decoding Flow",
          flow: ["Input Sequence", "Bidirectional Encoder", "Attention Weight Matrix", "Context Vector", "Decoder RNN", "Target Language"],
        },
      ],
    },
    {
      id: "loan-management",
      title: "Loan Management System",
      subtitle: "Enterprise iOS & Sandbox Portal",
      category: "iOS • Swift • Firebase • Agile Workflows",
      domain: "iOS Development",
      status: "Completed",
      featured: false,
      description:
        "Enterprise loan management frontend engineered with Swift and native Apple UI frameworks, integrating an administrative portal with Firebase REST endpoints.",
      details: [
        "Native Swift client interface for loan application lifecycles.",
        "Admin panel for financial reviewers with dynamic status transitions.",
        "Firebase-backed REST integration in an isolated sandbox environment.",
      ],
      technologies: ["Swift", "UIKit", "SwiftUI", "Firebase", "REST APIs"],
      github: "https://github.com/RajatM-56/Loan-Management-System",
    },
  ] as Project[],

  education: [
    {
      institution: "Graphic Era University",
      location: "Dehradun, Uttarakhand",
      degree: "B.Tech in Computer Science Engineering",
      period: "August 2023 – June 2027",
      grade: "CGPA: 8.45",
      badge: "Expected 2027",
      highlight: "Focus on Distributed Systems, Cloud Architecture, Machine Learning, and Operating Systems.",
    },
    {
      institution: "Heera Lal Public School",
      location: "Delhi, India",
      degree: "CBSE — Class 12 (PCM)",
      period: "Completed 2023",
      grade: "78%",
      badge: "Higher Secondary",
      highlight: "Physics, Chemistry, Mathematics, Computer Science foundations.",
    },
    {
      institution: "Shirdi Sai Public School",
      location: "Moradabad, Uttar Pradesh",
      degree: "CBSE — Class 10",
      period: "Completed 2021",
      grade: "94%",
      badge: "Secondary School",
      highlight: "Graduated with academic distinction across Science and Mathematics.",
    },
  ],

  achievements: [
    {
      title: "Meta × Scaler Hackathon",
      issuer: "Meta & Scaler",
      rank: "Advanced to Next Level",
      score: "National Qualifier",
      description: "Successfully built and pitched scalable engineering solutions, advancing to the next competitive level in the prestigious Meta × Scaler national hackathon.",
      icon: "Award",
    },
    {
      title: "Adobe Hackathon",
      issuer: "Adobe",
      rank: "Qualified Round 2",
      score: "Level 2 Qualifier",
      description: "Cleared the primary screening and advanced into the competitive 2nd level / next stage of the national Adobe Hackathon.",
      icon: "Award",
    },
    {
      title: "EY (Ernst & Young) Hackathon",
      issuer: "Ernst & Young",
      rank: "Advanced to Next Stages",
      score: "Stage Qualifier",
      description: "Competed and advanced through the rigorous technical rounds to the upcoming stages in the EY Innovation & Technology Hackathon.",
      icon: "Award",
    },
    {
      title: "KTC Aptitude Test — Data Science Role",
      issuer: "IIT Guwahati",
      rank: "Rank 18",
      score: "Score: 146",
      description: "Secured All-India Rank 18 out of extensive national participants in the rigorous Data Science Aptitude Challenge conducted by IIT Guwahati.",
      icon: "Award",
    },
    {
      title: "Infosys × Apple iOS Development Program",
      issuer: "Infosys & Apple",
      rank: "Selected Scholar",
      score: "3rd Year B.Tech",
      description: "Competitively selected during the 3rd year of undergraduate studies for specialized hands-on training in native iOS architecture, Swift, and Apple ecosystem standards.",
      icon: "CheckCircle2",
    },
  ],

  certifications: [
    {
      title: "AI Fluency: Framework & Foundations",
      issuer: "Anthropic",
      category: "Artificial Intelligence",
      description: "Foundational frameworks for frontier model prompting, safety, and evaluation.",
    },
    {
      title: "GenAI for Professionals: 10X Your Productivity",
      issuer: "Udemy",
      category: "Generative AI",
      description: "Practical generative AI integration into engineering workflows and toolchains.",
    },
  ],

  devopsPipeline: [
    {
      id: "developer",
      title: "Developer Workspace",
      category: "Local Dev",
      status: "Experienced",
      description: "Code authoring in TypeScript, Python, Swift, and C++ with strict linting, type checks, and local mock testing.",
      why: "Ensures defect-free code before committing to trunk.",
      whereApplied: "All local development workflows across Bluestock, Myra, and AI War Room.",
    },
    {
      id: "github",
      title: "GitHub Version Control",
      category: "Source Code",
      status: "Experienced",
      description: "Trunk-based development, semantic commits, feature branch pull requests, and automated branch protection rules.",
      why: "Ensures clean history and multi-contributor synchronization.",
      whereApplied: "All open-source repositories and collaborative team workflows.",
    },
    {
      id: "github-actions",
      title: "GitHub Actions",
      category: "Automation",
      status: "Experienced",
      description: "YAML-configured declarative workflows triggering on PR and merge events.",
      why: "Automates repetitive testing and builds without manual intervention.",
      whereApplied: "Automated test runners and lint checks on repository push.",
    },
    {
      id: "ci-pipeline",
      title: "CI Test & Lint Gate",
      category: "Continuous Integration",
      status: "Experienced",
      description: "Automated unit test execution, static analysis, type checking, and artifact packaging.",
      why: "Catches regressions early in the lifecycle.",
      whereApplied: "FastAPI schema validation and React component test suites.",
    },
    {
      id: "docker",
      title: "Docker Containerization",
      category: "Packaging",
      status: "Experienced",
      description: "Multi-stage Dockerfiles producing lightweight, immutable production images with locked dependencies.",
      why: "Eliminates 'works on my machine' inconsistencies across runtime environments.",
      whereApplied: "Containerized AI War Room simulation environment and backend APIs.",
    },
    {
      id: "container-registry",
      title: "Container Registry",
      category: "Image Storage",
      status: "Experienced",
      description: "Secure versioned image storage with cryptographic digest pinning and vulnerability scanning.",
      why: "Provides trusted repository for deployment pulls.",
      whereApplied: "Docker Hub and container packaging workflows.",
    },
    {
      id: "aws",
      title: "AWS Cloud Infrastructure",
      category: "Cloud Provider",
      status: "Building & Expanding",
      description: "Actively developing practical hands-on proficiency with EC2 instances, S3 object stores, IAM least-privilege security, and VPC subnets.",
      why: "Industry-standard resilient cloud computing substrate.",
      whereApplied: "Cloud deployment architecture studies and sandbox hosting.",
    },
    {
      id: "kubernetes",
      title: "Kubernetes Orchestration",
      category: "Container Orchestration",
      status: "Building & Expanding",
      description: "Actively studying declarative Pod, Deployment, Service, and Ingress manifests with rolling update strategies.",
      why: "Ensures container self-healing, horizontal scaling, and service discovery.",
      whereApplied: "Container orchestration architecture exploration.",
    },
    {
      id: "application",
      title: "Application Runtime",
      category: "Production Workload",
      status: "Experienced",
      description: "Asynchronous runtime processing client requests with health check endpoints and graceful shutdown handling.",
      why: "High availability and continuous service uptime.",
      whereApplied: "FastAPI and Node.js microservice runtimes.",
    },
    {
      id: "database-redis",
      title: "Database & Redis Cache",
      category: "Persistence Tier",
      status: "Experienced",
      description: "Relational persistence with MySQL/PostgreSQL paired with in-memory Redis caching to eliminate repeated disk reads.",
      why: "Sub-millisecond read access for high-frequency queries and session state.",
      whereApplied: "Bluestock 30% DB hit reduction and Honeypot telemetry persistence.",
    },
  ],

  securityLayers: [
    {
      step: 1,
      title: "Client & Origin",
      description: "TLS 1.3 handshake, strict HTTPS redirection, HSTS headers, and CSP origin pinning.",
      status: "SECURE",
    },
    {
      step: 2,
      title: "Authentication",
      description: "Cryptographically signed JWT / session tokens with short expirations and secure HttpOnly cookie flags.",
      status: "AUTHENTICATED",
    },
    {
      step: 3,
      title: "Authorization",
      description: "Role-Based Access Control (RBAC) enforcing least-privilege access rules before endpoint handler entry.",
      status: "AUTHORIZED",
    },
    {
      step: 4,
      title: "Rate Limiting",
      description: "Token-bucket and sliding-window rate limiting to prevent brute-force attacks and volumetric DoS.",
      status: "GUARDED",
    },
    {
      step: 5,
      title: "Input Validation",
      description: "Pydantic and strict type sanitization neutralizing SQL injection, XSS vectors, and malformed payloads.",
      status: "VALIDATED",
    },
    {
      step: 6,
      title: "API Gateway & Router",
      description: "Controlled routing layer rejecting unexpected HTTP methods and masking internal stack traces.",
      status: "ROUTED",
    },
    {
      step: 7,
      title: "Database & Canary Trap",
      description: "Parameterized queries with credential honeypot sensors detecting unauthorized penetration attempts.",
      status: "SECURED & AUDITED",
    },
  ],
};
