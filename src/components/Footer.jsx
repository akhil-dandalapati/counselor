import React from "react";
import footerData from "./footerData";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="bottom-footer text-white ">
      <div className="container ms-auto me-auto pt-5 pb-3 ">
        <div className="row container mx-12 ">
          <div className="col-md-3 mb-4">
            <h5>{footerData.about.title}</h5>
            <p>{footerData.about.description}</p>
            <div className="d-flex gap-2 footer-icon">
              {footerData.about.socials.map((s, i) => (
                <a key={i} className="text-white fs-5">
                  <i
                    className={s.icon}
                    style={{
                      width: "60px",
                      height: "60px",
                      fontSize: "20px",
                      lineHeight: "60px",
                      textAlign: "center",
                      borderRadius: "50%",
                      backgroundColor: "#589167",
                      color: "white",
                      display: "block",
                    }}
                  ></i>
                </a>
              ))}
            </div>
          </div>
          {footerData.sections.map((section, index) => (
            <div className="col-md-2 mb-4" key={index}>
              <h6
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                {section.heading}
              </h6>
              <ul className="list-unstyled">
                {section.links.map((link, i) => (
                  <li key={i} style={{ marginBottom: "5px", marginTop: "5px" }}>
                    <a
                      href="#"
                      className="text-white text-decoration-none d-block mb-1"
                    >
                      <i className="bi bi-chevron-right"></i> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-md-3 mb-4">
            <h6
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              {footerData.contact.heading}
            </h6>
            <p>
              <i className="bi bi-geo-alt-fill me-2"></i>
              {footerData.contact.address}
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2"></i>
              {footerData.contact.phone}
            </p>
            <p>
              <i class="bi bi-telegram"></i>&nbsp;
              {footerData.contact.email}
            </p>
          </div>
        </div>
      </div>
      <div
        className="bg-dark p-3 sub-footer"
        style={{
          height: "100px",
          marginBottom: "0",
          display: "flex",
          alignItems: "center",
          paddingLeft: "40px",
        }}
      >
        <small style={{ marginLeft: "60px" }}>
          Copyright ©2025 All rights reserved | This template is made with{" "}
          <i class="bi bi-heart-fill"></i> by
          <a href="https://colorlib.com" className="text-white">
            Colorlib.com
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
