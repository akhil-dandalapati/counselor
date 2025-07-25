import React from "react";

const FeatureBox = ({ iconClass, title, description, boxClass }) => {
  return (
    <div className={boxClass}>
      <i className={iconClass}></i>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureBox;
