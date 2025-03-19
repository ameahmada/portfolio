import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-5 fade-in">
      <Container>
        <h2 className="section-title">Contact</h2>
        <Row>
          <Col className="text-center">
            <p>Si vous souhaitez me contacter, voici mes réseaux :</p>
            <div className="d-flex justify-content-center gap-4 mt-4">
              <a
                href="https://twitter.com/tonTwitter"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--secondary-color)", fontSize: "1.5rem" }}
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/in/tonLinkedin"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--secondary-color)", fontSize: "1.5rem" }}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/tonGitHub"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--secondary-color)", fontSize: "1.5rem" }}
              >
                <FaGithub />
              </a>
              <a
                href="mailto:tonAdresseGmail@gmail.com"
                style={{ color: "var(--secondary-color)", fontSize: "1.5rem" }}
              >
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
