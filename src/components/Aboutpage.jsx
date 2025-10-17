import React, { useEffect, useRef, useState } from 'react';
import TechnicalImg from '../images/Technical.png';
import ProfessionalImg from '../images/Professional.png';
import EducationImg from '../images/Education.png';
import AOS from "aos";
import "aos/dist/aos.css";

function Aboutpage() {
  const technicalSkills_items = [
    { skill: "React.js & Next.js Development" },
    { skill: "Tailwind CSS & Material UI" },
    { skill: "JavaScript & TypeScript" },
    { skill: "Responsive Web Design" },
    { skill: "Github & Vercel" },
  ];

  const professionalExperience_items = [
    { skill: `${new Date().getFullYear() - 2023} + Years Frontend Development` },
    { skill: "Modern Web Applications" },
    { skill: "Performance Optimization" },
    { skill: "Team Collaboration" },
    { skill: "Modern UI/UX designs" },
  ];

  // ✅ Age calculation function
  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();

    const hasBirthdayPassed =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    if (!hasBirthdayPassed) {
      age -= 1;
    }

    return age;
  };

  const dob = "2008-10-20"; // YYYY-MM-DD
  const age = calculateAge(dob);

  useEffect(() => {
    AOS.init({
      easing: "ease-in-out", // Animation easing
      once: false, // Whether animation should happen only once
      mirror: true, // Animate elements while scrolling past them
    });
  }, []);


  return (
    <>
      <div className='w-full flex pt-0.5 sm:pt-1.5 justify-center items-center pl-2 pr-2 pb-10 md:p-0' >
        <div className="Name bg-blue-50/70 p-3 md:p-4 rounded-4xl sm:rounded-4xl pb-1.5 sm:w-[98%] w-full  shadow-[0px_0px_7px_#168bffba] ">
          <h1
            className="text-4xl tracking-tight md:text-4xl lg:text-5xl text-center mb-2.5 bg-gradient-to-r from-blue-500 pb-2.5 to-cyan-400 bg-clip-text text-transparent mt-2"
            style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '400' }}
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <span className='text-white'>👋</span> Hey, I'm <span className="font-semibold">Talha Javed</span> <span className='text-white'>🚀</span>
          </h1>

          <div className='flex justify-center items-center' data-aos="zoom-in" data-aos-delay="100">
            <div className="bg-white p-4 md:w-4xl w-5xl rounded-3xl pt-3 mb-6 shadow-[0px_0px_8px_#70b5ff] hover:shadow-[0px_0px_12px_#70b5ff] transition duration-200">
              <h2 className="text-2xl font-semibold text-blue-500 mb-1.5">
                🎨 Welcome to My Creative Space ✨
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed cursor-pointer">
                I am <span className='text-blue-500 font-medium'>Talha Javed</span>, a {age}-year-old student and passionate UI/UX designer and developer focused on creating beautiful,
                functional, and user-centered digital experiences. As a young developer with a keen eye for detail
                and a love for clean design, I strive to build interfaces that are both
                aesthetically pleasing and intuitive to use, while balancing my studies with my passion for web development.
              </p>
            </div>
          </div>
          <div className="md:flex grid justify-center items-center  md:justify-center md:items-center gap-4 cursor-pointer" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-gradient-to-br to-blue-300 transition duration-200 hover:shadow-[0px_0px_15px_#003df5] md:mr-1.5 from-blue-700 p-4.5 pl-4 pt-3 pr-6 rounded-3xl text-white  shadow-[0px_0px_10px_#003df5] text-lg lg:text-xl">
              <div className='flex justify-start items-center mb-2'>
                <img src={TechnicalImg} alt="Technical" className='h-8 w-8 md:h-9 md:w-9' />
                <h3 className="text-xl font-semibold ml-1">Technical Skills</h3>
              </div>
              <ul className="space-y-3">
                {technicalSkills_items.map((item, index) => <div key={index}>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item.skill}
                  </li>
                </div>)}
              </ul>
            </div>

            <div className="bg-gradient-to-br cursor-pointer from-cyan-400 to-cyan-700   shadow-[0px_0px_10px_#00e0f0] hover:shadow-[0px_0px_15px_#00e0f0] md:ml-1.5 transition duration-200  rounded-3xl text-white p-4.5 pl-4 pt-3 pr-6 text-lg lg:text-xl" data-aos="zoom-in" data-aos-delay="100">
              <div className='flex justify-start items-end mb-2.5'>
                <img src={ProfessionalImg} alt="Professional" className='h-8 w-8 md:h-9 md:w-9' />
                <h3 className="text-xl font-semibold ml-1.5">Professional Experience</h3>
              </div>
              <ul className="space-y-3">
                {professionalExperience_items.map((item, index) => <div key={index}>
                  <li className="flex items-center ">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item.skill}
                  </li>
                </div>)}
              </ul>
            </div>
          </div>
          <div className='mt-6.5 mb-2' data-aos="zoom-in" data-aos-delay="100">
            <div className='flex justify-center items-center '>
              <div className="bg-white p-4 md:w-4xl w-5xl rounded-3xl cursor-pointer pt-3.5 mb-2 shadow-[0px_0px_7px_#a5f8a7] hover:shadow-[0px_0px_12px_#a5f8a7] transition duration-200">
                <div className='flex justify-start items-center mb-1.5'>
                  <img src={EducationImg} alt="Education" className='h-8 w-8' />
                  <h2 className="text-2xl font-semibold ml-1  text-green-500">
                    Education
                  </h2>
                </div>

                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                  Hey! I’m a Computer Science student passionate about technology, creativity, and innovation. I love turning ideas into interactive digital experiences through coding and design.
                </p>

                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed mt-2.5">
                  I’m a self-taught learner, gaining knowledge from platforms like YouTube, Udemy, and AI tools such as ChatGPT. This approach helps me stay updated and build practical skills through hands-on projects.
                </p>

                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed mt-2.5">
                  I’m especially interested in UI/UX design and front-end development, where I combine logic with creativity to craft smooth and engaging user experiences. My goal is to grow as a developer and create technology that inspires and connects people.
                </p>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutpage;
