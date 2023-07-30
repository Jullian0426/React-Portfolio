import React from 'react';

// Render the about section to the page
const About = () => {
    return (
        <div className="content">
            <h1 className='text-center'>About Me</h1>
            <img src='assets/images/photo.jpg' alt='Jullian' className='img-thumbnail rounded mx-auto d-block my-3' style={{ "width": "170px", "height": "200px" }} />
            <p style={{"textIndent": "40px"}}>
                Hello, I'm Jullian! As a recent graduate of a Full-Stack Web Development Bootcamp, I've discovered a passion for creating efficient, clean, and effective code. I'm adept at bringing together various components into a cohesive, fully functioning website, and I'm always excited to take on new challenges that push my abilities.
            </p>
            <p style={{"textIndent": "40px"}}>
                What sets me apart is not just my technical skills, but also my determination to learn and improve. I believe in a lifelong learning approach to my career and I'm not afraid to dive into unfamiliar territories. Whether it's a new programming language, a framework, or a design pattern, I'm eager to master it.
            </p>
            <p style={{"textIndent": "40px"}}>
                I'm not just a coder, but a problem solver. I take great satisfaction in resolving complex coding challenges and improving the usability and efficiency of web applications. Above all, my goal is to contribute to a team where my passion for coding, my willingness to learn, and my ability to solve problems can make a real difference.
            </p>
        </div>
    );
};

export default About;
