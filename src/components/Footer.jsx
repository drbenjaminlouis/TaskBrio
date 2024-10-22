import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container"> 
      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="https://github.com/drbenjaminlouis/TaskBrio.git" target="_blank" rel="noopener noreferrer" className="nav-link">
              <FontAwesomeIcon icon={faGithub} /> Source Code
            </a>
          </li>
          <li className="nav-item">
            <a href="www.abyjose.live" target="_blank" rel="noopener noreferrer" className="nav-link">Developer</a>
          </li>
        </ul>
      </nav>
      <p className="footer-text">&copy; 2024 TaskBrio. All rights reserved. Developed by <a href="www.abyjose.live">Aby Jose</a>.</p>
    </footer>
  );
};

export default Footer;
