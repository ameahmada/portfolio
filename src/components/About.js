import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageahmada from "../assets/images/png/ahmada.jpg";

function About() {
  return (
    <section
      className="hero container d-flex align-items-center justify-content-between py-5"
      data-aos="fade-up"
    >
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4} className="mb-4 text-center">
            {/* Partie droite : photo */}
            <div className="about-image text-center">
              <img
                src={imageahmada}
                alt="ahmada"
                className="img-fluid rounded-circle about-photo"
                style={{ width: "50vh", height: "50vh", objectFit: "cover" }}
                data-aos="fade-right"
              />
            </div>
          </Col>
          <Col xs={12} md={7} lg={8} className="mb-4 text-center">
            {/* Partie gauche : texte */}
            <div className="about-text" data-aos="fade-right">
              <p data-aos="fade-right">
                Diplômé d'un Master en Informatique, je suis actuellement
                consultant spécialisé en Salesforce et Mulesoft. Fort de mes
                connaissances en développement web et mobile, ainsi qu'en
                sécurité informatique, je suis passionné par l'apprentissage
                continu de nouvelles technologies.
              </p>
              <p data-aos="fade-right">
                Doté d'un excellent sens relationnel et d'une grande capacité à
                travailler en équipe, je m'efforce de contribuer de manière
                significative à chaque projet grâce à mes compétences techniques
                et ma motivation.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
