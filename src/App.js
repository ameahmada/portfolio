import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import About from "./components/About";
import SplashScreen from "./components/SplashScreen";
// import Experiences from "./components/Experiences";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    // Simule un chargement de 3 secondes
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    // Nettoyage du timer si le composant est démonté
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div
      className={darkMode ? "app dark-mode" : "app light-mode"}
      data-aos="fade-up"
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Skills />
      {/* <Experiences /> */}
      <Experience />
      <About />
      <Footer />
    </div>
  );
}

export default App;
