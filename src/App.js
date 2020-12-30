import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './timelines'
import Home from './components/home/Home';
import About from './components/about/About';

// UI
import './styles/main.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Route render={({ location }) => {
          const { pathname, key } = location;

          return (
            <TransitionGroup className="app">
              <Transition
                key={key}
                appear={true}
                onEnter={(node, appears) => play(pathname, node, appears)}
                onExit={(node, appears) => exit(pathname, node, appears)}
                timeout={{enter: 750, exit: 150}}
              >
                <Switch location={location}>
                  <Route path="/" exact component={Home}/>
                  <Route path="/about" exact component={About} />
                  {/* <Route path="/resume" exact component={() => { 
                      window.location.href = 'https://mmaddocks.com/resume'; 
                      return null;
                  }}/> */}
                </Switch>
              </Transition>
            </TransitionGroup>
          )
        }}/>
      </BrowserRouter>
    )
  }
}
  
export default App;
