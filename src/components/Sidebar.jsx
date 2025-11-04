// ⚛️ Importing React hooks and dependencies
import { useEffect, useState } from "react";
import Short_icon from "../images/TJ-icon.png";
import AOS from "aos";
import "aos/dist/aos.css";

// 📁 Importing custom sidebar components
import SmallDeviceSidemenu from "./SmallDeviceSidemenu";
import LargeDeviceSidemenu from "./LargeDeviceSidemenu";

// 🚀 Component: Sidebar
// 👉 Handles responsive side navigation for both small and large devices
const Sidebar = () => {

  // 🧠 Initialize AOS (Animate On Scroll) for smooth animations
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out", // 🎢 Smooth easing animation
      once: true,            // ✅ Animation runs only once per element
      mirror: false,         // 🚫 No re-animation when scrolling back
    });
  }, []);

  // 🧩 Component States
  // 🎛️ Control visibility of small device side menu and large device side menu button
  const [isMenuOpen , setisMenuOpen ] = useState('hidden');  // ❌ Controls small device menu toggle
  

  // 🎯 Function to toggle sidebar menus on click
  const SidebarMenuBtn = () => {
    // 🔄 Toggle small device menu visibility
    setisMenuOpen((event) => (event === "block" ? "hidden" : "block"));
  };

  // 🧱 JSX Layout
  return (
    <>
      {/* 🧍 Sidebar Main Wrapper */}
      <div className="relative ml-2">

        {/* 👇 Sidebar Button (Developer image + name) */}
        <div className="absolute SideBarStyle-forsmallheight bottom-3.5 select-none flex flex-wrap cursor-pointer">
          {/* 🧑‍💻 Sidebar Trigger Button */}
          <div
            className={`w-auto h-auto mt-2.5 
              hover:shadow-[0px_0px_10px_#7abdff] 
              shadow-[0px_0px_5px_#7abdff] 
              flex justify-start p-1.5 items-center ml-1.5  
              rounded-3xl  bg-blue-100/40 hover:bg-blue-200/30 
              backdrop-blur-xs transition-all duration-300`}
            onClick={SidebarMenuBtn}  // 🖱️ Toggles sidebar menu
            tabIndex={0}
            data-aos="zoom-in"
            data-aos-delay="50"
          >
            {/* 🖼️ Developer Avatar */}
            <img src={Short_icon} alt="Developer" className="h-8 ml-0.5 w-8 md:h-9 md:w-9" />
            
            {/* 🧾 Developer Name */}
            <h1 className="text-blue-500 ml-1.5 mr-1 text-xl sm:text-xl [text-shadow:0_0_5px_#ffffff]">
             Portfolio
            </h1>
          </div>
        </div>

        {/* 📱 Small Device Sidebar Menu */}
        <div className={`${isMenuOpen}`}>
           <div className={`block md:hidden`}>
          <SmallDeviceSidemenu />
        </div>

        {/* 💻 Large Device Sidebar Menu */}
        <div className={`hidden md:block`} >
          <LargeDeviceSidemenu />
        </div>
        </div>
      </div>
    </>
  );
};

// 🚀 Exporting Sidebar component for use in the main layout
export default Sidebar;
