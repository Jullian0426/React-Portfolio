import React from 'react';

function ProjectCard(props) {
    return (
        <div className="card">
            <img class="card-img-top" src={props.image} alt={props.title}/>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <a href={props.github} class="btn btn-primary">GitHub</a>
                    <a href={props.deploy} class="btn btn-primary">Deployed App</a>
                </div>
        </div>
    )
};

export default ProjectCard;