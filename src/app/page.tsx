'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { translations, type Language } from '@/lib/translations';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState<Language>('es');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = translations[language];

  useEffect(() => {
    // Load preferences from localStorage (only on client)
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        setIsDarkMode(false);
      }
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
        setLanguage(savedLang);
      }
    }
  }, []);

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

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    }
  };

  const toggleLanguage = () => {
    const newLang: Language = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLang);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus(t.formRequired);
      setIsSubmitting(false);
      return;
    }

    // Simular envío (aquí integrarías con tu servicio de email)
    try {
      // Crear mailto link como fallback
      const mailtoLink = `mailto:williner.martin@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contacto desde Portfolio')}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`)}`;
      
      window.location.href = mailtoLink;
      
      setFormStatus(t.formSuccess);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus(t.formError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-slate-900 text-slate-300' 
        : 'bg-slate-50 text-slate-700'
    }`}>
      {/* Cursor spotlight effect - only on desktop */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 hidden lg:block"
        style={{
          background: isDarkMode 
            ? `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(29, 78, 216, 0.08), transparent 80%)`
            : `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(59, 130, 246, 0.06), transparent 80%)`
        }}
      ></div>
      
      <div className="mx-auto max-w-7xl px-8 py-12 font-sans md:px-16 md:py-20 lg:px-32 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-8 lg:min-h-screen">
          {/* Left Sidebar - Fixed */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/5 lg:flex-col lg:justify-between lg:py-24 relative z-40">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex-1">
                  <h1 className={`text-4xl font-bold tracking-tight sm:text-5xl transition-colors ${
                    isDarkMode ? 'text-slate-200' : 'text-slate-900'
                  }`}>
                    <Link href="/">{t.name}</Link>
                  </h1>
                </div>
                <div className="flex items-center gap-2">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`px-3 py-2 rounded-lg font-medium text-sm transition-all hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' 
                    : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
                }`}
                aria-label="Toggle language"
              >
                {language === 'es' ? '🇬🇧 EN' : '🇪🇸 ES'}
              </button>
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' 
                    : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                )}
              </button>
                </div>
              </div>
              <h2 className={`mt-3 text-lg font-medium tracking-tight sm:text-xl transition-colors ${
                isDarkMode ? 'text-slate-200' : 'text-slate-900'
              }`}>
                {t.title}
              </h2>
              <p className={`mt-4 max-w-xs leading-normal transition-colors ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {t.subtitle}
              </p>
              
              {/* Navigation */}
              <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  {[
                    { id: 'about', label: t.nav.about },
                    { id: 'technologies', label: t.nav.technologies },
                    { id: 'experience', label: t.nav.experience },
                    { id: 'projects', label: t.nav.projects },
                    { id: 'contact', label: t.nav.contact }
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
                        <span className={`nav-indicator mr-4 h-px w-8 transition-all group-hover:w-16 group-focus-visible:w-16 motion-reduce:transition-none ${
                          activeSection === item.id 
                            ? `w-16 ${isDarkMode ? 'bg-slate-200' : 'bg-slate-900'}` 
                            : isDarkMode ? 'bg-slate-600 group-hover:bg-slate-200' : 'bg-slate-400 group-hover:bg-slate-900'
                        }`}></span>
                        <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors group-focus-visible:text-slate-200 ${
                          activeSection === item.id 
                            ? isDarkMode ? 'text-slate-200' : 'text-slate-900' 
                            : isDarkMode ? 'text-slate-500 group-hover:text-slate-200' : 'text-slate-600 group-hover:text-slate-900'
                        }`}>
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Download CV Button */}
            <div className="mt-12">
              <a
                href="/Martin_Williner_CV_DataFullStack.pdf"
                download
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 border border-teal-400/20' 
                    : 'bg-teal-600/10 text-teal-700 hover:bg-teal-600/20 border border-teal-600/20'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t.downloadCV}
              </a>
            </div>

            {/* Social Links */}
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              <li className="mr-5 text-xs shrink-0">
                <a
                  className={`block transition-colors ${
                    isDarkMode ? 'hover:text-slate-200' : 'hover:text-slate-900'
                  }`}
                  href="https://github.com/martuwilson"
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
                  className={`block transition-colors ${
                    isDarkMode ? 'hover:text-slate-200' : 'hover:text-slate-900'
                  }`}
                  href="https://www.linkedin.com/in/martinwilliner/"
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
                  className={`block transition-colors ${
                    isDarkMode ? 'hover:text-slate-200' : 'hover:text-slate-900'
                  }`}
                  href="mailto:williner.martin@gmail.com"
                  aria-label="Email (opens in a new tab)"
                >
                  <span className="sr-only">Email</span>
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </li>
            </ul>

            <div className={`mt-8 text-sm transition-colors ${
              isDarkMode ? 'text-slate-500' : 'text-slate-600'
            }`}>
              📍 Buenos Aires, Argentina
            </div>
          </header>

          {/* Right Content - Scrollable */}
          <main className="pt-24 lg:w-3/5 lg:py-24 relative z-40">
        {/* About Section */}
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div className={`sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 transition-colors ${
            isDarkMode ? 'bg-slate-900/75' : 'bg-slate-50/75'
          }`}>
            <h2 className={`text-sm font-bold uppercase tracking-widest lg:sr-only transition-colors ${
              isDarkMode ? 'text-slate-200' : 'text-slate-900'
            }`}>
              {t.aboutTitle}
            </h2>
          </div>
          <div>
            {t.aboutContent.map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="technologies" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div className={`sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 transition-colors ${
            isDarkMode ? 'bg-slate-900/75' : 'bg-slate-50/75'
          }`}>
            <h2 className={`text-sm font-bold uppercase tracking-widest lg:sr-only transition-colors ${
              isDarkMode ? 'text-slate-200' : 'text-slate-900'
            }`}>
              {t.techTitle}
            </h2>
          </div>
          <div>
            <p className={`mb-6 leading-relaxed transition-colors ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Tecnologías y herramientas que domino y utilizo regularmente en mis proyectos profesionales:
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
              {[
                { category: "Frontend", techs: ["JavaScript", "TypeScript", "React.js", "Vite"] },
                { category: "Backend", techs: ["Node.js", "Express.js", "NestJS"] },
                { category: "Data & Analytics", techs: ["Python", "SQL", "ETL", "Pandas", "NumPy", "SPSS"] },
                { category: "Database", techs: ["PostgreSQL", "MongoDB", "EPM/Cognos"] },
                { category: "DevOps & Tools", techs: ["Docker", "Git", "GitHub", "CI/CD"] },
                { category: "Testing & Security", techs: ["Swagger", "OWASP ZAP"] }
              ].map((group, groupIndex) => (
                <div key={groupIndex} className="spotlight-hover">
                  <h3 className={`mb-3 font-medium text-sm uppercase tracking-wide transition-colors ${
                    isDarkMode ? 'text-slate-200' : 'text-slate-900'
                  }`}>
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.techs.map((tech, techIndex) => (
                      <li key={techIndex} className={`flex items-center text-sm transition-colors ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        <span className={`mr-2 h-1 w-1 rounded-full transition-colors ${
                          isDarkMode ? 'bg-teal-400' : 'bg-teal-600'
                        }`}></span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className={`mt-8 p-4 rounded-lg border transition-colors ${
              isDarkMode 
                ? 'bg-slate-800/30 border-slate-700/50' 
                : 'bg-slate-100/50 border-slate-300/50'
            }`}>
              <p className={`text-sm leading-relaxed transition-colors ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                <span className={`font-medium transition-colors ${
                  isDarkMode ? 'text-teal-300' : 'text-teal-600'
                }`}>{t.techSpecialization}</span> {t.techSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div className={`sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 transition-colors ${
            isDarkMode ? 'bg-slate-900/75' : 'bg-slate-50/75'
          }`}>
            <h2 className={`text-sm font-bold uppercase tracking-widest lg:sr-only transition-colors ${
              isDarkMode ? 'text-slate-200' : 'text-slate-900'
            }`}>
              {t.expTitle}
            </h2>
          </div>
          <div>
            <ol className="group/list">
              {t.experience.map((job, index) => (
                <li key={index} className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 spotlight-hover">
                    <div className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block ${
                      isDarkMode 
                        ? 'lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]' 
                        : 'lg:group-hover:bg-slate-200/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.2)]'
                    } lg:group-hover:drop-shadow-lg`}></div>
                    <header className={`z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2 transition-colors ${
                      isDarkMode ? 'text-slate-500' : 'text-slate-600'
                    }`}>
                      {job.period}
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className={`font-medium leading-snug transition-colors ${
                        isDarkMode ? 'text-slate-200' : 'text-slate-900'
                      }`}>
                        <div>
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>{job.role} · {job.company}</span>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">{job.description}</p>
                      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        {job.technologies.map((tech, techIndex) => (
                          <li key={techIndex} className="mr-1.5 mt-2">
                            <div className={`flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 transition-colors ${
                              isDarkMode 
                                ? 'bg-teal-400/10 text-teal-300' 
                                : 'bg-teal-600/10 text-teal-700'
                            }`}>
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
                className={`inline-flex items-center font-semibold leading-tight group transition-colors ${
                  isDarkMode ? 'text-slate-200' : 'text-slate-900'
                }`}
                aria-label="View Full Résumé"
                href="/resume.pdf"
                target="_blank"
              >
                <span>
                  <span className={`border-b border-transparent pb-px transition motion-reduce:transition-none ${
                    isDarkMode ? 'group-hover:border-teal-300' : 'group-hover:border-teal-600'
                  }`}>
                    {t.viewFullResume}
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
          <div className={`sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 transition-colors ${
            isDarkMode ? 'bg-slate-900/75' : 'bg-slate-50/75'
          }`}>
            <h2 className={`text-sm font-bold uppercase tracking-widest lg:sr-only transition-colors ${
              isDarkMode ? 'text-slate-200' : 'text-slate-900'
            }`}>
              {t.projectsTitle}
            </h2>
          </div>
          <div>
            <ul className="group/list">
              {t.projects.map((project, index) => (
                <li key={index} className="mb-12">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 spotlight-hover">
                    <div className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block ${
                      isDarkMode 
                        ? 'lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]' 
                        : 'lg:group-hover:bg-slate-200/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.2)]'
                    } lg:group-hover:drop-shadow-lg`}></div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                      <h3>
                        {project.links && project.links.length > 0 && project.links.some(link => link.url !== "#") ? (
                          <a
                            className={`inline-flex items-baseline font-semibold leading-tight group/link text-base transition-colors ${
                              isDarkMode 
                                ? 'text-slate-200 hover:text-teal-300 focus-visible:text-teal-300' 
                                : 'text-slate-900 hover:text-teal-600 focus-visible:text-teal-600'
                            }`}
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
                          <div className={`inline-flex items-baseline font-semibold leading-tight text-base transition-colors ${
                            isDarkMode ? 'text-slate-200' : 'text-slate-900'
                          }`}>
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              {project.title}
                              {project.confidential && (
                                <span className={`ml-2 text-xs font-normal transition-colors ${
                                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                                }`}>
                                  {t.confidential}
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
                            <div className={`flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 transition-colors ${
                              isDarkMode 
                                ? 'bg-teal-400/10 text-teal-300' 
                                : 'bg-teal-600/10 text-teal-700'
                            }`}>
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
                      src={project.image || (project.confidential ? '/ibm-logo.jpg' : `https://placehold.co/200x120/1e293b/64748b.jpg?text=Project+${index + 1}`)}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <a
                className={`inline-flex items-center font-semibold leading-tight group transition-colors ${
                  isDarkMode ? 'text-slate-200' : 'text-slate-900'
                }`}
                aria-label="View Full Project Archive"
                href="/projects"
              >
                <span>
                  <span className={`border-b border-transparent pb-px transition motion-reduce:transition-none ${
                    isDarkMode ? 'group-hover:border-teal-300' : 'group-hover:border-teal-600'
                  }`}>
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

        {/* Contact Section */}
        <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div className={`sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 transition-colors ${
            isDarkMode ? 'bg-slate-900/75' : 'bg-slate-50/75'
          }`}>
            <h2 className={`text-sm font-bold uppercase tracking-widest lg:sr-only transition-colors ${
              isDarkMode ? 'text-slate-200' : 'text-slate-900'
            }`}>
              {t.contactTitle}
            </h2>
          </div>

          <div>
            <h2 className={`text-sm font-bold uppercase tracking-widest mb-8 transition-colors ${
              isDarkMode ? 'text-slate-200' : 'text-slate-900'
            }`}>
              {t.contactHeading}
            </h2>
            
            <p className={`mb-8 transition-colors ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {t.contactSubtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 transition-colors ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {t.formName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 ${
                    isDarkMode 
                      ? 'bg-slate-800 border-slate-700 text-slate-200 focus:ring-teal-500 focus:border-teal-500' 
                      : 'bg-white border-slate-300 text-slate-900 focus:ring-teal-600 focus:border-teal-600'
                  }`}
                  placeholder={t.formNamePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 transition-colors ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {t.formEmail}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 ${
                    isDarkMode 
                      ? 'bg-slate-800 border-slate-700 text-slate-200 focus:ring-teal-500 focus:border-teal-500' 
                      : 'bg-white border-slate-300 text-slate-900 focus:ring-teal-600 focus:border-teal-600'
                  }`}
                  placeholder={t.formEmailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium mb-2 transition-colors ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {t.formSubject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 ${
                    isDarkMode 
                      ? 'bg-slate-800 border-slate-700 text-slate-200 focus:ring-teal-500 focus:border-teal-500' 
                      : 'bg-white border-slate-300 text-slate-900 focus:ring-teal-600 focus:border-teal-600'
                  }`}
                  placeholder={t.formSubjectPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 transition-colors ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {t.formMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 resize-none ${
                    isDarkMode 
                      ? 'bg-slate-800 border-slate-700 text-slate-200 focus:ring-teal-500 focus:border-teal-500' 
                      : 'bg-white border-slate-300 text-slate-900 focus:ring-teal-600 focus:border-teal-600'
                  }`}
                  placeholder={t.formMessagePlaceholder}
                />
              </div>

              {formStatus && (
                <div className={`p-4 rounded-lg ${
                  formStatus.includes('error') || formStatus.includes('completa')
                    ? isDarkMode ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-red-50 text-red-700 border border-red-200'
                    : isDarkMode ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'bg-teal-50 text-teal-700 border border-teal-200'
                }`}>
                  {formStatus}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${
                  isDarkMode 
                    ? 'bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 border border-teal-400/20' 
                    : 'bg-teal-600 text-white hover:bg-teal-700 border border-teal-600'
                }`}
              >
                {isSubmitting ? t.formSending : t.formSubmit}
              </button>
            </form>
          </div>
        </section>

        <footer className={`max-w-md pb-16 text-sm sm:pb-0 transition-colors ${
          isDarkMode ? 'text-slate-500' : 'text-slate-600'
        }`}>
          <p>
            {t.footerBuilt}{" "}
            <a
              href="https://nextjs.org/"
              className={`font-medium transition-colors ${
                isDarkMode 
                  ? 'text-slate-400 hover:text-teal-300 focus-visible:text-teal-300' 
                  : 'text-slate-700 hover:text-teal-600 focus-visible:text-teal-600'
              }`}
              target="_blank"
              rel="noreferrer noopener"
            >
              Next.js
            </a>{" "}
            {t.footerAnd}{" "}
            <a
              href="https://tailwindcss.com/"
              className={`font-medium transition-colors ${
                isDarkMode 
                  ? 'text-slate-400 hover:text-teal-300 focus-visible:text-teal-300' 
                  : 'text-slate-700 hover:text-teal-600 focus-visible:text-teal-600'
              }`}
              target="_blank"
              rel="noreferrer noopener"
            >
              Tailwind CSS
            </a>
            {t.footerDeployed}{" "}
            <a
              href="https://vercel.com/"
              className={`font-medium transition-colors ${
                isDarkMode 
                  ? 'text-slate-400 hover:text-teal-300 focus-visible:text-teal-300' 
                  : 'text-slate-700 hover:text-teal-600 focus-visible:text-teal-600'
              }`}
              target="_blank"
              rel="noreferrer noopener"
            >
              Vercel
            </a>
            .
          </p>
          <p className={`mt-2 transition-colors ${
            isDarkMode ? 'text-slate-600' : 'text-slate-500'
          }`}>
            © 2026 Martin Ezequiel Williner. Todos los derechos reservados.
          </p>
        </footer>
      </main>
        </div>
      </div>
    </div>
  );
}
