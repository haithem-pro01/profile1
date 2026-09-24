export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';

export interface Project {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  category: 'personal' | 'academic';
  categoryLabel: {
    en: string;
    ar: string;
  };
  domainCategory: 'all' | 'ai-software' | 'web-mobile' | 'desktop-database';
  technologies: string[];
  description: {
    en: string;
    ar: string;
  };
  longDescription: {
    en: string;
    ar: string;
  };
  features: {
    en: string[];
    ar: string[];
  };
  architecture: {
    en: string;
    ar: string;
  };
  imagePath: string;
  problem?: {
    en: string;
    ar: string;
  };
  solution?: {
    en: string;
    ar: string;
  };
  challenges?: {
    en: string;
    ar: string;
  };
  futureImprovements?: {
    en: string;
    ar: string;
  };
  githubUrl: string; // Replaceable placeholder
  demoUrl?: string; // Replaceable placeholder
  screenshotPlaceholder: string;
  isPlaceholderRepo: boolean;
}

export interface SkillCategory {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  skills: string[];
  icon: string;
}

export interface EducationItem {
  degree: {
    en: string;
    ar: string;
  };
  institution: {
    en: string;
    ar: string;
  };
  location: {
    en: string;
    ar: string;
  };
  status: {
    en: string;
    ar: string;
  };
  period: {
    en: string;
    ar: string;
  };
  isCurrent?: boolean;
  highlights: {
    en: string[];
    ar: string[];
  };
}

export interface ServiceItem {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  icon: string;
}

export interface ProfileData {
  name: {
    en: string;
    ar: string;
  };
  title: {
    en: string;
    ar: string;
  };
  academicHeadline: {
    en: string;
    ar: string;
  };
  bio: {
    en: string;
    ar: string;
  };
  email: string;
  phone: string;
  whatsApp: string;
  location: {
    en: string;
    ar: string;
  };
  university: {
    en: string;
    ar: string;
  };
  github: string;
  linkedin: string;
  website: string;
  cvPath: string;
  careerObjective: {
    en: string;
    ar: string;
  };
}
