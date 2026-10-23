import { ReactNode } from 'react';
import { FaEnvelope, FaGlobe, FaJava, FaMicrosoft, FaWaveSquare } from 'react-icons/fa6';
import { TbSparkles } from 'react-icons/tb';
import {
  SimpleIcon,
  siAngular,
  siAutocad,
  siCss,
  siDassaultsystemes,
  siExpress,        // new
  siHtml5,
  siJavascript,
  siMongodb,
  siMysql,
  siNodedotjs,
  siPython,
  siReact,
  siReactivex,      // new (the ReactiveX logo, which RxJS uses)
  siTypescript,
  siVuedotjs
} from 'simple-icons';

export type TechnologyId =
  | 'html'
  | 'css'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'angular'
  | 'vue'
  | 'nodejs'
  | 'java'
  | 'python'
  | 'mysql'
  | 'mongodb'
  | 'solidworks'
  | 'autocad'
  | 'matlab'
  | 'office'
  | 'email'
  | 'internet'
  | 'ai'
  | 'rxjs'
  | 'express';

type SimpleIconVisual = {
  kind: 'simple';
  icon: SimpleIcon;
};

type ComponentVisual = {
  kind: 'component';
  icon: (props: {
    className?: string;
    color?: string;
    'aria-hidden'?: boolean;
  }) => ReactNode;
  color: string;
};

type TechnologyVisual = SimpleIconVisual | ComponentVisual;

export type TechnologyGroupId = 'frontend' | 'backend' | 'engineering';

export type TechnologyDefinition = {
  id: TechnologyId;
  group: TechnologyGroupId;
  label: {
    en: string;
    he: string;
  };
  note: {
    en: string;
    he: string;
  };
  visual: TechnologyVisual;
};

export const technologyCatalog: Record<TechnologyId, TechnologyDefinition> = {
  html: {
    id: 'html',
    group: 'frontend',
    label: { en: 'HTML5', he: 'HTML5' },
    note: { en: 'Semantic structure', he: 'מבנה סמנטי' },
    visual: { kind: 'simple', icon: siHtml5 }
  },
  css: {
    id: 'css',
    group: 'frontend',
    label: { en: 'CSS3', he: 'CSS3' },
    note: { en: 'Responsive styling', he: 'עיצוב רספונסיבי' },
    visual: { kind: 'simple', icon: siCss }
  },
  javascript: {
    id: 'javascript',
    group: 'frontend',
    label: { en: 'JavaScript', he: 'JavaScript' },
    note: { en: 'Interactive logic', he: 'לוגיקה אינטראקטיבית' },
    visual: { kind: 'simple', icon: siJavascript }
  },
  typescript: {
    id: 'typescript',
    group: 'frontend',
    label: { en: 'TypeScript', he: 'TypeScript' },
    note: { en: 'Typed front-end work', he: 'פיתוח עם טיפוסים' },
    visual: { kind: 'simple', icon: siTypescript }
  },
  rxjs: {
    id: 'rxjs',
    group: 'frontend',
    label: { en: 'RxJS', he: 'RxJS' },
    note: { en: 'Reactive data streams', he: 'זרמי נתונים ריאקטיביים' },
    visual: { kind: 'simple', icon: siReactivex }
  },
  express: {
    id: 'express',
    group: 'backend',
    label: { en: 'Express', he: 'Express' },
    note: { en: 'Node.js server framework', he: 'פריימוורק לשרת Node.js' },
    visual: { kind: 'simple', icon: siExpress }
  },
  react: {
    id: 'react',
    group: 'frontend',
    label: { en: 'React', he: 'React' },
    note: { en: 'Component systems', he: 'מערכות קומפוננטות' },
    visual: { kind: 'simple', icon: siReact }
  },
  angular: {
    id: 'angular',
    group: 'frontend',
    label: { en: 'Angular', he: 'Angular' },
    note: { en: 'Structured app flows', he: 'אפליקציות מובנות' },
    visual: { kind: 'simple', icon: siAngular }
  },
  vue: {
    id: 'vue',
    group: 'frontend',
    label: { en: 'Vue.js', he: 'Vue.js' },
    note: { en: 'Modern interfaces', he: 'ממשקים מודרניים' },
    visual: { kind: 'simple', icon: siVuedotjs }
  },
  nodejs: {
    id: 'nodejs',
    group: 'backend',
    label: { en: 'Node.js', he: 'Node.js' },
    note: { en: 'Server-side logic', he: 'לוגיקה בצד שרת' },
    visual: { kind: 'simple', icon: siNodedotjs }
  },
  java: {
    id: 'java',
    group: 'backend',
    label: { en: 'Java', he: 'Java' },
    note: { en: 'Object-oriented foundations', he: 'בסיס מונחה עצמים' },
    visual: { kind: 'component', icon: FaJava, color: '#f97316' }
  },
  python: {
    id: 'python',
    group: 'backend',
    label: { en: 'Python', he: 'Python' },
    note: { en: 'Automation and scripting', he: 'אוטומציה וסקריפטים' },
    visual: { kind: 'simple', icon: siPython }
  },
  mysql: {
    id: 'mysql',
    group: 'backend',
    label: { en: 'SQL / MySQL', he: 'SQL / MySQL' },
    note: { en: 'Relational data', he: 'נתונים רלציוניים' },
    visual: { kind: 'simple', icon: siMysql }
  },
  mongodb: {
    id: 'mongodb',
    group: 'backend',
    label: { en: 'MongoDB', he: 'MongoDB' },
    note: { en: 'Document databases', he: 'מסדי נתונים מבוססי מסמכים' },
    visual: { kind: 'simple', icon: siMongodb }
  },
  solidworks: {
    id: 'solidworks',
    group: 'engineering',
    label: { en: 'SolidWorks', he: 'SolidWorks' },
    note: { en: '3D engineering workflows', he: 'עבודה הנדסית תלת ממדית' },
    visual: { kind: 'simple', icon: siDassaultsystemes }
  },
  autocad: {
    id: 'autocad',
    group: 'engineering',
    label: { en: 'AutoCAD', he: 'AutoCAD' },
    note: { en: 'Technical drafting', he: 'שרטוט טכני' },
    visual: { kind: 'simple', icon: siAutocad }
  },
  matlab: {
    id: 'matlab',
    group: 'engineering',
    label: { en: 'MATLAB', he: 'MATLAB' },
    note: { en: 'Computation and analysis', he: 'חישוב ואנליזה' },
    visual: { kind: 'component', icon: FaWaveSquare, color: '#ea580c' }
  },
  office: {
    id: 'office',
    group: 'engineering',
    label: { en: 'Microsoft Office', he: 'Microsoft Office' },
    note: { en: 'Business productivity', he: 'פרודוקטיביות משרדית' },
    visual: { kind: 'component', icon: FaMicrosoft, color: '#2563eb' }
  },
  email: {
    id: 'email',
    group: 'engineering',
    label: { en: 'Email Systems', he: 'דוא"ל' },
    note: { en: 'Daily communication', he: 'תקשורת יומיומית' },
    visual: { kind: 'component', icon: FaEnvelope, color: '#f59e0b' }
  },
  internet: {
    id: 'internet',
    group: 'engineering',
    label: { en: 'Internet Tools', he: 'אינטרנט' },
    note: { en: 'Research and operations', he: 'מחקר ותפעול' },
    visual: { kind: 'component', icon: FaGlobe, color: '#0ea5e9' }
  },
  ai: {
    id: 'ai',
    group: 'engineering',
    label: { en: 'AI Tools', he: 'כלי AI' },
    note: { en: 'Accelerated workflows', he: 'האצת תהליכי עבודה' },
    visual: { kind: 'component', icon: TbSparkles, color: '#8b5cf6' }
  }
};

export function TechnologyIcon({ technology }: { technology: TechnologyDefinition }) {
  if (technology.visual.kind === 'simple') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="technology-svg">
        <path d={technology.visual.icon.path} fill={`#${technology.visual.icon.hex}`} />
      </svg>
    );
  }

  const Icon = technology.visual.icon;
  return <>{Icon({ 'aria-hidden': true, className: 'technology-svg', color: technology.visual.color })}</>;
}


const technologyAliases: Record<string, TechnologyId> = {
  node: 'nodejs',
  'node.js': 'nodejs',
  sql: 'mysql',
  'sql / mysql': 'mysql',
  'react.js': 'react',
  reactjs: 'react',
  vue: 'vue',
  'vue.js': 'vue',
  ts: 'typescript',
  js: 'javascript',
  html5: 'html',
  css3: 'css'
};

export function findTechnology(name: string): TechnologyDefinition | undefined {
  const key = name.trim().toLowerCase();

  const aliasId = technologyAliases[key];
  if (aliasId) return technologyCatalog[aliasId];

  return Object.values(technologyCatalog).find(
    (tech) =>
      tech.id === key ||
      tech.label.en.toLowerCase() === key ||
      tech.label.he.toLowerCase() === key
  );
}
