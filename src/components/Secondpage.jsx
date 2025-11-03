import { inView } from 'framer-motion';
import { useState, Suspense, lazy } from 'react'; // ⚛️ useState hook imported from React for managing state
const Aboutpage = lazy(() => import("./Aboutpage"))
const Sidebar = lazy(() => import("./Sidebar"))

const Secondpage = () => { // 🚀 Defining the Secondpage component

    return (
        <>
            {/* 🧩 Sidebar section (sticky on scroll) */}
            <Suspense fallback={<div className='flex justify-start items-center mb-1'><p className='text-blue-400 text-2xl sm:text-3xl ml-2.5 border-2 px-2 py-1.5 rounded-xl h-auto w-auto border-blue-400'>SideBar....</p></div>}>
                <div className='SideBarMenu sticky md:top-10' style={{ zIndex: '1' }}>
                    <Sidebar /> {/* 📚 Renders Sidebar */}
                </div>
            </Suspense>

            {/* 💬 About section */}
            <Suspense fallback={<div className='flex justify-start items-center mt-3'><p className='text-blue-400 text-2xl sm:text-3xl ml-2.5 border-2 px-2 py-1.5 rounded-xl h-auto w-auto border-blue-400'>About Information...</p></div>}>
                <div id='about'>
                    <Aboutpage /> {/* 👤 Displays Aboutpage component */}
                </div>
            </Suspense>
        </>
    )
}

export default Secondpage; // 🌟 Exporting Secondpage for use in other parts of the app
