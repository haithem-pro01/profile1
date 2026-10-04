import { useState, useCallback } from 'react';
import { profileData } from '../data/portfolioData';

const STORAGE_KEY = 'haithem_custom_avatar';
const OWNER_SESSION_KEY = 'haithem_owner_session';
const OWNER_PASSCODE_KEY = 'haithem_owner_passcode';
const DEFAULT_PASSCODE = 'haithem2026';

export function useProfilePhoto() {
  // Check if owner session exists or URL parameter (?owner=true or ?admin=...)
  const [isOwner, setIsOwner] = useState<boolean>(() => {
    try {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        if (params.get('owner') === 'true' || params.get('admin') === 'true') {
          try {
            localStorage.setItem(OWNER_SESSION_KEY, 'true');
          } catch {
            // ignore
          }
          return true;
        }
        return localStorage.getItem(OWNER_SESSION_KEY) === 'true';
      }
    } catch {
      // ignore
    }
    return false;
  });

  const [photoUrl, setPhotoUrlState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && saved.trim()) return saved;
    } catch {
      // ignore
    }
    return profileData.photoUrl || '/haithem-photo.jpg';
  });

  const [isCustom, setIsCustom] = useState<boolean>(() => {
    try {
      return !!localStorage.getItem(STORAGE_KEY);
    } catch {
      return false;
    }
  });

  // Owner authentication
  const loginOwner = useCallback((passcode: string): boolean => {
    try {
      const storedPasscode = localStorage.getItem(OWNER_PASSCODE_KEY) || DEFAULT_PASSCODE;
      const cleanInput = passcode.trim();
      // Valid passcodes: custom stored passcode, default "haithem2026", or owner's primary identifiers
      if (
        cleanInput === storedPasscode ||
        cleanInput === DEFAULT_PASSCODE ||
        cleanInput === 'haithem' ||
        cleanInput === '0696980328'
      ) {
        localStorage.setItem(OWNER_SESSION_KEY, 'true');
        setIsOwner(true);
        return true;
      }
    } catch (err) {
      console.warn('Owner login error', err);
    }
    return false;
  }, []);

  const logoutOwner = useCallback(() => {
    try {
      localStorage.removeItem(OWNER_SESSION_KEY);
    } catch {
      // ignore
    }
    setIsOwner(false);
  }, []);

  const changePasscode = useCallback((oldPass: string, newPass: string): boolean => {
    try {
      const stored = localStorage.getItem(OWNER_PASSCODE_KEY) || DEFAULT_PASSCODE;
      if (oldPass.trim() === stored && newPass.trim().length >= 4) {
        localStorage.setItem(OWNER_PASSCODE_KEY, newPass.trim());
        return true;
      }
    } catch {
      // ignore
    }
    return false;
  }, []);

  const uploadPhoto = useCallback(
    (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        // Enforce owner check: visitors cannot upload
        const hasSession =
          typeof window !== 'undefined'
            ? localStorage.getItem(OWNER_SESSION_KEY) === 'true'
            : false;

        if (!isOwner && !hasSession) {
          reject(
            new Error(
              'الوصول محصور بمالك الموقع فقط. الزوار ليس لديهم صلاحية تعديل الصورة (Owner only)'
            )
          );
          return;
        }

        if (!file.type.startsWith('image/')) {
          reject(new Error('الملف المحدد ليس صورة (File is not an image)'));
          return;
        }
        if (file.size > 8 * 1024 * 1024) {
          reject(
            new Error('حجم الصورة يجب أن يكون أقل من 8 ميغابايت (Max image size: 8MB)')
          );
          return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          if (result) {
            try {
              localStorage.setItem(STORAGE_KEY, result);
            } catch (err) {
              console.warn('localStorage quota exceeded', err);
            }
            setPhotoUrlState(result);
            setIsCustom(true);
            resolve(result);
          } else {
            reject(new Error('فشل قراءة ملف الصورة'));
          }
        };
        reader.onerror = () => reject(new Error('حدث خطأ أثناء قراءة الملف'));
        reader.readAsDataURL(file);
      });
    },
    [isOwner]
  );

  const resetPhoto = useCallback(() => {
    const hasSession =
      typeof window !== 'undefined'
        ? localStorage.getItem(OWNER_SESSION_KEY) === 'true'
        : false;

    if (!isOwner && !hasSession) return;

    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setPhotoUrlState(profileData.photoUrl || '/haithem-photo.jpg');
    setIsCustom(false);
  }, [isOwner]);

  return {
    photoUrl,
    isCustom,
    isOwner,
    loginOwner,
    logoutOwner,
    changePasscode,
    uploadPhoto,
    resetPhoto,
  };
}
