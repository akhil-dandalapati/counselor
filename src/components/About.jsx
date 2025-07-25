import React from "react";
import { useLocation } from "react-router-dom";
import "./About.css";
import Herosection from "./Herosection";
import Testimoinal from "../Testimoinal";
import ContactForm from "../ContactForm";
export const AboutDiv = (
  <div className="about-page">
    <div className="about-container">
      <div className="image-section">
        <img
          src="https://preview.colorlib.com/theme/counselor/images/about-1.jpg"
          alt="Counselor"
        />
      </div>
      <div className="text-section">
        <h6>Welcome to Counselor</h6>
        <h1>Best Counseling Funding Network Worldwide.</h1>
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth. On her way she met a
          copy. The copy warned the Little Blind Text, that where it came from
          it would have been rewritten a thousand times and everything that was
          left from its origin would be the word "and" and the Little Blind Text
          should turn around and return to its own, safe country.
        </p>
        <p
          className="video-button"
          style={{ display: "flex", alignItems: "center", gap: "20px" }}
        >
          <i
            class="bi bi-file-play"
            style={{ fontSize: "40px", color: "#28a745" }}
          ></i>{" "}
          Watch Our Consultant Video
        </p>
      </div>
    </div>
  </div>
);
const About = () => {
  const location = useLocation();
  console.log(location.pathname);
  const isAboutPage = location.pathname.toLowerCase().includes("about");
  const aboutobj = {
    heading: "ABOUT US",
    subheading: "About us",
  };
  const statsData = [
    { count: "3,000", label: "Our Satisfied & Happy Customers" },
    { count: "30", label: "Years of Experience In Business" },
    { count: "200", label: "Our Qualified Counselor" },
    { count: "40", label: "Services Points" },
  ];

  return (
    <div>
      {isAboutPage ? (
        <div>
          <Herosection title={aboutobj} />
        </div>
      ) : (
        ""
      )}

      {isAboutPage ? AboutDiv : ""}
      {isAboutPage ? (
        <div className="container-fluid py-5 bg-light">
          <div className="row text-center">
            {statsData.map((item, index) => (
              <div className="col-md-3 mb-4 mb-md-0" key={index}>
                <h2 className="text-success fw-bold">{item.count}</h2>
                <p className="text-muted mb-0">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      {isAboutPage ? <Testimoinal /> : ""}
      {isAboutPage ? <ContactForm /> : ""}
    </div>
  );
  _;
};

export default About;
