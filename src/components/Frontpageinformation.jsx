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
                            <img src={developerImage} alt="potfolio image" className='dev-image h-62 w-62 md:h-70 md:w-70 rounded-full md:mr-6.5 shadow-[0px_0px_15px_#0080ff]' />
                        </div>
                    </div>
                    {/* this div is the contaner of title of homepage */}
                    <div className='h-auto w-auto mt-4 sm:ml-4.5 text-black'>
                        <div className='home-page-title '>
                            <h3 className='text-xl md:text-2xl ml-3 md:ml-2.5'>Hello, I'm</h3>
                        </div>
                        <div className='home-page-title'>
                            <h1 className='text-3xl md:text-4xl ml-3 md:ml-2.5 font-semibold'>Talha Javed</h1>
                        </div>
                        <div className="home-page-title-skill-container pl-3.5 text-start">
                            <h3 className="text-xl md:text-2xl tracking-tight text-gray-800">
                                <span className='mt-1 ml-1.5'>And I'm a{" "}</span>
                                <span className="relative mt-1.5 ml-1 inline-block px-3 py-1.5 rounded-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r  from-cyan-400 via-blue-500 to-purple-600 animate-text-shimmer border-2 border-blue-300 shadow-lg hover:shadow-blue-400/50 transition text-center duration-200 mr-6">
                                    Frontend Developer
                                    {/* Glow Effect */}
                                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-30 blur-lg"></span>
                                </span>
                            </h3>
                        </div>

                        <div className='home-page-title-para text-wrap mt-1'>
                            <p className='text-lg md:text-xl ml-3 md:ml-2.5'>I’m a passionate frontend developer who creates clean, user-friendly web experiences, turning ideas into engaging digital products through modern tools and thoughtful design.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Frontpageinformation;