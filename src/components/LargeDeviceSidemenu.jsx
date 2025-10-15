import React, { useState } from 'react'
import homeicon from '../images/download (2).png';
import abouticon from '../images/download (5).png';
import skillsicon from '../images/download.png';
import projectsicon from '../images/download (6).png';
import contactsicon from '../images/download (4).png';
import menuicon from '../images/download (8).png';
import exitIcon from '../images/download (7).png';
import Resume from '../images/Resume.png'


function LargeDeviceSidemenu({SidelargedeviceBtn_style}) {

    const [menubtnicon, setmenubtnicon] = useState(true);
    const [crossbtnicon, setcrossbtnicon] = useState(false);
    const [RemoveAndShowContent, setRemoveAndShowContent] = useState('hidden');
    const [menustyle, setmenustyle] = useState('w-23');


    const menubtn = () => {
        if (!crossbtnicon) {
            setcrossbtnicon(true);
            setmenubtnicon(false);
            setRemoveAndShowContent('block');
            setmenustyle('w-auto')
            console.log('hello');
        }
        else {
            setcrossbtnicon(false);
            setmenubtnicon(true);
            setRemoveAndShowContent('hidden');
            setmenustyle('w-22')
            console.log('hi');
        }

    }

    return (
        <>
            <div className={`absolute pb-2 cursor-pointer hover:shadow-[0px_0px_10px_#7abdff] shadow-[0px_0px_5px_#7abdff] bg-blue-100/40 backdrop-blur-sm rounded-3xl  focus:backdrop-blur-xl transition-all duration-300 select-none ml-2 block ${SidelargedeviceBtn_style} ${menustyle} `} >
                <div className='SideBarStyle h-[90vh]' >
                    <div className='h-[10%]  grid justify-center items-start pt-1.5'>
                        <div className='bg-blue-400/20 rounded-2xl  hover:backdrop-blur-xl focus:backdrop-blur-xl pb-1.5 pt-1 transition-all duration-200 mt-1.5 pl-2 mb-4.5'>
                            <button className="border-2  outline-none active:-rotate-20 transition duration-200 active:shadow-[0px_0px_10px_white] border-gray-50 shadow-[0px_0px_5px_white]  rounded-xl mr-2 mt-1 pl-1 pr-1 pt-0.5 pb-0.5 " style={{ paddingLeft: '3px', paddingRight: '3px' }} onClick={menubtn}>
                                {menubtnicon &&
                                    <img src={menuicon} alt="menuIcon" className='menu-button h-9 w-9' />
                                }
                                {crossbtnicon &&
                                    <img src={exitIcon} alt="closeIcon" className='menu-button h-9 w-9' />
                                }
                            </button>
                        </div>
                    </div>
                    <div className='h-[80%]  grid justify-center items-center mb-4'>
                        <div>
                            <div className={`select-none
                         grid flex-wrap cursor-pointer hover:shadow-[0px_0px_10px_#7abdff] shadow-[0px_0px_5px_#7abdff] bg-blue-400/20   rounded-2xl hover:backdrop-blur-xl focus:backdrop-blur-xl transition-all ml-3.5 mr-3.5 duration-200 p-1`} tabIndex={0}>
                                <div className="w-auto h-auto mt-0.5 
                                     focus:bg-gray-100/40 
                                     hover:bg-gray-100/40 
                                     rounded-2xl flex justify-center p-1.5 items-center  
                                     transition-all duration-200 [text-shadow:0_0_5px_#ffffff]
                                     focus:outline-none "
                                    tabIndex={0} >
                                    <img src={homeicon} alt="" className="h-8 cursor-pointer w-8 md:h-9 md:w-9 " />
                                    <h1 className={`text-[#2f94f9] hover:text-[#51a3f5]  text-x ml-2 mr-1 sm:text-xl ${RemoveAndShowContent}`}>Home</h1>
                                </div>
                                <div className="w-auto h-auto mt-0.5 
                                     focus:bg-gray-100/40 
                                     hover:bg-gray-100/40 
                                     rounded-2xl flex justify-center p-1.5 items-center  
                                     transition-all duration-200 [text-shadow:0_0_5px_#ffffff]
                                     focus:outline-none "
                                    tabIndex={0} >
                                    <img src={abouticon} alt="" className=" h-8 w-8 cursor-pointer md:h-9 md:w-9 " />
                                    <h1 className={`text-[#2f94f9] hover:text-[#51a3f5]  text-x ml-2 mr-1 sm:text-xl ${RemoveAndShowContent}`}>About</h1>
                                </div>
                                <div className="w-auto h-auto mt-0.5 
                                     focus:bg-gray-100/40 
                                     hover:bg-gray-100/40 
                                     rounded-2xl flex justify-center p-1.5 items-center  
                                     transition-all duration-200 [text-shadow:0_0_5px_#ffffff]
                                     focus:outline-none "
                                    tabIndex={0} >
                                    <img src={skillsicon} alt="" className=" h-8 w-8 cursor-pointer md:h-9 md:w-9 " />
                                    <h1 className={`text-[#2f94f9] hover:text-[#51a3f5]  text-x ml-2 mr-1 sm:text-xl ${RemoveAndShowContent}`}>Skills</h1>
                                </div>
                                <div
                                    className="w-auto h-auto mt-0.5 
                                     focus:bg-gray-100/40 
                                     hover:bg-gray-100/40 
                                     rounded-2xl flex justify-center p-1.5 items-center  
                                     transition-all duration-200 [text-shadow:0_0_5px_#ffffff]
                                     focus:outline-none "
                                    tabIndex={0}  // 👈 Makes the div focusable
                                >
                                    <img
                                        src={projectsicon}
                                        alt=""
                                        className="h-8 w-8 cursor-pointer md:h-9 md:w-9"
                                    />
                                    <h1 className={`text-[#2f94f9] hover:text-[#51a3f5] text-x ml-2 mr-1 sm:text-xl ${RemoveAndShowContent}`}>Projects</h1>
                                </div>
                                <div className="w-auto h-auto mt-0.5 
                                     focus:bg-transparent 
                                     hover:bg-transparent
                                     bg-gray-100/40 
                                     rounded-2xl flex justify-center p-1.5 items-center  
                                     transition-all duration-200 [text-shadow:0_0_5px_#ffffff]
                                     focus:outline-none "
                                    tabIndex={0} >
                                    <img src={contactsicon} alt="" className=" h-9 w-9 cursor-pointer md:h-10 md:w-10 " />  <h1 className={`text-[#2f94f9] hover:text-[#51a3f5]  text-x ml-1 mr-1 sm:text-xl ${RemoveAndShowContent}`}>Contact</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='h-[10%] grid justify-center items-end'>
                        <div className='bg-indigo-400/20 rounded-2xl text-center text-wrap hover:backdrop-blur-xl focus:backdrop-blur-xl transition-all duration-200 mb-5 '>
                             <div
                                    className="w-auto h-auto mt-0.5 
                                     focus:bg-gray-100/40 
                                     hover:bg-gray-100/40 
                                     rounded-2xl flex justify-center p-1.5 items-center  
                                     transition-all duration-200  pl-3 pr-3 [text-shadow:0_0_5px_#ffffff]
                                     focus:outline-none "
                                    tabIndex={0}  // 👈 Makes the div focusable
                                >
                                    <img
                                        src={Resume}
                                        alt=""
                                        className="h-8 w-8 cursor-pointer md:h-9 md:w-9"
                                    />
                                    <h1 className={`text-indigo-500 hover:text-indigo-400 text-x ml-2 mr-1 sm:text-xl ${RemoveAndShowContent}`}>Resume</h1>
                                </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LargeDeviceSidemenu
