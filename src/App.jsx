import { useEffect, useRef, useState } from 'react'
import Frontpage from './components/Frontpage';
import Secondpage from './components/Secondpage';
import Skillspage from './components/Skillspage';
import Alertpage from './components/Alertpage';

const App = () => {

  const [alertpage, setAlertpage] = useState(true);
  const [main_potfolio, setmain_potfolio] = useState(false);

  const cancel_button = () => {
    setAlertpage(false);
    setmain_potfolio(true);
  }

  const hasRun = useRef(false);

  const checkBirthday = () => {
    const month = new Date().getMonth() + 1;
    const date = new Date().getDate();

    console.log("Month:", month);
    console.log("Date:", date);

     if (month === 10 && date === 4) {
       console.log("Today is the birthday 🎂 of developer");
       setAlertpage(true);
       setmain_potfolio(false);
     } else {
       console.log("Today is not birthday 🎂");
       setAlertpage(false);
       setmain_potfolio(true);
     }
  }
  useEffect(() => {
 if (hasRun.current) return;
 hasRun.current = true;

    checkBirthday();
  })

  return (
    <>
      {/* <Alertpage /> */}
      {alertpage && <div>
        <Alertpage cancel_button={cancel_button} />
      </div>}
      {/* this is main portfolio */}
      {main_potfolio &&
        <>
          <div>
            <Frontpage />
          </div>
          {/*these are closed in one div for the purpose of applying side bar with scroll */}
          <div>
            <Secondpage />
            <Skillspage />
          </div>
        </>

      }




    </>
  )
}

export default App
