import React from 'react';
import { gsap } from 'gsap/all';
import { ArrowLeft } from 'react-feather';

class AboutInterest extends React.Component {
  constructor(props) {
    super(props);
    this.interestRef = null;
    this.imageRef = null;
    this.timeline = gsap.timeline({ 
      paused: true, 
      onComplete: this.animationForwardsComplete, 
      onReverseComplete: this.animationReverseComplete, 
    });
  }

  componentDidMount = () => {
    // this.getImageSize();
    this.interestAnimation();
    this.timeline.play();

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  }

  /**
   * Media query viewport and return image values
   */
  getImageSize = () => {

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

    // this.setState({ 
    //   width: imageWidth,
    //   translateX: imageTranslateX,
    // }, () => { 
    //   console.log('Set state:', this.state.width);
    //   console.log('Set state:', this.state.translateX);
    //   // this.interestAnimation();
    // });

    return {
      width: imageWidth,
      translateX: imageTranslateX,
    }
  }

  /**
   * Interest animation (forwards)
   */
  interestAnimation = () => {
    // Store image animation values
    const image = this.getImageSize();

    gsap.set(this.imageRef, { clipPath: 'circle(0% at 50% 50%)'});

    if (this.props.interest.name === 'climbing') {
      this.timeline.to('.hero .hero__content', { 
        z: 400, 
        duration: 0.750, 
        ease: 'power2.out',
      });
    }

    if (this.props.interest.name === 'skiing') {
      this.timeline.to('.hero .hero__content', { 
        x: '-35%',
        y: '-12%',
        z: 400, 
        duration: 0.750, 
        ease: 'power2.out',
      });
    }

    if (this.props.interest.name === 'surfing') {
      this.timeline.to('.hero .hero__content', { 
        x: '-35%',
        y: '-32%',
        z: 400, 
        duration: 0.750, 
        ease: 'power2.out',
      });
    }

    this.timeline
      // Reveal interest bg
      .to(this.imageRef, { 
        clipPath: 'circle(100% at 50% 50%)',
        duration: 2,
      })

      // Size down clip path
      .to(this.imageRef, { 
        clipPath: 'circle(45% at 50% 45%)',
        duration: 1,
      })

      // Move clip-path & resize .background-container
      .to(this.imageRef, {
        width: image.width,
        height: image.width,
        translateX: image.translateX,
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
      .set('.interest__title', { className: 'interest__title animate show-highlight'})

      // Animate interest button
      .fromTo('.interest-btn.close', {
        autoAlpha: 0,
        x: 10,
      }, {
        x: 0,
        autoAlpha: 1,
        duration: 0.5,
        ease: "power4.in",
      });
  }

  /**
   * Handle close interest button
   */
  handleClick = () => {
    // this.timeline.reverse();
    this.reverseInterestAnimation();
  }

  /**
   * Animaton forwards complete callback
   * Unmounts component via parent
   */
  animationForwardsComplete = () => {
    // console.log('Animation has finished');
  }

  /**
   * Animation reverse complete callback
   * Unmounts component via parent
   */
  animationReverseComplete = () => {
    // console.log('Animation has finished in reverse');
    this.props.unmountComponent(this.props.interest.name);
  }

  /**
   * Handle window resize
   */
  handleResize = () => {
    // console.log('Window width:', window.innerWidth);
    // console.log('Window height:', window.innerHeight);

    // Store image animation values
    const image = this.getImageSize();

    gsap.set(this.imageRef, {
      width: image.width,
      height: image.width,
      translateX: image.translateX,
    });
  }

  /**
   * Reverse animation
   * Manual reverse option to overcome resize issue when interest is open
   */
  reverseInterestAnimation = () => {
    const reverseTL = gsap.timeline({
      onComplete: this.animationReverseComplete
    });

    reverseTL
      // Animate interest content
      .fromTo('.interest .animate', {
        y: 0,
        autoAlpha: 1,
      }, {
        y: 50,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.2,
      })

      // Highlight title
      .set('.interest__title', { className: 'interest__title animate'})

      // Animate interest button
      .fromTo('.interest-btn.close', {
        opacity: 1,
        x: 0,
      }, {
        x: 10,
        opacity: 0,
        duration: 0.250,
        ease: "power4.in",
      })

      // Resize image
      .to(this.imageRef, {
        x: 0,
        y: 0,
        width: '100vw',
        height: '100vw',
        opacity: 1,
        filter: 'grayscale(0)',
        duration: 0.5,
      })

      // Release clipping
      .to(this.imageRef, { clipPath: 'circle(100% at 50% 50%)', duration: 0.250 })

      // Zoom into image
      .to(this.imageRef, { z: 400, duration: 0.5 }, "-=0.250")

      .to('.hero .hero__content', { 
        x: 0,
        y: 0,
        z: 0,  
        duration: 1, 
        ease: 'power2.out',
      });
  }
  
  render() {

    if (this.props.showInterest) {

      let imagePath = `/assets/interest-bg-${this.props.interest.name}.jpg`;

      return(
        <section 
          id={this.props.interest.name} 
          className={`interest--${this.props.interest.name}  interest`}
          ref={section => this.interestRef = section}
        >
          <div className="background-container" ref={div => this.imageRef = div}>
            <img 
              className="background" 
              src={process.env.PUBLIC_URL + imagePath}
              alt={this.props.interest.name}
            />
          </div>
  
          <div className="interest__content">
            <div className="interest__title  animate">
              {this.props.interest.svgTitle}
            </div>
            {/* <p className="animate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
            <button className="close interest-btn" onClick={this.handleClick}>
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