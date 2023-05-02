import React from 'react';

// Render the about section to the page
const About = () => {
  return (
    <div className="content">
      <h1 className='text-center'>About Me</h1>
      <img src='assets/images/photo.jpg' alt='Jullian' className='img-thumbnail rounded mx-auto d-block' style={{"width":"170px","height":"200px"}}/>
      <p>
        Hello! I'm Jullian, a passionate Web Developer in training. I enjoy
        working on exciting projects that challenge me and help me grow professionally.
      </p>
      <p>
        In my free time, I like to play video games. I'm always eager to learn new technologies and methodologies to
        improve my skill set and deliver the best results for my clients.
      </p>
    </div>
  );
};

export default About;
