import React from 'react';
import homeicon from '../images/download (2).png';
import abouticon from '../images/download (5).png';
import skillsicon from '../images/download.png';
import projectsicon from '../images/download (6).png';
import contactsicon from '../images/download (4).png';

function Responsivenevbar() {
  return (
    <>
      <div className={`flex justify-center w-full mt-2.5 items-center absolute z-30 `}>
        <div className=' shadow-[0px_0px_10px_#0080ff9b] backdrop-blur-xl mt-3  rounded-3xl w-[90%] ml-2 mr-2 from-[#0080ff9b] via-[#00bfff98] to-[#00ffddb1]  text-gray-950 sm:hidden bg-gradient-to-br flex-wrap'>
          <div className="flex justify-center p-1.5 items-center flex-wrap text-white text-lg font-light">
            {/* Home */}
            <div>
              <a
                href="#home"
                className={`px-3 py-2 m-1.5 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_white] focus:outline-none focus:ring shadow-[0px_0px_5px_white] hover:bg-gray-50/30 flex justify-center items-center focus:ring-white focus:ring-offset-2`}
              >
                <img src={homeicon} alt="" className="h-8 w-8" />
                <span className='ml-1 mr-0.5'>Home</span>
              </a>
            </div>
            {/* About */}
            <div>
              <a
                href="#about"
                className={`px-3 py-2 m-1.5 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_white] focus:outline-none focus:ring shadow-[0px_0px_5px_white] hover:bg-gray-50/30 flex justify-center items-center focus:ring-white focus:ring-offset-2`}
              >
                <img src={abouticon} alt="" className="h-8 w-8" />
                <span className='ml-1 mr-0.5'>About</span>
              </a>
            </div>
            {/* Skills */}
            <div>
              <a
                href="#skills"
                className={`px-3 py-2 m-1.5 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_white] focus:outline-none focus:ring shadow-[0px_0px_5px_white] hover:bg-gray-50/30 flex justify-center items-center focus:ring-white focus:ring-offset-2`}
              >
                <img src={skillsicon} alt="" className="h-8 w-8" />
                <span className='ml-1 mr-0.5'>Skills</span>
              </a>
            </div>
            {/* Projects */}
            <div>
              <a
                href="#projects"
                className={`px-3 py-2 m-1.5 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_white] focus:outline-none focus:ring shadow-[0px_0px_5px_white] hover:bg-gray-50/30 flex justify-center items-center focus:ring-white focus:ring-offset-2`}
              >
                <img src={projectsicon} alt="" className="h-8 w-8" />
                <span className='ml-1 mr-0.5'>Projects</span>
              </a>
            </div>
            {/* Contacts */}
            <div>
              <a
                href="#contacts"
                className={`px-3 py-2 m-1.5 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_white] focus:outline-none focus:ring bg-gray-50/20 shadow-[0px_0px_5px_white] hover:bg-gray-50/30 flex justify-center items-center focus:ring-white focus:ring-offset-2`}
              >
                <img src={contactsicon} alt="" className="h-9 w-9" />
                <span className='ml-1 mr-0.5'>Contacts</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Responsivenevbar;