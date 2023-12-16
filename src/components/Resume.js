import React from 'react';

// Display Resume page with download link
const Resume = () => {
  return (
    <div className="content mb-3">
      <h1>My Resume</h1>
      <p>
        Thank you for your interest in my resume. Click the button below to download a PDF copy.
      </p>
      <a href="assets/Jullian_Calkins_Resume.pdf" download className="download-button blue">
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
