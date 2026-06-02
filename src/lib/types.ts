export type TileId =
  | "expertise"
  | "projects"
  | "experience"
  | "education"
  | "skills"
  | "contact";

export type Expertise = {
  label: string;
  blurb: string;
  icon: string;
};

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  location?: string;
  bullets: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  note?: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Contact = {
  email: string;
  phone: string;
  github: string;
  githubUrl: string;
  linkedin: string;
  linkedinUrl: string;
  resumeUrl: string;
};
