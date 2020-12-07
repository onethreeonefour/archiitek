import React from 'react'
import Header from '../../Images/Projects/project-header.jpg'
import { projects } from './Data'

function Projects() {
    return (
        <div>
            <div className='projects-container'>
                <div className="project-header">
                    <img src={Header} alt="header" />
                    <h1 className='centered'>Archiitek Solutions <br /><span>Selected Works</span> </h1>
                </div>
            </div>
            <div>
                {projects.map((el, index) => {
                    return <div className="project-card" key={index}>
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
