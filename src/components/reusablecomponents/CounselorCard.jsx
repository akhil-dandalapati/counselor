import React from "react";

const CounselorCard = ({ image, name, role, desc }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-5">
      <div className="card h-100 shadow" style={{ boxShadow: "0px 24px 48px" }}>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body text-center">
          <div
            className="mb-2 d-flex justify-content-center gap-2"
            style={{ marginTop: "-60px" }}
          >
            {["twitter", "facebook", "google", "instagram"].map(
              (platform, index) => (
                <a href="#" key={index}>
                  <i
                    className={`bi bi-${platform}`}
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
                </a>
              )
            )}
          </div>
          <h5 className="card-title mb-1">{name}</h5>
          <p className="text-uppercase text-muted small mb-2">{role}</p>
          <p className="card-text text-muted">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CounselorCard;
