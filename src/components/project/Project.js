import React from "react";
import { useRouteMatch } from "react-router-dom";

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
  // console.log("(3) Item:", item);

  // const result = data.filter(item => item.id === route);
  // console.log("(4) Result:", result[0].projectName);

  if (item.id === 'communicator') {
    return (
      <div className="project-page  page">
        <div className="container">
          <h1>Project case study</h1>
          <h1>{item.projectName}</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="project-page  page">
        <div className="container">
          <h1>Project</h1>
          <h1>{item.projectName}</h1>
        </div>
      </div>
    );
  }
};

export default Project;
