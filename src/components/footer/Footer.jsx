import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

import ContentWrapper from "../../Index";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="socialIcons">
          <span
            className="icon"
            onClick={() =>
              window.open("https://github.com/karmakarswaraj", "_blank")
            }
          >
            <FaGithub />
          </span>
          <span
            className="icon"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/swaraj-karmakar",
                "_blank"
              )
            }
          >
            <FaLinkedin />
          </span>
          <span
            className="icon"
            onClick={() =>
              window.open("https://twitter.com/hello_swaraj", "_blank")
            }
          >
            <FaTwitter />
          </span>

          <span
            className="icon"
            onClick={() =>
              window.open("https://www.instagram.com/https.swaraj/", "_blank")
            }
          >
            <FaInstagram />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
