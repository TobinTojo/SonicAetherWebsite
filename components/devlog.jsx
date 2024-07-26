import React from 'react';
import ReactDOM from 'react-dom/client';


export default function Devlog() {
         return (
            <section className="devlog">
                <div id="devlog-section">
                    <h1 className="devlog-header">Devlogs</h1>
                     <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=IHaVM6WnYZp7pL52&amp;list=PLWbfFUUXvWUgb66293xDIdQbUCcE_grJp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                     <div id="devlogs-aether">
                        <p className="devlog-text"> A deep dive into the creation of the thrilling 3D Sonic fan game, Sonic Aether. Developed by <span className="border-text-devlog">Tobin</span>, this series uncovers the journey from the game’s inception to its latest enhancements such as <span className="border-text-devlog">new mechanics</span>, <span className="border-text-devlog">new models</span> and <span className="border-text-devlog">animations</span>. The inspiration behind these devlogs was to spread awareness about the fan game as it was being launched for the<span className="border-text-devlog">Sonic Amateur Games Expo.</span></p>
                    </div>
                </div>
            </section>
        )
}

