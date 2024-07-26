import React from 'react';
import ReactDOM from 'react-dom/client';


export default function Hero() {
     return (
        <section className="hero">
            <div id= "hero-section">
               <img id="aether-logo" src="./images/aether-logo.png" />
               <div className="aether-hero-icons">
                     <img id="aether-tl" className="icon-img"  src="./images/render-jump-3.png" />
                     <img id="aether-sn" className="icon-img"  src="./images/render-jump-1.png" />
                     <img id="aether-kn" className="icon-img" src="./images/render-jump-2.png" />
                </div>
                  <div className="button">
                  <a href="#download-section">
                  <div className="text">Download Now</div>
                  </a>
                  </div>
            </div>
        </section>
     )
}