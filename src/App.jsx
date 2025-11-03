import { useEffect, useRef, useState, Suspense, lazy } from 'react'
import Frontpage from './components/Frontpage';
import Secondpage from './components/Secondpage';
const Skillspage = lazy(() => import("./components/Skillspage"));
import Alertpage from './components/Alertpage';

const App = () => {
  const [alertpage, setAlertpage] = useState(false);
  const [main_potfolio, setmain_potfolio] = useState(false);
  const hasRun = useRef(false);

  const wishlater_button = () => {
    localStorage.setItem("birthdayAlertShown", "true"); // save flag
    setAlertpage(false);
    setmain_potfolio(true);
  }

  const wishnow_button = () => {
    localStorage.setItem("birthdayAlertShown", "true"); // save flag
    alert("🎉 Thanks for the birthday wishes! 🎂");
    setAlertpage(false);
    setmain_potfolio(true);
  }

  const checkBirthday = () => {
    const month = new Date().getMonth() + 1;
    const date = new Date().getDate();

    const alreadyShown = localStorage.getItem("birthdayAlertShown");

    if (month === 10 && date === 20 && !alreadyShown) {
      console.log("Today is the birthday 🎂 of developer");
      setAlertpage(true);
      setmain_potfolio(false);
    } else {
      setAlertpage(false);
      setmain_potfolio(true);
    }
  }

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    checkBirthday();
  }, []);

  return (
    <>
      {/* Displays a special message that only appears on significant or special days */}
      {alertpage && (
        <div>
          <Alertpage
            wishlater_button={wishlater_button}
            wishnow_button={wishnow_button}
          />
        </div>
      )}

      {/* This is main portfolio content that is shown on regular days or after the alert has been dismissed. */}
      {main_potfolio && (
        <>
          <div>
            <Frontpage />
          </div>
          {/* These elements are enclosed within a single div, serving as the sidebar sections */}
          <div>
            <Secondpage />
            <div id='skills'>
              <Suspense fallback={<div className='flex justify-start items-center mb-1  mt-1'><p className='text-blue-400 text-2xl sm:text-3xl ml-2.5 border-2 px-2 py-1.5 rounded-xl h-auto w-auto border-blue-400'>Skills...</p></div>}>
                <Skillspage />
              </Suspense>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default App;
