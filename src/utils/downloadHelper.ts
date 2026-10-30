export const SAMPLE_PDF_URL = '/sample-preview.pdf';
export const BACKUP_PDF_URL = '/assets/aistudio/Python_Mastery_Sample_Preview_With_Index_87594950.pdf';

/**
 * Triggers reliable direct download of the Free Sample Preview PDF
 */
export function downloadSamplePdf(): void {
  const link = document.createElement('a');
  link.href = SAMPLE_PDF_URL;
  link.download = 'Python_Mastery_Sample_Preview_Abhishek_Prajapati.pdf';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Opens the sample preview PDF directly in a new browser window/tab
 */
export function openSamplePdfInNewTab(): void {
  window.open(SAMPLE_PDF_URL, '_blank', 'noopener,noreferrer');
}
