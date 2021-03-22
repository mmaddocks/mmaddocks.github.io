import React from 'react';
import { Link } from 'react-router-dom'
 
const HomeProject = (props) => {

  if (props.project.position === 'right') {
    return (
      <section className="project" data-position={props.project.position}>

        <div className="project__image">
          <img src={props.project.projectImage} alt="" />
        </div>

        <div className="project__content">
          <div className="project__title">
            <h3>{props.project.projectName}</h3>
          </div>
          <p className="project__lead">{props.project.projectLead}</p>
          <p className="project__desc">{props.project.projectDesc}</p>
          <Link to="/project/communicator" className="project__link">View project</Link>
        </div>

      </section>
    );
  } else {
    return (
      <section className="project" data-position={props.project.position}>

        <div className="project__content">
          <div className="project__title">
            <h3>{props.project.projectName}</h3>
          </div>
          <p className="project__lead">{props.project.projectLead}</p>
          <p className="project__desc">{props.project.projectDesc}</p>
          <Link to="/project/communicator" className="project__link">View project</Link>
        </div>
  
        <div className="project__image">
          <img src={props.project.projectImage} alt="" />
        </div>

      </section>
    );
  }

};

export default HomeProject;