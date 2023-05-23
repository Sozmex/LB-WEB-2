import React from "react";

import ArchitectureIcon from "../images/service-icons/interior-design.svg";
import RenovationIcon from "../images/service-icons/building-renovation.svg";
import ConstructionIcon from "../images/service-icons/construction.svg";
import Eyebrow from "./eyebrow";
import ServiceItem from "./serviceItem";

const Services = () => {
  return (
    <div id="#services">
      <div className="container mx-auto">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-25 md:py-17 py-9">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-8">
              <Eyebrow label="OUR SERVICES" />
              <h2 className="font-display md:text-display-l text-display-md pt-5">
                We offer a diverse range of services tailored to the specific needs of the legal industry.
              </h2>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-8">
            <ServiceItem
              icon={ArchitectureIcon}
              title="Consulting"
              description="We find the best AI products and services to optimize your Firm's workflow."
            />
            <ServiceItem
              icon={RenovationIcon}
              title="Integration"
              description="We help to integrate handpicked AI products and services into your firm's pre-existing systems"
            />
            <ServiceItem
              icon={ConstructionIcon}
              title="Research"
              description="We research the latest in AI technology and assess relevant and suitability"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
