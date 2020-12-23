import React from 'react';
import { gsap } from 'gsap/all';
import { ArrowLeft } from 'react-feather';

class AboutInterest extends React.Component {
  constructor(props) {
    super(props);

    this.interestRef = null;
    this.imageRef = null;
    this.timeline = gsap.timeline({ paused: true });
  }

  componentDidMount = () => {
    console.log('1) Interest component mounted');

    this.interestAnimation();
    // this.timeline.play();
    // Slightly smoother with setTimeout
    setTimeout(() => {
      this.timeline.play();
    }, 1000);
  }

  /**
   * Media query viewport and return image values
   */
  getViewportSize = () => {

    // Media queries
    const mq1 = window.matchMedia('screen and (min-width: 576px) and (max-width: 1199px)');
    const mq2 = window.matchMedia('screen and (min-width: 1200px)');

    let imageWidth = '80vw';
    let imageTranslateX = '10vw';

    // Greater than 1200px
    if (mq2.matches) {
      imageTranslateX = '50vw';
    }

    // Mobile (matches neither)
    if (!mq1.matches && !mq2.matches) {
      imageWidth = '150vw';
      imageTranslateX = '-25vw';
    }

    return {
      width: imageWidth,
      translateX: imageTranslateX,
    }
  }

  interestAnimation = () => {
    console.log('2) Interest animation called');

    // Store image animation values
    const imageAnimationProps = this.getViewportSize();

    gsap.set(this.interestRef, { autoAlpha: 0, });
    gsap.set(this.imageRef, { clipPath: 'circle(0% at 50% 50%)'});

    this.timeline
      // Reveal interest
      .to(this.interestRef, { 
        display: 'flex',
        autoAlpha: 1,
        duration: 0.001,
      }, "-=0.4")

      // Reveal interest bg
      .to(this.imageRef, { 
        clipPath: 'circle(100% at 50% 50%)',
        duration: 2,
      })

      // Size down clip path
      .to(this.imageRef, { 
        clipPath: 'circle(45% at 50% 45%)',
        duration: 1,
      }, "-=0.75")

      // Move clip-path & resize .background-container
      .to(this.imageRef, {
        width: imageAnimationProps.width,
        height: imageAnimationProps.width,
        translateX: imageAnimationProps.translateX,
        duration: 0.5,
      })

      .to(this.imageRef, { 
        opacity: 0.25,
        filter: 'grayscale(1)',
        duration: 0.5,
      })

      // Animate interest content
      .fromTo('.interest .animate', {
        y: 50,
        autoAlpha: 0,
      }, {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        stagger: 0.2,
      })

      // Highlight title
      .set('.interest__title', { className: 'interest__title show-highlight'})

      // Animate interest button
      .fromTo('.interest button', {
        opacity: 0,
        x: 10,
      }, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power4.in",
      });
  }
  
  render() {

    if (this.props.showInterest) {

      let imagePath = `/assets/interest-bg-${this.props.interest}.jpg`;

      return(
        <section 
          id={this.props.interest} 
          className={`interest--${this.props.interest}  interest`}
          ref={section => this.interestRef = section}
        >
          <div className="background-container" ref={div => this.imageRef = div}>
            <img 
              className="background" 
              src={process.env.PUBLIC_URL + imagePath}
              alt={this.props.interest}
            />
          </div>
  
          <div className="interest__content">
            <div className="interest__title  animate">
            </div>
            <p className="animate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="close" data-target={`#${this.props.interest}`}>
              <ArrowLeft />
            </button>
          </div>
        </section>
      );
    } else {
      return null;
    }

  }
}

export default AboutInterest;