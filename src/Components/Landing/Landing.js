import React, { useEffect } from 'react'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Hero1 from '../../Images/hero-1.webp'
import Hero2 from '../../Images/hero-2.webp'
import { ReactComponent as Arrow } from '../../Images/Arrow.svg'


import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Landing() {

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.from('.hero-anim', {
            scrollTrigger: {
                trigger: '.hero-anim',
                toggleActions: "restart none none reverse",
            }, autoAlpha: 0, duration: 1.4, stagger: 0.45
        });

        gsap.from('.hero-image', {
            scrollTrigger: {
                trigger: '.hero-image',
                toggleActions: "restart none none reverse",
            }, duration: 1.4, width: 0, stagger: 0.6
        });

    }, []);




    return (
        <div>
            <div className="hero-container">
                <div className='hero-float'>
                    <p>Archiitek Industries</p>
                </div>
                <div>
                    <div className='hero-image-container'>
                        <img src={Hero1} alt="hero" className="hero-image" />
                        <img src={Hero2} alt="hero" className="hero-image" />
                        {/* <img src={Hero3} alt="hero" /> */}
                        <div className='hero-heading'>
                            <h1 className='hero-anim'>CREATIVE DIRECTION</h1>
                            <h1 className='hero-anim'>ARCHITECTURE</h1>
                            <h1 className='hero-anim'>INTERIOR</h1>
                            <h1 className='hero-anim'>DESIGN</h1>
                            <h2 className='hero-anim'>Modern Elegance</h2>
                            <Arrow className='arrow hero-anim' />
                        </div>
                    </div>

                </div>
            </div>
            <>
                <About />
            </>
            <>
                <Projects />
            </>
            <>
                <Contact />
            </>
        </div >
    )
}

export default Landing
