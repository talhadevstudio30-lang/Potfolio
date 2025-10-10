
import React, { useState , useEffect } from 'react';
import Responsivenevbar from './Responsivenevbar';
import shortIcon from '../images/short-icon.png';
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
      once: true, // Whether animation should happen only once
      mirror: false, // Animate elements while scrolling past them
    });
  }, []);

    return (
        <>
            <div>
                <header className='flex justify-center text-white items-center mt-2 pl-2 pr-2'
                 >
                    <div className="navbar shadow-[0px_0px_7px_#00bfffd3] bg-gradient-to-br  backdrop-blur-xs hover:backdrop-blur-xl transition  from-[#0080ffde] hover:scale-101 via-[#00bfffd3] to-[#00ffddd0] duration-300 rounded-full w-2xl md:w-3xl lg:w-4xl" data-aos="zoom-in" data-aos-delay="300">
                        <div className="flex-1">
                            <h1 className="Name ml-3.5 lg:text-3xl text-2xl font-normal pr-2" data-aos="zoom-in" data-aos-delay="400">Talha Javed</h1>
                        </div>
                        {/* Menu */}
                        <nav className='pr-2.5 sm:flex lg:text-xl hidden'>
                            <ul className="flex text-white space-x-3 font-normal">
                                <li>
                                    <a
                                        href="#home"
                                        className="menu-font transform transition duration-300 ease-in-out hover:scale-105 hover:text-blue-100  focus:outline-none" 
                                    >
                                        Home
                                    </a>

                                </li>
                                <li>
                                    <a
                                        href="#about"
                                        className="menu-font hover:text-blue-100  focus:outline-none transition hover:font-medium duration-300" 
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#Skills"
                                        className="menu-font hover:text-blue-100 focus:outline-none hover:font-medium transition duration-300" 
                                    >
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#Projects"
                                        className="menu-font hover:text-blue-100  focus:outline-none  transform hover:scale-105 focus:scale-105 transition duration-300 hover:font-medium"
                                    >
                                        Projects
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <ul className='sm:flex mr-2 text-white hidden space-x-4 font-normal lg:text-xl ' >
                            <li className='bg-white rounded-4xl  text-blue-400  hover:border-white delay-10 duration-100 pr-3 pl-3 p-1.5 pb-2'>
                                <a href="#contact" className="menu-font hover:text-blue-500 transition" style={{ fontWeight: '400' }}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                        {/* menu button */}
                        <div>
                            <div className="flex-none block sm:hidden" data-aos="zoom-in" data-aos-delay="500">
                                <button onClick={menubtn} className="border-2 active:-rotate-30 transition duration-200 active:shadow-[0px_0px_10px_white] border-gray-50 shadow-[0px_0px_5px_white]  rounded-full mr-2 mt-1 pl-1 pr-1 pt-0.5 pb-0.5 " style={{ paddingLeft: '3px', paddingRight: '3px' }}>
                                    {menusvg &&
                                        <img src={menuIcon} alt="menu" className='menu-button h-8 w-8' />
                                    }
                                    {exitsvg &&
                                        <img src={exitIcon} alt="close" className='menu-button h-8 w-8' />
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className='extra-icon   h-14 w-14 lg:h-15 lg:w-15 rounded-full shadow-[0px 0px 10px black]  border-2 p-1 border-[#02dbbe] shadow-[0px_0px_7px_#00dfc2] ml-3  hover:scale-110 transition duration-200 ' data-aos="zoom-in" data-aos-delay="500">
                            <img src={shortIcon} alt="icon" className='h-full w-full rounded-full' />

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