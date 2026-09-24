import React from 'react';
import { Language } from '../types';
import { servicesList } from '../data/portfolioData';
import { translations } from '../data/translations';
import {
  Briefcase,
  Monitor,
  Smartphone,
  Database,
  Cpu,
  ArrowRight,
  ArrowLeft,
  Layers,
} from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang }) => {
  const t = translations[lang];
  const isRTL = lang === 'ar';

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'desktop-apps':
        return <Monitor className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'mobile-apps':
        return <Smartphone className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'database-software':
        return <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'ai-systems':
        return <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      default:
        return <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section
      id="services"
      className="py-16 lg:py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80">
            <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">05.</span>
            <span>{t.services.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            {t.services.subtitle}
          </p>
        </div>

        {/* 4 Realistic Areas Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700/60 transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getServiceIcon(service.id)}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {service.title[lang]}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description[lang]}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <span>{lang === 'ar' ? 'مناقشة هذا المجال' : 'Discuss This Area'}</span>
                  {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
