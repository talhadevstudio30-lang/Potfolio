import React from 'react';
import developerImage from '../images/developer-image.jpg';

function Frontpageinformation() {
    return (
        <>
            <div className='front-page-container h-screen grid justify-center items-center'>
                <div className='grid justify-center items-center md:flex md:justify-center md:items-center h-auto  '>
                    <div className='h-auto w-auto  flex justify-center items-center'>
                        {/* this div is the container of potfolio image */}
                        <div>
                            <img src={developerImage} alt="potfolio image" className='dev-image h-60 w-60 md:h-65 md:w-65 rounded-full md:mr-6.5 shadow-[0px_0px_15px_#0080ff]' />
                        </div>
                    </div>
                    {/* this div is the contaner of title of homepage */}
                    <div className='h-auto w-auto  mt-4 sm:ml-4.5 text-black'>
                        <div className='home-page-title '>
                            <h3 className='text-xl md:text-2xl ml-3 md:ml-2.5'>Hello, I'm</h3>
                        </div>
                        <div className='home-page-title'>
                            <h1 className='text-2xl md:text-4xl ml-3 md:ml-2.5 font-semibold'>Talha Javed</h1>
                        </div>
                        <div className='home-page-title'>
                            <h3 className='text-xl md:text-2xl ml-3 md:ml-2.5 mt-1.5'>And l'm a <span className='text-blue-400 font-medium'>Frontend Developer</span></h3>
                        </div>
                        <div className='home-page-title-para text-wrap'>
                            <p className='text-lg md:text-xl ml-3 md:ml-2.5'>I’m a passionate frontend developer who creates clean, user-friendly web experiences, turning ideas into engaging digital products through modern tools and thoughtful design.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Frontpageinformation;