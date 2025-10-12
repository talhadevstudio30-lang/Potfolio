import {useEffect} from "react";
import developerImage from '../images/developer-image.jpg';
import homeicon from '../images/download (2).png';
import abouticon from '../images/download (5).png';
import skillsicon from '../images/download.png';
import projectsicon from '../images/download (6).png';
import contactsicon from '../images/download (4).png';
import crossicon from '../images/download (1).png';
import AOS from "aos";
import "aos/dist/aos.css";

const Sidebar = ({ SidebarMenuBtn, SideMenuCrossBtn, SideMenuCrossBtn_style }) => {

   useEffect(() => {
    AOS.init({
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
      mirror: false, // Animate elements while scrolling past them
    });
  }, []);

  return (
    <>
      <div className="relative ml-1.5" >
        <div className="absolute bottom-3.5 flex flex-wrap cursor-pointer">
          <div className={`w-auto h-auto mt-2.5 hover:shadow-[0px_0px_10px_#7abdff] shadow-[0px_0px_5px_#7abdff] flex justify-start p-1.5 items-center ml-1.5  rounded-3xl bg-blue-100/40 hover:bg-blue-200/30 backdrop-blur-xs focus:backdrop-blur-xl hover:backdrop-blur-xl transition-all duration-300`} onClick={SidebarMenuBtn} tabIndex={0} data-aos="zoom-in" data-aos-delay="100">
             <img src={developerImage} alt="Developer" className=" h-9 w-9 md:h-13 md:w-13 rounded-full" />
            <h1 className="text-[#2f94f9] text-x ml-2 mr-1 sm:text-xl">Talha Javed</h1>
          </div>
          <div className={`w-auto h-auto hover:shadow-[0px_0px_10px_#7abdff] shadow-[0px_0px_5px_#7abdff] flex justify-start p-1.5 pl-3 pr-3 items-center ml-2.5  rounded-3xl bg-blue-200/30 ${SideMenuCrossBtn_style} mt-2.5 backdrop-blur-xs hover:backdrop-blur-xl transition duration-200`} onClick={SideMenuCrossBtn} >
            <img src={crossicon} alt="" className="h-9 w-9 md:h-10 md:w-10" />
          </div>
        </div>
        <div className={`absolute grid flex-wrap cursor-pointer hover:shadow-[0px_0px_10px_#7abdff] shadow-[0px_0px_5px_#7abdff] bg-blue-400/30  transition duration-200 ${SideMenuCrossBtn_style}  backdrop-blur-xs  rounded-3xl hover:backdrop-blur-xl focus:backdrop-blur-xl transition-all duration-300 ml-2.5 p-1`} tabIndex={0}>
          <div className="w-auto h-auto mt-0.5 
             focus:bg-gray-100/40 
             hover:bg-gray-100/40 
             rounded-3xl flex justify-center p-1.5 items-center  
             transition-all duration-300 
             focus:outline-none "
             tabIndex={0} >
            <img src={homeicon} alt="" className="h-8 cursor-pointer w-8 md:h-9 md:w-9 " />
            <h1 className="text-[#2f94f9] hover:text-[#51a3f5]  text-x ml-1 mr-1 sm:text-xl">Home</h1>
          </div>
          <div className="w-auto h-auto mt-0.5 
             focus:bg-gray-100/40 
             hover:bg-gray-100/40 
             rounded-3xl flex justify-center p-1.5 items-center  
             transition-all duration-300 
             focus:outline-none "
             tabIndex={0} >
            <img src={abouticon} alt="" className=" h-8 w-8 cursor-pointer md:h-9 md:w-9 " />
            <h1 className="text-[#2f94f9] text-x ml-1.5 mr-1 hover:text-[#51a3f5] sm:text-xl">About</h1>
          </div>
          <div className="w-auto h-auto mt-0.5 
             focus:bg-gray-100/40 
             hover:bg-gray-100/40 
             rounded-3xl flex justify-center p-1.5 items-center  
             transition-all duration-300 
             focus:outline-none "
             tabIndex={0} >
            <img src={skillsicon} alt="" className=" h-8 w-8 cursor-pointer md:h-9 md:w-9 " />
            <h1 className="text-[#2f94f9] text-x ml-1.5 mr-1 hover:text-[#51a3f5] sm:text-xl">Skills</h1>
          </div>
          <div
            className="w-auto h-auto mt-0.5 
             focus:bg-gray-100/40 
             hover:bg-gray-100/40 
             rounded-3xl flex justify-center p-1.5 items-center  
             transition-all duration-300 
             focus:outline-none "
            tabIndex={0}  // 👈 Makes the div focusable
          >
            <img
              src={projectsicon}
              alt=""
              className="h-8 w-8 cursor-pointer md:h-9 md:w-9"
            />
            <h1 className="text-[#2f94f9] text-x ml-1.5 mr-1 hover:text-[#51a3f5] sm:text-xl">
              Projects
            </h1>
          </div>
          <div className="w-auto h-auto mt-0.5 
             focus:bg-transparent 
             hover:bg-transparent
             bg-gray-100/40 
             rounded-3xl flex justify-center p-1.5 items-center  
             transition-all duration-300 
             focus:outline-none "
             tabIndex={0} >
            <img src={contactsicon} alt="" className=" h-9 w-9 cursor-pointer md:h-10 md:w-10 " />
            <h1 className="text-[#2f94f9] text-x ml-1 mr-1 hover:text-[#51a3f5] sm:text-xl">Contact</h1>
          </div>

        </div>



      </div>
    </>
  )
}

export default Sidebar;   