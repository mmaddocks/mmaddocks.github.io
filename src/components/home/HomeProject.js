import React from "react";
import { Link } from "react-router-dom";

const HomeProject = (props) => {
  const {
    projectName,
    projectImage,
    projectLead,
    projectDesc,
    placement,
    url,
  } = props.project;

  if (placement === "right") {
    return (
      <section
        className={`${url} project`}
        data-placement={placement}
        data-aos="fade-up"
      >
        <div className="project__image">
          <img src={projectImage} alt="" />
        </div>

        <div className="project__content">
          <div className="project__title">
            <h3>{projectName}</h3>
          </div>
          <p className="project__lead">{projectLead}</p>
          <p className="project__desc">{projectDesc}</p>
          <Link to={`/projects/${url}`} className="project__link">
            View project
          </Link>
        </div>
      </section>
    );
  } else {
    return (
      <section
        className={`${url} project`}
        data-placement={placement}
        data-aos="fade-up"
      >
        <div className="project__content">
          <div className="project__title">
            <h3>{projectName}</h3>
          </div>
          <p className="project__lead">{projectLead}</p>
          <p className="project__desc">{projectDesc}</p>
          <Link to={`/projects/${url}`} className="project__link">
            View project
          </Link>
        </div>

        <div className="project__image">
          <img src={projectImage} alt="" />
        </div>
      </section>
    );
  }
};

export default HomeProject;