export const translations = {
  es: {
    // Header
    name: "Martin Ezequiel Williner",
    title: "Data Intelligence Engineer | Full Stack Developer",
    subtitle: "Data Intelligence Engineer & Full Stack Developer apasionado por convertir datos complejos en soluciones escalables y automatizadas.",
    downloadCV: "Descargar CV",
    location: "Buenos Aires, Argentina",
    
    // Navigation
    nav: {
      about: "Sobre Mí",
      technologies: "Stack Tech",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto"
    },
    
    // About Section
    aboutTitle: "Sobre Mí",
    aboutContent: [
      "Desde 2021, he colaborado en proyectos que transforman datos complejos en soluciones que escalan. Mi enfoque combina desarrollo backend robusto con integraciones frontend intuitivas, automatización de procesos empresariales y análisis de datos para generar insights accionables.",
      "Actualmente trabajo en IBM como Data Intelligence Engineer, donde desarrollo pipelines de datos, APIs RESTful y soluciones full-stack. Mi experiencia abarca desde el desarrollo de sistemas de gestión empresarial hasta la implementación de arquitecturas cloud-native.",
      "A partir de 2026, estaré disponible para proyectos freelance, enfocándome en soluciones de datos, desarrollo full-stack y automatización de procesos para ayudar a empresas a escalar sus operaciones de manera eficiente."
    ],
    
    // Technologies Section
    techTitle: "Stack Tech",
    techSubtitle: "Data Intelligence Engineering con Python/SQL para pipelines ETL y analytics, y Desarrollo Full Stack con JavaScript/TypeScript para arquitecturas modernas, seguridad y optimización de performance.",
    techSpecialization: "Especialización:",
    
    // Experience Section
    expTitle: "Experiencia",
    expPresent: "Presente",
    viewFullResume: "Ver CV Completo",
    experience: [
      {
        period: "2026 — PRESENTE",
        role: "Full Stack Developer Freelance",
        company: "Independiente",
        description: "Desarrollo de soluciones web completas para clientes diversos. Creación de aplicaciones escalables con arquitecturas modernas, desde la conceptualización hasta el deployment. Especialización en stack JavaScript/TypeScript con enfoque en performance y mejores prácticas de desarrollo.",
        technologies: ["TypeScript", "React.js", "Next.js", "Node.js", "NestJS", "PostgreSQL", "Docker", "CI/CD"]
      },
      {
        period: "OCT 2025 — PRESENTE",
        role: "Data Intelligence Engineer",
        company: "IBM",
        description: "Conversión de datos financieros complejos en productos de datos confiables, automatizados y listos para análisis. Desarrollo de pipelines automatizados en Python que redujeron 30% los tiempos de procesamiento de reportes globales. Implementación de modelos de datos en SQL para análisis financiero, forecast y reconciliaciones. Construcción de dashboards ejecutivos (EPM/Cognos) para métricas clave de negocio. Aplicación de principios de Data Quality y Data Governance en datasets corporativos críticos.",
        technologies: ["Python", "SQL", "ETL", "EPM/Cognos", "Pandas", "NumPy", "SPSS", "Data Analytics", "Data Quality", "Data Governance"]
      },
      {
        period: "DIC 2021 — SEP 2025",
        role: "Full Stack Developer",
        company: "IBM",
        description: "Desarrollo y mantenimiento de aplicaciones principales y microservicios con Node.js, Express y React. Optimización de rendimiento logrando 35% de mejora en tiempos de carga. Implementación de validaciones automáticas y middlewares de seguridad, reduciendo errores manuales en 60% y vulnerabilidades críticas de 40 a 8. Diseño de librería con 20+ componentes React reutilizables. Migración a arquitecturas modernas con Vite y NestJS.",
        technologies: ["Node.js", "Express", "React", "NestJS", "Vite", "IBM Watson", "OWASP ZAP", "SonarQube", "REST APIs", "CI/CD"]
      },
      {
        period: "JUN 2021 — NOV 2021",
        role: "Front End Developer",
        company: "Raxar SRL",
        description: "Desarrollo de la página web para el Congreso 2021 de la Sociedad Argentina de Cardiología. Implementación completa del formulario de inscripción con validaciones intuitivas y integración de pasarela de cobro con Mercado Pago. Enfoque en experiencia de usuario fluida y prevención de errores.",
        technologies: ["JavaScript", "HTML", "CSS", "Mercado Pago API", "Validaciones", "UX/UI"]
      }
    ],
    
    // Projects Section
    projectsTitle: "Proyectos",
    projectsHighlight: "Proyectos Destacados",
    viewProject: "Ver Proyecto",
    viewCode: "Ver Código",
    confidential: "(Confidencial)",
    projects: [
      {
        title: "CRAFT - IBM",
        description: "Proyecto confidencial desarrollado en IBM. Colaboré en la creación desde cero (frontend y backend) de un sistema de gestión de datos global e implementé mejoras de performance, seguridad y componentes reutilizables para la creación de procesos empresariales en la plataforma.",
        technologies: ["Node.js", "React", "NestJS", "PostgreSQL", "Docker"],
        confidential: true,
        links: [],
        image: null
      },
      {
        title: "Advanced Web Scraper - Python + Playwright",
        description: "Demostración completa end-to-end de un sistema avanzado de web scraping y automatización diseñado para interactuar con sitios web complejos impulsados por JavaScript. A diferencia de los scrapers tradicionales, este sistema se comporta como un usuario real: navega a través de múltiples pasos, activa componentes dinámicos de la interfaz, extrae datos renderizados después de la interacción y presenta todo dentro de una interfaz de dashboard limpia y profesional.",
        technologies: ["Python", "Playwright", "JavaScript", "Automation", "Web Scraping", "Dashboard"],
        links: [
          { type: "demo", url: "https://www.upwork.com/freelancers/~01fef04c5c1ebee674?p=1998112525832941568" }
        ],
        image: '/scrapper.jpg'
      },
      {
        title: "Procesamiento Automatizado de Facturas PDF y Generador de Reportes Excel",
        description: "Desarrollé una aplicación de escritorio que automatiza el procesamiento de facturas PDF. La herramienta extrae datos clave de múltiples PDFs, los consolida en un reporte Excel, carga archivos a Dropbox y proporciona un registro detallado de actividades. El objetivo fue reducir el trabajo manual, prevenir errores y optimizar el manejo de facturas a través de una interfaz simple y funcional.",
        technologies: ["Python", "PDF Processing", "Excel", "Dropbox API", "Desktop App", "Automation"],
        links: [
          { type: "demo", url: "https://www.upwork.com/freelancers/~01fef04c5c1ebee674?p=1997830629344256000" }
        ],
        image: null
      },
      {
        title: "Frontend Mentor Todo App",
        description: "Aplicación completa de gestión de tareas con drag & drop, modo oscuro/claro, filtros dinámicos y persistencia en LocalStorage. Diseño responsivo implementado con Tailwind CSS siguiendo el desafío de Frontend Mentor. Funcionalidades CRUD completas y sistema de arrastrar y soltar para reordenar tareas.",
        technologies: ["React", "Vite", "JavaScript", "Tailwind CSS", "Hello Pangea DnD", "LocalStorage"],
        links: [
          { type: "demo", url: "https://frontendmentor-vite-todoapp.vercel.app" },
          { type: "github", url: "https://github.com/martuwilson/frontendmentor-vite-todoapp" }
        ],
        image: null
      }
    ],
    
    // Contact Section
    contactTitle: "Contacto",
    contactHeading: "¿Trabajamos juntos?",
    contactSubtitle: "Estoy disponible para proyectos freelance a partir de 2026. Si tienes un proyecto en mente o simplemente quieres charlar, no dudes en contactarme.",
    formName: "Nombre *",
    formEmail: "Email *",
    formSubject: "Asunto",
    formMessage: "Mensaje *",
    formNamePlaceholder: "Tu nombre",
    formEmailPlaceholder: "tu@email.com",
    formSubjectPlaceholder: "¿De qué se trata?",
    formMessagePlaceholder: "Cuéntame sobre tu proyecto...",
    formSubmit: "Enviar Mensaje",
    formSending: "Enviando...",
    formSuccess: "¡Gracias! Tu mensaje ha sido enviado.",
    formError: "Hubo un error. Por favor intenta nuevamente.",
    formRequired: "Por favor completa todos los campos requeridos.",
    
    // Footer
    footerBuilt: "Construido con",
    footerAnd: "y",
    footerDeployed: ", desplegado en"
  },
  
  en: {
    // Header
    name: "Martin Ezequiel Williner",
    title: "Data Intelligence Engineer | Full Stack Developer",
    subtitle: "Data Intelligence Engineer & Full Stack Developer passionate about turning complex data into scalable and automated solutions.",
    downloadCV: "Download CV",
    location: "Buenos Aires, Argentina",
    
    // Navigation
    nav: {
      about: "About",
      technologies: "Tech Stack",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact"
    },
    
    // About Section
    aboutTitle: "About",
    aboutContent: [
      "Since 2021, I've collaborated on projects that transform complex data into scalable solutions. My approach combines robust backend development with intuitive frontend integrations, business process automation, and data analysis to generate actionable insights.",
      "I currently work at IBM as a Data Intelligence Engineer, where I develop data pipelines, RESTful APIs, and full-stack solutions. My experience ranges from developing enterprise management systems to implementing cloud-native architectures.",
      "Starting in 2026, I will be available for freelance projects, focusing on data solutions, full-stack development, and process automation to help companies scale their operations efficiently."
    ],
    
    // Technologies Section
    techTitle: "Tech Stack",
    techSubtitle: "Data Intelligence Engineering with Python/SQL for ETL pipelines and analytics, and Full Stack Development with JavaScript/TypeScript for modern architectures, security and performance optimization.",
    techSpecialization: "Specialization:",
    
    // Experience Section
    expTitle: "Experience",
    expPresent: "Present",
    viewFullResume: "View Full Resume",
    experience: [
      {
        period: "2026 — PRESENT",
        role: "Full Stack Developer Freelance",
        company: "Independent",
        description: "Development of complete web solutions for diverse clients. Creation of scalable applications with modern architectures, from conceptualization to deployment. Specialization in JavaScript/TypeScript stack with a focus on performance and best development practices.",
        technologies: ["TypeScript", "React.js", "Next.js", "Node.js", "NestJS", "PostgreSQL", "Docker", "CI/CD"]
      },
      {
        period: "OCT 2025 — PRESENT",
        role: "Data Intelligence Engineer",
        company: "IBM",
        description: "Converting complex financial data into reliable, automated, and analysis-ready data products. Development of automated Python pipelines that reduced global report processing times by 30%. Implementation of SQL data models for financial analysis, forecasting, and reconciliations. Building executive dashboards (EPM/Cognos) for key business metrics. Application of Data Quality and Data Governance principles in critical corporate datasets.",
        technologies: ["Python", "SQL", "ETL", "EPM/Cognos", "Pandas", "NumPy", "SPSS", "Data Analytics", "Data Quality", "Data Governance"]
      },
      {
        period: "DEC 2021 — SEP 2025",
        role: "Full Stack Developer",
        company: "IBM",
        description: "Development and maintenance of core applications and microservices with Node.js, Express, and React. Performance optimization achieving 35% improvement in load times. Implementation of automatic validations and security middlewares, reducing manual errors by 60% and critical vulnerabilities from 40 to 8. Design of library with 20+ reusable React components. Migration to modern architectures with Vite and NestJS.",
        technologies: ["Node.js", "Express", "React", "NestJS", "Vite", "IBM Watson", "OWASP ZAP", "SonarQube", "REST APIs", "CI/CD"]
      },
      {
        period: "JUN 2021 — NOV 2021",
        role: "Front End Developer",
        company: "Raxar SRL",
        description: "Development of the website for the 2021 Congress of the Argentine Society of Cardiology. Complete implementation of the registration form with intuitive validations and integration of payment gateway with Mercado Pago. Focus on smooth user experience and error prevention.",
        technologies: ["JavaScript", "HTML", "CSS", "Mercado Pago API", "Validations", "UX/UI"]
      }
    ],
    
    // Projects Section
    projectsTitle: "Projects",
    projectsHighlight: "Featured Projects",
    viewProject: "View Project",
    viewCode: "View Code",
    confidential: "(Confidential)",
    projects: [
      {
        title: "CRAFT - IBM",
        description: "Confidential project developed at IBM. I collaborated in creating from scratch (frontend and backend) a global data management system and implemented performance, security improvements and reusable components for creating business processes on the platform.",
        technologies: ["Node.js", "React", "NestJS", "PostgreSQL", "Docker"],
        confidential: true,
        links: [],
        image: null
      },
      {
        title: "Advanced Web Scraper - Python + Playwright",
        description: "Complete end-to-end demonstration of an advanced web scraping and automation system designed to interact with complex JavaScript-powered websites. Unlike traditional scrapers, this system behaves like a real user: navigates through multiple steps, triggers dynamic UI components, extracts data rendered after interaction, and presents everything within a clean, professional dashboard interface.",
        technologies: ["Python", "Playwright", "JavaScript", "Automation", "Web Scraping", "Dashboard"],
        links: [
          { type: "demo", url: "https://www.upwork.com/freelancers/~01fef04c5c1ebee674?p=1998112525832941568" }
        ],
        image: '/scrapper.jpg'
      },
      {
        title: "Automated PDF Invoice Processing and Excel Report Generator",
        description: "I developed a desktop application that automates PDF invoice processing. The tool extracts key data from multiple PDFs, consolidates them into an Excel report, uploads files to Dropbox, and provides a detailed activity log. The goal was to reduce manual work, prevent errors, and optimize invoice handling through a simple and functional interface.",
        technologies: ["Python", "PDF Processing", "Excel", "Dropbox API", "Desktop App", "Automation"],
        links: [
          { type: "demo", url: "https://www.upwork.com/freelancers/~01fef04c5c1ebee674?p=1997830629344256000" }
        ],
        image: null
      },
      {
        title: "Frontend Mentor Todo App",
        description: "Complete task management application with drag & drop, dark/light mode, dynamic filters and LocalStorage persistence. Responsive design implemented with Tailwind CSS following the Frontend Mentor challenge. Full CRUD functionalities and drag-and-drop system to reorder tasks.",
        technologies: ["React", "Vite", "JavaScript", "Tailwind CSS", "Hello Pangea DnD", "LocalStorage"],
        links: [
          { type: "demo", url: "https://frontendmentor-vite-todoapp.vercel.app" },
          { type: "github", url: "https://github.com/martuwilson/frontendmentor-vite-todoapp" }
        ],
        image: null
      }
    ],
    
    // Contact Section
    contactTitle: "Contact",
    contactHeading: "Let's work together?",
    contactSubtitle: "I'm available for freelance projects starting in 2026. If you have a project in mind or just want to chat, feel free to contact me.",
    formName: "Name *",
    formEmail: "Email *",
    formSubject: "Subject",
    formMessage: "Message *",
    formNamePlaceholder: "Your name",
    formEmailPlaceholder: "your@email.com",
    formSubjectPlaceholder: "What's this about?",
    formMessagePlaceholder: "Tell me about your project...",
    formSubmit: "Send Message",
    formSending: "Sending...",
    formSuccess: "Thank you! Your message has been sent.",
    formError: "There was an error. Please try again.",
    formRequired: "Please fill in all required fields.",
    
    // Footer
    footerBuilt: "Built with",
    footerAnd: "and",
    footerDeployed: ", deployed on"
  }
};

export type Language = 'es' | 'en';
export type Translation = typeof translations.es;
