import React from 'react';
import { Language } from '../types';
import { profileData, educationList, skillCategories, featuredProjects } from '../data/portfolioData';
import { translations } from '../data/translations';
import { downloadCV, CV_DOWNLOAD_PATH } from '../utils/downloadCV';
import { X, Download, Printer, GraduationCap, Code2, Briefcase, Mail, Phone, MapPin, ExternalLink, Globe, Sparkles } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, lang, onClose }) => {
  if (!isOpen) return null;

  const [downloading, setDownloading] = React.useState(false);
  const t = translations[lang];

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async (e?: React.MouseEvent) => {
    try {
      setDownloading(true);
      await downloadCV();
    } catch (err) {
      console.warn('Direct download error:', err);
    } finally {
      setTimeout(() => setDownloading(false), 1500);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-10 space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-600"></span>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              {t.cvModal.title} — Haithem Benzerga
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {/* Open in new tab link */}
            <a
              href={profileData.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 transition-colors"
              title="Open raw PDF in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lang === 'ar' ? 'فتح في نافذة جديدة' : 'Open in New Tab'}</span>
            </a>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer shadow-xs"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloading ? (lang === 'ar' ? 'جارٍ التحميل...' : 'Downloading...') : t.cvModal.downloadButton}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label={t.cvModal.close}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Structured CV Document Body (Recruiter Standard Layout) */}
        <div className="space-y-6 text-slate-800 dark:text-slate-200">
          {/* Header Summary */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {profileData.name[lang]}
                </h1>
                <p className="text-base font-semibold text-blue-600 dark:text-blue-400">
                  {profileData.title[lang]}
                </p>
              </div>
              <div className="text-xs text-slate-500 space-y-1">
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <a
                    href={profileData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 dark:text-blue-400 hover:underline break-all"
                  >
                    {profileData.website}
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-500" />
                  <span>{profileData.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="font-mono">{profileData.phone}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  <span>{profileData.location[lang]}</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
              {profileData.bio[lang]}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{t.education.title}</span>
            </h3>
            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                    <span className="font-bold text-slate-900 dark:text-white">{edu.degree[lang]}</span>
                    <span className="text-xs text-slate-500 font-mono">{edu.period[lang]}</span>
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    {edu.institution[lang]}
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 pt-1 list-disc list-inside">
                    {edu.highlights[lang].map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Skills */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
              <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{t.skills.title}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                  <span className="font-bold text-slate-800 dark:text-slate-200">{cat.title[lang]}:</span>{' '}
                  <span className="text-slate-600 dark:text-slate-400">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects Summary */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{t.projects.title}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {featuredProjects.map((proj) => (
                <div key={proj.id} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800 dark:text-slate-200">{proj.title[lang]}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-medium">
                      {proj.technologies.join(', ')}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 line-clamp-2">{proj.description[lang]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Career Goal */}
          <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-800/60 text-xs text-blue-900 dark:text-blue-200">
            <span className="font-bold">{t.objective.title}:</span> {profileData.careerObjective[lang]}
          </div>

          {/* Direct PDF Download Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <div className="text-xs text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {lang === 'ar' ? 'ملف PDF الرسمي' : 'Official PDF Document'}
              </span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {lang === 'ar'
                  ? 'يتضمن روابط تفاعلية مباشرة لموقع البورتفوليو والمشاريع.'
                  : 'Includes direct interactive links to live portfolio and projects.'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleDownloadPDF}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloading ? (lang === 'ar' ? 'جارٍ التحميل...' : 'Downloading...') : (lang === 'ar' ? 'تحميل ملف PDF' : 'Download PDF Copy')}</span>
              </button>
            </div>
          </div>

          {/* Notice */}
          <div className="text-[11px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-slate-200 dark:border-slate-800 pt-3">
            <span>
              Portfolio:{' '}
              <a
                href={profileData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {profileData.website}
              </a>
            </span>
            <span>Haithem Benzerga · {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
