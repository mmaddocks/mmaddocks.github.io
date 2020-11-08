import { gsap } from 'gsap';

const getAboutTimeline = (node, delay) => {
  const timeline = gsap.timeline({ paused: true });
  // const content = node.querySelector('.content');
  // const contentInner = node.querySelector('.content--inner');

  timeline
    .from(node, { 
      opacity: 0,
      y: '5vh',
      duration: 0.5,
      delay, 
    })

  return timeline;
}

const getAboutTimelineReverse = (node) => {
  const timeline = gsap.timeline({ paused: true });

  timeline
    .to(node, { 
      opacity: 0,
      y: '5vh',
      duration: 0.5,
    })

  return timeline;
}

const getDefaultTimeline = (node, delay) => {
  const timeline = gsap.timeline({ paused: true });
  // const texts = node.querySelectorAll('h1 > div');
  timeline.from(node, {autoAlpha: 0, duration: 0.5, delay })

  return timeline;
}

const getDefaultTimelineReverse = (node) => {
  const timeline = gsap.timeline({ paused: true });

  timeline.to(node, {autoAlpha: 0, duration: 0.5,})

  return timeline;
}

/**
 * @desc onEnter page transition
 */
export const play = (pathname, node, appears) => {

  const delay = appears ? 0 : 0.5;
  let timeline;

  if (pathname === '/about') {
    timeline = getAboutTimeline(node, delay);
  } else {
    timeline = getDefaultTimeline(node, delay);
  }

  timeline.play();
}

/**
 * @desc onExit page transition
 */
export const exit = (pathname, node) => {
  let timeline;

  if (pathname === '/about') {
    timeline = getAboutTimelineReverse(node);
  } else {
    timeline = getDefaultTimelineReverse(node);
  }

  timeline.play();

  // if (pathname === '/about') {
  //   timeline = getAboutTimeline(node);
  //   timeline.reverse();
  //   console.log('Timeline reversed? on exit(): ', timeline.reversed());
  // }

}
