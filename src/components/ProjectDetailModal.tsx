import React from 'react';
import { Project, Language } from '../types';
import { translations } from '../data/translations';
import {
  X,
  Github,
  ExternalLink,
  Layers,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Workflow,
  Sparkles,
  Info,
  Code2,
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  lang: Language;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  lang,
  onClose,
}) => {
  if (!project) return null;

  const t = translations[lang];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t.projects.closeModal}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Information */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
              {project.categoryLabel[lang]}
            </span>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            {project.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {project.description[lang]}
          </p>
        </div>

        {/* Project Image Preview / Screenshot Container */}
        <div className="space-y-2">
          <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-950">
            <img
              src={project.imagePath}
              alt={project.title[lang]}
              className="w-full h-56 sm:h-72 object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono px-1">
            <span>Asset: {project.imagePath}</span>
            <span className="italic">{t.projects.placeholderScreenshotNotice}</span>
          </div>
        </div>

        {/* Overview */}
        <div className="space-y-2.5">
          <h3 className="text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>{t.projects.overviewTitle}</span>
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {project.longDescription[lang]}
          </p>
        </div>

        {/* Problem & Solution (if available) */}
        {(project.problem || project.solution) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.problem && (
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                  <span>{t.projects.problemTitle}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.problem[lang]}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-200 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>{t.projects.solutionTitle}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.solution[lang]}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Features & Technical Highlights */}
        <div className="space-y-2.5">
          <h3 className="text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>{t.projects.featuresTitle}</span>
          </h3>
          <ul className="space-y-2">
            {project.features[lang].map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Note */}
        <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 space-y-1">
          <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
            <Workflow className="w-3.5 h-3.5 text-blue-500" />
            {lang === 'ar' ? 'البنية الهندسية:' : 'System Architecture:'}
          </span>
          <p className="pl-5 leading-relaxed">{project.architecture[lang]}</p>
        </div>

        {/* Challenges & Future Roadmap (if available) */}
        {(project.challenges || project.futureImprovements) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {project.challenges && (
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white">
                  {t.projects.challengesTitle}:
                </span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.challenges[lang]}
                </p>
              </div>
            )}
            {project.futureImprovements && (
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white">
                  {t.projects.futureTitle}:
                </span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.futureImprovements[lang]}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Replaceable Repository Notice */}
        <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2">
          <Info className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{t.projects.placeholderRepoNotice}</span>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-400 dark:hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>{t.projects.githubCode}</span>
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{t.projects.liveDemo}</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {t.projects.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
};
