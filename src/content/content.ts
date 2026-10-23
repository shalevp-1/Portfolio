import type { Locale, SiteContent } from './contentTypes';


export const Content: Record<Locale, SiteContent> = {
  en: {
    direction: 'ltr',
    metaDescription:
      'Portfolio of Shalev Peck, a Full-Stack Developer focused on Angular, React, Node.js, Express, and MySQL.',
    nav: [
      { label: 'Projects', href: '#project' },
      { label: 'Technologies', href: '#skills' },
      { label: 'Contact', href: '#contact' }
    ],
    languageLabel: 'Language',
    me: {
      eyebrow: 'Portfolio',
      title: 'Shalev Peck',
      role: 'Full-Stack Developer',
      summary:
        'I build web applications using React, Angular, Node.js, Express, and MySQL. My projects cover frontend development, REST APIs, database integration, authentication, and complete application workflows. My background in IT support and networking also brings hands-on troubleshooting experience and a practical approach to solving technical problems.',
      badges: [
        'Open to Junior Developer Opportunities',
        'Frontend and Backend Development',
        'IT Support and Networking Background'
      ],
      actions: [

        {
          label: 'Live Project',
          href: 'https://dountstime.netlify.app/',
          variant: 'forMyButton',
          external: true
        },
        {
          label: 'GitHub',
          href: 'https://github.com/shalevp-1/',
          variant: 'forMyButton',
          external: true
        }
      ],
    },
    // project section
    project: {
      eyebrow: 'Selected Projects',
      title: 'Full-Stack Projects',
      description: 'Two applications built across frontend, backend, and database layers.',
      items: [
        {
          id: 'fitrack',
          name: 'FiTrack',
          eyebrow: 'Featured Project',
          summary: 'A full-stack fitness and workout tracking application built with Angular, TypeScript, Node.js, Express, and MySQL.',
          bullets: [
            'User registration and login, with running and strength-training workout tracking.',
            'Fitness dashboards, charts, and activity history.',
            'Product store with cart, checkout, and order history.',
            'Admin product management and inventory restocking.',
            'Demo credentials ( Admin & User ) available in the README'
          ],
          stack: ['angular', 'typescript', 'rxjs', 'nodejs', 'express', 'mysql'],
          backgroundImage: '/assets/running-1.webp',
          images: [
            { src: '/assets/Fitrack-01.png', alt: 'FiTrack fitness dashboard' },
            { src: '/assets/Fitrack-1.png', alt: 'FiTrack application screenshot' },
            { src: '/assets/Fitrack-2.png', alt: 'FiTrack workout tracking screen' },
            { src: '/assets/Fitrack-3.png', alt: 'FiTrack store and activity screen' }
          ],
          actions: [
            { label: 'Live application', href: 'https://fitrackfitness.netlify.app/home', variant: 'forMyButton', external: true },
            { label: 'GitHub repository', href: 'https://github.com/shalevp-1/FiTrack', variant: 'secondary', external: true },
            { label: 'Detailed README with architecture, database diagrams, and project documentation', href: 'https://github.com/shalevp-1/FiTrack', variant: 'primary', external: true }
          ],
          technologiesLabel: 'FiTrack technologies',
          screenshotsLabel: 'FiTrack screenshots',
          previousImageLabel: 'Previous FiTrack image',
          nextImageLabel: 'Next FiTrack image'
        },
        {
          id: 'donut-shop',
          name: 'Donut Shop',
          eyebrow: 'Full-Stack E-Commerce',
          summary: 'A full-stack donut shop application built with React, Node.js, Express, and MySQL.',
          bullets: [
            'Authentication and donut browsing.',
            'Shopping cart, checkout, and order flow.',
            'Administrative product and user management.',
            'Demo credentials ( Admin & User ) available in the README'
          ],
          stack: ['react', 'typescript', 'nodejs', 'express', 'mysql'],
          backgroundImage: '/assets/donuts-main.png',
          images: [
            { src: '/assets/Donuts-2.png', alt: 'Donut Shop storefront' },
            { src: '/assets/Donuts-1.png', alt: 'Donut Shop application screenshot' }
          ],
          actions: [
            { label: 'Live application', href: 'https://dountstime.netlify.app/', variant: 'forMyButton', external: true },
            { label: 'Frontend repository', href: 'https://github.com/shalevp-1/Donuts_front', variant: 'secondary', external: true },
            { label: 'Backend repository', href: 'https://github.com/shalevp-1/Donuts_Backend', variant: 'secondary', external: true },
            { label: 'Detailed README with architecture, database diagrams, and project documentation', href: 'https://github.com/shalevp-1/Donuts_front', variant: 'primary', external: false }
          ],
          technologiesLabel: 'Donut Shop technologies',
          screenshotsLabel: 'Donut Shop screenshots',
          previousImageLabel: 'Previous Donut Shop image',
          nextImageLabel: 'Next Donut Shop image'
        }
      ]
    },
    // Skills section
    skills: {
      eyebrow: 'Technology Stack',
      title: 'Tools and technologies I work with',
      description:
        'My technical skills span frontend development, backend development, databases, and deployment, alongside additional tools from my broader technical background.',
      groups: [
        {
          id: 'frontend',
          title: 'Frontend',
          description: 'Modern client-side development, typed interfaces, and component-based UI work.',
          technologies: ['html', 'css', 'javascript', 'typescript', 'react', 'vue', 'angular']
        },
        {
          id: 'backend',
          title: 'Backend and Data',
          description: 'Server-side logic, API design, relational data, and backend foundations.',
          technologies: ['nodejs', 'mysql', 'mongodb', 'python', 'java']
        },
        {
          id: 'engineering',
          title: 'Additional Technical Background',
          description: 'Technical tools and engineering foundations that strengthen my broader problem-solving ability.',
          technologies: ['solidworks', 'autocad', 'matlab', 'office', 'email', 'internet', 'ai']
        }
      ]
    },
    // Contact section
    contact: {
      eyebrow: 'Contact',
      title: 'Open to junior Full-Stack, Frontend, and Backend opportunities',
      description:
        'I am looking for opportunities where I can contribute, keep learning, and grow as a developer while bringing strong technical ownership, reliability, and practical thinking.',
      items: [
        {
          label: 'Email',
          value: 'shalevpecksp@hotmail.com',
          href: 'mailto:shalevpecksp@hotmail.com'
        },
        {
          label: 'Phone',
          value: '050-233-6023',
          href: 'tel:0502336023'
        },
        {
          label: 'GitHub',
          value: 'github.com/shalevp-1',
          href: 'https://github.com/shalevp-1'
        }
      ],
    },
    footer: 'Shalev Peck'
  },

  he: {
    direction: 'rtl',
    metaDescription:
      'אתר תיק עבודות וקורות חיים של שליו פק, מפתח Full-Stack עם ניסיון ב-React, Node.js, MySQL, תמיכת IT ורשתות מחשבים.',
    nav: [
      { label: 'פרויקטים', href: '#project' },
      { label: 'טכנולוגיות', href: '#skills' },
      { label: 'יצירת קשר', href: '#contact' }
    ],
    languageLabel: 'שפה',
    me: {
      eyebrow: 'תיק עבודות',
      title: 'שליו פק',
      role: 'מפתח Full-Stack',
      summary:
        'מפתח Full-Stack שבונה אפליקציות Web באמצעות React, Angular, Node.js, Express ו-MySQL. הפרויקטים שלי כוללים פיתוח צד לקוח, בניית APIs, עבודה עם מסדי נתונים, אימות משתמשים ותהליכים מלאים באפליקציה. הרקע שלי בתמיכת IT וברשתות מחשבים מעניק לי ניסיון מעשי בפתרון תקלות ובגישה טכנית ומעשית לפתרון בעיות.',
      badges: [

        'פתוח למשרות ג׳וניור ב-Full-Stack, Frontend ו-Backend',
        'ניסיון בפתרון תקלות ובדיבוג',
        'רקע מעשי בפיתוח, IT ורשתות'
      ],
      actions: [
        {
          label: 'לפרויקט החי',
          href: 'https://dountstime.netlify.app/',
          variant: 'forMyButton',
          external: true
        },
        {
          label: 'GitHub',
          href: 'https://github.com/shalevp-1/',
          variant: 'forMyButton',
          external: true
        }
      ],
    },
    // project section
    project: {
      eyebrow: 'פרויקטים',
      title: 'פרויקטים בפיתוח Full-Stack',
      description: 'יישומים מלאים הכוללים ממשק משתמש, שרת ומסד נתונים.',
      items: [
        {
          id: 'fitrack',
          name: 'FiTrack',
          eyebrow: 'פרויקט מוביל',
          summary: 'אפליקציה לניהול כושר ואימונים, שנבנתה עם Angular, TypeScript, RxJS, Node.js, Express ו-MySQL.',
          bullets: [
            'הרשמה והתחברות, לצד מעקב אחר ריצה ואימוני כוח.',
            'לוחות כושר, תרשימים והיסטוריית פעילות.',
            'חנות מוצרים עם סל קניות, תשלום והיסטוריית הזמנות.',
            'ניהול מוצרים וחידוש מלאי למנהלי המערכת.',
            ' פרטי התחברות לחשבונות הדמו (משתמש ומנהל) זמינים בקובץ ה-README'
          ],
          stack: ['angular', 'typescript', 'rxjs', 'nodejs', 'express', 'mysql'],
          backgroundImage: '/assets/running-1.webp',
          images: [
            { src: '/assets/Fitrack-01.png', alt: 'לוח הכושר של FiTrack' },
            { src: '/assets/Fitrack-1.png', alt: 'צילום מסך של אפליקציית FiTrack' },
            { src: '/assets/Fitrack-2.png', alt: 'מסך מעקב האימונים של FiTrack' },
            { src: '/assets/Fitrack-3.png', alt: 'חנות ומסך פעילות ב-FiTrack' }
          ],
          actions: [
            { label: 'למעבר לאתר', href: 'https://fitrackfitness.netlify.app/home', variant: 'forMyButton', external: true },
            { label: 'מאגר GitHub', href: 'https://github.com/shalevp-1/FiTrack', variant: 'secondary', external: true },
            { label: 'README מפורט הכולל ארכיטקטורה, תרשים מסד נתונים ותיעוד הפרויקט.', href: 'https://github.com/shalevp-1/FiTrack', variant: 'primary', external: true }
          ],
          technologiesLabel: 'הטכנולוגיות של FiTrack',
          screenshotsLabel: 'צילומי מסך של FiTrack',
          previousImageLabel: 'התמונה הקודמת של FiTrack',
          nextImageLabel: 'התמונה הבאה של FiTrack'
        },
        {
          id: 'donut-shop',
          name: 'Donut Shop',
          eyebrow: 'מסחר מקוון Full-Stack',
          summary: 'אפליקציית מסחר מקוון לחנות סופגניות, שנבנתה עם React, Node.js, Express ו-MySQL.',
          bullets: [
            'התחברות משתמשים ועיון במבחר הסופגניות.',
            'סל קניות, תשלום ותהליך הזמנה.',
            'ניהול מוצרים ומשתמשים בממשק הניהול.',
            ' פרטי התחברות לחשבונות הדמו (משתמש ומנהל) זמינים בקובץ ה-README'
          ],
          stack: ['react', 'typescript', 'nodejs', 'express', 'mysql'],
          backgroundImage: '/assets/donuts-main.png',
          images: [
            { src: '/assets/Donuts-2.png', alt: 'עמוד החנות של חנות הסופגניות' },
            { src: '/assets/Donuts-1.png', alt: 'צילום מסך של אפליקציית חנות הסופגניות' }
          ],
          actions: [
            { label: 'למעבר לאתר', href: 'https://dountstime.netlify.app/', variant: 'forMyButton', external: true },
            { label: 'מאגר צד לקוח', href: 'https://github.com/shalevp-1/Donuts_front', variant: 'secondary', external: true },
            { label: 'מאגר צד שרת', href: 'https://github.com/shalevp-1/Donuts_Backend', variant: 'secondary', external: true },
            { label: 'README מפורט הכולל ארכיטקטורה, תרשים מסד נתונים ותיעוד הפרויקט.', href: 'https://github.com/shalevp-1/Dounts_front', variant: 'primary', external: true }
          ],
          technologiesLabel: 'הטכנולוגיות של חנות הסופגניות',
          screenshotsLabel: 'צילומי מסך של חנות הסופגניות',
          previousImageLabel: 'התמונה הקודמת של חנות הסופגניות',
          nextImageLabel: 'התמונה הבאה של חנות הסופגניות'
        }
      ]
    },
    // Skills section
    skills: {
      eyebrow: 'טכנולוגיות וכלים',
      title: 'הטכנולוגיות והכלים שאני עובד איתם',
      description:
        'הניסיון שלי כולל פיתוח frontend, לוגיקת backend, עבודה עם מסדי נתונים, דיפלוימנט וכלים טכניים שתומכים בבניית מוצרים אמיתיים.',
      groups: [
        {
          id: 'frontend',
          title: 'Frontend',
          description: 'פיתוח צד לקוח מודרני, ממשקים מבוססי קומפוננטות ועבודה עם TypeScript.',
          technologies: ['html', 'css', 'javascript', 'typescript', 'react', 'vue', 'angular']
        },
        {
          id: 'backend',
          title: 'Backend and Data',
          description: 'לוגיקה בצד שרת, APIs, עבודה עם נתונים ותשתית backend.',
          technologies: ['nodejs', 'mysql', 'mongodb', 'python', 'java']
        },
        {
          id: 'engineering',
          title: 'רקע טכני נוסף',
          description: 'כלים טכניים ויסודות הנדסיים שמחזקים את היכולת שלי להבין ולפתור בעיות מורכבות.',
          technologies: ['solidworks', 'autocad', 'matlab', 'office', 'email', 'internet', 'ai']
        }
      ]
    },
    // Contact section
    contact: {
      eyebrow: 'יצירת קשר',
      title: 'פתוח להזדמנויות ג׳וניור ב-Full-Stack, Frontend ו-Backend',
      description:
        'אני מחפש הזדמנות להשתלב בצוות פיתוח, לתרום לפרויקטים אמיתיים, להעמיק את הידע שלי ולהתפתח כמפתח.',
      items: [
        {
          label: 'מייל',
          value: 'shalevpecksp@hotmail.com',
          href: 'mailto:shalevpecksp@hotmail.com'
        },
        {
          label: 'טלפון',
          value: '050-233-6023',
          href: 'tel:0502336023'
        },
        {
          label: 'GitHub',
          value: 'github.com/shalevp-1',
          href: 'https://github.com/shalevp-1'
        }
      ],

    },
    footer: 'שליו פק'
  }
};
