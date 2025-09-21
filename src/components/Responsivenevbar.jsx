import React from 'react';

function Responsivenevbar() {
  return (
    <>

      <div className={`flex justify-center  w-full mt-2.5 items-center absolute z-30 `}>
        <div className=' shadow-[0px_0px_10px_#0080ff9b] backdrop-blur-xl  rounded-3xl w-[90%] ml-2 mr-2 from-[#0080ff9b] via-[#00bfff98] to-[#00ffddb1]  text-gray-950 sm:hidden bg-gradient-to-br flex-wrap'>
          <div className="flex justify-center p-1.5 items-center flex-wrap text-white text-lg font-light">
            {[
              { label: "Home", href: "#home" , img: "src/images/download (2).png" },
              { label: "About", href: "#about" , img: "src/images/download (5).png" },
              { label: "Skills", href: "#skills" , img: "src/images/download.png" },
              { label: "Projects", href: "#projects" , img: "src/images/download (6).png" },
              { label: "Contacts", href: "#contacts" , img: "src/images/download (4).png" },
            ].map((item, index) => (
              <div>
                  <a
                    key={index}
                    href={item.href}
                    className={`px-3 py-2 m-1.5 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_white] focus:outline-none focus:ring ${item.img === 'src/images/download (4).png' ? 'bg-gray-50/20' : ''} focus:ring-white focus:ring-offset-2
       shadow-[0px_0px_5px_white] hover:bg-gray-50/30 flex justify-center items-center`}
                  >
                 <img src={item.img} alt="" className={`h-8 w-8 ${item.img === 'src/images/download (4).png' ? 'h-9 w-9' : ''}`}/>
                   <span className='ml-1 mr-0.5'>{item.label}</span>
                  </a>
                </div>
              
            ))}
          </div>
        </div>
      </div>

    </>
  );
}

export default Responsivenevbar;