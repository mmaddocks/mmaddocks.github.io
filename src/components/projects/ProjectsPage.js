import React from "react";

// Components
import Page from "../utils/Page";
import Projects from "./Projects";

class ProjectsPage extends React.Component {

  render() {
    return (
      <Page pageName="projects-page">
        <Projects />
      </Page>
    );
  }
}

export default ProjectsPage;