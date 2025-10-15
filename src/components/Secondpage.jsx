import { useState } from 'react';
import Sidebar from './Sidebar';
import Aboutpage from './Aboutpage';


const Secondpage = () => {

  


    return (
        <>
            <div className='SideBarMenu sticky md:top-10 '  style={{zIndex : '1',}}>
                <Sidebar />
            </div>
            <div id='about'>
                <Aboutpage />
            </div>
        </>
    )
}

export default Secondpage;
