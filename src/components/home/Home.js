import React from "react";
import { gsap } from "gsap";
import { ArrowRight } from "react-feather";
import Page from "../Page";
import communicatorJpg from "../../assets/projects/communicator/communicator-app-square.jpg";
import energyApp from "../../assets/projects/energy-app-square.jpg";
import webApp from "../../assets/projects/web-app-square.jpg";
import HomeProject from "./HomeProject";
import smoothscroll from "smoothscroll-polyfill";

// Scroll Animation
import AOS from "aos";
import "aos/dist/aos.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: true,
      isLoaded: false,
      projects: [
        {
          projectName: "Communicator",
          url: "communicator",
          projectLead:
            "Internal communications mobile app to keep all employees connected.",
          projectDesc:
            "Communicator is a ‘white label’ mobile app that ensures all stakeholders are updated with the latest information about your company, in real-time, wherever they are.",
          projectImage: communicatorJpg,
          placement: "left",
        },
        {
          projectName: "Energy App",
          url: "energy-app",
          projectLead:
            "Communications mobile app for a client in the energy industry.",
          projectDesc:
            "Due to project confidentiality, I am limited by what I can show and the company branding / content has been substituted.",
          projectImage: energyApp,
          placement: "right",
        },
        {
          projectName: "Web App",
          url: "web-app",
          projectLead:
            "Internal communications web app to keep all employees connected.",
          projectDesc:
            "Designed and built a ‘white label’ internal corporate communications web app (the sibling to Communicator).",
          projectImage: webApp,
          placement: "left",
        },
      ],
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
        <div className="container">
          <section className="hero">
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
          </section>

          <section
            ref={this.featuredProjectsRef}
            id="featured-projects"
            className="featured-projects"
          >
            {/* NOTE: AOS styles need to be seperate to scroll-to container (#featured-projects) for scroll alignment */}
            <div
              className="aos-wrapper"
              data-aos="fade-up"
              // data-aos-anchor-placement="top-center"
            >
              <div className="logo-brace">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 203 650"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="logo-brace-linear-gradient"
                      x1="-571"
                      y1="650"
                      x2="-681.388"
                      y2="19.322"
                      gradientUnits="userSpaceOnUse"
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
                    d="M0.94519 650V583.058C23.5748 583.058 38.8935 580.658 46.9015 575.858C54.8995 571.057 58.9032 562.42 58.9126 549.946V380.787C58.9126 347.2 77.1308 327.765 113.567 322.481C77.1282 316.718 58.91 297.043 58.9126 263.454V107.255C58.9126 92.3858 54.3568 81.7084 45.2451 75.2228C36.1323 68.7461 27.1608 65.5072 18.3307 65.5062H15.8484L0.943604 66.9438V0H29.096C104.166 0 141.707 31.6721 141.719 95.0163V244.74C141.719 261.063 145.03 272.581 151.651 279.294C158.281 286.019 168.771 289.378 183.123 289.373H203V356.316H183.123C168.762 356.316 158.271 359.555 151.651 366.032C145.031 372.51 141.72 383.668 141.719 399.506V554.986C141.723 618.329 104.182 650 29.0975 650H0.94519Z"
                    fill="url(#logo-brace-linear-gradient)"
                  />
                </svg>
              </div>

              <div className="content">
                <div className="content__title">
                  <h3>Featured</h3>
                  <h2>Projects</h2>
                </div>

                <div className="content__intro">
                  <p>
                    A selection of projects that I’ve worked on as a Designer
                    and Developer.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {this.state.projects.map((project, index) => {
            return <HomeProject key={index} index={index} project={project} />;
          })}
        </div>
      </Page>
    );
  }
}

export default Home;
