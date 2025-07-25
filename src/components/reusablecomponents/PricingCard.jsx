import React from "react";
import "./pricingcard.css";
import GetStartedButton from "./GetStartedButton";
const PricingCard = ({ price, title, features }) => {
  return (
    <div className="col-md-4 mb-3 shadow-sm">
      <div className="card text-center pricing-card">
        <div className="card-body d-flex flex-column mb-3">
          <span>
            <span className="text-success price-cost">
              <sup>$</sup>
              {price}
            </span>
            <small className="text-muted fs-6">/mo</small>
          </span>
          <h5 className="mb-3">{title}</h5>
          <hr />
          <ul className="list-unstyled">
            {features.map((item, index) => (
              <li key={index} className="mb-2">
                <i className="bi bi-check text-success"></i> {item}
              </li>
            ))}
          </ul>
          <GetStartedButton />
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
