import React from 'react';
import ProjectCard from './Project';
import portfolio from '../portfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
    return (
        <section>
            <div className='portfolio'>
                <h1 className='h1'>My Portfolio</h1>
            </div>

            <div id='project'>
                {portfolio.map((project) => {
                   return <ProjectCard key={project.id} image={project.image} name={project.title} github={project.github} deploy={project.deploy}/>
                })}
            </div>
        </section>
    )
};

export default Portfolio;