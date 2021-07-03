// import React from "react";
import { useRouteMatch } from "react-router-dom";
import Page from "../Page";
import communicatorPng from "../../assets/projects/communicator-app.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

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
    return (
      <Page pageName="project-page">

        <div className="container">
          <section className="hero">
            <div className="hero__text">
              <h3>Project</h3>
              <h1>{item.projectName}</h1>
              <div className="hero__intro">
                <p>Internal corporate communications & employee engagment mobile app to keep all staff connected.</p>
              </div>
            </div>
            <div className="hero__image">
              <img src={communicatorPng} alt="" />
            </div>
          </section>
        </div>

        <section className="section--overview  section">
          <div className="container">
            <h2 className="section-title">
              <span className="section-title__number">01</span>
              <span className="section-title__text">Overview</span>
            </h2>
            <div className="section__content">
              <div className="col">
                <p className="lead">Designed and built a ‘white label’ internal corporate communications mobile app.</p>
                <p>I was the UX / Product Designer & Frontend Developer working alongside a Full Stack Developer for the project.</p>
                <p><strong>Disclaimer:</strong> Due to project confidentiality, I am limited by what I can show, but I will walk you through some of the process.</p>
                <p className="technology"><FontAwesomeIcon icon={faReact} /> React Native</p>
              </div>
              <div className="col">
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
              </div>
            </div>
          </div>
        </section>

        <section className="section--problem  section">
          <div className="container">
            <h2 className="section-title">
              <span className="section-title__number">02</span>
              <span className="section-title__text">Problem</span>
            </h2>
            <div className="section__content">
              <div className="col">
                <p className="lead">Keeping a distributed workforce, suppliers and partners updated and connected to the business.</p>
                <p>Companies have an increasingly distributed and decentralised workforce, combined with suppliers and partners that need to be kept up-to-date with the latest information about the company.</p>
                <p>Traditional methods such as intranets and internal websites are geared towards office and desktop based employees.</p>
              </div>
              <div className="col">

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
