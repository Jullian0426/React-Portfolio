import React from 'react';

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>My Resume</h1>
      <p>
        Thank you for your interest in my resume. Click the button below to download a PDF copy.
      </p>
      <p download="Your_Name_Resume.pdf" className="download-button">
        Download Resume
      </p>
    </div>
  );
};

export default Resume;
