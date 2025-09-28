
import React from 'react'

const Skillspage = () => {

    const items = [
        {
        skill_image: "src/skills-images/HTML.png",
        skill_title: "HTML",
        skill_theme: "border-orange-300 bg-orange-100",
        
    },
        {
            skill_image: "src/skills-images/Css.png",
            skill_title: "CSS",
            skill_theme: "border-blue-300 bg-blue-100",

        },
     {
        skill_image: "src/skills-images/JS.png",
        skill_title: "JavaScript",
        skill_theme: "border-yellow-300 bg-yellow-100",
        
    },
     {
        skill_image: "src/skills-images/Github.png",
        skill_title: "GitHub",
        skill_theme: "border-gray-400 bg-gray-200",
        
    },
    {
        skill_image: "src/skills-images/Vite.png",
        skill_title: "Vite + React.js",
        skill_theme: "border-indigo-300 bg-blue-100",
        
    },
    {
        skill_image: "src/skills-images/Tailwindcss.png",
        skill_title: "Tailwind CSS",
        skill_theme: "border-cyan-300 bg-cyan-100",
        
    },
]

 

    return (
        <>
            <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center  bg-gradient-to-br from-blue-400  pb-2.5 to-blue-500 bg-clip-text text-transparent">
                    Skills
                </h1>
                <p className="text-center  text-lg md:text-xl lg:text-2xl mb-3 text-gray-600 pl-4 pr-4">
                    Here are the technologies and tools I work with to design and develop
                    modern, responsive, and efficient web applications.
                </p>
            </div>
            <div className='flex justify-center items-center flex-wrap'>
                {items.map((item, index) => <div key={index}>
                    <div  className='p-5 grid justify-center items-center flex-wrap'>
                        <div className='relative'> {/* Make parent relative */}
                            <div className='border-2 border-white absolute h-8.5 w-8.5 top-2.5 rounded-full right-2.5 grid justify-center items-center'>
                                <button onClick={() => alert(item.skill_title)}>
                                     <img src="src/skills-images/download.png" alt="" className='h-full w-full rounded-full ' />
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