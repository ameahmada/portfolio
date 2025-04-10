import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import imageahmada from "../assets/images/png/portfolio.gif";
import "../assets/css/fonts.css";
import Salutations from "./Salutations";

function Hero() {
  return (
    <section
      className="hero container d-flex align-items-center justify-content-between py-5"
      data-aos="fade-up"
    >
      <Container>
        <Row>
          <Col xs={12} md={7} lg={6} className="mb-4 text-center">
            {/* Partie gauche : texte */}
            <div className="hero-text" data-aos="fade-right">
              {/* <h1>Bonjour, C&apos;est Ahmada</h1> */}
              <h1
                data-aos="fade-right"
                style={{
                  textAlign: "left",
                  // fontWeight: "bold",
                  fontFamily: "matura",
                }}
              >
                <span
                  className="salutations-text"
                  style={{
                    textAlign: "left",
                    fontFamily: "Consolaa",
                    fontWeight: "bold",
                    letterSpacing: "-2px",
                  }}
                >
                  Hello, c'est
                </span>
                Ahmada
                <span
                  className="salutations-emoji"
                  style={{
                    textAlign: "left",
                    fontFamily: "Consolaa",
                    fontWeight: "bold",
                    letterSpacing: "-2px",
                  }}
                >
                  ☕{/* ☕🔵🔴 */}
                </span>
              </h1>
              <Salutations />
              {/* <p>co-founder, full-stack dev, etc.</p> */}

              {/* Icônes de réseaux */}
              <div
                className="social-icons d-flex gap-3 mt-4"
                data-aos="fade-right"
              >
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
                <a href="#" className="social-link" data-aos="fade-right">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={5} lg={6} className="mb-4 text-center">
            {/* Partie droite : photo */}
            <div className="hero-image text-center">
              {/* Remplace "ahmada-photo.png" par le nom de la photo */}
              <img
                src={imageahmada}
                alt="ahmada"
                className="img-fluid hero-photo"
                style={{ objectFit: "contain" }}
                data-aos="fade-right"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
