'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'technologies', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 relative overflow-hidden">
      {/* Cursor spotlight effect - only on desktop */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 hidden lg:block"
        style={{
          background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(29, 78, 216, 0.08), transparent 80%)`
        }}
      ></div>
      
      <div className="mx-auto max-w-7xl px-8 py-12 font-sans md:px-16 md:py-20 lg:px-32 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-8 lg:min-h-screen">
      {/* Left Sidebar - Fixed */}
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/5 lg:flex-col lg:justify-between lg:py-24 relative z-40">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <Link href="/">Martin Ezequiel Williner</Link>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Full Stack Developer
          </h2>
          <p className="mt-4 max-w-xs leading-normal text-slate-400">
            Desarrollador apasionado creando experiencias digitales excepcionales con tecnologías modernas.
          </p>
          
          {/* Navigation */}
          <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
              {[
                { id: 'about', label: 'Sobre Mí' },
                { id: 'technologies', label: 'Stack Tech' },
                { id: 'experience', label: 'Experiencia' },
                { id: 'projects', label: 'Proyectos' }
              ].map((item) => (
                <li key={item.id}>
                  <a
                    className={`group flex items-center py-3 ${
                      activeSection === item.id ? 'active' : ''
                    }`}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                      activeSection === item.id ? 'w-16 bg-slate-200' : ''
                    }`}></span>
                    <span className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                      activeSection === item.id ? 'text-slate-200' : ''
                    }`}>
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Social Links */}
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
          <li className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-slate-200"
              href="https://github.com/martin-williner"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub (opens in a new tab)"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </a>
          </li>
          <li className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-slate-200"
              href="https://linkedin.com/in/martin-williner"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn (opens in a new tab)"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </li>
          <li className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-slate-200"
              href="mailto:martin@example.com"
              aria-label="Email (opens in a new tab)"
            >
              <span className="sr-only">Email</span>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </li>
        </ul>

        <div className="mt-8 text-sm text-slate-500">
          📍 Buenos Aires, Argentina
        </div>
      </header>

      {/* Right Content - Scrollable */}
      <main className="pt-24 lg:w-3/5 lg:py-24 relative z-40">
        {/* About Section */}
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Sobre Mí
            </h2>
          </div>
          <div>
            <p className="mb-4 leading-relaxed">
              Desde diciembre de 2021, trabajo como Full Stack Developer en IBM, donde he desarrollado y mantenido 
              aplicaciones principales y microservicios escalables. A partir de 2025, también ofrezco servicios 
              freelance, combinando mi experiencia corporativa con proyectos independientes.
            </p>
            <p className="mb-4 leading-relaxed">
              En IBM, he logrado optimizar tiempos de carga en un 35%, reducir errores manuales en un 60%, y disminuir 
              vulnerabilidades críticas de 40 a 8. Me especializo en el ecosistema 
              <span className="font-medium text-slate-200"> JavaScript/TypeScript</span>, con 
              <span className="font-medium text-slate-200"> React</span>, 
              <span className="font-medium text-slate-200"> Node.js</span>, y 
              <span className="font-medium text-slate-200"> NestJS</span>.
            </p>
            <p className="leading-relaxed">
              Mi enfoque está en crear arquitecturas modernas, implementar mejores prácticas de seguridad con herramientas 
              como OWASP ZAP, y desarrollar soluciones escalables que optimicen tanto la experiencia del usuario como 
              la eficiencia del código.
            </p>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="technologies" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Stack Tecnológico
            </h2>
          </div>
          <div>
            <p className="mb-6 leading-relaxed text-slate-400">
              Tecnologías y herramientas que domino y utilizo regularmente en mis proyectos profesionales:
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { category: "Frontend", techs: ["JavaScript", "TypeScript", "React.js", "Vite"] },
                { category: "Backend", techs: ["Node.js", "Express.js", "NestJS"] },
                { category: "Database", techs: ["PostgreSQL", "MongoDB"] },
                { category: "DevOps & Tools", techs: ["Docker", "Git", "GitHub", "CI/CD"] },
                { category: "Testing & Security", techs: ["Swagger", "OWASP ZAP"] }
              ].map((group, groupIndex) => (
                <div key={groupIndex} className="spotlight-hover">
                  <h3 className="mb-3 font-medium text-slate-200 text-sm uppercase tracking-wide">
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.techs.map((tech, techIndex) => (
                      <li key={techIndex} className="flex items-center text-sm text-slate-300">
                        <span className="mr-2 h-1 w-1 bg-teal-400 rounded-full"></span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
              <p className="text-sm text-slate-400 leading-relaxed">
                <span className="font-medium text-teal-300">Especialización:</span> Desarrollo Full Stack con JavaScript/TypeScript, 
                arquitecturas modernas, mejores prácticas de seguridad, y optimización de performance.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Experiencia
            </h2>
          </div>
          <div>
            <ol className="group/list">
              {[
                {
                  period: "2025 — PRESENTE",
                  role: "Full Stack Developer Freelance",
                  company: "Independiente",
                  description: "Desarrollo de soluciones web completas para clientes diversos. Creación de aplicaciones escalables con arquitecturas modernas, desde la conceptualización hasta el deployment. Especialización en stack JavaScript/TypeScript con enfoque en performance y mejores prácticas de desarrollo.",
                  technologies: ["TypeScript", "React.js", "Next.js", "Node.js", "NestJS", "PostgreSQL", "Docker", "CI/CD"]
                },
                {
                  period: "DIC 2021 — PRESENTE",
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
              ].map((job, index) => (
                <li key={index} className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 spotlight-hover">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                      {job.period}
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>{job.role} · {job.company}</span>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">{job.description}</p>
                      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        {job.technologies.map((tech, techIndex) => (
                          <li key={techIndex} className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              {tech}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-12">
              <a
                className="inline-flex items-center font-semibold leading-tight text-slate-200 group"
                aria-label="View Full Résumé"
                href="/resume.pdf"
                target="_blank"
              >
                <span>
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                    Ver CV Completo
                  </span>
                  <span className="whitespace-nowrap">
                    <svg className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Proyectos
            </h2>
          </div>
          <div>
            <ul className="group/list">
              {[
                {
                  title: "Frontend Mentor Todo App",
                  description: "Aplicación completa de gestión de tareas con drag & drop, modo oscuro/claro, filtros dinámicos y persistencia en LocalStorage. Diseño responsivo implementado con Tailwind CSS siguiendo el desafío de Frontend Mentor. Funcionalidades CRUD completas y sistema de arrastrar y soltar para reordenar tareas.",
                  technologies: ["React", "Vite", "JavaScript", "Tailwind CSS", "Hello Pangea DnD", "LocalStorage"],
                  links: [
                    { type: "demo", url: "https://frontendmentor-vite-todoapp.vercel.app" },
                    { type: "github", url: "https://github.com/martuwilson/frontendmentor-vite-todoapp" }
                  ]
                },
                {
                  title: "Task Management App",
                  description: "Aplicación de gestión de tareas colaborativa con funcionalidades en tiempo real, drag & drop, y notificaciones push. Interfaz intuitiva y responsiva.",
                  technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Material-UI"],
                  links: []
                },
                {
                  title: "Weather Dashboard",
                  description: "Dashboard meteorológico con visualización de datos en tiempo real, pronósticos extendidos y mapas interactivos. Integración con múltiples APIs meteorológicas.",
                  technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Sass", "PWA"],
                  links: []
                },
                {
                  title: "CRAFT - IBM",
                  description: "Proyecto confidencial desarrollado en IBM. Colaboré en la creación desde cero (frontend y backend) de un sistema de gestión de datos global e implementé mejoras de performance, seguridad y componentes reutilizables para la creación de procesos empresariales en la plataforma.",
                  technologies: ["Node.js", "React", "NestJS", "PostgreSQL", "Docker"],
                  confidential: true,
                  links: []
                }
              ].map((project, index) => (
                <li key={index} className="mb-12">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 spotlight-hover">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                      <h3>
                        {project.links && project.links.length > 0 && project.links.some(link => link.url !== "#") ? (
                          <a
                            className="inline-flex items-baseline font-semibold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                            href={project.links.find(link => link.type === 'github' && link.url !== "#")?.url || project.links.find(link => link.url !== "#")?.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${project.title} (opens in a new tab)`}
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              {project.title}
                              <span className="inline-block">
                                <svg className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-2 group-focus-visible/link:translate-x-2 motion-reduce:transition-none ml-1 translate-y-px" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </span>
                            </span>
                          </a>
                        ) : (
                          <div className="inline-flex items-baseline font-semibold leading-tight text-slate-200 text-base">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              {project.title}
                              {project.confidential && (
                                <span className="ml-2 text-xs text-slate-400 font-normal">
                                  (Confidencial)
                                </span>
                              )}
                            </span>
                          </div>
                        )}
                      </h3>
                      <p className="mt-2 text-sm leading-normal">{project.description}</p>
                      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        {project.technologies.map((tech, techIndex) => (
                          <li key={techIndex} className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              {tech}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Image
                      alt={project.title}
                      loading="lazy"
                      width={200}
                      height={120}
                      className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                      src={project.confidential ? '/ibm-logo.jpg' : `https://placehold.co/200x120/1e293b/64748b.jpg?text=Project+${index + 1}`}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <a
                className="inline-flex items-center font-semibold leading-tight text-slate-200 group"
                aria-label="View Full Project Archive"
                href="/projects"
              >
                <span>
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                    Ver Archivo Completo de Proyectos
                  </span>
                  <span className="whitespace-nowrap">
                    <svg className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </section>

        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
          <p>
            Construido con{" "}
            <a
              href="https://nextjs.org/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer noopener"
            >
              Next.js
            </a>{" "}
            y{" "}
            <a
              href="https://tailwindcss.com/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer noopener"
            >
              Tailwind CSS
            </a>
            , desplegado en{" "}
            <a
              href="https://vercel.com/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer noopener"
            >
              Vercel
            </a>
            .
          </p>
          <p className="mt-2 text-slate-600">
            © 2025 Martin Ezequiel Williner. Todos los derechos reservados.
          </p>
        </footer>
      </main>
        </div>
      </div>
    </div>
  );
}
