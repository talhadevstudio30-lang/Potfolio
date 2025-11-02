import { useState } from 'react'; // ⚛️ useState hook imported from React for managing state
import Sidebar from './Sidebar'; // 🧭 Importing Sidebar component
import Aboutpage from './Aboutpage'; // 📄 Importing About Page component

const Secondpage = () => { // 🚀 Defining the Secondpage component

    return (
        <>
            {/* 🧩 Sidebar section (sticky on scroll) */}
            <div className='SideBarMenu sticky md:top-10' style={{ zIndex: '1' }}>
                <Sidebar /> {/* 📚 Renders Sidebar */}
            </div>

            {/* 💬 About section */}
            <div id='about'>
                <Aboutpage /> {/* 👤 Displays Aboutpage component */}
            </div>
        </>
    )
}

export default Secondpage; // 🌟 Exporting Secondpage for use in other parts of the app
