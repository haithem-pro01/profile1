import React, { useState } from 'react';
import { Language } from '../types';
import { profileData } from '../data/portfolioData';
import { translations } from '../data/translations';
import {
  Mail,
  Phone,
  MessageCircle,
  Github,
  Linkedin,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = translations[lang];
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('job');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState<string | null>(null);

  const copyValue = (val: string, key: string) => {
    navigator.clipboard.writeText(val);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormError(
        lang === 'ar'
          ? 'يرجى تعبئة جميع الحقول المطلوبة بشكل صحيح.'
          : 'Please fill in all required fields.'
      );
      return;
    }

    setStatus('sending');

    setTimeout(() => {
      // Build mailto URI as immediate, dependable recruiter bridge
      const subjectText = encodeURIComponent(`[Portfolio Contact - ${subject}] from ${name}`);
      const bodyText = encodeURIComponent(
        `Hello Haithem,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent via Portfolio Contact Form.`
      );
      const mailtoLink = `mailto:${profileData.email}?subject=${subjectText}&body=${bodyText}`;

      // Open mail client
      window.location.href = mailtoLink;

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');

      setTimeout(() => setStatus('idle'), 6000);
    }, 800);
  };

  return (
    <section
      id="contact"
      className="py-16 lg:py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/80 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{t.contact.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 flex items-center justify-between group">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {t.contact.emailLabel}
                  </p>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block truncate"
                  >
                    {profileData.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyValue(profileData.email, 'email')}
                className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copiedKey === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {t.contact.phoneLabel}
                  </p>
                  <a
                    href={`tel:${profileData.phone}`}
                    className="text-xs sm:text-sm font-mono font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block"
                  >
                    {profileData.phone}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyValue(profileData.phone, 'phone')}
                className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title="Copy Phone"
              >
                {copiedKey === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* WhatsApp Card */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {t.contact.whatsappLabel}
                  </p>
                  <a
                    href={`https://wa.me/213${profileData.whatsApp.replace(/^0/, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-mono font-semibold text-emerald-600 dark:text-emerald-400 hover:underline block"
                  >
                    {profileData.whatsApp}
                  </a>
                </div>
              </div>
              <a
                href={`https://wa.me/213${profileData.whatsApp.replace(/^0/, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
                title="Open WhatsApp Chat"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* GitHub Card */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 flex items-center justify-between group">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {t.contact.githubLabel}
                  </p>
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block truncate"
                  >
                    github.com/haithem-pro01
                  </a>
                </div>
              </div>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 flex items-center justify-between group">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {t.contact.linkedinLabel}
                  </p>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block truncate"
                  >
                    linkedin.com/in/haithem-benzerga
                  </a>
                </div>
              </div>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Location Badge */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {t.contact.locationLabel}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                  {profileData.location[lang]} · {profileData.university[lang]}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-xs space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    {t.contact.formName} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'ar' ? 'أدخل اسمك الكريم' : 'e.g. Sarah Connor'}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    {t.contact.formEmail} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={lang === 'ar' ? 'your.email@company.com' : 'your.email@company.com'}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Subject Dropdown */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-subject"
                  className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                >
                  {t.contact.formSubject}
                </label>
                <select
                  id="contact-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                >
                  <option value="job">{t.contact.formSubjectJob}</option>
                  <option value="project">{t.contact.formSubjectProject}</option>
                  <option value="inquiry">{t.contact.formSubjectInquiry}</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                >
                  {t.contact.formMessage} <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    lang === 'ar'
                      ? 'اكتب رسالتك أو تفاصيل المشروع هنا...'
                      : 'Tell me about your project, team, or opportunity...'
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-y"
                />
              </div>

              {formError && (
                <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>{t.contact.messageSent}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                id="contact-submit-button"
                disabled={status === 'sending'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-500/25 transition-colors disabled:opacity-50 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{status === 'sending' ? t.contact.sending : t.contact.sendMessage}</span>
              </button>

              {/* Sub-note */}
              <p className="text-[11px] text-center text-slate-500 dark:text-slate-400 pt-1">
                {t.contact.formNotice}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
