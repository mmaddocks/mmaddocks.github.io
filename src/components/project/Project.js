// import React from "react";
import { useRouteMatch } from "react-router-dom";
import Page from "../Page";
import communicatorPng from "../../assets/projects/communicator-app.png";

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
        <section className="overview">

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
