import React from "react";
import homeicon from "../images/download (2).png";
import abouticon from "../images/download (5).png";
import skillsicon from "../images/download.png";
import projectsicon from "../images/download (6).png";
import contactsicon from "../images/download (4).png";

const navItems = [
  { name: "Home", href: "#home", icon: homeicon },
  { name: "About", href: "#about", icon: abouticon },
  { name: "Skills", href: "#skills", icon: skillsicon },
  { name: "Projects", href: "#projects", icon: projectsicon },
  { name: "Contacts", href: "#contacts", icon: contactsicon },
];

function Responsivenevbar() {
  // return (
  //   // <nav
  //   //   className="flex justify-center w-full mt-2.5 items-center absolute z-30 md:hidden"
  //   //   aria-label="Mobile Navigation"
  //   // >
  //   //   <div className="shadow-[0_0_8px_#0080ffb0] backdrop-blur-xl mt-3 rounded-3xl w-[90%] mx-2 bg-gradient-to-br from-[#0080ff9b] via-[#00bfff98] to-[#00ffddb1] text-white text-lg font-light flex flex-wrap justify-center p-2">
  //   //     {navItems.map(({ name, href, icon }) => (
  //   //       <a
  //   //         key={name}
  //   //         href={href}
  //   //         className="px-3 py-2 m-1.5 rounded-2xl transition-all duration-200 ease-in-out shadow-[0_0_5px_white] hover:shadow-[0_0_8px_white] hover:bg-gray-50/30 focus:outline-none focus:ring focus:ring-white focus:ring-offset-1 flex justify-center items-center"
  //   //       >
  //   //         <img
  //   //           src={icon}
  //   //           alt={`${name} icon`}
  //   //           className="h-8 w-8"
  //   //           loading="lazy"
  //   //           decoding="async"
  //   //         />
  //   //         <span className="ml-1">{name}</span>
  //   //       </a>
  //   //     ))}
  //   //   </div>
  //   // </nav>
  // );
}

export default React.memo(Responsivenevbar);
