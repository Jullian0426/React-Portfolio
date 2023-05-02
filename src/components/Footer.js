import React from 'react';

function Footer() {
    return (
        <footer className='card-footer d-flex flex-row justify-content-center align-bottom' id='footer'>
                <a href="https://github.com/Jullian0426" className='mx-5'>
                    <img src="https://img.icons8.com/ios-glyphs/50/000000/github.png" alt="GitHub" className="icon" />
                </a>
                <a href="https://linkedin.com/in/jullian-calkins-9349a6273" className='mx-5'>
                    <img src="https://img.icons8.com/ios-glyphs/50/000000/linkedin.png" alt="LinkedIn" className="icon" />
                </a>
                <a href="https://stackoverflow.com/users/21731596/miracles413" className='mx-5'>
                    <img src="https://img.icons8.com/ios-filled/50/000000/stackoverflow.png" alt="Stack Overflow" className="icon" />
                </a>
        </footer>

    )
};

export default Footer;