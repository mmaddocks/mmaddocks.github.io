import React from 'react';
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';

// UI
import '../styles/app.scss';
import '../styles/components/_home.scss';
import '../styles/components/_logo-animation.scss';

class Home extends React.Component {

  componentDidMount() {
    console.log('mounted');
    this.homePageTimeline();
  };

   homePageTimeline = () => {
    // const timeline = gsap.timeline({ paused: true });
    const timeline = gsap.timeline();

    timeline.set('.home .logo', { className: 'logo animate'}); // working on parent
    // timeline.call(function() {
    //   document.getElementById('logo').setAttribute('class', 'animate');
    // })
  
    return timeline;
  }

  render() {
    return (
      <div className="home  page">
        <div className="content">
          <div className="welcome">
            <div className="welcome__title">
              <h1>Hello,</h1>
              <h1>I'm <strong>Mark</strong></h1>
            </div>

            <div className="welcome__intro">
              <p>A Front-end web developer and Product Designer.</p>
            </div>

            <Link to="/about" className="welcome__link">
              <span>Learn more</span>
              <i data-feather="arrow-right"></i>
            </Link>
          </div>

          <div className="links">
            <a href="https://www.google.com/" className="resume  links__item">Resume</a>
            <a href="https://www.google.com/" className="github  links__item">Github</a>
            <a href="https://www.google.com/" className="linkedin  links__item">LinkedIn</a>
          </div>
        </div>

        <div className="logo">

          <svg id="logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="-1 -1 985.935 828.301">
            <defs>
              <linearGradient id="linear-gradient" y1="1" x2="0.537" y2="0.196" gradientUnits="objectBoundingBox">
                <stop offset="0" stopColor="#54ECFF"/>
                <stop offset="1" stopColor="#4ddcb4"/>
              </linearGradient>
            </defs>
          
            <path id="stroke-layer" data-name="Union 2" d="M728.554,828.3V742.995q43.239,0,58.54-9.175,15.282-9.176,15.3-33.019V485.24q0-64.2,69.62-74.3-69.625-11.015-69.62-75.218V136.676q0-28.422-17.41-40.819Q767.572,83.477,750.7,83.475h-3.162l-18.986,1.832V0h35.861Q907.852,0,907.874,121.08V311.874q0,31.2,12.652,44.033,12.667,12.853,40.089,12.843h25.32v85.306h-25.32q-27.44,0-40.089,12.382t-12.652,42.655v198.13Q907.881,828.3,764.415,828.3Zm-507.029,0q-143.471,0-143.464-121.08V509.089q0-30.272-12.658-42.655T25.315,454.053H0V368.746H25.315q27.418,0,40.088-12.842T78.061,311.87V121.08Q78.061,0,221.524,0H257.39V85.307a31.957,31.957,0,0,0-8.44-.918q-65.42,0-65.4,52.287V335.723q0,64.22-69.62,75.217,69.625,10.1,69.62,74.3V700.8q0,23.842,15.3,33.019,15.275,9.164,58.544,9.175V828.3ZM456.9,500.93,327.155,178.389h70.328L495.7,422.114l98.217-243.72h70.327L534.5,500.93Z" transform="translate(0 -0.001)" fill="none" stroke="#4bddc5" strokeWidth="2" className="stroke-layer"/>
          
            <path id="gradient-layer" data-name="Union 2" d="M728.554,828.3V742.995q43.239,0,58.54-9.175,15.282-9.176,15.3-33.019V485.24q0-64.2,69.62-74.3-69.625-11.015-69.62-75.218V136.676q0-28.422-17.41-40.819Q767.572,83.477,750.7,83.475h-3.162l-18.986,1.832V0h35.861Q907.852,0,907.874,121.08V311.874q0,31.2,12.652,44.033,12.667,12.853,40.089,12.843h25.32v85.306h-25.32q-27.44,0-40.089,12.382t-12.652,42.655v198.13Q907.881,828.3,764.415,828.3Zm-507.029,0q-143.471,0-143.464-121.08V509.089q0-30.272-12.658-42.655T25.315,454.053H0V368.746H25.315q27.418,0,40.088-12.842T78.061,311.87V121.08Q78.061,0,221.524,0H257.39V85.307a31.957,31.957,0,0,0-8.44-.918q-65.42,0-65.4,52.287V335.723q0,64.22-69.62,75.217,69.625,10.1,69.62,74.3V700.8q0,23.842,15.3,33.019,15.275,9.164,58.544,9.175V828.3ZM456.9,500.93,327.155,178.389h70.328L495.7,422.114l98.217-243.72h70.327L534.5,500.93Z" transform="translate(0 -0.001)" fill="url(#linear-gradient)" className="gradient-layer"/>
          </svg>      
          
        </div>

      </div>
    );
  }
}

export default Home;
