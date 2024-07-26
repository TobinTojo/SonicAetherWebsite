
// Download.js

import React from 'react';

export default function Download() {
  return (
    <section className="download">
      <div id="download-section">
        <h1 className="about-header" id="download-header">Download</h1>
        <img id="aether-download-sn" className="aether-download-icons" src="./images/render-swing.png" />
        <div className="social-media-icons">
          <a href="https://sonicfangameshq.com/forums/showcase/sonic-aether.1628/" target="_blank">
            <img src="./images/sage-logo.png" className="icon" alt="SAGE logo" />
          </a>
          <a href="https://drive.google.com/file/d/1FBrpYqqEvNu954NUZwx5fk8EfxdSBn2M/view?usp=sharing" target="_blank">
            <img src="./images/gdrive-logo.png" className="icon" alt="Google Drive logo" />
          </a>
        </div>
        <div className="blue-box-aether" id="download-info">
          <h1 className="download-text">PLAY THE GAME <span id="blue-text">RIGHT NOW!</span></h1>
        </div>
      </div>
    </section>
  );
}