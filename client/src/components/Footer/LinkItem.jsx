import React from 'react';

const LinkItem = ({ link, icon }) => {
  return (
   <li className="social-list_item">
    <a href={ link } className="social-list_link">
      <i className={ icon }></i>
    </a>
  </li>
  )
};

export default LinkItem;