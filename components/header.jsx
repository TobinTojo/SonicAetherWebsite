import React from 'react';
import ReactDOM from 'react-dom/client';


export default function Header() {
    return (
        <nav>
            <a href="#hero-section"><button className="nav-text"></button><img id="logo-img" src="./images/logo-aether.png" /></a>
            <div className="nav-buttons">
                <a href="#about-title"><button className="nav-text">About</button></a>
                <a href="#devlog-section" className="navbar-links"><button className="nav-text">Devlogs</button></a>
                <a href="#download-section"><button className="nav-text" id="support">Download</button></a>
                <a href="#community-section"><button className="nav-text" id="support">Community</button></a>
            </div>
        </nav>
    )
}