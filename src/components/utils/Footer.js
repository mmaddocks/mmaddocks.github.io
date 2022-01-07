import React from "react";

// UI
import Container from "react-bootstrap/Container";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faFigma, faReact } from "@fortawesome/free-brands-svg-icons";
import { Mail } from "react-feather";

const Footer = (props) => {
  return (
    <footer className="footer">
      <Container>
        <section className="footer__content">
          <div className="social">
            <a
              href="mailto:mark.maddocks&#64;icloud&#46;com"
              className="social__item--email social__item"
              target="_blank"
              rel="noreferrer"
            >
              <Mail />
            </a>
            <a
              href="https://github.com/mmaddocks"
              className="social__item"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/markmaddocks1/"
              className="social__item"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

          </div>

          <div className="created">
            <p>Designed in <FontAwesomeIcon icon={faFigma} /></p>
            <span className="seperator">|</span>
            <p>Built in <FontAwesomeIcon icon={faReact} /></p>
          </div>

          <div className="meta">
            <div className="copyright">
              <p>
                <small>&copy; Mark Maddocks</small>
              </p>
            </div>
          </div>
          
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
