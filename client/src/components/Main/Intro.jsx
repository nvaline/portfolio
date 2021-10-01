import React from 'react';

import nick from '../../img/nick_02.jpg';

// figure out why the image wont load => check web[ack settings]
const Intro = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section_title section_title-intro">
        Hi, I am <strong>nick valine</strong>
      </h1>
      <p className="section_subtitle section_subtitle-intro">Software Engineer</p>
      <img src={ nick } alt="a picture of nick" className="intro_img" />
    </section>
  );
};

export default Intro;