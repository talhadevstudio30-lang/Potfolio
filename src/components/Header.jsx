
import React, { useState } from 'react';
import Responsivenevbar from './Responsivenevbar';
import shortIcon from '../images/short-icon.png';
import menuIcon from '../images/download (8).png';
import exitIcon from '../images/download (7).png';

function Header() {

    const [menusvg, setmenusvg] = useState(true);
    const [exitsvg, setexitsvg] = useState(false);
    const [secNavbar , setsecNavbar] = useState(false);
    const [opacityanimation , setopacityanimation] = useState('opacity-0');

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

    return (
        <>
            <div>
                <header className='flex justify-center text-white items-center mt-2 pl-2 pr-2'>
                    <div className="navbar shadow-[0px_0px_7px_#0080ff] bg-gradient-to-br  backdrop-blur-xs hover:backdrop-blur-xl transition duration-200 from-[#0080ffde] via-[#00bfffd3] to-[#00ffddd0] rounded-full w-2xl md:w-3xl lg:w-4xl">
                        <div className="flex-1">
                            <h1 className="Name ml-3.5 lg:text-3xl text-2xl font-normal pr-2">Talha Crafted</h1>
                        </div>
                        {/* Menu */}
                        <nav className='pr-2.5 sm:flex lg:text-xl hidden'>
                            <ul className="flex  text-white space-x-4 font-normal">
                                <li>
                                    <a href="#home" className="menu-font scale-100  hover:text-blue-500 transition hover:font-medium duration-300">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="menu-font hover:text-blue-500 transition hover:font-medium duration-300">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#Skills" className="menu-font hover:text-blue-500 hover:font-medium transition duration-300">
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a href="#Projects" className="menu-font hover:text-blue-500 transform hover:scale-105 transition duration-300 hover:font-medium">
                                        Projects
                                    </a>
                                </li>
                                {/* <li>
                                    <details>
                                        <summary className='hover:text-base-100 transition duration-150'>More</summary>
                                        <ul className="bg-base-100 transition duration-200 rounded-xl z-10 absolute  p-2 mt-1.5">
                                            <li>
                                                <a>Projects</a>
                                            </li>
                                        </ul>
                                    </details>
                                </li> */}

                            </ul>


                        </nav>
                        <ul className='sm:flex mr-2 text-white hidden space-x-4 font-normal lg:text-xl '>
                            <li className='bg-white rounded-4xl  text-blue-400  hover:border-white delay-10 duration-100 pr-3 pl-3 p-1.5 pb-2'>
                                <a href="#contact" className="menu-font hover:text-blue-500 transition" style={{fontWeight : '400'}}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                        {/* menu button */}
                        <div>
                            <div className="flex-none block sm:hidden">
                                <button onClick={menubtn} className="border-2 active:-rotate-30 transition duration-200 active:shadow-[0px_0px_10px_white] border-gray-50 shadow-[0px_0px_5px_white]  rounded-full mr-2 mt-1 pl-1 pr-1 pt-0.5 pb-0.5 " style={{ paddingLeft: '3px', paddingRight: '3px'}}>
                                    {menusvg && 
                                    <img src={menuIcon} alt="menu" className='menu-button h-8 w-8'/>
                                    }
                                    {exitsvg && 
                                    <img src={exitIcon} alt="close" className='menu-button h-8 w-8'/>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='extra-icon h-14 w-14 lg:h-15 lg:w-15 rounded-full shadow-[0px 0px 10px black]  border-2 p-1 border-[#00dfc2] shadow-[0px_0px_7px_#00dfc2] ml-2'>
                            <img src={shortIcon} alt="icon" className='h-full w-full rounded-full' />

                        </div>
                    </div>
                </header>

            </div>
            <div className={`transition delay-100 duration-100 ease ${opacityanimation}`}>
                {secNavbar &&
                    <div>
                        <Responsivenevbar opacityanimation={opacityanimation} setopacityanimation={setopacityanimation}/>
                    </div>
                }

            </div >
        </>
    );
}

export default Header;