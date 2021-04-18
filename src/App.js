import React from "react";
import { Switch, Route } from "react-router-dom";
import { Transition, TransitionGroup } from "react-transition-group";
import { play, exit } from "./timelines";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Navigation from "./components/Navigation";

// This is a test to force a gh pages update

// UI
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
                    <Route exact path="/projects/:project">
                      <Project />
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
