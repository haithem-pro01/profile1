import React, { useState } from 'react';
import { Language } from '../types';
import { profileData } from '../data/portfolioData';
import { translations } from '../data/translations';
import { downloadCV, CV_DOWNLOAD_PATH } from '../utils/downloadCV';
import {
  Download,
  Mail,
  ArrowRight,
  ArrowLeft,
  Github,
  Linkedin,
  Phone,
  MapPin,
  MessageCircle,
  Copy,
  Check,
  Sparkles,
  Terminal,
  Cpu,
  Database,
  Code2,
  CheckCircle2,
  FileText,
  Workflow,
  Server,
  Layers,
} from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenCV }) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [activeCodeTab, setActiveCodeTab] = useState<'profile' | 'architecture'>('profile');
  const t = translations[lang];
  const isRTL = lang === 'ar';

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-b from-blue-50/40 via-white to-slate-50/60 dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950"
    >
      {/* Subtle blue technical background geometry */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-indigo-500/5 dark:bg-indigo-600/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Copy & Clear CTA Hierarchy (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Greeting Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{t.hero.greeting}</span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {isRTL ? (
                  <>
                    <span>هيثم </span>
                    <span className="text-blue-600 dark:text-blue-400">بن زرقة</span>
                  </>
                ) : (
                  <>
                    <span>Haithem </span>
                    <span className="text-blue-600 dark:text-blue-400">Benzerga</span>
                  </>
                )}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200">
                {profileData.title[lang]}
              </p>
            </div>

            {/* Academic Credentials Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs">
                <Cpu className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{t.hero.master}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs">
                <Terminal className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                <span>{t.hero.bachelor}</span>
              </span>
            </div>

            {/* Concise Value Proposition */}
            <p className="text-base sm:text-lg text-slate-650 text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {profileData.bio[lang]}
            </p>

            {/* CTA Hierarchy: 1. Projects (Primary) -> 2. Download CV (Secondary) -> 3. Preview CV -> 4. Contact Me */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary CTA: View My Projects */}
              <a
                href="#projects"
                id="hero-cta-projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>{t.hero.viewProjects}</span>
                {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </a>

              {/* Secondary CTA: Download CV (Direct Download) */}
              <button
                type="button"
                id="hero-cta-download-cv"
                onClick={() => {
                  downloadCV();
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 border border-slate-300 dark:border-slate-650 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                title="Download Haithem Benzerga CV (PDF)"
              >
                <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{t.hero.downloadCV}</span>
              </button>

              {/* Preview CV Modal Button */}
              <button
                type="button"
                id="hero-cta-preview-cv"
                onClick={onOpenCV}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200/80 dark:border-slate-700/80 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                title="Open interactive CV preview"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{t.hero.previewCV}</span>
              </button>

              {/* Third CTA: Contact Me */}
              <a
                href="#contact"
                id="hero-cta-contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{t.hero.contactMe}</span>
              </a>
            </div>

            {/* Quick Contact & Recruiter Links Row */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                {/* GitHub */}
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-social-github"
                  className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 transition-colors"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                {/* LinkedIn */}
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-social-linkedin"
                  className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 transition-colors"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* Direct Email */}
                <a
                  href={`mailto:${profileData.email}`}
                  id="hero-social-email"
                  className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 transition-colors"
                  title={`Email: ${profileData.email}`}
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/213${profileData.whatsApp.replace(/^0/, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-social-whatsapp"
                  className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400 hover:border-emerald-400 transition-colors"
                  title={`WhatsApp: ${profileData.whatsApp}`}
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                {/* Phone Copy Pill */}
                <button
                  type="button"
                  id="hero-contact-phone-pill"
                  onClick={() => copyToClipboard(profileData.phone, 'phone')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-400 transition-colors cursor-pointer group"
                  title="Click to copy phone number"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span className="font-mono text-xs">{profileData.phone}</span>
                  {copiedText === 'phone' ? (
                    <Check className="w-3 h-3 text-emerald-500" />
                  ) : (
                    <Copy className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>

                {/* Location Badge */}
                <div
                  id="hero-location-badge"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-slate-600 dark:text-slate-400 text-xs"
                >
                  <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span>{profileData.location[lang]}</span>
                </div>
              </div>

              {copiedText && (
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1.5 animate-in fade-in">
                  ✓ {t.hero.copySuccess}
                </p>
              )}
            </div>
          </div>

          {/* Right Column: Integrated Developer & AI Visual Panel (5 Cols) */}
          <div className="lg:col-span-5 relative">
            {/* System Window Frame */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden text-white">
              {/* Window Titlebar with tabs */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                <div className="flex items-center gap-1 bg-slate-900 px-2 py-1 rounded-md border border-slate-800">
                  <button
                    type="button"
                    onClick={() => setActiveCodeTab('profile')}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      activeCodeTab === 'profile'
                        ? 'bg-blue-600/30 text-blue-300 font-semibold border border-blue-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    engineer.py
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCodeTab('architecture')}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      activeCodeTab === 'architecture'
                        ? 'bg-blue-600/30 text-blue-300 font-semibold border border-blue-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    architecture.json
                  </button>
                </div>

                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/60">
                  ACTIVE
                </span>
              </div>

              {/* Code Panel Body */}
              <div className="p-4 font-mono text-xs space-y-2 bg-slate-950/90 leading-relaxed overflow-x-auto">
                {activeCodeTab === 'profile' ? (
                  <div className="space-y-1 text-slate-300">
                    <div className="text-slate-500"># Haitian Benzerga · System Definition</div>
                    <div>
                      <span className="text-purple-400">class</span>{' '}
                      <span className="text-yellow-300">HaithemBenzerga</span>:
                    </div>
                    <div className="pl-4 space-y-0.5">
                      <div>
                        <span className="text-blue-400">role</span> ={' '}
                        <span className="text-emerald-300">"AI Developer / SWE"</span>
                      </div>
                      <div>
                        <span className="text-blue-400">degree</span> ={' '}
                        <span className="text-emerald-300">"Master 1 in Artificial Intelligence"</span>
                      </div>
                      <div>
                        <span className="text-blue-400">alma_mater</span> ={' '}
                        <span className="text-emerald-300">"Ahmed Draia University of Adrar"</span>
                      </div>
                      <div>
                        <span className="text-blue-400">core_domains</span> = [
                      </div>
                      <div className="pl-4 text-cyan-300">
                        "Desktop (Python, SQLite)",<br />
                        "Mobile (Flutter, Supabase)",<br />
                        "AI & Machine Learning Systems"
                      </div>
                      <div>]</div>
                    </div>
                    <div className="pt-1">
                      <span className="text-purple-400">def</span>{' '}
                      <span className="text-yellow-300">build_software</span>(self):
                    </div>
                    <div className="pl-4 text-slate-400">
                      return <span className="text-emerald-300">"Practical, maintainable software."</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1 text-slate-300">
                    <div className="text-slate-500">// Real System Architectures in Portfolio</div>
                    <div className="text-amber-300">&#123;</div>
                    <div className="pl-4 space-y-0.5">
                      <div>
                        <span className="text-blue-400">"mobile_app"</span>: &#123;{' '}
                        <span className="text-slate-400">"tech"</span>:{' '}
                        <span className="text-emerald-300">"Flutter + Supabase"</span>,{' '}
                        <span className="text-slate-400">"type"</span>:{' '}
                        <span className="text-cyan-300">"Vacation Rental"</span> &#125;,
                      </div>
                      <div>
                        <span className="text-blue-400">"clinical_stock"</span>: &#123;{' '}
                        <span className="text-slate-400">"tech"</span>:{' '}
                        <span className="text-emerald-300">"Python + SQLite"</span>,{' '}
                        <span className="text-slate-400">"type"</span>:{' '}
                        <span className="text-cyan-300">"Hospital Stock"</span> &#125;,
                      </div>
                      <div>
                        <span className="text-blue-400">"enterprise_tools"</span>: &#123;{' '}
                        <span className="text-slate-400">"tech"</span>:{' '}
                        <span className="text-emerald-300">"Python + SQLite"</span>,{' '}
                        <span className="text-slate-400">"type"</span>:{' '}
                        <span className="text-cyan-300">"Inventory & Archive"</span> &#125;,
                      </div>
                      <div>
                        <span className="text-blue-400">"ai_direction"</span>:{' '}
                        <span className="text-emerald-300">"Graduate AI & Heuristic Models"</span>
                      </div>
                    </div>
                    <div className="text-amber-300">&#125;</div>
                  </div>
                )}
              </div>

              {/* Sub-panel: System Indicators & Software Architecture Badges */}
              <div className="p-4 bg-slate-900 border-t border-slate-800 space-y-3">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <div className="truncate">
                      <div className="text-[10px] text-slate-400">Persistence</div>
                      <div className="font-semibold text-slate-200">SQLite · Supabase</div>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center gap-2">
                    <Server className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <div className="truncate">
                      <div className="text-[10px] text-slate-400">Runtimes</div>
                      <div className="font-semibold text-slate-200">Python · Flutter</div>
                    </div>
                  </div>
                </div>

                {/* Footer Tagline */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    HBZ · Engineering Station
                  </span>
                  <span className="font-medium text-slate-300">{t.hero.motto}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
