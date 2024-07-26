import React from 'react';
import ReactDOM from 'react-dom/client';


export default function About() {
    
    const [slideIndex, setSlides] = React.useState(1)
    const [animation, setAnimation] = React.useState("none")
    function plusSlides() {
        setAnimation("none")
        setSlides(slideIndex < 3 ? slideIndex + 1 : 1)
        setAnimation("fade")
        setTimeout(setNone, 200)
        
    }
    
    function minusSlides() {
        setAnimation("none")
        setSlides(slideIndex > 1 ? slideIndex - 1 : 3)
        setAnimation("fade")
        setTimeout(setNone, 200)
    }
    
    function setNone() {
        setAnimation("none")
    }
    
    return (
        <section className="about" id="about-section">
            <h1 className="about-header" id="about-title">About <span className="about-header" id="looping-slide">Sonic Aether</span></h1>
            {
            <div id="slideshow">
                <img className = {`${animation}`}id = "slide-image" src ={`./images/img${slideIndex}.png`} /> 
                <a className="prev" onClick={minusSlides}>❮</a>
                <h3 className='slide-index'>Screenshot {slideIndex}</h3>
                <a className="next" onClick={plusSlides}>❯</a>
            </div>
            }
             <div className="blue-box-aether" id="about-info">
                <p className="paragraph-text">Welcome to Sonic Aether, a thrilling adventure that takes <span className="border-text">Sonic the Hedgehog</span> and his trusty companions <span className="border-text">Tails</span> and <span className="border-text">Knuckles</span> to the awe-inspiring realm of the Aether Sky Islands. Prepare to embark on an exhilarating journey through a world where vibrant floating platforms dot the skies, and lush greenery abounds.
                </p>
                 <p className="paragraph-text">In Sonic Aether, you will join Sonic, Tails and Knuckles as they find themselves mysteriously transported to this extraordinary realm. Their quest begins as they navigate the breathtaking landscapes of the first level, known as <span className="border-text">Verdant Skyreach.</span> Soar through the air, leaping from platform to platform while encountering familiar enemies such as motobugs, shooting bugs, and crab adversaries.
                </p>
                 <p className="paragraph-text">As you traverse the levels, each more breathtaking than the last, you will uncover the secrets of the Aether Sky Islands and strive to restore balance to this fantastical realm. Prepare to immerse yourself in the unique blend of <span className="border-text">fast-paced </span> and <span className="border-text">breathtaking visuals</span> that Sonic Aether has to offer.
                </p>
                 <p className="paragraph-text"> Are you ready to join Sonic, Tails and Knuckles on this epic adventure? Welcome to Sonic Aether, where the sky is your playground, and the excitement never ends. Get ready to run, jump, and soar through the skies like never before!
                </p>
             </div>
        </section>
    )
}