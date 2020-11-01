import { TimelineMax as Timeline, Power1 } from 'gsap';

const getAboutTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  // const content = node.querySelector('.content');
  // const contentInner = node.querySelector('.content--inner');

  timeline
    .from(node, 0.5, { 
      opacity: 0,
      y: '5vh',
      delay, 
    })

  return timeline;
}

const getAboutTimelineReverse = (node) => {
  const timeline = new Timeline({ paused: true });
  // const content = node.querySelector('.content');
  // const contentInner = node.querySelector('.content--inner');

  timeline
    .to(node, 0.5, { 
      opacity: 0,
      y: '5vh',
    })

  return timeline;
}

const getDefaultTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  // const texts = node.querySelectorAll('h1 > div');

  timeline.from(node, 0.5, {autoAlpha: 0, delay })

  return timeline;
}

const getDefaultTimelineReverse = (node) => {
  const timeline = new Timeline({ paused: true });
  // const texts = node.querySelectorAll('h1 > div');

  timeline.to(node, 0.5, {autoAlpha: 0})

  return timeline;
}

/**
 * @desc onEnter page transition
 */
export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5;
  let timeline

  if (pathname === '/about') {
    timeline = getAboutTimeline(node, delay);
  } else {
    timeline = getDefaultTimeline(node, delay);
  }

  // window
  //   .loadPromise
  //   .then(() => requestAnimationFrame(() => timeline.play()))
  timeline.play();
}

/**
 * @desc onExit page transition
 */
export const exit = (pathname, node, appears) => {
  // const timeline = new Timeline({ paused: true });
  // timeline.to(node, 0.5, { opacity: 0, ease: Power1.easeOut });
  // timeline.play();

  let timeline

  if (pathname === '/about') {
    timeline = getAboutTimelineReverse(node);
  } else {
    timeline = getDefaultTimelineReverse(node);
  }

  timeline.play();

}
