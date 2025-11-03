// ✨ Importing dependencies and assets
import { useEffect, react } from 'react';
import htmlLogo from '../skills-images/HTML.png';
import cssLogo from '../skills-images/Css.png';
import jsLogo from '../skills-images/JS.png';
import githubLogo from '../skills-images/Github.png';
import viteLogo from '../skills-images/Vite.png';
import tailwindcssLogo from '../skills-images/Tailwindcss.png';
import Git from '../skills-images/Git.png';
import AOS from "aos";
import "aos/dist/aos.css";

// ⚡ Functional Component: Skillspage
const Skillspage = () => {

    // 🧠 Initialize AOS (Animate On Scroll) for smooth animations
    useEffect(() => {
        AOS.init({
            easing: "ease-in-out", // 🎢 Controls animation speed curve
            once: false,           // 🔁 Allows animations to replay when scrolling
            mirror: true,          // 🪞 Re-animates while scrolling past elements
        });
    }, []);

    // 🧩 Array of skill objects - each contains image, color theme, and description
    const items = [
        {
            skill_image: `${htmlLogo}`,
            skill_title: "HTML",
            image_theme: '',
            skill_discription: "🌐 HTML is a markup language 🏗️ that structures web content 📄, using elements 🔖 and tags 🏷️ to create webpages with text ✍️, links 🔗, and multimedia 🎬.",
            skill_theme: "border-orange-300 bg-orange-100 shadow-[0px_0px_5px_#FDBA74]",
            skill_title_theme: "text-orange-600",
            skill_container:"HTML",
            skill_hover_theme: "hover:border-orange-400 hover:shadow-[0px_0px_10px_#FDBA74] hover:bg-orange-200  transition duration-200"
        },
        {
            skill_image: `${cssLogo}`,
            skill_title: "CSS",
            image_theme: '',
            skill_theme: "border-blue-300 bg-blue-100 shadow-[0px_0px_5px_#93C5FD]",
            skill_title_theme: "text-blue-500",
            skill_hover_theme: "hover:border-blue-400 hover:shadow-[0px_0px_10px_#93C5FD] hover:bg-blue-200  transition duration-200",
            skill_container:"CSS",
            skill_discription: "🎨 CSS is a stylesheet language 📜 that styles web content 🌐, controlling layout 🖼️, colors 🌈, fonts ✍️, and responsiveness 📱 to enhance visual appeal ✨."
        },
        {
            skill_image: `${jsLogo}`,
            skill_title: "JavaScript",
            image_theme: '',
            skill_theme: "border-yellow-300 bg-yellow-100 shadow-[0px_0px_5px_#FCD34D]",
            skill_title_theme: "text-yellow-400",
            skill_hover_theme: "hover:border-yellow-400 hover:shadow-[0px_0px_10px_#FCD34D] hover:bg-yellow-200  transition duration-200",
            skill_container:"JavaScript",
            skill_discription: "✨ JavaScript is a powerful programming language 💻 that adds interactivity 🖱️ to web pages 🌐, enabling dynamic content 🔄, animations 🎬, and engaging user experiences 🚀."
        },
        {
            skill_image: `${githubLogo}`,
            skill_title: "GitHub",
            image_theme: '',
            skill_theme: "border-gray-400 bg-gray-200 shadow-[0px_0px_5px_#737171]",
            skill_title_theme: "text-gray-700",
            skill_hover_theme: "hover:border-gray-500 hover:shadow-[0px_0px_10px_#737171] hover:bg-gray-300  transition duration-200",
            skill_container:"GitHub",
            skill_discription: "🌐 GitHub is a web-based platform ⚡ for version control 🔄 and collaboration 🤝, helping developers manage code repositories 📂, track changes 📝, and build projects together 🚀."
        },
        {
            skill_image: `${Git}`,
            skill_title: "Git",
            image_theme: '',
            skill_theme: "border-orange-600/40 bg-orange-400/30 shadow-[0px_0px_5px_#FDBA74]",
            skill_title_theme: "text-orange-600",
            skill_hover_theme: "hover:border-orange-500 hover:shadow-[0px_0px_10px_#FDBA74] hover:bg-orange-200  transition duration-200",
            skill_container:"Git",
            skill_discription: "🔗 Git is a distributed version control system 🛠️ that tracks code changes ✍️, enables seamless collaboration 🤝, supports branching 🌿, and ensures efficient project management 📂 for developers 👨‍💻👩‍💻."
        },
        {
            skill_image: `${viteLogo}`,
            skill_title: "Vite + React",
            image_theme: 'mb-1',
            skill_container:"Vite + React",
            skill_theme: "border-indigo-400 bg-blue-100 shadow-[0px_0px_5px_#6366F1]",
            skill_title_theme: "text-indigo-500",
            skill_hover_theme: "hover:border-indigo-500 hover:shadow-[0px_0px_10px_#6366F1] hover:bg-indigo-200  transition duration-200",
            skill_discription: "⚡ Vite is a blazing-fast build tool 🚀 that streamlines development workflow, while React 🧩 is a powerful JavaScript library 💻 for crafting dynamic user interfaces 🎨 — together enabling efficient, modern web apps 🌐✨."
        },
        {
            skill_image: `${tailwindcssLogo}`,
            skill_title: "Tailwind CSS",
            image_theme: '',
            skill_container:"Tailwind CSS",
            skill_theme: "border-cyan-300 bg-cyan-100 shadow-[0px_0px_5px_#67E8F9]",
            skill_title_theme: "text-cyan-600",
            skill_hover_theme: "hover:border-cyan-500 hover:shadow-[0px_0px_10px_#67E8F9] hover:bg-cyan-200  transition duration-200",
            skill_discription: "⚡ Tailwind CSS is a utility-first CSS framework 🎨 that offers ready-to-use classes for rapid UI development 🚀, helping developers build responsive 📱 and customizable 🛠️ designs with ease ✨."
        },
    ];

    // 🧱 Component JSX layout
    return (
        <>
            <div className='skillsection-container grid justify-center items-center h-auto overflow-auto md:h-[100vh] md:overflow-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent'>

                <div>
                    {/* 🏷️ Page Title Section */}
                    <div>
                        <div data-aos="zoom-in" data-aos-delay="50">
                            <h1
                                className="relative text-4xl mt-10 sm:text-5xl lg:text-6xl font-semibold text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-tight drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] "
                                style={{ fontFamily: 'Roboto, sans-serif', zIndex: -1 }}
                            >
                                Skills
                            </h1>
                        </div>

                        {/* 📄 Description Text */}
                        <p
                            className="text-center text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mt-3 mb-7 text-gray-700 leading-relaxed px-6 backdrop-blur-sm bg-white/30 rounded-2xl relative animate-fade-in-up"
                            style={{ zIndex: -1 }}
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            🚀 Here are the technologies and tools I rely on to craft sleek, responsive, and performance-driven web applications. From structuring layouts and styling interfaces to adding interactivity, version control, and fast builds, each tool plays a role in creating apps that don’t just work flawlessly — they wow users.
                        </p>
                    </div>

                    {/* 🎨 Skill Cards Section */}
                    <div className='flex justify-center items-center flex-wrap'>
                        {items.map((item, index) => (
                            <div key={index} data-aos="zoom-in" data-aos-delay="50">
                                <div className='p-3.5 sm:p-5 grid justify-center items-center flex-wrap'>
                                    <div>
                                        {/* 🧱 Skill Card Container */}
                                        <div className={`rounded-4xl cursor-pointer grid justify-center items-center min-h-max border-2 ${item.skill_hover_theme} ${item.skill_theme} w-42 sm:min-h-max sm:w-50 pb-6 pt-4.5 sm:pb-8 sm:pt-6 ${item.skill_container} ${item.skill_container === 'Tailwind CSS' ? 'w-43' : ''}`}>
                                            <div className='w-full h-full grid justify-center items-center'>
                                                <div className='grid justify-center items-center'>

                                                    {/* 🖼️ Skill Logo with Click Event */}
                                                    <img
                                                        src={item.skill_image}
                                                        alt="Skill Logo"
                                                        className={`${item.skill_image == `${viteLogo}` ? 'mt-0' : ''} h-24 w-24 sm:h-27 sm:w-27 lg:h-29 transform hover:scale-110 active:scale-105 transition lg:w-29 ${item.image_theme}`}
                                                        onClick={() => alert(`${item.skill_discription}`)} // 💬 Displays skill info on click
                                                    />
                                                </div>

                                                {/* 🏷️ Skill Title */}
                                                <div>
                                                    <h1 className={`${item.skill_title_theme} text-center text-2xl sm:text-3xl pl-3.5 pr-3.5 ${item.skill_title == 'Vite + React.js' ? 'mt-1' : ''}`} >
                                                        {item.skill_title}
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

// 🚀 Exporting the component for use in other parts of the app
export default Skillspage;
