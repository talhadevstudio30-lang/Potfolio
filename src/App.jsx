import { useEffect, useRef, useState } from 'react'
import Frontpage from './components/Frontpage';
import Secondpage from './components/Secondpage';
import Skillspage from './components/Skillspage';
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

    if (month === 10 && date === 4 && !alreadyShown) {
      console.log("Today is the birthday 🎂 of developer");
      setAlertpage(true);
      setmain_potfolio(false);
    } else {
      console.log("Today is not birthday 🎂 or already shown");
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
      {alertpage && (
        <div>
          <Alertpage 
            wishlater_button={wishlater_button} 
            wishnow_button={wishnow_button} 
          />
        </div>
      )}

      {main_potfolio && (
        <>
          <div>
            <Frontpage />
          </div>
          <div>
            <Secondpage />
            <Skillspage />
          </div>
        </>
      )}
    </>
  )
}

export default App;
