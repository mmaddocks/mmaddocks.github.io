import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';

const Navigation = (props) => {
  useEffect(() => {
     // On page load/refresh with hash in url scroll to projects
     if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  });

  return (
    <header>
      <div className="container">
        <nav className="nav">
          <Link to="/about" className="nav__item">
            About
          </Link>
          <NavHashLink
            smooth
            to="/#featured-projects"
            activeClassName="selected"
            className="nav__item"
          >
            Projects
          </NavHashLink>
          <a href="https://mmaddocks.com/resume" className="nav__item">
            Resume
          </a>
          <a
            href="https://github.com/mmaddocks"
            className="nav__item"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/markmaddocks1/"
            className="nav__item"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
