import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap/all';
import { Home, Plus, ArrowLeft } from 'react-feather';

// Images
import HeroImage from '../assets/mountain-bg.jpg';
import HeroImageClipping from '../assets/mountain-bg-clipping.png';
// import climbingBg from '../assets/interest-bg-climbing.jpg';
// import skiingBg from '../assets/interest-bg-skiing.jpg';
// import surfingBg from '../assets/interest-bg-surfing.jpg';

// UI
import '../styles/app.scss';
import '../styles/components/_about.scss';
import '../styles/partials/_InterestButton.scss';
import '../styles/partials/_pulse-animation.scss';
import '../styles/components/_Interest.scss';

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

  /**
   * @desc Callback to pass data (selected interest) to parent
   */
  setInterest = () => {
    this.props.handleClick(this.props.interest);
    // this.props.handleClick(this.props.index);
  }

  render() {
    return (
      <button 
        className="interest-btn open  pulse" 
        data-target={'#' + this.props.interest} 
        type="button" 
        onClick={this.setInterest}
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}>
        <div className="tooltip" ref={div => this.tooltipRef = div}>
          <span className="text" ref={span => this.textRef = span}>{this.props.interest}</span>
        </div>
        <Plus />
      </button>
    );
  }

}

class Interest extends React.Component {

  componentDidMount = () => {
    // console.log('Interest component mounted');
    // src={require(`../assets/interest-bg-${this.props.interest}.jpg`)}
    // src={require('../assets/interest-bg-climbing.jpg')}
  }
  
  // render() {

  //   console.log('ShowInterest: ', this.props.showInterest);

  //   let image;

  //   if (this.props.interest === 'climbing') { image = climbingBg; }
  //   if (this.props.interest === 'skiing') { image = skiingBg; }
  //   if (this.props.interest === 'climbing') { image = surfingBg; }

  //   if (this.props.showInterest) {
  //     return(
  //       <section id={this.props.interest} className={`interest--${this.props.interest}  interest`}>
  //         <div className="background-container">
  //           <img 
  //             className="background" 
  //             src={image}
  //             alt={this.props.interest}
  //           />
  //         </div>
  
  //         <div className="interest__content">
  //           <div className="interest__title  animate">
  //           </div>
  //           <p className="animate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  //           <button className="close" data-target={`#${this.props.interest}`}>
  //             <ArrowLeft />
  //           </button>
  //         </div>
  //       </section>
  //     );
  //   } else {
  //     return null;
  //   }

  // }

  render() {

    if (this.props.showInterest) {

      let imagePath = `/assets/interest-bg-${this.props.interest}.jpg`

      return(
        <section id={this.props.interest} className={`interest--${this.props.interest}  interest`}>
          <div className="background-container">
            <img 
              className="background" 
              // src={image}
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
      // selectedInterest: 0,
      // interests: [
      //   {
      //     title: 'climbing',
      //     image: climbingBg
      //   },
      //   {
      //     title: 'skiing',
      //     image: skiingBg
      //   },
      //   {
      //     title: 'surfing',
      //     image: surfingBg
      //   },        
      // ],
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
      console.log('2) selectedInterest:', this.state.selectedInterest);
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
                <InterestButton 
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

        {/* {this.state.interests.map((interest, index) => {
          return (
            <Interest 
              key={index} 
              index={index} 
              interest={interest} 
              showInterest={this.state.showInterest}
              selectedInterest={this.state.selectedInterest}
            />
          );
        })} */}

        <Interest 
          interest={this.state.selectedInterest}
          showInterest={this.state.showInterest}
          // image={this.state.interests[this.state.selectedInterest].image}
        />

      </div>
    );
  }

}

export default About;
