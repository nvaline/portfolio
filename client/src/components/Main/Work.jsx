import React from 'react';

import pic from '../../img/portfolio-01.jpg';

const Work = () => {
  return (
    <section className="my-work" id="Projects">
      <h2 className="section_title section_title-work">My Projects</h2>
      <p className="section_subtitle section_subtitle-work">A selection of my work</p>

      <div className="portfolio">
      {/* name project here for tracking */}
        <a href="" className="portfolio_item">
          <img src={ pic } alt="name of image here" className="portfolio_img" />
        </a>
      {/* name project here for tracking */}
        <a href="" className="portfolio_item">
          <img src={ pic } alt="name of image here" className="portfolio_img" />
        </a>
      {/* name project here for tracking */}
        <a href="" className="portfolio_item">
          <img src={ pic } alt="name of image here" className="portfolio_img" />
        </a>
      {/* name project here for tracking */}
        <a href="" className="portfolio_item">
          <img src={ pic } alt="name of image here" className="portfolio_img" />
        </a>
      </div>
    </section>
  )
};

export default Work;