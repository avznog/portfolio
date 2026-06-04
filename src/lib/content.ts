import type {
  Contact,
  EducationItem,
  ExperienceItem,
  Expertise,
  Project,
  SkillGroup,
} from "./types";

export const hero = {
  name: "Benjamin Gonzva",
  title: "Cloud / DevOps Engineer",
  statement:
    "Cloud / DevOps Engineer at Sia Partners for 2+ years, operating multi-cloud production infrastructure at scale. Relocating to Israel for my aliyah — eager to bring cloud-native expertise to a fast-moving engineering team and contribute to the country's growth.",
  bio: [
    "I want to make myself genuinely useful — and above all to contribute to the State of Israel, putting the skills I have to work where they matter most.",
    "I operate production infrastructure every day: cloud resources, observability stacks, upgrades and zero-downtime migrations. Most of my work centers on Kubernetes, deploying applications at scale.",
    "I've worked extensively across AWS and GCP — designing architectures and infrastructure and shipping them with IaC and CI/CD.",
    "I'm looking for an environment with real scale and technical depth, where I can keep growing and put my skills to use.",
    "Outside work I'm an all-round tech enthusiast — space exploration, aviation, mechanics and cars — and a self-taught guitarist.",
  ],
};

export const expertise: Expertise[] = [
  {
    label: "Cloud Architecture",
    blurb:
      "Designing and building infrastructure on demand across AWS and GCP — the right resources for each need.",
    icon: "microservices",
  },
  {
    label: "Infrastructure as Code",
    blurb:
      "Building with Terraform & Terragrunt and deploying with Helm — reproducible, version-controlled infrastructure.",
    icon: "terraform",
  },
  {
    label: "Kubernetes Deployments",
    blurb:
      "Operating production clusters at scale — a core part of my day-to-day work.",
    icon: "kubernetes",
  },
  {
    label: "CI/CD & DevOps",
    blurb:
      "Automated pipelines that ship changes safely and fast, plus the DevOps tooling around them.",
    icon: "pipeline",
  },
];

export const projects: Project[] = [
  {
    slug: "prospectix",
    title: "Prospectix",
    blurb:
      "A CRM I built for Junior ISEP to power their telemarketing — a searchable prospect database that tracks every lead from first call to signed contract, with templated emails and team goal-tracking.",
    image: "/projects/prospectix.png",
    tags: ["Angular", "NestJS", "PostgreSQL", "Docker"],
    liveUrl: undefined,
    repoUrl: "https://github.com/avznog/prospectix",
  },
  {
    slug: "hippochat",
    title: "Hippochat",
    blurb:
      "A new way to live long-distance relationships — an app designed to make the distance disappear.",
    image: "/projects/hippochat.webp",
    tags: ["React", "NestJS"],
    liveUrl: undefined,
    repoUrl: "https://github.com/avznog/hippochat",
  },
  {
    slug: "memoirs",
    title: "Grandmother's Memoirs",
    blurb:
      "A book I wrote with my brother to preserve our grandmother's memoirs — her life, in her own words.",
    image: "/projects/memoirs.svg",
    tags: ["Writing", "Family"],
    liveUrl: undefined,
    repoUrl: undefined,
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Cloud / DevOps Engineer",
    org: "Sia Partners",
    period: "Feb 2024 — Present",
    location: "Consulting Firm",
    summary:
      "Operating 15 production Kubernetes clusters and building multi-cloud infrastructure on AWS at scale.",
    bullets: [
      "Operate 15 production Kubernetes clusters hosting 70+ in-house microservice platforms, scaling compute, data and traffic without downtime.",
      "Design and build cloud infrastructure on demand — primarily on AWS (VPC, EKS, EC2, ECS, ECR, RDS, Lambda) — provisioning the right resources for each project and client.",
      "Built a full observability stack (OpenTelemetry, Grafana via Crossplane, Thanos, Loki) delivering real-time metrics, logs and alerting.",
      "Delivered zero-downtime production upgrades — for example, migrating PostgreSQL 13 to 18 using read replicas.",
      "Shipped software billed through the AWS Marketplace and deployed FinOps agents to optimize cloud spend.",
      "Co-authored the team's 6-month technical roadmap, aligning top-management strategy with the team's technical vision, and helped recruit French and Indian engineers.",
    ],
    stack: [
      "Kubernetes",
      "AWS",
      "Terraform",
      "Helm",
      "Grafana",
      "OTEL",
      "Docker",
      "Linux",
    ],
  },
  {
    role: "Tech Lead & Board Member",
    org: "Junior ISEP (Junior-Entreprise)",
    period: "Mar 2022 — Jul 2023",
    summary:
      "Led a 4-engineer team, built an in-house CRM, and ran a student training program.",
    bullets: [
      "Led a 4-engineer team and administered a 4-server Proxmox cluster for a student-run company serving real clients.",
      "Built Prospectix, a CRM (Angular, NestJS, PostgreSQL, Docker) used company-wide for telemarketing — prospect database, full lead lifecycle from first call to signed contract, and templated emails.",
      "Designed and ran a 6-month training program for 20 students with Alten, Saint-Gobain, PwC and ISEP's IEE — teaching React and NestJS to build a website for a nonprofit.",
      "Managed and trained a 20-person project-management team and co-built the company's 3-year strategic roadmap with the board.",
    ],
    stack: ["Angular", "NestJS", "PostgreSQL", "Docker", "Proxmox"],
  },
];

export const education: EducationItem[] = [
  {
    school: "ISEP — Paris",
    degree: "Master's Degree in Engineering",
    period: "2019 — 2024",
    note: "Major in Architecture of Information Systems. Software, Databases & BigData, Agile Management, DevOps. Prague study semester.",
  },
  {
    school: "UC Berkeley",
    degree: "Graduate International Student",
    period: "Aug — Dec 2023",
    note: "Software Engineering, Revenue Management, Agile Software Management, Economic Models.",
  },
];

export const skills: SkillGroup[] = [
  {
    label: "AWS",
    items: ["EKS", "ECS", "EC2", "S3", "RDS", "ECR", "Lambda", "VPC"],
  },
  {
    label: "Google Cloud",
    items: ["GKE", "GCE", "Cloud SQL", "GCS", "IAM"],
  },
  {
    label: "Orchestration",
    items: ["Kubernetes", "Docker", "Helm", "Helmfile", "Crossplane"],
  },
  {
    label: "Observability",
    items: ["OTEL", "Grafana", "Thanos", "Loki"],
  },
  {
    label: "DevOps",
    items: ["Terraform", "Terragrunt", "GitLab CI", "Bash", "Linux"],
  },
  {
    label: "Practices",
    items: ["IaC", "FinOps", "Architecture Design"],
  },
];

export const certifications: string[] = ["SCRUM Master — PSM I Certified"];

export const languages: string[] = [
  "French — native",
  "English — fluent",
];

export const contact: Contact = {
  email: "bengonzva75@gmail.com",
  phone: "+33 6 84 65 34 54",
  github: "avznog",
  githubUrl: "https://github.com/avznog",
  linkedin: "/benjamingonzva",
  linkedinUrl: "https://www.linkedin.com/in/benjamingonzva",
  resumeUrl: "/resume.pdf",
};
