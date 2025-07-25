import React from "react";
import "./contactform.css";
const ContactForm = () => {
  return (
    <div className="contact-bg1">
      <div className="contact-section text-white py-5 ">
        <div className="container">
          <div style={{ width: "50%" }} className="form-wrapper">
            <h2 className="mb-4 fw-bold">Send a Message & Get in touch!</h2>
            <form>
              <div className="row g-3 mb-3">
                <div className="col-6 inputbtn">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-6 inputbtn">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="mb-3">
                <select className="form-select form-select-lg">
                  <option selected>Services</option>
                  <option value="1">relational problem</option>
                  <option value="2">couple treatment</option>
                  <option value="3">depression treatment</option>
                  <option value="3">bussiness problem</option>
                </select>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control form-control-lg"
                  rows="5"
                  placeholder="Message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="d-grid">
                <button type="submit" className="btn btn-success btn-lg">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
