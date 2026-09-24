import React, { useState } from 'react';
import { Language, Theme } from '../types';
import { translations } from '../data/translations';
import { Moon, Sun, Menu, X, FileText, Globe, Download } from 'lucide-react';
import { downloadCV, CV_DOWNLOAD_PATH } from '../utils/downloadCV';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  theme: Theme;
  onToggleTheme: () => void;
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  theme,
  onToggleTheme,
  onOpenCV,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.education, href: '#education' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/85 dark:bg-slate-900/85 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a
          href="#home"
          id="nav-brand-logo"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200 font-bold tracking-tight">
            <span className="text-lg">HB</span>
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
              Haithem Benzerga
              <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                HBZ
              </span>
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {lang === 'ar' ? 'مطور ذكاء اصطناعي · مهندس برمجيات' : 'AI Developer · Software Engineer'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-650 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: Language Switcher, Theme Toggle, Resume & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick CV Button (Desktop) */}
          <button
            type="button"
            id="nav-cv-button"
            onClick={onOpenCV}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
            title={t.nav.resume}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t.nav.resume}</span>
          </button>

          {/* Bilingual Language Switcher Button */}
          <button
            type="button"
            id="nav-language-toggle"
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/60 border border-blue-200 dark:border-blue-800 transition-colors cursor-pointer"
            title={lang === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="tracking-wide">
              {lang === 'en' ? (
                <span>
                  <strong className="text-blue-600 dark:text-blue-400">EN</strong> | AR
                </span>
              ) : (
                <span>
                  EN | <strong className="text-blue-600 dark:text-blue-400">عربي</strong>
                </span>
              )}
            </span>
          </button>

          {/* Dark/Light Mode Switcher */}
          <button
            type="button"
            id="nav-theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg px-4 pt-2 pb-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                downloadCV();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{t.hero.downloadCV}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onOpenCV();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-750 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>{t.hero.previewCV}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
