import { useState, Suspense, lazy } from 'react'; // ⚛️ useState hook imported from React for managing state
const Aboutpage = lazy(() => import("./Aboutpage"))
const Sidebar = lazy(() => import("./Sidebar"))

const Secondpage = () => { // 🚀 Defining the Secondpage component

    return (
        <>
            {/* 🧩 Sidebar section (sticky on scroll) */}
            <Suspense fallback={<p>SideBar</p>}>
                <div className='SideBarMenu sticky md:top-10' style={{ zIndex: '1' }}>
                    <Sidebar /> {/* 📚 Renders Sidebar */}
                </div>
            </Suspense>

            {/* 💬 About section */}
            <Suspense fallback={<p>SideBar</p>}>
                <div id='about'>
                    <Aboutpage /> {/* 👤 Displays Aboutpage component */}
                </div>
            </Suspense>
        </>
    )
}

export default Secondpage; // 🌟 Exporting Secondpage for use in other parts of the app
