import React, { useState, useEffect, useCallback } from "react";
import Responsivenevbar from "./Responsivenevbar";
import ResumeIcon from "../images/Resume.png";
import menuIcon from "../images/download (8).png";
import exitIcon from "../images/download (7).png";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <header
        className="flex justify-center text-white items-center mt-2 pl-2 pr-2"
        data-aos="fade-down"
        data-aos-delay="50"
      >
        {/* Navbar */}
        <div
          className="navbar shadow-[0px_0px_8px_#00bfffd3] bg-gradient-to-br backdrop-blur-xl transition from-[#0080ffde] via-[#00bfffd3] to-[#00ffddd0] duration-300 rounded-full w-2xl md:w-3xl lg:w-4xl"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          {/* Name */}
          <div className="flex-1">
            <h1
              className="Name ml-3.5 lg:text-3xl text-3xl font-normal pr-2"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              Talha Javed
            </h1>
          </div>

          {/* Desktop Navbar */}
          <nav
            className="p-0.5 hidden md:block rounded-full"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="flex justify-center items-center flex-wrap md:px-1 lg:gap-1">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className={`px-2 py-1.5 m-1 rounded-full transition-all duration-300 ease-in-out bg-gray-100/20 flex justify-center items-center shadow-[0px_0px_5px_white] hover:bg-gray-100 hover:text-[#00bfffd3] focus:outline-none focus:ring focus:ring-white focus:ring-offset-2`}
                  >
                    <span className="ml-1 mr-0.5">{item}</span>
                  </a>
                )
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex-none block md:hidden" data-aos="zoom-in" data-aos-delay="200">
            <button
              onClick={toggleMenu}
              className="border-2 border-gray-50 shadow-[0px_0px_5px_white] rounded-full mr-2 mt-1 p-1 transition duration-200 active:-rotate-6 active:shadow-[0px_0px_10px_white]"
              aria-label="Toggle Menu"
            >
              <img
                src={menuOpen ? exitIcon : menuIcon}
                alt="menu"
                className="menu-button h-9 w-9"
                loading="lazy"
                decoding="async"
              />
            </button>
          </div>
        </div>

        {/* Resume Icon */}
        <div>
          <div
            className="extra-icon h-15.5 w-15.5 lg:h-15 lg:w-15 rounded-full border-2 border-[#cd83fe]  bg-[#ddb5f847] backdrop-blur-xl  shadow-[0px_0px_8px_#d08aff] ml-2 p-1 transition duration-200 active:scale-105"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img
              src={ResumeIcon}
              alt="Resume Icon"
              className="h-full w-full rounded-full"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </header>

      {/* Responsive Navbar (Mobile) */}
      {menuOpen && (
        <div
          className={`transition-all duration-300 ease-in ${menuOpen ? "opacity-100" : "opacity-0"
            }`}
        >
          <Responsivenevbar />
        </div>
      )}
    </>
  );
}

export default React.memo(Header);
