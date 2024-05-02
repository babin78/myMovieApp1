import React from "react";
import "./Footer.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="menuitems">
          <li className="menuitem">Terms Of Use</li>
          <li className="menuitem">Privacy-Policy</li>
          <li className="menuitem">About</li>
          <li className="menuitem">Blog</li>
          <li className="menuitem">FAQ</li>
        </ul>
        <div className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro
          tenetur repellendus, maiores asperiores suscipit provident iure
          excepturi soluta consequatur ea dolore dicta eveniet cupiditate ipsam,
          qui, maxime quasi voluptate.
        </div>
        <div className="socialicons">
          <div className="socialicon">
            <FaFacebookF />
          </div>
          <div className="socialicon">
            <FaInstagram />
          </div>
          <div className="socialicon">
            <FaTwitter />
          </div>
          <div className="socialicon">
            <FaLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
