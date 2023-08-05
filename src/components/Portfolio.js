import React from 'react';
import ProjectCard from './Project';
import portfolio from '../portfolio.json'

// Map through each project and render them on the portfolio page
function Portfolio() {
    return (
        <section className="content">
            <h1 className='h1 text-center'>My Portfolio</h1>

            <div id='projects' className='content my-3'>
                <div className='row justify-content-center'>
                    {portfolio.map((project) => {
                        return <ProjectCard
                            key={project.id}
                            image={project.image}
                            name={project.title}
                            github={project.github}
                            deploy={project.deploy}
                            description={project.description}
                        />
                    })}
                </div>
            </div>
        </section>
    )
};

export default Portfolio;