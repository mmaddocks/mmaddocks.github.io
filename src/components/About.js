import React from 'react';
import { Link } from 'react-router-dom';

// UI
import '../App.css';
import aboutHeroImage from '../assets/mountain-bg.jpg';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  // render() {
  //   return (
  //     <div className="about  page">
  //       <img 
  //         style={this.state.loaded ? {} : {display: 'none'}}
  //         src={aboutHeroImage} alt="hero" 
  //         onLoad={() => this.setState({loaded: true})}
  //       />
  //       <Link to="/">Got to Home</Link>
  //     </div>
  //   );
  // }


  // render() {
  //   return (
  //     <div className="about  page">
  //       {this.state.isLoaded ? null :
  //         <div className="loader"/>
  //       }
  //       <img
  //         style={this.state.isLoaded ? {} : {display: 'none'}}
  //         src={aboutHeroImage} alt="hero" 
  //         onLoad={() => this.setState({isLoaded: true})}
  //       />
  //       <div style={this.state.isLoaded ? {} : {display: 'none'}}>
  //         <Link to="/">Got to Home</Link>
  //       </div>
  //     </div>
  //   );
  // }



  render() {
    return (
      <>
        {/* {this.state.isLoaded ? null :
          <div className="loader"/>
        } */}
        <div 
          className={`about page smooth-image image-${
            this.state.isLoaded ? 'visible' : 'hidden'
          }`} >
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
