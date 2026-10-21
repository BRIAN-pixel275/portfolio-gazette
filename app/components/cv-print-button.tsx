"use client";

export default function CvPrintButton() {
  return (
    <button className="cv-print-button" type="button" onClick={() => window.print()}>
      Save as PDF / Print
    </button>
  );
}
