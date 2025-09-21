import { useState } from 'react'
import Frontpage from './components/Frontpage';
import Aboutpage from './components/Aboutpage';
import Sidebar from './Sidebar';

function App() {

  const [SideMenuCrossBtn_style, setSideMenuCrossBtn_style] = useState('hidden')

  const SideMenuCrossBtn = () => {
    setSideMenuCrossBtn_style((event) => (event === "block" ? "hidden" : "block"));
  }

  const SidebarMenuBtn = () => {
    setSideMenuCrossBtn_style('block')
  }

  return (
    <>
      <div id='home'>
        <Frontpage />
      </div>
      <div>
        <div className='SideBarMenu sticky md:top-10 '>
          <Sidebar SidebarMenuBtn={SidebarMenuBtn} SideMenuCrossBtn={SideMenuCrossBtn} SideMenuCrossBtn_style={SideMenuCrossBtn_style} />
        </div>
        <div id='about'>
          <Aboutpage />
        </div>

      </div>
    </>
  )
}

export default App
