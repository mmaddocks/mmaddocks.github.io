import React from 'react';
import { Link } from 'react-router-dom';

// UI
import '../App.css';
import aboutHeroImage from '../assets/mountain-bg.jpg';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  render() {
    return (
      <>
        {/* {this.state.isLoaded ? null :
          <div className="loader"/>
        } */}
        {/* <div 
          className={`about page smooth-image image-${
            this.state.isLoaded ? 'visible' : 'hidden'
          }`} > */}
        <div className="about page">
          <img
            src={aboutHeroImage} alt="hero" 
            onLoad={() => this.setState({isLoaded: true})}
            
          />
          <Link to="/">Got to Home</Link>
        </div>
      </>
    );
  }

}

export default About;
