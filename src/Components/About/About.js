import React from 'react'
import AboutImg from '../../Images/hero-3.webp'
import Service1 from '../../Images/Services/1.png'
import Service2 from '../../Images/Services/2.png'
import Service3 from '../../Images/Services/3.png'

function About() {
    return (
        <div className="about-container">
            <h1 className='heading-left'>ABOUT Archiitek </h1>
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
            <h1 className='heading-right'>Services We Offer </h1>
            <div className='services-grid'>
                <div className="service-card">
                    <img src={Service1} alt='services'></img>
                    <h2>Commercial Design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada et tortor et accumsan. Aenean arcu lorem, hendrerit non lacus et, pharetra pellentesque tortor. Vivamus pulvinar magna laoreet eros ornare, sit amet vulputate ipsum iaculis. Vestibulum urna ante, pulvinar sit amet sapien id, maximus malesuada arcu. </p>
                </div>
                <div className="service-card">
                    <img src={Service2} alt='services'></img>
                    <h2>Residential Design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada et tortor et accumsan. Aenean arcu lorem, hendrerit non lacus et, pharetra pellentesque tortor. Vivamus pulvinar magna laoreet eros ornare, sit amet vulputate ipsum iaculis. Vestibulum urna ante, pulvinar sit amet sapien id, maximus malesuada arcu. </p>
                </div>
                <div className="service-card">
                    <img src={Service3} alt='services'></img>
                    <h2>Interior Design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada et tortor et accumsan. Aenean arcu lorem, hendrerit non lacus et, pharetra pellentesque tortor. Vivamus pulvinar magna laoreet eros ornare, sit amet vulputate ipsum iaculis. Vestibulum urna ante, pulvinar sit amet sapien id, maximus malesuada arcu. </p>
                </div>
            </div>
        </div>
    )
}

export default About
