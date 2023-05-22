/* Header.js */
import React from "react";
import { Link as ScrollLink } from "react-scroll";

import Logo from "../images/Logo files/Logo SVG file-bettercrop.svg";
import Button from "./button";

const Header = ({ navigate }) => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Support", href: "mailto:tech@lawbotics.ca" },
  ];

  return (
    <header>
      <div className="container mx-auto">
        <div className="flex py-5 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
          <a href="/" className="block">
            <img className="h-16 w-auto" src={Logo} alt="Logo" />
          </a>
          </div>
          <div className="flex flex-row gap-6">
            <div className="md:flex hidden flex-row gap-4 items-center">
              {navigation.map((item, index) => (
                index === 0 ?
                <a
                  key={item.name}
                  href={item.href}
                  className="text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4"
                >
                  {item.name}
                </a> :
                <ScrollLink
                  spy={true}
                  smooth={true}
                  duration={500}
                  key={item.name}
                  to={item.href}
                  className="text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
            <Button label="CONTACT US" link="mailto:contact@lawbotics.ca" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
