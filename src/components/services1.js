import React from "react";

import Billy from "../images/billy.jpg";
import Milan from "../images/milan.jpg";
import Zach from "../images/zach2.jpg";
import Eyebrow from "./eyebrow";
import ServiceItem1 from "./serviceItem1";

const Services1 = () => {
  return (
    <div id="#services1">
      <div className="container mx-auto pb-1">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-26 md:py-17 py-9 ">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8 ">
            <div className="lg:col-span-8">
              <Eyebrow label="PEOPLE" />
              <h2 className="font-display md:text-display-l text-display-md pt-5">
              </h2>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-20 items-center justify-center">
            <ServiceItem1 
              icon={Billy}
              title="Bill White"
              description="Solutions"
              bio={{
                name: "Bill White",
                paragraphs: [
                  "Bill received his Bachelor of Arts degree in Political Science and History from the University of Victoria in 2018 and his Juris Doctor from Queen’s University in 2022. While at Queen’s, as a participant in the Adam F. Fanaki Competition Law Moot, he won runner-up appellant awards for best individual oralist, best team, and best factum. He has also earned a Certificate in International Business Law from Bader College and received the program’s Global Law Scholarship.",
                  "In his spare time, Bill enjoys reading and writing science fiction. His debut novel, “The Relatives,” reached best-seller status on Amazon during its first week of publication.",
                ]
              }}
            />
            <ServiceItem1
              icon={Milan}
              title="Milan Cheema"
              description="Partnerships"
              bio={{
                name: "Milan Cheema",
                paragraphs: [
                  "Milan is a graduate of the J.D. program at Queen’s University. Prior to attending law school, he obtained a B.A. in International Development from McGill University.",
                  "Throughout law school, Milan worked as co-editor and chief of the Canadian Journal of Commercial Arbitration and as a student caseworker at the Queen’s Elder Law Clinic. He also took part in the Queen’s Tradelab Practicum publishing a research paper on a current trade law issue on the behest of a foreign government, along with a team of other Queen’s students. Following his first year of law school, Milan worked for the Luxembourg office of a major European law firm in their banking and finance practice group.",
                ]
              }}
            />
            <ServiceItem1
              icon={Zach}
              title="Zach Osgarby"
              description="Technology"
              bio={{
                name: "Zach Osgarby",
                paragraphs: [
                  "Coming Soon...",
                  
                ]
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services1;
