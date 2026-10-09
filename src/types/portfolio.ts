export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  keyFunctionality: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'Machine Learning' | 'Computational Math' | 'Software Engineering' | 'Utility';
  featured?: boolean;
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    description: string;
    levelNotes?: string;
  }[];
}

export interface ContactInfo {
  name: string;
  title: string;
  education: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  github: string;
  linkedin: string;
  location?: string;
}
