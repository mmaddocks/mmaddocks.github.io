import { useRouteMatch } from "react-router-dom";
import Page from "../Page";

// UI
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { ArrowRight } from "react-feather";

// Images
import communicatorPng from "../../assets/projects/communicator/communicator-app.png";
import decentralised from "../../assets/projects/communicator/decentralised-graphic.svg";
import hcd from "../../assets/projects/communicator/hcd-graphic.svg";
import beekeeperLogo from "../../assets/projects/communicator/competitors/beekeeper-logo.svg";
import blinkLogo from "../../assets/projects/communicator/competitors/blink-logo.svg";
import simpplrLogo from "../../assets/projects/communicator/competitors/simpplr-logo.svg";

const Project = (props) => {
  const data = [
    {
      projectName: "Communicator",
      id: "communicator",
    },
    {
      projectName: "Energy App",
      id: "energy-app",
    },
    {
      projectName: "Web App",
      id: "web-app",
    },
  ];

  const routeMatch = useRouteMatch();
  const route = routeMatch.params.project;
  const item = data.find(({ id }) => id === route);
  // const result = data.filter(item => item.id === route);
  // console.log("(4) Result:", result[0].projectName);

  if (item.id === "communicator") {
    const processSteps = [
      {
        label: "Reseach",
      },
      {
        label: "Ideation & design",
      },
      {
        label: "Development",
      },
      {
        label: "User testing",
      },
    ];

    return (
      <Page pageName="project-page">

        <section className="hero">
          <Container>
            <Row>
              <Col className="flex-lg-grow-0  d-flex  align-items-center">
                <div className="hero__text">
                  <h3>Project</h3>
                  <h1>{item.projectName}</h1>
                  <div className="hero__intro">
                    <p>
                      Internal corporate communications & employee engagment mobile
                      app to keep all staff connected.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={'auto'} className="ml-lg-auto mr-lg-auto">
                <div className="hero__image">
                  <img src={communicatorPng} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section--overview  section">
          <Container>
            <h2 className="section-title">
              <span className="section-title__number">01</span>
              <span className="section-title__text">Overview</span>
            </h2>
            <div className="section__content">
              <Row>
                <Col xs={12} md={6}>
                  <p className="lead">
                    Designed and built a ‘white label’ internal corporate
                    communications mobile app.
                  </p>
                  <p>
                    I was the UX / Product Designer & Frontend Developer working
                    alongside a Full Stack Developer for the project.
                  </p>
                  <p>
                    <strong>Disclaimer:</strong> Due to project confidentiality, I
                    am limited by what I can show, but I will walk you through
                    some of the process.
                  </p>
                  <p className="technology">
                    <FontAwesomeIcon icon={faReact} /> React Native
                  </p>
                </Col>
                <Col xs={12} md={6}>
                  <div className="highlight">
                    <h4 className="highlight__title">Project type</h4>
                    <p>Mobile app</p>
                  </div>
                  <div className="highlight">
                    <h4 className="highlight__title">Role</h4>
                    <p>UX Design</p>
                    <p>Product Design</p>
                    <p>React Native Development</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <section className="section--problem  section">
          <Container>
            <h2 className="section-title">
              <span className="section-title__number">02</span>
              <span className="section-title__text">Problem</span>
            </h2>
            <div className="section__content">
              <Row>
                <Col xs={12} md={6}>
                  <p className="lead">
                    Keeping a distributed workforce, suppliers and partners
                    updated and connected to the business.
                  </p>
                  <p>
                    Companies have an increasingly distributed and decentralised
                    workforce, combined with suppliers and partners that need to
                    be kept up-to-date with the latest information about the
                    company.
                  </p>
                  <p>
                    Traditional methods such as intranets and internal websites
                    are geared towards office and desktop based employees.
                  </p>
                </Col>
                <Col xs={12} md={6}>
                  <div className="graphic-container">
                    <img src={decentralised} alt="" />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <section className="section--process  section">
          <Container>
            <h2 className="section-title">
              <span className="section-title__number">03</span>
              <span className="section-title__text">Process & Approach</span>
            </h2>
            <div className="section__content">
              <Row>
                <Col xs={12} md={6}>
                  <p className="lead">
                    How do we help keep a workforce updated with the latest
                    company information?
                  </p>
                  <p>
                    After identifying the problem and with the objective to find a
                    solution that best solves this, we began with identifying the
                    process whilst keeping in mind Human Centred Design.
                  </p>
                </Col>
                <Col xs={12} md={6}>
                  <div className="graphic-container">
                    <img src={hcd} alt="" />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="section--process__process">
              {processSteps.map((step, index) => {
                return (
                  <div key={index} className={`step-${index + 1} step`}>
                    <div className="step__circle">
                      <span className="step__label">{step.label}</span>
                    </div>
                    <ArrowRight className="step__arrow" />
                  </div>
                );
              })}
              <div className="step-end step">
                <div className="step__emoji">&#x1F680;</div>
                <span className="step__label">Implementation</span>
              </div>
            </div>
          </Container>
        </section>

        <section className="section--research  section">
          <Container>
            <h2 className="section-title">
              <span className="section-title__number">04</span>
              <span className="section-title__text">Research</span>
            </h2>
            <div className="section__content">
              <Row>
                <Col xs={12}>
                  <p className="lead">Competitor analysis & market research</p>
                  <p>
                    We started out exploring existing internal communication and
                    employee engagment apps. When analysing three popular
                    products, some key areas were highlighted:
                  </p>

                  <div className="test">
                    <div></div>
                  </div>

                  </Col>
                </Row>

                {/* This MUST be outside of a bootstrap row & col in order to scroll-x */}
                <div className="table-container">
                    <table>
                      <thead>
                        <tr>
                          <th></th>
                          <th>
                            <img src={beekeeperLogo} alt="" />
                          </th>
                          <th>
                            <img src={blinkLogo} alt="" />
                          </th>
                          <th>
                            <img src={simpplrLogo} alt="" />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>White label</th>
                          <td>
                            <FontAwesomeIcon
                              icon={faTimesCircle}
                              className="no"
                            />
                          </td>
                          <td>
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              className="yes"
                            />
                          </td>
                          <td>
                            <FontAwesomeIcon
                              icon={faTimesCircle}
                              className="no"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Customisable reports</th>
                          <td>
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              className="yes"
                            />
                          </td>
                          <td>
                            <FontAwesomeIcon
                              icon={faTimesCircle}
                              className="no"
                            />
                          </td>
                          <td>
                            <FontAwesomeIcon
                              icon={faTimesCircle}
                              className="no"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Content moderation</th>
                          <td>
                            <FontAwesomeIcon
                              icon={faTimesCircle}
                              className="no"
                            />
                          </td>
                          <td>
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              className="yes"
                            />
                          </td>
                          <td>
                            <FontAwesomeIcon
                              icon={faTimesCircle}
                              className="no"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                <Row>
                  <Col xs={12}>
                  <p>
                    In particular, only one of the products had the option of
                    being a ‘white label’ product. This was highlighted as an
                    important area to give the complete experience of the app
                    being the company’s app - with their own app icon and complete
                    branding/themeing throughout.
                  </p>

                  <div className="section--research__quote">
                    <blockquote>
                      When you understand the people you’re trying to reach—and
                      then design from their perspective—not only will you arrive
                      at unexpected answers, but you’ll come up with ideas that
                      they’ll embrace.
                    </blockquote>
                    <p>- Field Guide to Human Centered Design</p>
                  </div>

                  <div className="section--research__user-research">
                    <p className="lead">User research</p>
                    <p>
                      We conducted user research by asking customers about the
                      issues they face with keeping a distributed workforce
                      up-to-date with the business and some of the apps they have
                      used to manage this. Some key areas highlighted as important
                      included:
                    </p>
                    <ol>
                      <li>
                        The app must feel like part of the company and be familiar
                        to employees - rather than another 3rd party product to
                        use.
                      </li>
                      <li>
                        Analytics and reporting is a necessity to analyse employee
                        engagement.
                      </li>
                      <li>
                        We are trying to minimise the number of accounts employees
                        have to remember, so we prefer to use Single Sign On (SSO)
                        for authentication.
                      </li>
                    </ol>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <section className="section--solution  section">
          <div className="container">
            <h2 className="section-title">
              <span className="section-title__number">05</span>
              <span className="section-title__text">Solution</span>
            </h2>
            <div className="section__content">
              <p className="lead">
                What would a ‘white label’ internal communications mobile app
                look like?
              </p>
                
                <div className="image-group">
                  <Row>
                    <Col xs={12} sm={6} md={4} className="mx-auto  my-4">
                      <div className="image-group__item">
                        <img src={communicatorPng} alt="" />
                      </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} className="mx-auto  my-4">
                      <div className="image-group__item">
                        <img src={communicatorPng} alt="" />
                      </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} className="mx-auto  my-4">
                      <div className="image-group__item">
                        <img src={communicatorPng} alt="" />
                      </div>
                    </Col>
                  </Row>
                  
                </div>


            </div>
          </div>
        </section>
      </Page>
    );
  } else {
    return (
      <Page pageName="project-page">
        <div className="container">
          <h1>Project</h1>
          <h1>{item.projectName}</h1>
        </div>
      </Page>
    );
  }
};

export default Project;
