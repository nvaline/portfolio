import React from 'react';
import LinkItem from './LinkItem.jsx';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="mailto:nickvaline@gmail.com" className="footer_link">nickvaline@gmail.com</a>
      <ul className="social-list">
        <LinkItem
          link="https://www.linkedin.com/in/nvaline/"
          icon="fab fa-linkedin-in" />
        <LinkItem
          link="https://github.com/nvaline"
          icon="fab fa-github-alt" />
      </ul>
    </footer>
  );
};

export default Footer;