import { TechnologyGroupId, TechnologyId } from '../technologyCatalog';


export type Locale = 'en' | 'he';

export type NavItem = {
  label: string;
  href: string;
};

export type ActionItem = {
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'ghost' | 'forMyButton' | 'third' | 'project' | 'primary1';
  external?: boolean;
  iconSrc?: string;
  iconAlt?: string;
};



export type SkillGroup = {
  id: TechnologyGroupId;
  title: string;
  description: string;
  technologies: TechnologyId[];
};


export type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

export type ProjectDetail = {
  label: string;
  value: string;
};

export type ProjectItem = {
  id: string;
  name: string;
  eyebrow: string;
  summary: string;
  bullets: string[];
  stack: TechnologyId[];   // was: string[]
  backgroundImage: string;
  images: { src: string; alt: string }[];
  actions: ActionItem[];
  technologiesLabel: string;
  screenshotsLabel: string;
  previousImageLabel: string;
  nextImageLabel: string;
};

export type SiteContent = {
  direction: 'ltr' | 'rtl';
  metaDescription: string;
  nav: NavItem[];
  languageLabel: string;
  me: {
    eyebrow: string;
    title: string;
    role: string;
    summary: string;
    badges: string[];
    actions: ActionItem[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    groups: SkillGroup[];
  };


  project: {
    eyebrow: string;
    title: string;
    description: string;
    items: ProjectItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    items: ContactItem[];
  };
  footer: string;
};
