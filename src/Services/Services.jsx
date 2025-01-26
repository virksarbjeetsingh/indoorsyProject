import React from "react";
import consultancyImage from "../assets/consultancy.png";
import turnkeyImage from "../assets/turnkey.png";
import projectManagersImage from "../assets/project-managers.png";
import "./Services.css"

const services = [
  {
    title: "CONSULTANCY",
    description:
      "We've been working hard to establish our interior designing firm as India's award-winning firm. We have completed many residential interior design projects that have exceeded our clients expectations, thanks to our straightforward prices, glamorous design vision and automation-led approach. We maintain a sharp, accurate, and precise quality check at each site during the process. The final product is often unique and personalized, reflecting the client's personality and feelings about life.",
    image: consultancyImage,
  },
  {
    title: "TURNKEY INTERIORS",
    description:
      "For your designs, “Indoorsy” offers turnkey solutions. Our turnkey solutions are available to those who are unable to visit our office or who live in a different town or country. We provide turnkey services as a single- window solution for our clients in addition to individual interior design services. For all of our clients, we have interior design, documentation, supervision, and project management. This allows them to keep track of all pages on a daily basis and with minimal effort. In India, we are a well- known turnkey service provider.",
    image: turnkeyImage,
  },
  {
    title: "PROJECT MANAGERS",
    description:
      "For interior design facilities, we have the best project management team. At every step, we are taskmasters. Most clients are concerned about a lack of accountability, sliding timelines, and inflated budgets. Our business-savvy project managers contribute technical experience to projects that are streamlined, on-time, and within the budget. Coordination of consultants, budget management, monthly monitoring, design scheduling and forecasting.",
    image: projectManagersImage,
  },
];

const InteriorServices = () => {
  return (
    <div className="interior-services-page">
    <h1 className="page-heading">Interior Services</h1>
    <div className="services-container">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="image-wrapper">
            <img src={service.image} alt={service.title} className="service-image" />
          </div>
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default InteriorServices;
