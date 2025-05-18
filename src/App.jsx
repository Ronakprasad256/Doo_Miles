import { useEffect, useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Aos from 'aos';
import "aos/dist/aos.css"
import About from './components/About/About';
import Services from './components/Services/Services';
import CarList from './components/CarList/CarList';

const App = () => {

  // Darkmode
  const [theme, setTheme] = React.useState
    (localStorage.getItem("theme") ?
      localStorage.getItem("theme") : "light"
    );

  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme",
        "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme",
        "light");
    }
  }, [theme]);

  // AOS Initialization
  React.useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  Aos.refresh();
  }, []);

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme}  />
      <About/>
      <Services/>
      <CarList />
    </div>
  )
}

export default App;