import React from "react";
import Herosection from "./Herosection";
import "./contact.css";
const Contacts = () => {
  const contactsobj = {
    heading: " Contact Us",
    subheading: " Contact Us",
  };
  const contactInfo = [
    {
      icon: "bi bi-geo-alt-fill",
      label: "Address:",
      value: "198 West 21th Street, Suite 721 New York NY 10016",
    },
    {
      icon: "bi bi-telephone-fill",
      label: "Phone:",
      value: "+ 1235 2355 98",
    },
    {
      icon: "bi bi-telegram",
      label: "Email:",
      value: "info@yoursite.com",
    },
    {
      icon: "bi bi-globe-americas",
      label: "Website:",
      value: "yoursite.com",
    },
  ];
  return (
    <div>
      <div>
        <Herosection title={contactsobj} />
      </div>
      <div className="contacticons">
        {contactInfo.map((item, index) => (
          <center>
            <i
              className={item.icon}
              style={{
                width: "100px",
                height: "100px",
                fontSize: "40px",
                lineHeight: "100px",
                textAlign: "center",
                borderRadius: "50%",
                backgroundColor: "#589167",
                color: "white", // icon color
                display: "block",
              }}
            ></i>
            <div
              style={{
                width: "200px",
                height: "100px",
                margin: "10px",
                display: "block",
              }}
            >
              <strong>{item.label}</strong>
              <span>{item.value}</span>
            </div>
          </center>
        ))}
      </div>
      <div className="container py-5 bg-light mb-4">
        <div className="row justify-content-center">
          <div className="col-lg-10 bg-white p-4 shadow">
            <div className="row">
              <div
                className="col-md-6 bg-light d-flex align-items-center justify-content-center"
                style={{ minHeight: "300px" }}
              >
                <p className="text-muted text-center">Map Placeholder</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46830151.11795828!2d-119.8093025!3d44.24236485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1753361798289!5m2!1sen!2sin"
                  // width:"600"
                  // height:"450"
                  // style:"border:0;"
                  // allowfullscreen:""
                  // loading:"lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
                  style={{ width: "600px", height: "80vh" }}
                ></iframe>
              </div>

              <div className="col-md-6">
                <h4 className="mb-4">Contact Us</h4>
                <form>
                  <div className="row mb-3">
                    <div className="col">
                      <label
                        className="form-label fw-bold  small"
                        style={{ color: "#589167" }}
                      >
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        className="form-control border-0 border-bottom rounded-0"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col">
                      <label
                        className="form-label fw-bold  small"
                        style={{ color: "#589167" }}
                      >
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        className="form-control border-0 border-bottom rounded-0"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      className="form-label fw-bold  small shadow-none"
                      style={{ color: "#589167" }}
                    >
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      className="form-control border-0 border-bottom rounded-0"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="form-label fw-bold  small"
                      style={{ color: "#589167" }}
                    >
                      MESSAGE
                    </label>
                    <textarea
                      className="form-control border-0 border-bottom rounded-0"
                      rows="4"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-success px-4">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
