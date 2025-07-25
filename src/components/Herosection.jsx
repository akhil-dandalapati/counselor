import React from "react";
import "./herosection.css";
const Herosection = ({ title }) => {
  return (
    <div>
      <div className="services-banner">
        <div className="homemaker-overlay" />
        <div className="services-banner1">
          <p className="services-title">
            HOME <i class="bi bi-chevron-right"></i>
            {title.heading}
          </p>
          <h1>{title.subheading}</h1>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
