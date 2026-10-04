import React, { useRef, useState } from 'react';
import { Language } from '../types';
import { profileData } from '../data/portfolioData';
import { translations } from '../data/translations';
import { X, Upload, RotateCcw, Check, Sparkles, User, Camera, ExternalLink } from 'lucide-react';

interface ProfilePhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  photoUrl: string;
  isCustom: boolean;
  onUploadPhoto: (file: File) => Promise<string>;
  onResetPhoto: () => void;
}

export const ProfilePhotoModal: React.FC<ProfilePhotoModalProps> = ({
  isOpen,
  onClose,
  lang,
  photoUrl,
  isCustom,
  onUploadPhoto,
  onResetPhoto,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const t = translations[lang];
  const isRTL = lang === 'ar';

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      setErrorMsg(null);
      await onUploadPhoto(file);
      setSuccessMsg(true);
      setTimeout(() => setSuccessMsg(false), 3000);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Error updating photo');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="photo-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden transition-all"
        onClick={(e) => e.stopPropagation()}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 id="photo-modal-title" className="font-bold text-base text-slate-900 dark:text-white">
                {t.photo.photoModalTitle}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {profileData.title[lang]}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={t.photo.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Main Photo Card with Glow Frame */}
          <div className="relative group mx-auto w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-xl bg-slate-950">
            <img
              src={photoUrl}
              alt={profileData.name[lang]}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />

            {/* Status indicator on top corner */}
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-medium text-emerald-400 flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.photo.availableBadge}</span>
            </div>

            {/* Bottom branding overlay */}
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent text-white text-xs">
              <p className="font-bold">{profileData.name[lang]}</p>
              <p className="text-[11px] text-slate-300 font-mono">{profileData.location[lang]}</p>
            </div>
          </div>

          {/* Messages */}
          {successMsg && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{t.photo.photoSaved}</span>
            </div>
          )}

          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-xs text-rose-700 dark:text-rose-300">
              {errorMsg}
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* File upload input hidden */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp,image/jpg"
                className="hidden"
                onChange={handleFileChange}
              />

              {/* Upload Button */}
              <button
                type="button"
                disabled={isUploading}
                onClick={() => fileInputRef.current?.click()}
                className="w-full flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all shadow-md shadow-blue-500/20 cursor-pointer disabled:opacity-60"
              >
                <Upload className="w-4 h-4" />
                <span>{isUploading ? '...' : t.photo.changePhoto}</span>
              </button>

              {/* Reset button if custom */}
              {isCustom && (
                <button
                  type="button"
                  onClick={onResetPhoto}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  title={t.photo.resetPhoto}
                >
                  <RotateCcw className="w-4 h-4 text-slate-500" />
                  <span>{t.photo.resetPhoto}</span>
                </button>
              )}
            </div>

            <p className="text-center text-xs text-slate-500 dark:text-slate-400">
              {t.photo.uploadHint}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 dark:bg-slate-850 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span className="font-mono">Haithem Benzerga · Portfolio</span>
          <button
            type="button"
            onClick={onClose}
            className="font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            {t.photo.close}
          </button>
        </div>
      </div>
    </div>
  );
};
