
import React, { useState , useEffect } from 'react';
import Responsivenevbar from './Responsivenevbar';
import ResumeIcon from '../images/Resume.png';
import menuIcon from '../images/download (8).png';
import exitIcon from '../images/download (7).png';
import AOS from "aos";
import "aos/dist/aos.css";


function Header() {

    const [menusvg, setmenusvg] = useState(true);
    const [exitsvg, setexitsvg] = useState(false);
    const [secNavbar, setsecNavbar] = useState(false);
    const [opacityanimation, setopacityanimation] = useState('opacity-0');

    const menubtn = () => {
        if (!exitsvg) {
            setexitsvg(true);
            setmenusvg(false);
            setsecNavbar(true);
            setopacityanimation('opacity-100');
        }
        else {
            setexitsvg(false);
            setmenusvg(true);
            setsecNavbar(false);
            setopacityanimation('opacity-0 transition delay-100 duration-100 ease-in');
        }
    }

      useEffect(() => {
    AOS.init({
      easing: "ease-in-out", // Animation easing
      once:  false, // Whether animation should happen only once
      mirror: true, // Animate elements while scrolling past them
    });
  }, []);

    return (
        <>
            <div>
                <header className='flex justify-center text-white items-center mt-2 pl-2 pr-2'
                 >
                    <div className="navbar shadow-[0px_0px_7px_#00bfffd3] bg-gradient-to-br  backdrop-blur-xs hover:backdrop-blur-xl transition  from-[#0080ffde]  via-[#00bfffd3] to-[#00ffddd0] duration-300 rounded-full w-2xl md:w-3xl lg:w-4xl" data-aos="zoom-in" data-aos-delay="300">
                        <div className="flex-1">
                            <h1 className="Name ml-3.5 lg:text-3xl text-3xl font-normal pr-2" data-aos="zoom-in" data-aos-delay="400">Talha Javed</h1>
                        </div>
                       <div className='border-2 border-gray-100/50 p-0.5 hidden md:block rounded-full bg-gray-100/20' data-aos="zoom-in" data-aos-delay="400">
                        {/* Home */}
                                    <div className='flex justify-center items-center flex-wrap md:pl-1 md:pr-1 lg:gap-1.5 lg:pl-1.5 lg:pr-1'>
                                      <a
                                        href=""
                                        className={`px-2 py-1.5 m-1 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring bg-gray-100/20 flex justify-center items-center hover:bg-gray-100  hover:text-[#148affde] focus:ring-white shadow-[0px_0px_5px_white] focus:ring-offset-2`}
                                      >
                                        
                                        <span className='ml-1 mr-0.5'>Home</span>
                                      </a>
                                   <a
                                        href=""
                                        className={`px-2 py-1.5 m-1 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring bg-gray-100/20 flex justify-center shadow-[0px_0px_5px_white] items-center hover:bg-gray-100 hover:text-[#148affde] focus:ring-white focus:ring-offset-2`}
                                      >
                                        
                                        <span className='ml-1 mr-0.5'>About</span>
                                      </a>
                                      <a
                                        href=""
                                        className={`px-2 py-1.5 m-1 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring bg-gray-100/20 flex justify-center items-center hover:bg-gray-100 shadow-[0px_0px_5px_white] hover:text-[#00bfffd3] focus:ring-white focus:ring-offset-2`}
                                      >
                                        
                                        <span className='ml-1 mr-0.5'>Skills</span>
                                      </a>
                                        <a
                                        href=""
                                        className={`px-2 py-1.5 m-1 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring bg-gray-100/20 shadow-[0px_0px_5px_white] flex justify-center items-center hover:bg-gray-100 hover:text-[#00bfffd3] focus:ring-white focus:ring-offset-2`}
                                      >
                                        
                                        <span className='ml-1 mr-0.5'>Projects</span>
                                      </a>
                                      
                                      
                                        <a
                                        href=""
                                        className={`px-2 py-2 m-1.5 rounded-full transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_white] focus:outline-none focus:ring bg-white text-cyan-400 shadow-[0px_0px_5px_white] flex justify-center items-center focus:ring-white focus:ring-offset-2`}
                                      >
                                        
                                        
                                        <span className='ml-1 mr-0.5'>Contact</span>
                                      </a>
                                      
                                    </div>
                       </div>
                        {/* menu button */}
                        <div>
                            <div className="flex-none block md:hidden" data-aos="zoom-in" data-aos-delay="500">
                                <button onClick={menubtn} className="border-2 active:-rotate-30 transition duration-200 active:shadow-[0px_0px_10px_white] border-gray-50 shadow-[0px_0px_5px_white]  rounded-full mr-2 mt-1 pl-1 pr-1 pt-0.5 pb-0.5 " style={{ paddingLeft: '3px', paddingRight: '3px' }}>
                                    {menusvg &&
                                        <img src={menuIcon} alt="menu" className='menu-button h-9 w-9' />
                                    }
                                    {exitsvg &&
                                        <img src={exitIcon} alt="close" className='menu-button h-9 w-9' />
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className='extra-icon   h-15.5 w-15.5 lg:h-15 lg:w-15 rounded-full shadow-[0px 0px 10px black]  border-2 pb-2 p-1 border-[#c875ff] shadow-[0px_0px_7px_#d08aff] ml-3  transition duration-200 ' data-aos="zoom-in" data-aos-delay="500">
                            <img src={ResumeIcon} alt="icon" className='h-full w-full rounded-full' />

                        </div>
                    </div>
                </header>

            </div>
            <div className={`transition delay-100 duration-50 ease ${opacityanimation}`} >
                {secNavbar &&
                    <div>
                        <Responsivenevbar opacityanimation={opacityanimation} setopacityanimation={setopacityanimation} />
                    </div>
                }

            </div >
        </>
    );
}

export default Header;