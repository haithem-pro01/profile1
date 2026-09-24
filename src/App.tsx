/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, Theme } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { CareerObjectiveSection } from './components/CareerObjectiveSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export default function App() {
  // Default language is English as requested
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('hb_portfolio_lang');
    return saved === 'ar' ? 'ar' : 'en';
  });

  // Default theme is light (matching specification), with dark mode support
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('hb_portfolio_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return 'light';
  });

  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  // Sync RTL and lang attribute on <html> element
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    localStorage.setItem('hb_portfolio_lang', lang);
  }, [lang]);

  // Sync dark class on <html> element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('hb_portfolio_theme', theme);
  }, [theme]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      id="portfolio-root"
      className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200"
    >
      {/* Sticky Navigation Bar with Language and Theme Controls */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero lang={lang} onOpenCV={() => setIsCVModalOpen(true)} />

        {/* 2. About Section: Strong Personal Identity */}
        <AboutSection lang={lang} onOpenCV={() => setIsCVModalOpen(true)} />

        {/* 3. Featured Projects: Core Portfolio Showcase */}
        <FeaturedProjects lang={lang} />

        {/* 4. Technical Skills: Grouped & Connected to Real Usage */}
        <SkillsSection lang={lang} />

        {/* 5. Academic Education Timeline */}
        <EducationSection lang={lang} />

        {/* 6. Career Objective: Grounded Engineering Vision */}
        <CareerObjectiveSection lang={lang} />

        {/* 7. What I Build / Areas I Work In */}
        <ServicesSection lang={lang} />

        {/* 8. Direct Contact Channels & Interactive Form */}
        <ContactSection lang={lang} />
      </main>

      {/* Site Footer */}
      <Footer lang={lang} onToggleLang={toggleLanguage} />

      {/* Curriculum Vitae Modal with direct PDF link */}
      <CVModal
        isOpen={isCVModalOpen}
        lang={lang}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}
