import React from 'react'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Hero1 from '../../Images/hero-1.jpg'
import Hero2 from '../../Images/hero-2.jpg'
import { ReactComponent as Arrow } from '../../Images/Arrow.svg'

function Landing() {
    return (
        <div>
            <div className="hero-container">
                <div className='hero-float'>
                    <p>Archiitek Industries</p>
                </div>
                <div>
                    <div className='hero-image-container'>
                        <img src={Hero1} alt="hero" />
                        <img src={Hero2} alt="hero" />
                        {/* <img src={Hero3} alt="hero" /> */}
                        <div className='hero-heading'>
                            <h1>CREATIVE DIRECTION</h1>
                            <h1>ARCHITECTURE</h1>
                            <h1>INTERIOR</h1>
                            <h1>DESIGN</h1>
                            <h2>Modern Elegance</h2>
                            <Arrow className='arrow' />
                        </div>
                    </div>

                </div>
            </div>
            <div >
                <About />
            </div>
            <div>
                <Projects />
            </div>
        </div >
    )
}

export default Landing
