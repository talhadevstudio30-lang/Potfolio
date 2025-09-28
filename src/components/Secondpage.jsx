import { useState } from 'react';
import Sidebar from './Sidebar';
import Aboutpage from './Aboutpage';


const Secondpage = () => {

    const [SideMenuCrossBtn_style, setSideMenuCrossBtn_style] = useState('hidden')

    const SideMenuCrossBtn = () => {
        setSideMenuCrossBtn_style((event) => (event === "block" ? "hidden" : "block"));
    }

    const SidebarMenuBtn = () => {
        setSideMenuCrossBtn_style('block')
    }


    return (
        <>
            <div className='SideBarMenu sticky md:top-10 '>
                <Sidebar SidebarMenuBtn={SidebarMenuBtn} SideMenuCrossBtn={SideMenuCrossBtn} SideMenuCrossBtn_style={SideMenuCrossBtn_style} />
            </div>
            <div id='about'>
                <Aboutpage />
            </div>
        </>
    )
}

export default Secondpage;
