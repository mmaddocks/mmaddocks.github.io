import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Mail } from "react-feather";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container">
        <section className="footer__content">
          <div className="social">
            <a
              href="mailto:hello&#64;mmaddocks&#46;com"
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
          <div className="meta">
            <div className="copyright">
              <p>
                <small>&copy; Mark Maddocks</small>
              </p>
            </div>

            {/* <div className="created">
              <p>Designed in Figma</p>
              <span className="seperator">|</span>
              <p>Built in React</p>
            </div> */}
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
