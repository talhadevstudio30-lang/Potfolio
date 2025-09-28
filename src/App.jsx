import { useState } from 'react'
import Frontpage from './components/Frontpage';
import Secondpage from './components/Secondpage';
import Skillspage from './skills-images/Skillspage';

const App = () => {

  return (
    <>
      <div id='home'>
        <Frontpage />
      </div>
      <div>
        <div>
          <Secondpage />
        </div>
        <div>
          <Skillspage />
        </div>
      </div>

    </>
  )
}

export default App
