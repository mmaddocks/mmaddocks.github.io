import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap/all';
import { Home } from 'react-feather';

// Components
import AboutButton from './AboutButton';
import AboutInterest from './AboutInterest';

// Images
import HeroImage from '../../assets/mountain-bg.jpg';
import HeroImageClipping from '../../assets/mountain-bg-clipping.png';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      interests: [
        'climbing',
        'skiing',
        'surfing',
      ],
      showInterest: false,
      selectedInterest: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.stageAboutPage();
  };

  stageAboutPage = () => {
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
  
  /**
   * @desc handle click on interest button
   * @param {*} interest 
   */
  handleClick = (interest) => {
    this.setState({
      showInterest: true,
      // selectedInterest: interest,
    });
    this.setActiveInterest(interest);
  }

  /**
   * @desc set the active interest
   * @param {*} interest 
   */
  setActiveInterest = (interest) => {
    // setState is asynchronous
    // console.log will execute before state is updated
    this.setState({ selectedInterest: interest, }, () => { 
      // console.log('(About.js) selectedInterest:', this.state.selectedInterest);
    });
  }

  handleInterestUnmount = () => {
    this.setState({
      showInterest: false,
    });
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
                <AboutButton 
                  key={index} 
                  index={index} 
                  interest={interest} 
                  // interest={interest.title} 
                  handleClick={this.handleClick}
                />
              );
            })}
    
            <Link className="home-btn" to="/"><Home /></Link>
        
          </div>
        </section>

        {this.state.showInterest &&
          <AboutInterest 
            interest={this.state.selectedInterest}
            showInterest={this.state.showInterest}
            // image={this.state.interests[this.state.selectedInterest].image}
            unmountComponent={this.handleInterestUnmount}
          />
        }

      </div>
    );
  }

}

export default About;
