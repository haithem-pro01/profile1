import React from 'react';
import { Language } from '../types';
import { educationList } from '../data/portfolioData';
import { translations } from '../data/translations';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface EducationSectionProps {
  lang: Language;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section
      id="education"
      className="py-16 lg:py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/80 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{t.education.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.education.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
            {t.education.subtitle}
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-500/30 dark:border-blue-500/20 space-y-8 max-w-4xl">
          {educationList.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Marker Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 ${
                  edu.isCurrent ? 'bg-blue-600 ring-4 ring-blue-500/20' : 'bg-slate-400 dark:bg-slate-600'
                }`}
              />

              {/* Education Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-xs hover:shadow-md transition-all space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {edu.degree[lang]}
                    </h3>
                    {edu.isCurrent ? (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        {edu.status[lang]}
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {edu.status[lang]}
                      </span>
                    )}
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period[lang]}</span>
                  </div>
                </div>

                {/* Institution & Location */}
                <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-sm text-slate-600 dark:text-slate-300 font-medium">
                  <span className="text-blue-700 dark:text-blue-400 font-semibold">
                    {edu.institution[lang]}
                  </span>
                  <div className="flex items-center gap-1 text-slate-500 text-xs">
                    <MapPin className="w-3 h-3 text-rose-500" />
                    <span>{edu.location[lang]}</span>
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  <p className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                    {t.education.highlightsTitle}
                  </p>
                  <ul className="space-y-1.5">
                    {edu.highlights[lang].map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-650 text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
