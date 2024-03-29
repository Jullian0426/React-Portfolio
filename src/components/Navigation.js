import React from 'react';
import { NavLink } from "react-router-dom";

// Navbar with NavLinks to send the user to corresponding page
function Navigation() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-2">
            <a className="navbar-brand" href="/React-Portfolio/">Jullian Calkins</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/React-Portfolio/about" className="nav-link">About Me</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/React-Portfolio/portfolio" className="nav-link">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/React-Portfolio/contact" className="nav-link">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/React-Portfolio/resume" className="nav-link">Resume</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navigation;