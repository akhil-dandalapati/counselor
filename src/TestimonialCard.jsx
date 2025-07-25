import React from "react";

const TestimonialCard = ({ text, name, title, image }) => {
  return (
    <div className="position-relative">
      <div style={quoteStyle}>
        <i
          className="bi bi-quote"
          style={{
            width: "40px",
            height: "40px",
            fontSize: "20px",
            lineHeight: "40px",
            textAlign: "center",
            borderRadius: "50%",
            backgroundColor: "#589167",
            color: "white",
            display: "block",
          }}
        ></i>
      </div>
      <div
        className="card p-4 pt-5 border-0 shadow"
        style={{ borderRadius: "12px" }}
      >
        <p className="text-muted mb-4">{text}</p>
        <div className="d-flex align-items-center">
          <img
            src={image}
            alt={name}
            className="rounded-circle me-3"
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />
          <div>
            <h6 className="mb-0">{name}</h6>
            <small className="text-muted">{title}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

const quoteStyle = {
  position: "absolute",
  top: "-15px",
  left: "20px",
  backgroundColor: "green",
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  zIndex: 1,
};

export default TestimonialCard;
