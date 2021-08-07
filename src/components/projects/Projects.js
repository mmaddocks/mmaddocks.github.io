import React from "react";

// Components
import ProjectsItem from "./ProjectsItem";

// UI
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Images
import communicatorJpg from "../../assets/projects/communicator/communicator-app-square.jpg";
import energyApp from "../../assets/projects/energy-app/energy-app-square.jpg";
import webApp from "../../assets/projects/web-app/web-app-square.jpg";

// Scroll Animation
import AOS from "aos";
import "aos/dist/aos.css";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: true,
      isLoaded: false,
      projects: [
        {
          projectName: "Communicator",
          url: "communicator",
          projectLead:
            "Internal communications mobile app to keep all employees connected.",
          projectDesc:
            "Communicator is a ‘white label’ mobile app that ensures all stakeholders are updated with the latest information about your company, in real-time, wherever they are.",
          projectImage: communicatorJpg,
          placement: "left",
        },
        {
          projectName: "Energy App",
          url: "energy-app",
          projectLead:
            "Communications mobile app for a client in the energy industry.",
          projectDesc:
            "Due to project confidentiality, I am limited by what I can show and the company branding / content has been substituted.",
          projectImage: energyApp,
          placement: "right",
        },
        {
          projectName: "Web App",
          url: "web-app",
          projectLead:
            "Internal communications web app to keep all employees connected.",
          projectDesc:
            "Designed and built a ‘white label’ internal corporate communications web app (the sibling to Communicator).",
          projectImage: webApp,
          placement: "left",
        },
      ],
    };
  }

  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <>
        <section
          ref={this.props.scrollRef ? this.props.scrollRef : ''}
          className="featured-projects"
        >
          {/* NOTE: AOS styles need to be seperate to scroll-to container (#featured-projects) for scroll alignment */}
          {/* <div
            className="aos-wrapper"
            data-aos="fade-up"
            // data-aos-anchor-placement="top-center"
          > */}
            <Container>
              <Row>
                <Col md={'auto'} className="d-none d-md-block">
                  <div className="logo-brace">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 203 650"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="logo-brace-linear-gradient"
                          x1="-571"
                          y1="650"
                          x2="-681.388"
                          y2="19.322"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            className="colour-stop-1"
                            offset="0"
                            stopColor="currentColor"
                          />
                          <stop
                            className="colour-stop-2"
                            offset="1"
                            stopColor="currentColor"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0.94519 650V583.058C23.5748 583.058 38.8935 580.658 46.9015 575.858C54.8995 571.057 58.9032 562.42 58.9126 549.946V380.787C58.9126 347.2 77.1308 327.765 113.567 322.481C77.1282 316.718 58.91 297.043 58.9126 263.454V107.255C58.9126 92.3858 54.3568 81.7084 45.2451 75.2228C36.1323 68.7461 27.1608 65.5072 18.3307 65.5062H15.8484L0.943604 66.9438V0H29.096C104.166 0 141.707 31.6721 141.719 95.0163V244.74C141.719 261.063 145.03 272.581 151.651 279.294C158.281 286.019 168.771 289.378 183.123 289.373H203V356.316H183.123C168.762 356.316 158.271 359.555 151.651 366.032C145.031 372.51 141.72 383.668 141.719 399.506V554.986C141.723 618.329 104.182 650 29.0975 650H0.94519Z"
                        fill="url(#logo-brace-linear-gradient)"
                      />
                    </svg>
                  </div>
                </Col>
                <Col className="d-flex align-items-center">
                  <div className="content">
                    <div className="content__title">
                      <h3>Featured</h3>
                      <h2>Projects</h2>
                    </div>

                    <div className="content__intro">
                      <p>
                        A selection of projects that I’ve worked on as a Designer
                        and Developer.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          {/* </div> */}
        </section>

        {this.state.projects.map((project, index) => {
          return <ProjectsItem key={index} index={index} project={project} />;
        })}
      </>
    );
  }
}

export default Projects;
