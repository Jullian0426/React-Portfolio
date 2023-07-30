import React from 'react';

// Content for individual projects with corresponding information using props
function ProjectCard(props) {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 my-3">
            <div className="card">
                <div className="card-img-container">
                    <img className="card-img-top" src={props.image} alt={props.title}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <a href={props.github} className="btn btn-outline-light">GitHub</a>
                    <a href={props.deploy} className="btn btn-outline-light ml-2">Deployed App</a>
                </div>
            </div>
        </div>
    )
};


export default ProjectCard;