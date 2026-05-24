export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  image: string;
  techStack: string[];
  features: string[];
  challenges: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  responsibilities: string[];
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  issuedBy: string;
  date: string;
  description?: string;
}

export interface Education {
  degree: string;
  university: string;
  location: string;
  year: string;
  highlights: string[];
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
