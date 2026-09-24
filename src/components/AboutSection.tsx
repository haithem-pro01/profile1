import React from 'react';
import { Language } from '../types';
import { profileData, aboutData } from '../data/portfolioData';
import { translations } from '../data/translations';
import { GraduationCap, Code2, Brain, CheckCircle2, Terminal, ArrowRight, ArrowLeft, Download } from 'lucide-react';
import { downloadCV, CV_DOWNLOAD_PATH } from '../utils/downloadCV';

interface AboutSectionProps {
  lang: Language;
  onOpenCV: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, onOpenCV }) => {
  const t = translations[lang];
  const isRTL = lang === 'ar';

  return (
    <section
      id="about"
      className="py-16 lg:py-24 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80 mb-3">
            <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">01.</span>
            <span>{t.about.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.about.title}
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {aboutData.headline[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative (8 Cols) */}
          <div className="lg:col-span-8 space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
            {aboutData.paragraphs[lang].map((p, idx) => (
              <p key={idx} className="font-normal">
                {p}
              </p>
            ))}

            {/* Structured Engineering Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {aboutData.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5"
                >
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{item.title[lang]}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                    {item.desc[lang]}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Action Bridge */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <span>{t.hero.viewProjects}</span>
                {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </a>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <button
                type="button"
                onClick={() => downloadCV()}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                title="Download CV (PDF)"
              >
                <Download className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{t.hero.downloadCV}</span>
              </button>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <button
                type="button"
                onClick={onOpenCV}
                className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                {t.hero.previewCV}
              </button>
            </div>
          </div>

          {/* Side Info Cards (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Academic Snapshot Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50/60 to-indigo-50/30 dark:from-slate-800/80 dark:to-slate-800/40 border border-blue-100 dark:border-slate-700/80 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {lang === 'ar' ? 'المؤهل الأكاديمي' : 'Academic Focus'}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {profileData.university[lang]}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs divide-y divide-slate-200/60 dark:divide-slate-700/60">
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">
                    {lang === 'ar' ? 'الدرجة الحالية:' : 'Current Degree:'}
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {lang === 'ar' ? 'ماستر 1 ذكاء اصطناعي' : 'Master 1 — AI'}
                  </span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">
                    {lang === 'ar' ? 'الدرجة السابقة:' : 'Undergraduate:'}
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {lang === 'ar' ? 'ليسانس إعلام آلي' : 'B.Sc. Computer Science'}
                  </span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">
                    {lang === 'ar' ? 'الموقع الجغرافي:' : 'Location:'}
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {profileData.location[lang]}
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Philosophy Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                <Terminal className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{lang === 'ar' ? 'منهجية العمل' : 'Engineering Approach'}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {lang === 'ar'
                  ? 'التركيز على بناء برمجيات عملية قابلة للصيانة، وكتابة كود منظم يحل احتياجات المستخدم الحقيقية.'
                  : 'Prioritizing functional execution, clean codebases, and maintainable architectures that solve real operational needs.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
