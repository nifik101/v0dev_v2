'use client'

export interface NavItem {
  name: string;
  href: string;
}

export interface ProjectItem {
  title: string;
  description: string;
}

export interface SkillItem {
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  date: string;
  image: {
    src: string;
    alt: {
      en: string;
      sv: string;
    };
  };
  en: {
    title: string;
    description: string;
    content: string;
  };
  sv: {
    title: string;
    description: string;
    content: string;
  };
}

export interface Content {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    blog: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
    intro: string;
  };
  about: {
    title: string;
    description: string;
    style: string;
  };
  projects: {
    title: string;
    items: ProjectItem[];
  };
  skills: {
    title: string;
    items: SkillItem[];
  };
  blog: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
  };
}

export interface LanguageContent {
  sv: Content;
  en: Content;
}