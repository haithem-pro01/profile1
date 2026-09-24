import React from 'react';
import { Language } from '../types';
import { profileData } from '../data/portfolioData';
import { translations } from '../data/translations';
import { Github, Linkedin, Mail, MessageCircle, Heart, ArrowUp, Download } from 'lucide-react';
import { downloadCV, CV_DOWNLOAD_PATH } from '../utils/downloadCV';

interface FooterProps {
  lang: Language;
  onToggleLang: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onToggleLang }) => {
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-850">
          {/* Monogram Brand */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white font-bold text-lg shadow-md shadow-blue-500/20">
              HB
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>{profileData.name[lang]}</span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                  HBZ
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {profileData.title[lang]}
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-650 text-slate-700 dark:text-slate-300">
            <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t.nav.home}
            </a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t.nav.projects}
            </a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t.nav.skills}
            </a>
            <a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t.nav.education}
            </a>
            <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t.nav.services}
            </a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t.nav.contact}
            </a>
            <button
              type="button"
              onClick={() => downloadCV()}
              className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.hero.downloadCV}</span>
            </button>
          </div>

          {/* Socials & Language Switcher & Scroll to top */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/213${profileData.whatsApp.replace(/^0/, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-emerald-600 dark:text-emerald-400 transition-colors"
              title="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-1" />

            <button
              type="button"
              onClick={onToggleLang}
              className="px-2.5 py-1 rounded-md text-xs font-bold bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'AR' : 'EN'}
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2026 Haithem Benzerga. {t.footer.allRights}</p>
          <p className="flex items-center gap-1 text-[11px]">
            <span>{t.footer.madeWith}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
