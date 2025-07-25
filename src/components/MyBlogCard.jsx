// components/BlogCard.jsx
import React from "react";

const BlogCard = ({ image, heading, content, date, month, year }) => {
  return (
    <div className="col-md-4 mb-4 d-flex justify-content-center">
      <div
        className="card"
        style={{ height: "70vh", width: "100%", maxWidth: "350px" }}
      >
        <img
          src={image}
          className="card-img-top"
          alt="blog"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="d-flex mx-auto flex-column justify-content-center align-items-center rounded-circle cardcricle my-6 blog-circle">
          <h4 className="date" style={{ color: "#589167" }}>
            {date}
          </h4>
          <h5 className="monrh">{month}</h5>
          <span className="year">{year}</span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{heading}</h5>
          <p className="card-text">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
