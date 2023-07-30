import React from 'react';

// Display logos with links in footer
function Footer() {
    return (
        <footer className='card-footer d-flex flex-row justify-content-center align-bottom' id='footer'>
                <a href="https://github.com/Jullian0426" className='mx-5'>
                    <img src="https://img.icons8.com/ios-glyphs/50/000000/github.png" alt="GitHub" className="icon" />
                </a>
                <a href="https://linkedin.com/in/jullian-calkins-9349a6273" className='mx-5'>
                    <img src="https://img.icons8.com/ios-glyphs/50/000000/linkedin.png" alt="LinkedIn" className="icon" />
                </a>
        </footer>

    )
};

export default Footer;