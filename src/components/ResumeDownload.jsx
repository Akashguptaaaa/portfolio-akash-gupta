function ResumeDownload() {
  const handleDownloadPDF = () => {
    // Download PDF from public folder
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Akash_Ashok_Gupta_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="card resume-section">
      <h2>Resume</h2>
      <div className="resume-content">
        <p>Download my professional resume to learn more about my experience and qualifications.</p>
        <button className="btn-download" onClick={handleDownloadPDF} disabled>
          📥 Download Resume (PDF)
        </button>
        <p className="resume-note">
          Click the button above to download my complete resume in PDF format.
        </p>
      </div>
    </section>
  );
}

export default ResumeDownload;
