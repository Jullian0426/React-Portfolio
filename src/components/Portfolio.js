import React from 'react';
import ProjectCard from './Project';
import portfolio from '../portfolio.json'

// Map through each project and render them on the portfolio page
function Portfolio() {
    return (
        <section>
            <h1 className='h1 text-center'>My Portfolio</h1>

            <div id='projects' className='content my-3'>
                <div className='row'>
                    {portfolio.map((project) => {
                    return <ProjectCard key={project.id} image={project.image} name={project.title} github={project.github} deploy={project.deploy}/>
                    })}
                </div>
            </div>
        </section>
    )
};

export default Portfolio;