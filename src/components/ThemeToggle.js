import React from "react";
import { FaCog } from "react-icons/fa";

function ThemeToggle({ darkMode, setDarkMode }) {
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={handleToggle}
      className="btn btn-link"
      style={{ color: darkMode ? "burlywood" : "#333", fontSize: "1.5rem" }}
      aria-label="Toggle Theme"
    >
      <FaCog />
    </button>
  );
}

export default ThemeToggle;
