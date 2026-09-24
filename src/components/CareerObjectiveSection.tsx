import React from 'react';
import { Language } from '../types';
import { profileData } from '../data/portfolioData';
import { translations } from '../data/translations';
import { Target, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

interface CareerObjectiveSectionProps {
  lang: Language;
}

export const CareerObjectiveSection: React.FC<CareerObjectiveSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="py-12 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white p-8 sm:p-12 shadow-xl shadow-blue-600/15">
          {/* Background decorative circles & grid */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-400/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-blue-100 border border-white/20 backdrop-blur-xs">
                <Target className="w-3.5 h-3.5 text-blue-200" />
                <span>{t.objective.eyebrow}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                {t.objective.title}
              </h2>

              <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl font-normal">
                {profileData.careerObjective[lang]}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {t.objective.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/15 border border-white/20 text-white backdrop-blur-xs transition-colors"
                  >
                    <CheckCircle2 className="w-3 h-3 text-cyan-300" />
                    <span>{badge}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Target & Compass Visual */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-44 h-44 rounded-full bg-white/10 border-2 border-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl group hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-4 rounded-full border border-dashed border-white/30 animate-spin" style={{ animationDuration: '25s' }} />
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                  <Compass className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -bottom-3 px-3 py-1 rounded-full bg-white text-blue-900 text-[11px] font-extrabold shadow-md uppercase tracking-wider">
                  Future Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
