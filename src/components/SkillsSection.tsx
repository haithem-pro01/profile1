import React from 'react';
import { Language } from '../types';
import { skillCategories, skillUsageMap } from '../data/portfolioData';
import { translations } from '../data/translations';
import {
  Wrench,
  Code2,
  Cpu,
  Globe,
  Database,
  Smartphone,
  Terminal,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

interface SkillsSectionProps {
  lang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'systems':
        return <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'ai':
        return <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'databases':
        return <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'web-mobile':
        return <Smartphone className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'tools':
        return <Terminal className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-16 lg:py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-950/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Title */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80">
            <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">03.</span>
            <span>{t.skills.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.skills.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            {t.skills.subtitle}
          </p>
        </div>

        {/* 6 Category Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs hover:border-blue-300 dark:hover:border-blue-700/60 transition-all duration-200 space-y-4"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70">
                  {getCategoryIcon(cat.id)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {cat.title[lang]}
                  </h3>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    {cat.skills.length} {lang === 'ar' ? 'مهارات وتقنيات' : 'competencies'}
                  </span>
                </div>
              </div>

              {/* Skills List with Real Project Connections */}
              <div className="space-y-2.5 pt-1">
                {cat.skills.map((skill) => {
                  const usage = skillUsageMap[skill];
                  return (
                    <div
                      key={skill}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200/60 dark:border-slate-750 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                          {skill}
                        </span>
                        {usage && (
                          <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 flex items-center gap-0.5">
                            <span>{t.skills.usedInLabel}</span>
                          </span>
                        )}
                      </div>
                      {usage && (
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {usage[lang]}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
