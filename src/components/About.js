import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageahmada from "../assets/images/png/ordi.png";
import Contact from "./Contact";
import "../assets/css/fonts.css";

function About() {
  return (
    <section
      className="hero container d-flex align-items-center justify-content-between py-5"
      data-aos="fade-up"
    >
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4} className="mb-4 text-center">
            <Row>
              <Col xs={12} md={12} lg={12} className="mb-0 text-center">
                {/* Partie droite : photo */}
                <div className="about-image text-center" data-aos="fade-right">
                  <h1
                    data-aos="fade-right"
                    style={{ textAlign: "left", fontFamily: "zai" }}
                  >
                    Contact
                  </h1>
                  <div
                    style={{
                      color: "burlywood",
                      backgroundColor: "burlywood",
                      width: "100px",
                      height: "5px",
                      float: "left",
                    }}
                  ></div>
                  <br />
                  <img
                    src={imageahmada}
                    alt="ahmada"
                    className="img-fluid about-photo"
                    style={{
                      width: "50vh",
                      // height: "50vh",
                      objectFit: "contain",
                    }}
                    data-aos="fade-right"
                  />
                  <Contact />
                </div>
              </Col>
              {/* <Col xs={12} md={12} lg={12} className="mb-0 text-center">
                <Contact />
              </Col> */}
            </Row>
          </Col>
          <Col xs={12} md={7} lg={8} className="mb-4 text-left">
            {/* Partie gauche : texte */}
            <div className="about-text" data-aos="fade-right">
              <h1
                data-aos="fade-right"
                style={{ textAlign: "left", fontFamily: "zai" }}
              >
                À propos de moi
              </h1>
              <div
                style={{
                  color: "burlywood",
                  backgroundColor: "burlywood",
                  width: "150px",
                  height: "5px",
                  float: "left",
                }}
              ></div>
              <br />
              <p
                data-aos="fade-right"
                style={{
                  fontFamily: "Consolass",
                  fontWeight: "bold",
                  fontSize: "0.85em",
                }}
              >
                Diplômé d'un Master en Informatique en Gestion de données et
                ingénierie logicielle, je suis actuellement consultant
                spécialisé en Salesforce et Mulesoft. Fort de mes connaissances
                en développement web et mobile, ainsi qu'en sécurité
                informatique, je suis passionné par l'apprentissage continu de
                nouvelles technologies.
              </p>
              <p
                data-aos="fade-right"
                style={{
                  fontFamily: "Consolass",
                  fontWeight: "bold",
                  fontSize: "0.85em",
                }}
              >
                Doté d'un excellent sens relationnel et d'une grande capacité à
                travailler en équipe, je m'efforce de contribuer de manière
                significative à chaque projet grâce à mes compétences
                techniques, ma motivation et ma polyvalence.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
