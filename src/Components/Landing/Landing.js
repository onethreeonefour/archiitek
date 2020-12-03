import React from 'react'
import About from '../About/About'
import Hero from '../../Images/hero.jpg'
function Landing() {
    return (
        <div>
            <div className="hero-container">
                <div className="hero-grid">
                    <div className='hero-float'>
                        <p>Archiitek Productions</p>
                    </div>
                    <div className='hero-heading'>
                        <div className='hero-image-container'>
                            <img src={Hero} alt="hero" />
                            <div>
                                <h1>CREATIVE DIRECTION</h1>
                                <h1>ARCHITECTURE</h1>
                                <h1>INTERIOR</h1>
                                <h1>DESIGN</h1>
                                <div className='call-to-action'>
                                    <a href="">Contact</a>
                                    <a href="">About</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-container'>

                </div>
            </div>

        </div>
    )
}

export default Landing
