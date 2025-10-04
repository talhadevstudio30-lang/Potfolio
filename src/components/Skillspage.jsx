
import React from 'react'
import htmlLogo from '../skills-images/HTML.png';
import cssLogo from '../skills-images/Css.png';
import jsLogo from '../skills-images/JS.png';
import githubLogo from '../skills-images/Github.png';
import viteLogo from '../skills-images/Vite.png';
import tailwindcssLogo from '../skills-images/Tailwindcss.png';
import Git from '../skills-images/Git.png';


const Skillspage = () => {

    const items = [
        {
            skill_image: `${htmlLogo}`,
            skill_title: "HTML",
            skill_theme: "border-orange-300 bg-orange-100 shadow-[0px_0px_5px_#FDBA74]",
            skill_title_theme: "text-orange-600",
            skill_hover_theme: "hover:border-orange-400 hover:shadow-[0px_0px_10px_#FDBA74] hover:bg-orange-200  transition duration-200"

        },
        {
            skill_image: `${cssLogo}`,
            skill_title: "CSS",
            skill_theme: "border-blue-300 bg-blue-100 shadow-[0px_0px_5px_#93C5FD]",
            skill_title_theme: "text-blue-600",
            skill_hover_theme: "hover:border-blue-400 hover:shadow-[0px_0px_10px_#93C5FD] hover:bg-blue-200  transition duration-200"

        },
        {
            skill_image: `${jsLogo}`,
            skill_title: "JavaScript",
            skill_theme: "border-yellow-300 bg-yellow-100 shadow-[0px_0px_5px_#FCD34D]",
            skill_title_theme: "text-yellow-400",
            skill_hover_theme: "hover:border-yellow-400 hover:shadow-[0px_0px_10px_#FCD34D] hover:bg-yellow-200  transition duration-200"

        },
        {
            skill_image: `${githubLogo}`,
            skill_title: "GitHub",
            skill_theme: "border-gray-400 bg-gray-200 shadow-[0px_0px_5px_#737171]",
            skill_title_theme: "text-gray-700",
            skill_hover_theme: "hover:border-gray-500 hover:shadow-[0px_0px_10px_#737171] hover:bg-gray-300  transition duration-200"

        },
        {
            skill_image: `${Git}`,
            skill_title: "Git",
            skill_theme: "border-orange-300 bg-orange-100 shadow-[0px_0px_5px_#FDBA74]",
            skill_title_theme: "text-orange-600",
            skill_hover_theme: "hover:border-orange-500 hover:shadow-[0px_0px_10px_#FDBA74] hover:bg-orange-200  transition duration-200"

        },
        {
            skill_image: `${viteLogo}`,
            skill_title: "Vite + React",
            skill_theme: "border-indigo-400 bg-blue-100 shadow-[0px_0px_5px_#6366F1]",
            skill_title_theme: "text-indigo-500",
            skill_hover_theme: "hover:border-indigo-500 hover:shadow-[0px_0px_10px_#6366F1] hover:bg-indigo-200  transition duration-200"

        },
        {
            skill_image: `${tailwindcssLogo}`,
            skill_title: "Tailwind CSS",
            skill_theme: "border-cyan-300 bg-cyan-100 shadow-[0px_0px_5px_#67E8F9]",
            skill_title_theme: "text-cyan-600",
            skill_hover_theme: "hover:border-cyan-500 hover:shadow-[0px_0px_10px_#67E8F9] hover:bg-cyan-200  transition duration-200"

        },
    ]



    return (
        <>
            <div>
                <h1 className="text-4xl sm:text-5xl lg:text-5xl font-semibold text-center  bg-gradient-to-br from-blue-400 pb-2.5 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '400' }}>
                    Skills
                </h1>
                <p className="text-center  text-lg md:text-xl lg:text-2xl mb-3 text-gray-600 pl-4 pr-4">
                    Here are the technologies and tools I work with to design and develop
                    modern, responsive, and efficient web applications.
                </p>
            </div>
            <div className='flex justify-center  items-center flex-wrap'>
                {items.map((item, index) => <div key={index}>
                    <div className='p-3.5 sm:p-5 grid justify-center items-center flex-wrap'>
                        <div>
                            <div className={`rounded-3xl cursor-pointer grid justify-center items-center min-h-max border-2 ${item.skill_hover_theme}  ${item.skill_theme} w-42 sm:min-h-max sm:w-53 pb-6 pt-4.5 sm:pb-8 sm:pt-6`}>
                                <div className='w-full h-full grid justify-center items-center'>
                                    <div className='grid justify-center items-center'>
                                        <img
                                            src={item.skill_image}
                                            alt="HTML Logo"
                                            className={`${item.skill_image == `${viteLogo}` ? 'mt-0' : ''} h-24 w-24 sm:h-29 sm:w-29 lg:h-33 lg:w-33`}

                                        />
                                    </div>
                                    <div className=''>
                                        <h1 className={`${item.skill_title_theme} text-center text-2xl sm:text-3xl pl-3.5 pr-3.5  ${item.skill_title == 'Vite + React.js' ? 'mt-1' : ''}`}>{item.skill_title}</h1>
                                    </div>
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