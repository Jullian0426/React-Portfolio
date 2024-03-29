import React from 'react';

// Content for individual projects with corresponding information using props
function ProjectCard(props) {
    return (
        <div className="col-sm-12 col-md-6 my-3">
            <div className="card">
                <div className="card-img-container">
                    <img className="card-img-top" src={props.image} alt={props.name} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p>{props.description}</p>
                    <a href={props.github} className="btn btn-outline-light">GitHub</a>
                    {props.deploy !== "N/A" &&
                        <a href={props.deploy} className="btn btn-outline-light ml-2">Deployed App</a>
                    }
                </div>
            </div>
        </div>
    )
};




export default ProjectCard;