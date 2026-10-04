import React, { useRef, useState, useEffect } from 'react';
import { Language } from '../types';
import { profileData } from '../data/portfolioData';
import { translations } from '../data/translations';
import {
  X,
  Upload,
  RotateCcw,
  Check,
  Camera,
  ShieldCheck,
  Lock,
  Unlock,
  KeyRound,
  Download,
  AlertCircle,
  Eye,
} from 'lucide-react';

interface ProfilePhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  photoUrl: string;
  isCustom: boolean;
  isOwner: boolean;
  onLoginOwner: (passcode: string) => boolean;
  onLogoutOwner: () => void;
  onUploadPhoto: (file: File) => Promise<string>;
  onResetPhoto: () => void;
}

export const ProfilePhotoModal: React.FC<ProfilePhotoModalProps> = ({
  isOpen,
  onClose,
  lang,
  photoUrl,
  isCustom,
  isOwner,
  onLoginOwner,
  onLogoutOwner,
  onUploadPhoto,
  onResetPhoto,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Discreet owner authentication trigger (hidden from visitors)
  const [showAuthBox, setShowAuthBox] = useState(false);
  const [passcodeInput, setPasscodeInput] = useState('');
  const [authError, setAuthError] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Keyboard shortcut to trigger owner login (Alt + O)
  useEffect(() => {
    if (!isOpen || isOwner) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === 'o' || e.key === 'O' || e.key === 'خ')) {
        e.preventDefault();
        setShowAuthBox((prev) => !prev);
        setAuthError(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isOwner]);

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
      setTimeout(() => setSuccessMsg(false), 3500);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Error updating photo');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleSecretTrigger = () => {
    if (isOwner) return;
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 3) {
      setShowAuthBox(true);
      setAuthError(false);
      setClickCount(0);
    }
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcodeInput.trim()) return;

    const ok = onLoginOwner(passcodeInput);
    if (ok) {
      setAuthError(false);
      setShowAuthBox(false);
      setPasscodeInput('');
    } else {
      setAuthError(true);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="photo-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden transition-all max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0">
          <div className="flex items-center gap-2.5">
            {/* Camera icon with secret owner trigger on triple-click */}
            <button
              type="button"
              onClick={handleSecretTrigger}
              className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 focus:outline-hidden cursor-default"
              title=""
            >
              <Camera className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h3 id="photo-modal-title" className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  {t.photo.photoModalTitle}
                </h3>
                {isOwner && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                    <ShieldCheck className="w-3 h-3" />
                    {t.photo.ownerBadge}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {profileData.title[lang]}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label={t.photo.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 space-y-5 overflow-y-auto">
          {/* Main Photo Card with Glow Frame */}
          <div className="relative group mx-auto w-60 h-60 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-xl bg-slate-950">
            <img
              src={photoUrl}
              alt={profileData.name[lang]}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />

            {/* Official Verified Badge on Top Left */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-medium text-cyan-400 flex items-center gap-1.5 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.photo.verifiedBadge}</span>
            </div>

            {/* Status indicator on Top Right */}
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-medium text-emerald-400 flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.photo.availableBadge}</span>
            </div>

            {/* Bottom branding overlay */}
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent text-white text-xs">
              <p className="font-bold">{profileData.name[lang]}</p>
              <p className="text-[11px] text-slate-300 font-mono">
                {profileData.location[lang]} · {profileData.university[lang]}
              </p>
            </div>
          </div>

          {/* Success / Error Messages for Owner */}
          {successMsg && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-700 dark:text-emerald-300 flex items-center gap-2 animate-in fade-in">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{t.photo.photoSaved}</span>
            </div>
          )}

          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* ========================================================= */}
          {/* SECTION 1: VISITOR VIEW (Default for all public visitors)  */}
          {/* ========================================================= */}
          {!isOwner && (
            <div className="space-y-4">
              {/* Clean Official Verified Notice */}
              <div className="p-3.5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <p className="leading-relaxed font-medium">{t.photo.visitorNotice}</p>
              </div>

              {/* Visitor Action Buttons (View & Download) - Clean & Professional */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <a
                  href={photoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-800/40 border border-blue-200 dark:border-blue-700/50 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{t.photo.openFullRes}</span>
                </a>

                <a
                  href={photoUrl}
                  download="Haithem-Benzerga.jpg"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.photo.downloadPhoto}</span>
                </a>
              </div>

              {/* Secret Owner Authentication Form (Only displayed if deliberately triggered via Alt+O or triple-click) */}
              {showAuthBox && (
                <form
                  onSubmit={handleAuthSubmit}
                  className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-3 animate-in fade-in"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
                      <KeyRound className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span>{t.photo.enterPasscode}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowAuthBox(false)}
                      className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                    >
                      {t.photo.passcodeCancel}
                    </button>
                  </div>

                  <div className="space-y-2">
                    <input
                      type="password"
                      value={passcodeInput}
                      onChange={(e) => {
                        setPasscodeInput(e.target.value);
                        setAuthError(false);
                      }}
                      placeholder={t.photo.passcodePlaceholder}
                      autoFocus
                      className="w-full px-3.5 py-2 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                    />

                    {authError && (
                      <p className="text-[11px] text-rose-500 font-medium">
                        {t.photo.passcodeError}
                      </p>
                    )}

                    <div className="flex items-center justify-end pt-1">
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm cursor-pointer"
                      >
                        {t.photo.passcodeSubmit}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* ========================================================= */}
          {/* SECTION 2: OWNER VIEW (Only for authenticated owner)     */}
          {/* ========================================================= */}
          {isOwner && (
            <div className="space-y-4 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Unlock className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                    {t.photo.ownerBadge} · هيثم بن زرقة
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onLogoutOwner}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  title={t.photo.ownerLogoutBtn}
                >
                  <Lock className="w-3 h-3 text-slate-500" />
                  <span>{t.photo.ownerLogoutBtn}</span>
                </button>
              </div>

              {/* Action Buttons for Owner */}
              <div className="space-y-3 pt-1">
                <div className="flex flex-col sm:flex-row items-center gap-2.5">
                  {/* Hidden File Input */}
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
                    className="w-full flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all shadow-md shadow-blue-500/20 cursor-pointer disabled:opacity-60"
                  >
                    <Upload className="w-4 h-4" />
                    <span>{isUploading ? '...' : t.photo.changePhoto}</span>
                  </button>

                  {/* Reset button if custom */}
                  {isCustom && (
                    <button
                      type="button"
                      onClick={onResetPhoto}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
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
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 dark:bg-slate-850 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 shrink-0">
          <span className="font-mono flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
            Haithem Benzerga · Verified Portfolio
          </span>
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
