import React from "react";
const ServiceBadge = ({ iconClass, badgeNumber, title, description }) => {
  return (
    <div className="col-md-4 mb-4 text-center">
      <div className="p-4 rounded-circle bg-light d-inline-block position-relative service-badges">
        <i
          className={iconClass}
          style={{
            width: "100px",
            height: "100px",
            fontSize: "60px",
            lineHeight: "100px",
            textAlign: "center",
            borderRadius: "50%",
            backgroundColor: "transparent",
            color: "black",
            display: "block",
          }}
        ></i>
        <span
          className="badge bg-success position-absolute translate-middle rounded-pill"
          style={{ top: "10%", left: "80%", height: "30px", width: "30px" }}
        >
          {badgeNumber}
        </span>
      </div>
      <h5 className="mt-3 fw-semibold">{title}</h5>
      <p className="text-muted">{description}</p>
    </div>
  );
};

export default ServiceBadge;
