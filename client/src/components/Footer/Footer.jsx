import React from 'react';
import IconLink from './IconLink.jsx';

const Footer = () => {
  return (
    <footer className="footer" id="Contact">
      <a href="mailto:nickvaline@gmail.com" className="footer_link">nickvaline@gmail.com</a>
      <ul className="social-list">
        <IconLink
          icon="fab fa-linkedin-in"
          link="https://www.linkedin.com/in/nvaline/" />
        <IconLink
          icon="fab fa-github-alt"
          link="https://github.com/nvaline" />
      </ul>
    </footer>
  );
};

export default Footer;