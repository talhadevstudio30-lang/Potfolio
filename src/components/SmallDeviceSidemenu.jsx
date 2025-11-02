import React, { memo } from "react";
import { Link } from "react-scroll";

// 🖼️ Importing icons
import homeicon from "../images/download (2).png";
import abouticon from "../images/download (5).png";
import skillsicon from "../images/download.png";
import projectsicon from "../images/download (6).png";
import contactsicon from "../images/download (4).png";
import Resume from "../images/Resume.png";

// ⚡ SmallDeviceSidemenu — optimized for speed and minimal re-render
const SmallDeviceSidemenu = () => {
  const buttons = [
    { to: "home", icon: homeicon, name: "Home" },
    { to: "about", icon: abouticon, name: "About" },
    { to: "skills", icon: skillsicon, name: "Skills" },
    { to: "projects", icon: projectsicon, name: "Projects" },
  ];

  const linkStyle =
    "w-auto h-auto focus:bg-gray-100/40 hover:bg-gray-100/40 rounded-3xl flex justify-center p-1.5 items-center transition-all duration-200 [text-shadow:0_0_3px_#ffffff] focus:outline-none";

  const textStyle =
    "text-[#2f94f9] hover:text-[#51a3f5] text-x ml-1 mr-1 sm:text-xl";

  return (
    <div className="SideBarStyle-forsmallheight">
      <div
        className="absolute select-none grid flex-wrap cursor-pointer hover:shadow-[0px_0px_10px_#7abdff]
                   shadow-[0px_0px_5px_#7abdff] bg-blue-400/30 backdrop-blur-xs rounded-3xl
                   hover:backdrop-blur-xl transition-all duration-200 ml-2.5 p-1"
        tabIndex={0}
      >
        {/* 🔹 Nav Buttons */}
        {buttons.map(({ to, icon, name }) => (
          <Link key={to} to={to} smooth={true} duration={200}>
            <div className={linkStyle} tabIndex={0}>
              <img
                src={icon}
                alt={`${name} icon`}
                className="h-7 w-7 sm:h-9 sm:w-9 cursor-pointer"
                loading="lazy"
              />
              <h1 className={textStyle}>{name}</h1>
            </div>
          </Link>
        ))}

        {/* 🔹 Contact */}
        <Link to="contact" smooth={true} duration={200}>
          <div
            className="w-auto h-auto mt-0.5 focus:bg-transparent hover:bg-transparent bg-gray-100/40 
                       rounded-3xl flex justify-center p-1.5 items-center transition-all duration-200 
                       [text-shadow:0_0_3px_#ffffff] focus:outline-none"
            tabIndex={0}
          >
            <img
              src={contactsicon}
              alt="Contact Icon"
              className="h-8 w-8 sm:h-10 sm:w-10 cursor-pointer"
              loading="lazy"
            />
            <h1 className="text-[#2f94f9] hover:text-[#51a3f5] text-x ml-1 mr-1 sm:text-xl">
              Contact
            </h1>
          </div>
        </Link>

        {/* 🔹 Resume */}
        <div
          className="w-auto h-auto mt-1 focus:bg-transparent hover:bg-transparent bg-indigo-500/20 
                     rounded-full flex justify-center p-1.5 items-center transition-all duration-200 
                     pl-3 pr-3 [text-shadow:0_0_3px_#ffffff] focus:outline-none"
          tabIndex={0}
        >
          <img
            src={Resume}
            alt="Resume Icon"
            className="h-7 w-7 sm:h-9 sm:w-9 cursor-pointer"
            loading="lazy"
          />
          <h1 className="text-indigo-500 hover:text-indigo-400 text-x ml-2 mr-1 sm:text-xl">
            Resume
          </h1>
        </div>
      </div>
    </div>
  );
};

// 🚀 Memoized to avoid re-rendering when parent updates
export default memo(SmallDeviceSidemenu);
