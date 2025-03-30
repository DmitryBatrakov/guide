import React from "react";
import { Link } from "react-router-dom";
import { LuInstagram } from "react-icons/lu";
import { FaWaze } from "react-icons/fa";

const CardFooter = ({ links, tripIcon }) => {
  return (
    <div className="flex justify-around items-center text-3xl pt-2 pb-2">
      {links.instagram && (
        <Link to={links.instagram} target="_blank" rel="noopener noreferrer">
          <LuInstagram />
        </Link>
      )}
      {links.tripadvisor && (
        <Link to={links.tripadvisor} target="_blank" rel="noopener noreferrer">
          <img src={tripIcon} alt="TripAdvisor" className="w-10 h-10" />
        </Link>
      )}
      {links.waze && (
        <Link to={links.waze} target="_blank" rel="noopener noreferrer">
          <FaWaze />
        </Link>
      )}
    </div>
  );
};

export default CardFooter;
