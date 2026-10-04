import { useState, useCallback } from 'react';
import { profileData } from '../data/portfolioData';

const STORAGE_KEY = 'haithem_custom_avatar';

export function useProfilePhoto() {
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

  const uploadPhoto = useCallback((file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!file.type.startsWith('image/')) {
        reject(new Error('File is not an image'));
        return;
      }
      if (file.size > 8 * 1024 * 1024) {
        reject(new Error('Image size must be under 8MB'));
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
          reject(new Error('Failed to read image'));
        }
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
  }, []);

  const resetPhoto = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setPhotoUrlState(profileData.photoUrl || '/haithem-photo.jpg');
    setIsCustom(false);
  }, []);

  return {
    photoUrl,
    isCustom,
    uploadPhoto,
    resetPhoto,
  };
}
