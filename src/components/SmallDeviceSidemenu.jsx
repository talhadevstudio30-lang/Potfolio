// ⚛️ Importing React and icon images
import React from 'react';
import homeicon from '../images/download (2).png';
import abouticon from '../images/download (5).png';
import skillsicon from '../images/download.png';
import projectsicon from '../images/download (6).png';
import contactsicon from '../images/download (4).png';
import Resume from '../images/Resume.png'

// 📱 Component: SmallDeviceSidemenu
// 👉 This component displays a mini side navigation bar optimized for small devices.
function SmallDeviceSidemenu() {
    return (
        <>
            {/* 🧱 Main container */}
            <div>
                {/* 🎨 Side menu wrapper with glass effect and hover animations */}
                <div
                    className={`absolute select-none
                        grid flex-wrap cursor-pointer 
                        hover:shadow-[0px_0px_10px_#7abdff] shadow-[0px_0px_5px_#7abdff]
                        bg-blue-400/30 backdrop-blur-xs  
                        rounded-3xl hover:backdrop-blur-xl focus:backdrop-blur-xl 
                        transition-all duration-200 ml-2.5 p-1`}
                    tabIndex={0}
                >

                    {/* 🏠 Home Button */}
                    <div
                        className="w-auto h-auto  
                            focus:bg-gray-100/40 hover:bg-gray-100/40 
                            rounded-3xl flex justify-center p-1.5 items-center  
                            transition-all duration-200 [text-shadow:0_0_5px_#ffffff]
                            focus:outline-none"
                        tabIndex={0}
                    >
                        <img src={homeicon} alt="Home Icon" className="h-8 cursor-pointer w-8 md:h-9 md:w-9" />
                        <h1 className="text-[#2f94f9] hover:text-[#51a3f5] text-x ml-1 mr-1 sm:text-xl">Home</h1>
                    </div>

                    {/* 👤 About Button */}
                    <div
                        className="w-auto h-auto mt-0.5 
                            focus:bg-gray-100/40 hover:bg-gray-100/40 
                            rounded-3xl flex justify-center p-1.5 items-center  
                            transition-all duration-200 [text-shadow:0_0_5px_#ffffff]
                            focus:outline-none"
                        tabIndex={0}
                    >
                        <img src={abouticon} alt="About Icon" className="h-8 w-8 cursor-pointer md:h-9 md:w-9" />
                        <h1 className="text-[#2f94f9] text-x ml-1.5 mr-1 hover:text-[#51a3f5] sm:text-xl">About</h1>
                    </div>

                    {/* 💡 Skills Button */}
                    <div
                        className="w-auto h-auto mt-0.5 
                            focus:bg-gray-100/40 hover:bg-gray-100/40 
                            rounded-3xl flex justify-center p-1.5 items-center  
                            transition-all duration-200 [text-shadow:0_0_5px_#ffffff]
                            focus:outline-none"
                        tabIndex={0}
                    >
                        <img src={skillsicon} alt="Skills Icon" className="h-8 w-8 cursor-pointer md:h-9 md:w-9" />
                        <h1 className="text-[#2f94f9] text-x ml-1.5 mr-1 hover:text-[#51a3f5] sm:text-xl">Skills</h1>
                    </div>

                    {/* 🧩 Projects Button */}
                    <div
                        className="w-auto h-auto mt-0.5 
                            focus:bg-gray-100/40 hover:bg-gray-100/40 
                            rounded-3xl flex justify-center p-1.5 items-center  
                            transition-all duration-200 [text-shadow:0_0_5px_#ffffff]
                            focus:outline-none"
                        tabIndex={0} // 👈 Makes the div focusable using Tab key
                    >
                        <img src={projectsicon} alt="Projects Icon" className="h-8 w-8 cursor-pointer md:h-9 md:w-9" />
                        <h1 className="text-[#2f94f9] text-x ml-1.5 mr-1 hover:text-[#51a3f5] sm:text-xl">Projects</h1>
                    </div>

                    {/* ✉️ Contact Button */}
                    <div
                        className="w-auto h-auto mt-0.5 
                            focus:bg-transparent [text-shadow:0_0_5px_#ffffff]
                            hover:bg-transparent bg-gray-100/40 
                            rounded-3xl flex justify-center p-1.5 items-center  
                            transition-all duration-200 focus:outline-none"
                        tabIndex={0}
                    >
                        <img src={contactsicon} alt="Contact Icon" className="h-9 w-9 cursor-pointer md:h-10 md:w-10" />
                        <h1 className="text-[#2f94f9] text-x ml-1 mr-1 hover:text-[#51a3f5] sm:text-xl">Contact</h1>
                    </div>
                    {/* Resume Button */}
                  
                        <div
                            className="w-auto h-auto mt-1
                                                         focus:bg-transparent 
                                                         hover:bg-transparent
                                                         bg-indigo-500/20 
                                                         rounded-full flex justify-center p-1.5 items-center  
                                                         transition-all duration-200  pl-3 pr-3 [text-shadow:0_0_5px_#ffffff]
                                                         focus:outline-none "
                            tabIndex={0}  // 👈 Makes the div focusable
                        >
                            <img
                                src={Resume}
                                alt=""
                                className="h-8 w-8 cursor-pointer md:h-9 md:w-9"
                            />
                            <h1 className={`text-indigo-500 hover:text-indigo-400 text-x ml-2 mr-1 sm:text-xl`}>Resume</h1>
                        </div>
                    </div>
            </div>
        </>
    );
}

// 🚀 Exporting component for use in other parts of the app
export default SmallDeviceSidemenu;
