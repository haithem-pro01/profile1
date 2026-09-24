/**
 * Universal CV Download utility for Haithem Benzerga's portfolio.
 * Safely fetches the PDF binary and triggers an in-browser Blob download
 * without navigating away from the page, opening blank tabs, or triggering viewer crashes.
 */

export const CV_FILE_NAME = 'Haithem-Ben-Zerga-CV.pdf';
export const CV_FILE_PATH = '/cv/Haithem-Ben-Zerga-CV.pdf';
export const CV_DOWNLOAD_PATH = '/cv/Haithem-Ben-Zerga-CV.pdf';

export async function downloadCV(filename: string = CV_FILE_NAME): Promise<boolean> {
  // Strategy 1: Fetch binary as Blob and trigger direct download via object URL
  try {
    const res = await fetch(CV_FILE_PATH, {
      method: 'GET',
      headers: {
        Accept: 'application/pdf',
      },
      cache: 'no-cache',
    });

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}: ${res.statusText}`);
    }

    const blob = await res.blob();
    const pdfBlob = new Blob([blob], { type: 'application/pdf' });
    const blobUrl = window.URL.createObjectURL(pdfBlob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    link.style.position = 'fixed';
    link.style.left = '-9999px';
    link.style.top = '-9999px';
    link.style.opacity = '0';
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
      window.URL.revokeObjectURL(blobUrl);
    }, 1500);

    return true;
  } catch (err) {
    console.warn('Blob download fetch failed, falling back to direct link download:', err);
  }

  // Strategy 2: Direct anchor with download attribute (No target="_blank" to prevent blank tab crash)
  try {
    const link = document.createElement('a');
    link.href = CV_FILE_PATH;
    link.download = filename;
    link.style.position = 'fixed';
    link.style.left = '-9999px';
    link.style.top = '-9999px';
    link.style.opacity = '0';
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
    }, 1500);

    return true;
  } catch (fallbackErr) {
    console.error('All CV download strategies failed:', fallbackErr);
    return false;
  }
}
