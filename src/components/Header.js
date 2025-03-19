import React from "react";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/images/png/00LogoAhmada.png";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header d-flex align-items-center justify-content-between px-4 py-2">
      {/* <h2 className="m-0"></h2> */}
      <img
        src={logo}
        alt="ahmada"
        className="m-0 img-fluid hero-photo"
        style={{ width: "3vw", height: "3vw", objectFit: "contain" }}
      />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  );
}

export default Header;
