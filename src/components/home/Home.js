import React from "react";
import { gsap } from "gsap";
import smoothscroll from "smoothscroll-polyfill";

// Components
import Page from "../utils/Page";
import Projects from "../projects/Projects";

// UI
import Container from "react-bootstrap/Container";

// Icons
import { ArrowRight } from "react-feather";

// Scroll Animation
import AOS from "aos";
import "aos/dist/aos.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: true,
      isLoaded: false,
    };
    this.featuredProjectsRef = React.createRef();
  }

  componentDidMount() {
    AOS.init();
    smoothscroll.polyfill();

    // Check for token
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      this.setState({
        animate: true,
      });
      // Set token & initialise animation
      window.sessionStorage.setItem("firstLoadDone", true);
      this.stageHomePage();
    } else {
      this.setState({
        animate: false,
      });
    }
  }

  stageHomePage = () => {
    // Set elements position
    gsap.set(".home-page .welcome h1", { opacity: 0, translateY: "100px" });
    gsap.set(".home-page .welcome__intro", { opacity: 0, translateX: "-50px" });
    gsap.set(".home-page .welcome__link", { opacity: 0, translateX: "-50px" });
    gsap.set(".nav", { opacity: 0, translateY: "-50px" });

    // Init timeline
    this.homePageTimeline();
  };

  homePageTimeline = () => {
    // Timeline
    const timeline = gsap.timeline();

    // Title
    timeline.staggerTo(".home-page .welcome h1", 1, {
      translateY: 0,
      opacity: 1,
      stagger: 0.5,
    });
    // Title highlight
    timeline.set(".home-page .welcome__title", {
      className: "welcome__title show-highlight",
    });
    // Draw logo
    timeline.set(".home-page .logo", { className: "logo animate" }); // working on parent

    // Intro
    timeline.to(".home-page .welcome__intro", {
      translateX: 0,
      opacity: 1,
      duration: 1,
    });

    // Nav
    timeline.to(".nav", {
      translateY: 0,
      opacity: 1,
      duration: 0.5,
    });

    // Learn more button
    timeline.to(".home-page .welcome__link", {
      translateX: 0,
      opacity: 1,
      duration: 1,
      delay: 0.5,
    });

    return timeline;
  };

  handleHeroButtonClick = () => {
    this.featuredProjectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <Page pageName="home-page">
        <section className="hero">
          <Container>
            <div className="welcome">
              {/* If animation has already ran, just show highlight */}
              <div
                className={
                  this.state.animate
                    ? "welcome__title"
                    : "welcome__title show-highlight"
                }
              >
                <h1>Hello,</h1>
                <h1>
                  I'm <strong>Mark</strong>
                </h1>
              </div>

              <div className="welcome__intro">
                <p>A Frontend Web Developer and UX Designer.</p>
              </div>
              <div className="welcome__link">
                <button onClick={this.handleHeroButtonClick}>
                  <span>Learn more</span>
                  <ArrowRight />
                </button>
              </div>
            </div>

            {/* If animation has already ran, just show logo */}
            <div className={this.state.animate ? "logo" : "logo show"}>
              <svg
                id="logo"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
                height="100%"
                viewBox="-1 -1 985.935 828.301"
              >
                <defs>
                  <linearGradient
                    id="logo-linear-gradient"
                    y1="1"
                    x2="0.537"
                    y2="0.196"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop
                      className="colour-stop-1"
                      offset="0"
                      stopColor="currentColor"
                    />
                    <stop
                      className="colour-stop-2"
                      offset="1"
                      stopColor="currentColor"
                    />
                  </linearGradient>
                </defs>

                <path
                  id="stroke-layer"
                  data-name="Union 2"
                  d="M728.554,828.3V742.995q43.239,0,58.54-9.175,15.282-9.176,15.3-33.019V485.24q0-64.2,69.62-74.3-69.625-11.015-69.62-75.218V136.676q0-28.422-17.41-40.819Q767.572,83.477,750.7,83.475h-3.162l-18.986,1.832V0h35.861Q907.852,0,907.874,121.08V311.874q0,31.2,12.652,44.033,12.667,12.853,40.089,12.843h25.32v85.306h-25.32q-27.44,0-40.089,12.382t-12.652,42.655v198.13Q907.881,828.3,764.415,828.3Zm-507.029,0q-143.471,0-143.464-121.08V509.089q0-30.272-12.658-42.655T25.315,454.053H0V368.746H25.315q27.418,0,40.088-12.842T78.061,311.87V121.08Q78.061,0,221.524,0H257.39V85.307a31.957,31.957,0,0,0-8.44-.918q-65.42,0-65.4,52.287V335.723q0,64.22-69.62,75.217,69.625,10.1,69.62,74.3V700.8q0,23.842,15.3,33.019,15.275,9.164,58.544,9.175V828.3ZM456.9,500.93,327.155,178.389h70.328L495.7,422.114l98.217-243.72h70.327L534.5,500.93Z"
                  transform="translate(0 -0.001)"
                  fill="none"
                  stroke="#4bddc5"
                  strokeWidth="2"
                  className="stroke-layer"
                />

                <path
                  id="gradient-layer"
                  data-name="Union 2"
                  d="M728.554,828.3V742.995q43.239,0,58.54-9.175,15.282-9.176,15.3-33.019V485.24q0-64.2,69.62-74.3-69.625-11.015-69.62-75.218V136.676q0-28.422-17.41-40.819Q767.572,83.477,750.7,83.475h-3.162l-18.986,1.832V0h35.861Q907.852,0,907.874,121.08V311.874q0,31.2,12.652,44.033,12.667,12.853,40.089,12.843h25.32v85.306h-25.32q-27.44,0-40.089,12.382t-12.652,42.655v198.13Q907.881,828.3,764.415,828.3Zm-507.029,0q-143.471,0-143.464-121.08V509.089q0-30.272-12.658-42.655T25.315,454.053H0V368.746H25.315q27.418,0,40.088-12.842T78.061,311.87V121.08Q78.061,0,221.524,0H257.39V85.307a31.957,31.957,0,0,0-8.44-.918q-65.42,0-65.4,52.287V335.723q0,64.22-69.62,75.217,69.625,10.1,69.62,74.3V700.8q0,23.842,15.3,33.019,15.275,9.164,58.544,9.175V828.3ZM456.9,500.93,327.155,178.389h70.328L495.7,422.114l98.217-243.72h70.327L534.5,500.93Z"
                  transform="translate(0 -0.001)"
                  fill="url(#logo-linear-gradient)"
                  className="gradient-layer"
                />
              </svg>
            </div>
          </Container>
        </section>
        <Projects scrollRef={this.featuredProjectsRef} />
      </Page>
    );
  }
}

export default Home;
