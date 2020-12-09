import React, { useEffect } from 'react'
import Header from '../../Images/Projects/project-header.jpg'
import { projects } from './Data'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Projects() {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.from('.project-image', {
            scrollTrigger: {
                trigger: '.project-image',
                toggleActions: "restart none none reverse",
            }, duration: 1.4, autoAlpha: 0, stagger: 0.6
        });

        for (let i = 0; i < 3; i++) {
            gsap.from(`.project-anim-${i}`, {
                scrollTrigger: {
                    trigger: `.project-anim-${i}`,
                    toggleActions: "restart none none reverse",
                }, autoAlpha: 0, duration: 1, y: 150, stagger: 0.4
            });
        }
    }, []);
    return (
        <div>
            <div className='projects-container'>
                <div className="project-header">
                    <img src={Header} alt="header" className="project-image" />
                    <h1 className='centered'>Archiitek Solutions <br /><span>Selected Works</span> </h1>
                </div>
            </div>
            <div>
                {projects.map((el, index) => {
                    return <div className={`project-card project-anim-${index}`} key={index}>
                        <div>
                            <p className="project-number">{index + 1}</p>
                            <h2>{el.title}</h2>
                            <h3>{el.type}</h3>
                            <p className="project-tagline">{el.tagline}</p>
                            <button className="project-details">Details</button>
                        </div>
                        <div>
                            <img src={el.src} alt="project" className='project-grid-img'></img>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Projects
