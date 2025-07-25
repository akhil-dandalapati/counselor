import React from "react";
import About from "../About";
import "./home.css";
import Testimoinal from "../../Testimoinal";
import ContactForm from "../../ContactForm";
import Pricing from "../Pricing";
import HomeBlog from "../HomeBlog";
import { AboutDiv } from "../About";

import FeatureBox from "../reusablecomponents/FeatureBox";
import HeadindSubheading from "../reusablecomponents/HeadindSubheading";
import ServiceBadge from "../reusablecomponents/ServiceBadges";
import { servicesBadgeData } from "./serviceBadgeData";
const Home = () => {
  const featuresData = [
    {
      iconClass: "bi bi-clipboard2-data-fill",
      title: "100% Confidential",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      boxClass: "feature-box1 featurebox1",
    },
    {
      iconClass: "bi bi-people-fill",
      title: "Qualified Team",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      boxClass: "feature-box2",
    },
    {
      iconClass: "bi bi-umbrella",
      title: "Individual Approach",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      boxClass: "feature-box3",
    },
  ];

  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h1>
            Counseling For Your
            <br />
            Better Life
          </h1>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-green">Contact us</button>
            <button className="btn btn-white">Read more</button>
          </div>
        </div>
        <div>
          <i className="bi bi-play-circle-fill"></i>
        </div>
      </div>
      <div className="features-section">
        {featuresData.map((item, index) => (
          <FeatureBox
            key={index}
            iconClass={item.iconClass}
            title={item.title}
            description={item.description}
            boxClass={item.boxClass}
          />
        ))}
      </div>
      <HeadindSubheading subtitle="services" title="How It Works" />
      <div className="row text-center">
        {servicesBadgeData.map((service, index) => (
          <ServiceBadge
            key={index}
            iconClass={service.iconClass}
            badgeNumber={service.badgeNumber}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      {AboutDiv}
      <div className="services-heading">
        <center>
          <h6>Services</h6>
          <h2>We Can Help You With This Situation</h2>
        </center>
      </div>

      <div className="wecanhelp">
        <div className="help-btns">
          <button type="button" className="btn btn-success help-btn">
            Relation Problem
          </button>
          <button type="button" className="btn btn-light help-btn">
            Couples Counseling
          </button>
          <button type="button" className="btn btn-light help-btn">
            Depression Treatment
          </button>
          <button type="button" className="btn btn-light help-btn">
            Family Problem
          </button>
          <button type="button" className="btn btn-light help-btn">
            Personal Problem
          </button>
          <button type="button" className="btn btn-light help-btn">
            Business Problem
          </button>
        </div>

        <div className="help-img">
          <img
            src="https://preview.colorlib.com/theme/counselor/images/services-1.jpg"
            alt="Help Service"
          />
          <h1>Relation Problem</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
      </div>

      <Testimoinal />

      <About />
      <Pricing />
      <ContactForm />
      <HomeBlog />
    </div>
  );
};

export default Home;
