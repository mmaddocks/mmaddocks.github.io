import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import smoothscroll from "smoothscroll-polyfill";

// UI
import Container from "react-bootstrap/Container";

const Navigation = (props) => {
  useEffect(() => {
    smoothscroll.polyfill();
    // On page load/refresh with hash in url scroll to projects
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });

  return (
    <header>
      <Container>
        <nav className="nav">
          <Link to="/" className="nav__item--home  nav__item">
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
                  id="logo-linear-gradient-nav"
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
                data-name="Union 2"
                d="M728.554,828.3V742.995q43.239,0,58.54-9.175,15.282-9.176,15.3-33.019V485.24q0-64.2,69.62-74.3-69.625-11.015-69.62-75.218V136.676q0-28.422-17.41-40.819Q767.572,83.477,750.7,83.475h-3.162l-18.986,1.832V0h35.861Q907.852,0,907.874,121.08V311.874q0,31.2,12.652,44.033,12.667,12.853,40.089,12.843h25.32v85.306h-25.32q-27.44,0-40.089,12.382t-12.652,42.655v198.13Q907.881,828.3,764.415,828.3Zm-507.029,0q-143.471,0-143.464-121.08V509.089q0-30.272-12.658-42.655T25.315,454.053H0V368.746H25.315q27.418,0,40.088-12.842T78.061,311.87V121.08Q78.061,0,221.524,0H257.39V85.307a31.957,31.957,0,0,0-8.44-.918q-65.42,0-65.4,52.287V335.723q0,64.22-69.62,75.217,69.625,10.1,69.62,74.3V700.8q0,23.842,15.3,33.019,15.275,9.164,58.544,9.175V828.3ZM456.9,500.93,327.155,178.389h70.328L495.7,422.114l98.217-243.72h70.327L534.5,500.93Z"
                transform="translate(0 -0.001)"
                fill="url(#logo-linear-gradient-nav)"
                className="gradient-layer"
              />
            </svg>
          </Link>
          <NavLink to="/about" className="nav__item--about  nav__item">
            About
          </NavLink>
          <NavHashLink
            smooth
            to="/#featured-projects"
            className="nav__item--projects  nav__item"
          >
            Projects
          </NavHashLink>
          <a href="https://mmaddocks.com/resume" className="nav__item">
            Resume
          </a>
        </nav>
      </Container>
    </header>
  );
};

export default Navigation;
