import React, { useEffect } from 'react';
import TechnicalImg from '../images/Technical.png';
import ProfessionalImg from '../images/Professional.png';
import EducationImg from '../images/Education.png';

function Aboutpage() {


  const technicalSkills_items = [{
    skill: "React.js & Next.js Development",

  },
  {
    skill: `Tailwind CSS & Material UI`,

  },
  {
    skill: "JavaScript & TypeScript",

  },
  {
    skill: "Responsive Web Design",

  },
  {
    skill: "Github & Vercel",

  },
  ]
  const professionalExperience_items = [{
    skill: `${new Date().getFullYear() - 2023} + Years Frontend Development`,
  },
  {
    skill: "Modern Web Applications",
  },
  {
    skill: "Performance Optimization",
  },
  {
    skill: "Team Collaboration",
  },
  {
    skill: "Modern UI/UX designs",
  },
  ]

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = (new Date().getFullYear() - 2) - birthDate.getFullYear();

    // Adjust if birthday hasn’t happened yet this year
    const hasBirthdayPassed =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    if (!hasBirthdayPassed) {
      age += 1;
    }

    return age;
  };
  const dob = "2008-10-20"; // YYYY-MM-DD format
  const age = calculateAge(dob);
  return (
    <>
      <div className='w-full flex pt-0.5 sm:pt-1.5 justify-center items-center pb-10 md:pb-20'>
        <div className="Name bg-blue-50 p-3 md:p-4 rounded-3xl pb-1.5 w-[98%]  shadow-[0px_0px_7px_#0080ff]">

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-5 bg-gradient-to-br from-blue-500  pb-2.5 to-cyan-400 bg-clip-text text-transparent mt-2">
            Hey I'm
            Talha Javed
          </h1>
          <div className='flex justify-center items-center'>
            <div className="bg-white p-4 md:w-4xl w-5xl rounded-3xl pt-3 mb-6 shadow-[0px_0px_8px_#70b5ff] hover:shadow-[0px_0px_12px_#70b5ff] transition duration-200">
              <h2 className="text-2xl font-semibold text-blue-500  mb-1.5">
                Welcome to My Creative Space
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed ">
                I am <span className='text-blue-500 font-medium'>Talha Crafted</span>, a {age}-year-old student and passionate UI/UX designer and developer focused on creating beautiful,
                functional, and user-centered digital experiences. As a young developer with a keen eye for detail
                and a love for clean design, I strive to build interfaces that are both
                aesthetically pleasing and intuitive to use, while balancing my studies with my passion for web development.
              </p>
            </div>
          </div>
          <div className="md:flex grid justify-center items-center  md:justify-center md:items-center gap-4 ">
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

            <div className="bg-gradient-to-br from-cyan-400 to-cyan-700   shadow-[0px_0px_10px_#00e0f0] hover:shadow-[0px_0px_15px_#00e0f0] md:ml-1.5 transition duration-200  rounded-3xl text-white p-4.5 pl-4 pt-3 pr-6 text-lg lg:text-xl">
              <div className='flex justify-start items-end mb-2.5'>
                <img src={ProfessionalImg} alt="Professional" className='h-8 w-8 md:h-9 md:w-9' />
                <h3 className="text-xl font-semibold ml-1.5">Professional Experience</h3>
              </div>
              <ul className="space-y-3">
                {professionalExperience_items.map((item, index) => <div key={index}>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item.skill}
                  </li>
                </div>)}
              </ul>
            </div>
          </div>
          <div className='mt-6.5 mb-2'>
            <div className='flex justify-center items-center'>
              <div className="bg-white p-4 md:w-4xl w-5xl rounded-3xl pt-3.5 mb-2 shadow-[0px_0px_7px_#a5f8a7] hover:shadow-[0px_0px_12px_#a5f8a7] transition duration-200">
                <div className='flex justify-start items-center mb-1.5'>
                  <img src={EducationImg} alt="Education" className='h-8 w-8' />
                  <h2 className="text-2xl font-semibold ml-1  text-green-500">
                    Education
                  </h2>
                </div>
                
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                Hey I’m a passionate student with a keen interest in computer science and digital creativity. Ever since I discovered the world of technology, I’ve been captivated by the way ideas can come to life through code, design, and innovation. Whether it's building applications, exploring new tools, or experimenting with creative solutions, I find joy in turning imagination into reality through technology."

Would you like to expand this into a personal statement, portfolio bio, or maybe a LinkedIn summary?

                </p>
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed mt-2.5">
                  My journey in computer science began with curiosity and quickly evolved into a hobby that fuels my imagination. I love experimenting with UI/UX design, building intuitive interfaces, and exploring how design can enhance user experience. Whether it's crafting sleek layouts or prototyping interactive apps, I find joy in blending logic with creativity.
                </p>
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed mt-2.5">
                  Outside of coding and design, I'm a lifelong learner who enjoys solving problems, collaborating on tech projects, and staying updated with the latest trends in software development and digital art. My goal is to become a skilled developer and designer who creates meaningful digital experiences.
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