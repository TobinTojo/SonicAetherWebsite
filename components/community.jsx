import React from 'react';
import ReactDOM from 'react-dom/client';


export default function Community() {
         return (
            <section className="community">
                <div id="community-section">
                    <h1 className="community-header">Community</h1>
                     <div id="community-aether">
                        <p className="devlog-text"> Join the <span className="border-text-devlog">Discord</span> server that has more than 100 members where you can interact with the <span className="border-text-devlog">community</span>, get access to <span className="border-text-devlog">early updates</span>, contribute to the project and give suggestions for Tobin to implement.</p>
                    </div>
                    <img id="discord-icon" src="./images/invite-img.png" />
                    <div className="social-discord-icons">
                        <a href="https://discord.com/invite/QgvzyXhQWg" target="_blank">
                            <img src="./images/discord-icon-invite.png" alt="Discord Icon" className="discord-icon-invite"/>
                        </a>
                    </div>
                </div>
            </section>
        )
}

