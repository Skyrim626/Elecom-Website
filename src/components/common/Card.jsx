import { ChevronRight } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getLogoImage } from "../../utilities/imageHelpers";
import { Button } from "@headlessui/react";

const Card = ({ organizationName, organizationImage, link, logoUrl }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow flex flex-col">
      {/* Image Section */}
      <div className="overflow-hidden rounded-t-lg">
        <img
          className="w-full h-48 object-cover"
          src={getLogoImage(logoUrl)}
          alt={`${organizationName} logo`}
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-1">
        {/* Organization Name */}
        <h5 className="text-sm font-semibold text-gray-800 dark:text-white mb-4">
          {organizationName}
        </h5>

        {/* Spacer to Push Button to Bottom */}
        <div className="flex-grow"></div>

        {/* Button Section */}
        <div>
          <Button
            onClick={() => navigate(link)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            View Details
            <ChevronRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
