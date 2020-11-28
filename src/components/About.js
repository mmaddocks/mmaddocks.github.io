import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Home, Plus } from 'react-feather';
import HeroImage from '../assets/mountain-bg.jpg';
import HeroImageClipping from '../assets/mountain-bg-clipping.png';

// UI
import '../styles/app.scss';
import '../styles/components/_about.scss';
import '../styles/partials/_pulse-animation.scss';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isShown: false,
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

    console.log('Tooltip show? ', this.state.isShown);
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
        
            <button 
              className="open  pulse" 
              data-target="#climbing" 
              type="button" 
              onMouseEnter={() => this.setState({isShown: true})}
              onMouseLeave={() => this.setState({isShown: false})}>
              {this.state.isShown && (
                <div className="tooltip">
                  <span className="text">Climbing</span>
                </div>
              )}
              <Plus />
            </button>
            <button className="open  pulse" data-target="#skiing" type="button">
              <div className="tooltip">
                <span className="text">Skiing</span>
              </div>
              <Plus />
            </button>
            <button className="open  pulse" data-target="#surfing" type="button">
              <div className="tooltip">
                <span className="text">Surfing</span>
              </div>
              <Plus />
            </button>
    
            <Link className="home-btn" to="/"><Home /></Link>
        
          </div>
        </section>

      </div>
    );
  }

}

export default About;
