import React, { useState } from 'react';
import { Language, Project } from '../types';
import { featuredProjects } from '../data/portfolioData';
import { translations } from '../data/translations';
import { ProjectDetailModal } from './ProjectDetailModal';
import {
  FolderGit2,
  ArrowRight,
  ArrowLeft,
  Github,
  ExternalLink,
  Layers,
  Smartphone,
  Hospital,
  Activity,
  Package,
  Archive,
  Image as ImageIcon,
} from 'lucide-react';

interface FeaturedProjectsProps {
  lang: Language;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ lang }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'web-mobile' | 'desktop-database'>('all');

  const t = translations[lang];
  const isRTL = lang === 'ar';

  const filteredProjects = featuredProjects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.domainCategory === activeFilter;
  });

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'accommodation-platform':
        return <Smartphone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
      case 'hospital-stock':
        return <Hospital className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'clinic-management':
        return <Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'inventory-management':
        return <Package className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case 'archive-management':
        return <Archive className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      default:
        return <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section
      id="projects"
      className="py-16 lg:py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80">
              <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">02.</span>
              <span>{t.projects.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.projects.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 self-start md:self-auto overflow-x-auto shadow-2xs">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.projects.filterAll}
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('web-mobile')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeFilter === 'web-mobile'
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.projects.filterWebMobile}
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('desktop-database')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeFilter === 'desktop-database'
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.projects.filterDesktopDb}
            </button>
          </div>
        </div>

        {/* 5 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700/60 transition-all duration-200 overflow-hidden"
            >
              {/* Image Preview Area */}
              <div className="relative aspect-16/10 bg-slate-100 dark:bg-slate-850 overflow-hidden border-b border-slate-100 dark:border-slate-800">
                <img
                  src={project.imagePath}
                  alt={project.title[lang]}
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />

                {/* Top overlay badges */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                  <span
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold backdrop-blur-md shadow-2xs ${
                      project.category === 'personal'
                        ? 'bg-blue-600 text-white'
                        : 'bg-indigo-600 text-white'
                    }`}
                  >
                    {project.categoryLabel[lang]}
                  </span>

                  <div className="w-7 h-7 rounded-md bg-white/90 dark:bg-slate-900/90 backdrop-blur-xs flex items-center justify-center shadow-2xs">
                    {getProjectIcon(project.id)}
                  </div>
                </div>

                {/* Bottom asset path badge */}
                <div className="absolute bottom-2 inset-x-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="px-2 py-1 rounded-md bg-slate-950/80 backdrop-blur-xs text-[10px] text-slate-200 font-mono truncate">
                    {project.imagePath}
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-100/80 dark:border-blue-900/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {project.title[lang]}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {project.description[lang]}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    <span>{t.projects.viewDetails}</span>
                    {isRTL ? (
                      <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    )}
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="Live Demo"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Transparency Banner */}
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
            <span>
              {lang === 'ar'
                ? 'مشاريع تطبيقية موثوقة: صور المعاينة مهيأة في مسار /public/projects/ كعناصر نائبة واضحة لاستبدالها بلقطات الشاشة الفعلية.'
                : 'Project screenshots are prepared in /public/projects/ as clean, honest placeholders ready to be replaced with live application assets.'}
            </span>
          </div>
          <a
            href="https://github.com/haithem-pro01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:underline shrink-0"
          >
            <span>github.com/haithem-pro01</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
