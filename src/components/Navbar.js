import React from "react";
import { NavLink } from "react-router-dom";
import { CgMenuLeftAlt } from "react-icons/cg";

import logo from "../assets/images/logo.png";

const activeLink = "font-semibold";
const nonActiveLink = "";

const Navbar = ({ setToggleSidebar }) => {
  return (
    <div className="text-secondary bg-white flex fixed z-[1000] right-0 top-0 left-0 justify-between items-center px-5 md:px-10 shadow-md">
      <div className="w-[80px]">
        <a href="/">
          <img className="w-[100%]" src={logo} alt="logo" />
        </a>
      </div>
      <div className="hidden md:flex justify-between items-center">
        <div className="group w-max ml-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${activeLink}` : `${nonActiveLink}`
            }
          >
            Home
          </NavLink>
          <div className="w-1 border-b-4 border-primary opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:w-full"></div>
        </div>
        <div className="group w-max ml-8">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${activeLink}` : `${nonActiveLink}`
            }
          >
            About
          </NavLink>
          <div className="w-1 border-b-4 border-primary opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:w-full"></div>
        </div>

        <div className="group w-max ml-8">
          <NavLink
            to="/development"
            className={({ isActive }) =>
              isActive ? `${activeLink}` : `${nonActiveLink}`
            }
          >
            Development
          </NavLink>
          <div className="w-1 border-b-4 border-primary opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:w-full"></div>
        </div>

        <div className="group w-max ml-8">
          <NavLink
            to="/announcement"
            className={({ isActive }) =>
              isActive ? `${activeLink}` : `${nonActiveLink}`
            }
          >
            Announcement
          </NavLink>
          <div className="w-1 border-b-4 border-primary opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:w-full"></div>
        </div>

        <div className="group w-max ml-8">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${activeLink}` : `${nonActiveLink}`
            }
          >
            Contact
          </NavLink>
          <div className="w-1 border-b-4 border-primary opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:w-full"></div>
        </div>
      </div>
      <div
        className="group flex justify-center items-center md:hidden cursor-pointer"
        onClick={() => setToggleSidebar(true)}
      >
        <div className="font-semibold border-primary group-hover:border-b-2">
          Menu
        </div>
        <CgMenuLeftAlt
          fontSize={30}
          className="text-primary group-hover:scale-75"
        />
      </div>
    </div>
  );
};

export default Navbar;
