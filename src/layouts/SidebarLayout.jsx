import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.svg";
import { Button } from "@headlessui/react";

import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { adminMenus, elecomMenus, officerMenus } from "../constants/menu";

const SidebarLayout = ({ role }) => {
  const [open, setIsOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0); // New state for tracking selected index

  // Determine menus based on role
  const roleMenus = {
    admin: adminMenus,
    elecom: elecomMenus,
    officer: officerMenus,
  };

  const menus = roleMenus[role] || [];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-16"
        } duration-300 h-screen bg-gray-50 sticky top-0`} // Adjusted to w-16 for collapsed
      >
        <Button
          onClick={() => setIsOpen(!open)}
          className={`absolute cursor-pointer -right-3 top-9 p-1 text-white bg-blue-950 border-2 border-blue-950 rounded-full flex items-center hover:bg-black hover:border-black ${
            !open && "rotate-180"
          }`}
        >
          <ChevronLeft size={20} />
        </Button>

        {/* Centered Logo and Profile */}
        <div className="flex items-center justify-center flex-grow flex-col w-[202.625px]">
          {/* Logo */}
          <div
            className={`transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img src={logo} alt="USO Logo" className="cursor-pointer" />
          </div>

          {/* Profile image below logo */}

          <div
            className={`mt-4 w-28 h-28 rounded-full bg-gray-300 transition-opacity duration-300 object-cover overflow-hidden ${
              open ? "opacity-100" : "opacity-0 pointer-events-none"
            } border-2 border-transparent hover:border-blue-500`}
          >
            <Link>
              <img
                src={profile}
                alt="User Profile"
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Name below profile image */}
          <span
            className={`mt-2 text-center text-lg text-gray-700 transition-opacity duration-300 font-bold ${
              open ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            John Doe
          </span>
        </div>

        {/* Menu items */}
        <ul className="pt-6">
          {menus.map((menu, index) => (
            <NavLink
              key={index}
              to={menu.path}
              onClick={() => setSelectedIndex(index)} // Set selected index on click
              className={`text-md flex items-center space-x-3 gap-x-4 cursor-pointer p-2 hover:bg-[#B0B0B0] rounded-r-md font-semibold ${
                menu.gap ? "mt-9" : "mt-2"
              } ${
                selectedIndex === index
                  ? "bg-[#B0B0B0] text-black font-bold"
                  : ""
              }`}
            >
              <menu.src
                size={20}
                className={`duration-500 ${!open && "rotate-[360deg]"}`}
              />{" "}
              {/* Render the icon */}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarLayout;
