
import React from 'react'
import htmlLogo from '../skills-images/HTML.png';
import cssLogo from '../skills-images/Css.png';
import jsLogo from '../skills-images/JS.png';
import githubLogo from '../skills-images/Github.png';
import viteLogo from '../skills-images/Vite.png';
import tailwindcssLogo from '../skills-images/Tailwindcss.png';
import Info from '../skills-images/download.png';


const Skillspage = () => {

    const items = [
        {
        skill_image: `${htmlLogo}`,
        skill_title: "HTML",
        skill_theme: "border-orange-300 bg-orange-100",
        
    },
        {
            skill_image: `${cssLogo}`,
            skill_title: "CSS",
            skill_theme: "border-blue-300 bg-blue-100",

        },
     {
        skill_image: `${jsLogo}`,
        skill_title: "JavaScript",
        skill_theme: "border-yellow-300 bg-yellow-100",
        
    },
     {
        skill_image: `${githubLogo}`,
        skill_title: "GitHub",
        skill_theme: "border-gray-400 bg-gray-200",
        
    },
    {
        skill_image: `${viteLogo}`,
        skill_title: "Vite + React.js",
        skill_theme: "border-indigo-300 bg-blue-100",
        
    },
    {
        skill_image: `${tailwindcssLogo}`,
        skill_title: "Tailwind CSS",
        skill_theme: "border-cyan-300 bg-cyan-100",
        
    },
]

 

    return (
        <>
            <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center  bg-gradient-to-br from-blue-400 pb-2.5 to-blue-500 bg-clip-text text-transparent">
                    Skills
                </h1>
                <p className="text-center  text-lg md:text-xl lg:text-2xl mb-3 text-gray-600 pl-4 pr-4">
                    Here are the technologies and tools I work with to design and develop
                    modern, responsive, and efficient web applications.
                </p>
            </div>
            <div className='flex justify-center z-0 relative items-center flex-wrap' style={{ zIndex: -3 }}>
                {items.map((item, index) => <div key={index}>
                    <div  className='p-5 grid justify-center items-center flex-wrap'>
                        <div className='relative z-10'> {/* Make parent relative */}
                            <div className='border-2 border-white z-10 absolute h-8.5 w-8.5 top-2.5 rounded-full right-2.5 grid justify-center items-center'>
                                <button onClick={() => alert(item.skill_title)}>
                                     <img src={Info} alt="" className='h-full w-full rounded-full ' />
                                </button>
                               </div>

                            <div className={`rounded-3xl  grid justify-center items-center h-70 border-2  ${item.skill_theme} w-60 pl-5 pr-5 pb-4.5 shadow-[0px_0px_10px_]`}>
                                <div className='w-full h-auto grid justify-center items-center pt-2'>
                                    <img
                                        src={item.skill_image}
                                        alt="HTML Logo"
                                        className='h-35 w-35 lg:h-37 lg:w-37'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>




        </>
    )
}
export default Skillspage;