import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

function Header() {
    return (
        <Router>
            <div className='row' id='header'>
                <Navigation />
            </div>

            <div className='container' id='container'>
                <Routes>
                    <Route
                        path="/about"
                        element={<About />}
                    />
                    <Route
                        path="/portfolio"
                        element={<Portfolio />}
                    />
                    <Route
                        path="/contact"
                        element={<Contact />}
                    />
                    <Route
                        path="/resume"
                        element={<Resume />}
                    />
                </Routes>
            </div>
        </Router>
    )
};

export default Header;