import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import imageahmada from "../assets/images/png/ahmada.jpg";
import Salutations from "./Salutations";

function Hero() {
  return (
    <section
      className="hero container d-flex align-items-center justify-content-between py-5"
      data-aos="fade-up"
    >
      {/* Partie gauche : texte */}
      <div className="hero-text" data-aos="fade-right">
        {/* <h1>Bonjour, C&apos;est Ahmada</h1> */}
        <h1 data-aos="fade-right">Ahmada</h1>
        <Salutations />
        {/* <p>co-founder, full-stack dev, etc.</p> */}

        {/* Icônes de réseaux */}
        <div className="social-icons d-flex gap-3 mt-4" data-aos="fade-right">
          <a
            href="https://www.linkedin.com/in/amadou-ngom-8b0103157/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            data-aos="fade-right"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/_ameahmada_"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            data-aos="fade-right"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/ameahmada"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            data-aos="fade-right"
          >
            <FaGithub />
          </a>
          <a
            href="ameahmada04@gmail.com"
            className="social-link"
            data-aos="fade-right"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Partie droite : photo */}
      <div className="hero-image text-center">
        {/* Remplace "ahmada-photo.png" par le nom de la photo */}
        <img
          src={imageahmada}
          alt="ahmada"
          className="img-fluid rounded-circle hero-photo"
          style={{ width: "50vh", height: "50vh", objectFit: "cover" }}
          data-aos="fade-right"
        />
      </div>
    </section>
  );
}

export default Hero;
