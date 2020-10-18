import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import { TweenLite, TweenMax } from 'gsap/all';

// Components
import Home from './components/Home';
import About from './components/About';

function App() {

  let location = useLocation();

  // On enter animation
  const onEnter = node => {
    // first kill all tweens of the target
    TweenMax.killTweensOf(node);
    TweenLite.set(node, {
      autoAlpha: 0,
    });
    // animate in the element
    TweenLite.to(node, 0.5, {
      autoAlpha: 1,
      onCompleteParams: [node],
      delay: 1,
      // delay: 4,
    });
  };

  // On exit animation
  const onExit = node => {
    // first kill all tweens of the target
    TweenMax.killTweensOf(node);
    // animate out the element
    TweenLite.to(node, 0.5, {
      opacity: 0,
    });
  };

  return (
    <TransitionGroup className="container">
      <Transition
        key={location.key}
        timeout={500}
        mountOnEnter={true}
        unmountOnExit={true}
        onEnter={onEnter}
        onExit={onExit}
      >
        <Switch location={location}>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Transition>
    </TransitionGroup>
  );

}

export default App;