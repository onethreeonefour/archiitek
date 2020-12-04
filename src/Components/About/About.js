import React from 'react'
import AboutImg from '../../Images/hero-3.jpg'
function About() {
    return (
        <div className="about-container">
            <h1>ABOUT Archiitek </h1>
            <div className='about-card'>
                <div>
                    <h2>Established in 1998</h2>
                    <p>As the visionary architect so clearly set the environmental standards of building design, we engage Sanctum or the creation of sanctuary as the basis of our design philosophy - to develop buildings that create opportunities for improved living comfort and to nurture harmony between natural and built environments.<br /><br />Our buildings are designed to create feelings of retreat and privacy and interact appropriately with their outdoor environment.
Sanctum upholds this philosophy by analysing each building site's local context, climate, topography and outlook. This detailed appraisal allows us to design homes that exploit natural heating and cooling processes to maximise comfort levels for occupants and respond visually and physically to local conditions.</p>
                </div>
                <div>
                    <img src={AboutImg} alt="about" />
                </div>
            </div>
            <div className='about-card'>
                <div>
                    <h2>Established in 1998</h2>
                    <p>As the visionary architect so clearly set the environmental standards of building design, we engage Sanctum or the creation of sanctuary as the basis of our design philosophy - to develop buildings that create opportunities for improved living comfort and to nurture harmony between natural and built environments.<br /><br />Our buildings are designed to create feelings of retreat and privacy and interact appropriately with their outdoor environment.
Sanctum upholds this philosophy by analysing each building site's local context, climate, topography and outlook. This detailed appraisal allows us to design homes that exploit natural heating and cooling processes to maximise comfort levels for occupants and respond visually and physically to local conditions.</p>
                </div>
                <div>
                    <img src={AboutImg} alt="about" />
                </div>
            </div>
        </div>
    )
}

export default About
