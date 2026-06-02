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
    "Cloud / DevOps Engineer with 2+ years managing multi-cloud production infrastructure. Relocating to Israel (making aliyah) — seeking a role where I can bring my cloud-native expertise to a fast-moving engineering team, and contribute to Israel's growth.",
};

export const expertise: Expertise[] = [
  {
    label: "CI/CD Pipelines",
    blurb:
      "Automated build, test and deploy pipelines (GitLab CI) shipping changes safely and fast.",
    icon: "pipeline",
  },
  {
    label: "Infrastructure as Code",
    blurb:
      "Terraform & Terragrunt for reproducible, version-controlled multi-cloud infrastructure.",
    icon: "terraform",
  },
  {
    label: "Kubernetes Deployments",
    blurb:
      "Helm / Helmfile, autoscaling with Karpenter, and operating production clusters at scale.",
    icon: "kubernetes",
  },
  {
    label: "Scalable Microservices",
    blurb:
      "Designing architectures that absorb growing compute, data and traffic without downtime.",
    icon: "microservices",
  },
];

// TODO (Benjamin): replace placeholder copy/links with real project details.
export const projects: Project[] = [
  {
    slug: "prospectix",
    title: "Prospectix",
    blurb: "Project description — to be provided.",
    image: "/projects/prospectix.png",
    tags: ["TODO"],
    liveUrl: undefined,
    repoUrl: undefined,
  },
  {
    slug: "hippochat",
    title: "Hippochat",
    blurb: "Project description — to be provided.",
    image: "/projects/hippochat.webp",
    tags: ["TODO"],
    liveUrl: undefined,
    repoUrl: undefined,
  },
  {
    slug: "cabinet",
    title: "Cabinet",
    blurb: "Project description — to be provided.",
    image: "/projects/cabinet.png",
    tags: ["TODO"],
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
    bullets: [
      "Administered the company's multi-cloud infrastructure (AWS, GCP, Azure) — 1000+ users, 15 Kubernetes clusters, 50 nodes, networking, GitLab and organizations.",
      "Deployed, operated and scaled a full observability stack (Thanos, Grafana via Crossplane, Loki, OTEL) providing real-time metrics, logs and alerting across 70 platforms and 4 products.",
      "Optimized Kubernetes autoscaling with Karpenter and deployed a FinOps AI agent achieving a 10% cost reduction.",
      "Scaled infrastructure to bear the load of 70 custom-made platforms — growing compute, databases and traffic without downtime.",
      "Led the team to build a technical roadmap aligned with the company's strategic goals.",
      "Managed an R&D lab, creating and promoting squads for small projects.",
    ],
  },
  {
    role: "Tech Lead & Board Member",
    org: "Junior ISEP (Junior-Entreprise)",
    period: "Mar 2022 — Jul 2023",
    bullets: [
      "Administered and managed a small (school) company: development roadmap and a 20-person project-manager team.",
      "Built a CRM used daily by 40 people (Angular, NestJS & PostgreSQL), deployed with Docker.",
      "Led a 6-month program backed by Saint-Gobain, Alten, PwC and IEE teaching 20 first-year students web tools (NestJS, React) through building a PWA for an association.",
    ],
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
    label: "Clouds",
    items: [
      "AWS · EKS",
      "EC2",
      "VPC",
      "RDS",
      "IAM",
      "S3",
      "CloudFront",
      "Lambda",
      "SageMaker",
      "ECR",
      "ECS",
      "GCP · Cloud SQL",
      "GCS",
      "GKE",
      "GCE",
    ],
  },
  {
    label: "Orchestration",
    items: ["Kubernetes", "Docker", "Helm", "Helmfile", "Crossplane"],
  },
  {
    label: "Observability",
    items: ["Thanos", "OTEL", "Loki", "Grafana"],
  },
  {
    label: "DevOps",
    items: ["Terraform", "Terragrunt", "Linux", "GitLab CI", "Bash"],
  },
  {
    label: "Practices",
    items: ["IaC", "FinOps", "Architecture Design"],
  },
];

export const certifications: string[] = [
  "SCRUM Master — PSM I Certified",
  "Scaleway Pre-Sales Partner",
];

export const languages: string[] = [
  "French — native",
  "English — fluent",
  "Hebrew — Ulpan",
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
