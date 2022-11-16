import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { HiHome, HiUserGroup } from "react-icons/hi";
import { MdDeveloperBoard, MdOutlineContacts } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";

const activeStyle =
  "px-5 flex items-center gap-3 font-semibold hover:text-primary border-r-4 border-black  transition-all duration-200 ease-in-out capitalize";
const notActiveStyle =
  "px-5 flex items-center gap-3 font-semibold hover:text-primary transition-all duration-200 ease-in-out capitalize";

const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
  const handleCloseSidebar = () => {
    if (toggleSidebar) setToggleSidebar(false);
  };

  return (
    <>
      {toggleSidebar && (
        <div className="text-secondary md:hidden fixed top-0 w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
          <div className="absolute w-full flex justify-between items-center p-2">
            <div className="text-primary text-2xl font-semibold font-mono">
              IFESOWAPO
            </div>
            <AiFillCloseCircle
              fontSize={30}
              className="cursor-pointer text-secondary"
              onClick={() => setToggleSidebar(false)}
            />
          </div>

          <div className="flex flex-col gap-5 mt-20">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${activeStyle}` : `${notActiveStyle}`
              }
              onClick={() => handleCloseSidebar()}
            >
              <HiHome fontSize={26} className="text-primary" />
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${activeStyle}` : `${notActiveStyle}`
              }
              onClick={() => handleCloseSidebar()}
            >
              <HiUserGroup fontSize={26} className="text-primary" />
              About
            </NavLink>
            <NavLink
              to="/development"
              className={({ isActive }) =>
                isActive ? `${activeStyle}` : `${notActiveStyle}`
              }
              onClick={() => handleCloseSidebar()}
            >
              <MdDeveloperBoard fontSize={26} className="text-primary" />
              Development
            </NavLink>
            <NavLink
              to="/announcement"
              className={({ isActive }) =>
                isActive ? `${activeStyle}` : `${notActiveStyle}`
              }
              onClick={() => handleCloseSidebar()}
            >
              <TfiAnnouncement fontSize={26} className="text-primary" />
              Announcement
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${activeStyle}` : `${notActiveStyle}`
              }
              onClick={() => handleCloseSidebar()}
            >
              <MdOutlineContacts fontSize={26} className="text-primary" />
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
