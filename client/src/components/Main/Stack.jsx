import React from 'react';

const Stack = () => {
  return (
    <section className="my-stack" id="My Stack">
      <h2 className="section_title section_title-stack">My Stack</h2>
      <div className="stack">
        <div className="stack-item">
          <h3>HTML</h3>
          <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>
        </div>
        <div className="stack-item">
          <h3>Javascript</h3>
          <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>
        </div>
        <div className="stack-item">
          <h3>CSS</h3>
          <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>
        </div>
      </div>
        <a href="#Projects" className="btn">My Work</a>
    </section>
  );
};

export default Stack;