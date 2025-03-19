import React from "react";
// import { Container } from "react-bootstrap";

function Footer() {
  return (
    // <section className="skills py-5" data-aos="fade-up">
    <footer
      className="text-center py-3"
      // data-aos="fade-right"
      // data-aos-offset="300"
      // data-aos-easing="ease-in-sine"
      style={{ backgroundColor: "#111" }}
    >
      <p style={{ margin: 0, color: "var(--secondary-color)" }}>
        © {new Date().getFullYear()} Ahmada - Tous droits réservés
      </p>
    </footer>
    // </section>
  );
}

export default Footer;
