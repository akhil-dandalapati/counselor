import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import servicesData from "./servicedata";
import "./services.css";
import HeadindSubheading from "./reusablecomponents/HeadindSubheading";
import { servicesBadgeData } from "./pages/serviceBadgeData";
import ServiceBadge from "./reusablecomponents/ServiceBadges";
const Services = () => {
  return (
    <div>
      <div>
        <div className="services-banner">
          <div className="homemaker-overlay" />
          <div className="services-banner1">
            <p className="services-title">Home > Services</p>
            <h1>Services</h1>
          </div>
        </div>
      </div>
      <HeadindSubheading subtitle="services" title="How It Works" />
      <div className="container py-5">
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
        <HeadindSubheading
          subtitle="services"
          title="We Can Help You With This Situation"
        />

        <div className="container-fluid px-0">
          <div className="row gx-0 gy-0">
            {servicesData.map((service) => (
              <React.Fragment key={service.id}>
                <div className="col-md-3 p-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="img-fluid w-100"
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-3 p-3 d-flex flex-column justify-content-center service-grids">
                  <h5 className="mb-1">{service.title}</h5>
                  <p className="mb-0 text-muted">{service.description}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
