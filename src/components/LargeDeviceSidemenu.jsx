import React, { useState } from 'react';
import { Link } from 'react-scroll';
import homeicon from '../images/download (2).png';
import abouticon from '../images/download (5).png';
import skillsicon from '../images/download.png';
import projectsicon from '../images/download (6).png';
import contactsicon from '../images/download (4).png';
import menuicon from '../images/download (8).png';
import exitIcon from '../images/download (7).png';
import Resume from '../images/Resume.png';

const LargeDeviceSidemenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navItems = [
    { id: 'home', icon: homeicon, label: 'Home' },
    { id: 'about', icon: abouticon, label: 'About' },
    { id: 'skills', icon: skillsicon, label: 'Skills' },
    { id: 'projects', icon: projectsicon, label: 'Projects' },
    { id: 'contact', icon: contactsicon, label: 'Contact' },
  ];

  return (
    <div
      className={`absolute pb-2 mt-0.5 cursor-pointer hover:shadow-[0px_0px_10px_#7abdff] 
        shadow-[0px_0px_5px_#7abdff] bg-blue-100/40 backdrop-blur-xs 
        transition-all duration-300 select-none ml-1.5 block 
        ${isOpen ? 'w-auto rounded-3xl' : 'w-20 rounded-3xl'}`}
    >
      <div className="h-[90vh] flex flex-col justify-between">
        {/* Menu Button */}
        <div className="h-[10%] grid justify-center items-start pt-1.5">
          <div className="bg-blue-400/20 rounded-2xl backdrop-blur-lg pb-1.5 pt-1 transition-all duration-200 mt-1 pl-2 mb-4.5">
            <button
              className="border-2 outline-none active:-rotate-20 transition duration-200 active:shadow-[0px_0px_10px_white] border-gray-50 shadow-[0px_0px_5px_white] rounded-xl mr-2 mt-1 p-1"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <img
                src={isOpen ? exitIcon : menuicon}
                alt="menu icon"
                className="h-6.5 w-6.5 md:h-7.5 md:w-7.5"
              />
            </button>
          </div>
        </div>

        {/* Nav Links */}
        <div className="h-[80%] grid justify-center items-center mb-4">
          <div
            className={`select-none grid flex-wrap cursor-pointer 
              hover:shadow-[0px_0px_10px_#7abdff] shadow-[0px_0px_5px_#7abdff] 
              bg-blue-400/20 backdrop-blur-xl transition-all ml-3 mr-3 duration-200 p-1
              ${isOpen ? 'rounded-3xl' : 'rounded-2xl'}`}
          >
            {navItems.map(({ id, icon, label }) => (
              <Link key={id} to={id} duration={300} smooth>
                <div
                  className="w-auto h-auto mt-0.5 hover:bg-gray-100/40 rounded-2xl flex justify-center p-1.5 items-center transition-all duration-200 [text-shadow:0_0_5px_#ffffff] focus:outline-none"
                  tabIndex={0}
                >
                  <img
                    src={icon}
                    alt={label}
                    className="h-7 w-7 md:h-8 md:w-8 cursor-pointer"
                  />
                  {isOpen && (
                    <h1 className="text-[#2f94f9] hover:text-[#51a3f5] text-x ml-2 mr-1 sm:text-xl">
                      {label}
                    </h1>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Resume Button */}
        <div className="h-[10%] grid justify-center items-end">
          <div
            className="bg-indigo-400/20 w-auto h-auto mt-0.5 rounded-2xl flex justify-center p-1.5 items-center transition-all duration-200 pl-2 pr-2 [text-shadow:0_0_5px_#ffffff] mb-1"
            tabIndex={0}
          >
            <img
              src={Resume}
              alt="Resume"
              className="h-8 w-8 cursor-pointer md:h-9 md:w-9"
            />
            {isOpen && (
              <h1 className="text-indigo-500 hover:text-indigo-400 text-x ml-2 mr-1 sm:text-xl">
                Resume
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeDeviceSidemenu;
