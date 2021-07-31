import React from "react";
import { Switch, Route } from "react-router-dom";
import { Transition, TransitionGroup } from "react-transition-group";
import { play, exit } from "./timelines";
import Home from "./components/home/Home";
import About from "./components/about/About";
import ProjectsPage from "./components/projects/ProjectsPage";
import ProjectsSinglePage from "./components/projects/ProjectsSinglePage";
import Navigation from "./components/utils/Navigation";

// UI
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/main.scss";

class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <Route
          render={({ location }) => {
            const { pathname, key } = location;
            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) => play(pathname, node, appears)}
                  onExit={(node, appears) => exit(pathname, node, appears)}
                  timeout={{ enter: 750, exit: 150 }}
                >
                  <Switch location={location}>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route exact path="/about">
                      <About />
                    </Route>
                    <Route exact path="/projects">
                      <ProjectsPage />
                    </Route>
                    <Route exact path="/projects/:project">
                      <ProjectsSinglePage />
                    </Route>
                  </Switch>
                </Transition>
              </TransitionGroup>
            );
          }}
        />
      </>
    );
  }
}

export default App;
