import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap/all';
import { Home, Plus } from 'react-feather';

// Images
import HeroImage from '../assets/mountain-bg.jpg';
import HeroImageClipping from '../assets/mountain-bg-clipping.png';

// UI
import '../styles/app.scss';
import '../styles/components/_about.scss';
import '../styles/partials/_pulse-animation.scss';
import '../styles/partials/_InterestButton-animation.scss';


class InterestButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };

    this.tooltipRef = null;
    this.textRef = null;
    this.timeline = gsap.timeline({ paused: true });
  }

  componentDidMount = () => {
    this.toolTipAnimation();
	}

  onMouseEnterHandler = () => {
    this.setState({isShown: true});
    this.timeline.play();
  }

  onMouseLeaveHandler = () => {
    this.setState({isShown: false});
    this.timeline.reverse();
  }

  toolTipAnimation = () => {
    gsap.set(this.tooltipRef, { width: 0, autoAlpha: 0, });
    gsap.set(this.textRef, { opacity: 0, });

    this.timeline
      .to(this.tooltipRef, { 
        width: 'auto', 
        autoAlpha: 1, 
        duration: 0.5, 
      })
      .to(this.textRef, { 
        opacity: 1, 
        duration: 0.250, 
      });
  }

  render() {
    return (
      <button 
        className="open  pulse" 
        data-target={'#' + this.props.interest} 
        type="button" 
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}>
        {/* {this.state.isShown && ( */}
          <div className="tooltip" ref={div => this.tooltipRef = div}>
            <span className="text" ref={span => this.textRef = span}>{this.props.interest}</span>
          </div>
        {/* )} */}
        <Plus />
      </button>
    );
  }

}

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      interests: [
        'climbing',
        'skiing',
        'surfing',
      ]
    };
  }

  componentDidMount() {
    this.stageAboutPage();
  };

  stageAboutPage = () => {

    // binds(); // about page binds
    // tooltips(); // about page tooltips

    // Set elements position
    gsap.set('.hero .title-container', { opacity: 0, translateY: 100, });
    gsap.set('.hero button', { opacity: 0 });

    // Init timeline
    this.AboutPageTimeline();
  };

  AboutPageTimeline = () => {
    // Timeline
    const timeline = gsap.timeline();
    
    // Title
    timeline.to('.hero .title-container', {translateY: 0, opacity: 1, duration: 0.5, delay: 0.5 });

    // Buttons
    timeline.fromTo('.hero button', { opacity: 0 }, { opacity: 1, duration: 0.5, stagger: 0.4 });

    return timeline;

  }

  render() {
    return (
      <div className="about  page">

        <section className="hero">
          <div className="hero__content">
    
            <div className="background-image">
              <img
                src={HeroImage} 
                alt="mountain" 
                onLoad={() => this.setState({isLoaded: true})}
              />
              <img 
                className="mountain-clipping" 
                src={HeroImageClipping} 
                alt="mountain"
              />
            </div>
        
            <div className="title-container">
              <h1 className="title--about  title">about</h1>
              <h1 className="title--me  title">me</h1>
            </div>
        
            {this.state.interests.map((interest, index) => {
              return (
                <InterestButton key={index} index={index} interest={interest} />
              );
            })}
    
            <Link className="home-btn" to="/"><Home /></Link>
        
          </div>
        </section>

      </div>
    );
  }

}

export default About;
