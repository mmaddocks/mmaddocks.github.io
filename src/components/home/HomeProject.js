import React from "react";
import { Link } from "react-router-dom";

// UI
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <div className="project__image">
                <img src={projectImage} alt="" />
              </div>
            </Col>
            <Col xs={12} lg={6}>
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
            </Col>
          </Row>
        </Container>
      </section>
    );
  } else {
    return (
      <section
        className={`${url} project`}
        data-placement={placement}
        data-aos="fade-up"
      >
        <Container>
          <Row className="flex-column-reverse  flex-lg-row">
            <Col xs={12} lg={6}>
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
            </Col>
            <Col xs={12} lg={6}>
              <div className="project__image">
                <img src={projectImage} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
};

export default HomeProject;
