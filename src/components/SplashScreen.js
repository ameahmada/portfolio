// SplashScreen.jsx
import React from "react";
import "../assets/css/splash.css";
import logo from "../assets/images/png/desktop.png";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={logo} width={100} alt="Logo" className="splash-logo" />
      <div className="splash-loader"></div>
    </div>
  );
};

export default SplashScreen;
