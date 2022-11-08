import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes flex">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>

        <div>
          <h3 className="about__title">16</h3>
          <span className="about__subtitle">Project completed</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-cup"></i>

        <div>
          <h3 className="about__title">970</h3>
          <span className="about__subtitle">Cup of coffee</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-people"></i>

        <div>
          <h3 className="about__title">27</h3>
          <span className="about__subtitle">Satisfied clients</span>
        </div>
      </div>

      
    </div>
  );
};

export default AboutBox;
