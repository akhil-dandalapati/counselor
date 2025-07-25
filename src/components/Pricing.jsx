import React from "react";
import pricingData from "./pricindData";
import Herosection from "./Herosection";
import ContactForm from "../ContactForm";
import { useLocation } from "react-router-dom";

import "./pricing.css";
import HeadindSubheading from "./reusablecomponents/HeadindSubheading";
import PricingCard from "./reusablecomponents/PricingCard";
const Pricing = () => {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();

  const showDiv = currentPath.includes("pricing");
  const pricinglorobj = {
    heading: " Pricing",
    subheading: " Pricing & Plans",
  };
  return (
    <div>
      <div>
        <div>{showDiv && <Herosection title={pricinglorobj} />}</div>

        <div className="container py-5">
          <HeadindSubheading
            subtitle=" PRICE & PLANS"
            title="Affordable Packages"
          />
          <div className="row justify-content-center">
            {pricingData.map((plan) => (
              <PricingCard
                key={plan.id}
                price={plan.price}
                title={plan.title}
                features={plan.features}
              />
            ))}
          </div>
        </div>
      </div>
      {showDiv ? <ContactForm /> : ""}
    </div>
  );
};

export default Pricing;
