import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';

function Header() {
    return (
        <Router>
            <div className='row'>
                <Navigation />
            </div>

            <div className='container'>
                <Routes>
                    <Route
                        path="/"
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