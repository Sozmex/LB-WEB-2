import React from "react";
import PropTypes from "prop-types";

const AwardItem = ({ logo, title, year }) => {
  const [number, rest] = title.split("|");

  return (
    <a href="/blog" className="flex flex-row gap-5 items-center grow pt-2 pb-1">
      <div className="flex items-center">
        {/* <img src={logo} width={50} height={50} alt={title} /> */}
      </div>
      <div className="relative group">
        <p className="text-display-xs font-normal text-neutral-300 absolute mr-6 transition-transform duration-300 group-hover:-translate-y-1">{number}|</p>
        <div className="pl-10 group-hover:text-primary-600">
          <p className="text-body-xs font-normal text-neutral-300 transition-transform duration-300 group-hover:-translate-y-1">{rest}</p>
          <p className="text-body-xs font-normal text-neutral-300 pb-2 transition-transform duration-300 group-hover:-translate-y-1">{year}</p>
        </div>
      </div>
    </a>
  );
};

AwardItem.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default AwardItem;
