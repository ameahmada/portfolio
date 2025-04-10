import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section id="contact" className="fade-in">
      <Container>
        {/* <h2 className="section-title">Contact</h2> */}
        {/* Icônes de réseaux */}
        <Row>
          <Col xs={12} md={12} lg={12} className="mb-1 text-left">
            <div
              className="social-icons d-flex gap-3 mt-4"
              style={{ textAlign: "left" }}
              data-aos="fade-right"
            >
              <a
                href="https://www.linkedin.com/in/amadou-ngom-8b0103157/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                data-aos="fade-right"
                style={{ fontSize: "2em" }}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/_ameahmada_"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                data-aos="fade-right"
                style={{ fontSize: "2em" }}
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/ameahmada"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                data-aos="fade-right"
                style={{ fontSize: "2em" }}
              >
                <FaGithub />
              </a>
              {/* <a
                href="ameahmada04@gmail.com"
                className="social-link"
                data-aos="fade-right"
              >
                <FaEnvelope />
              </a> */}
            </div>
          </Col>
          <Col xs={12} md={12} lg={12} className="mb-0 text-left">
            {/* <span> */}
            <div
              style={{ float: "left", fontWeight: "bold", fontSize: "1.1em" }}
              data-aos="fade-right"
            >
              <FaPhone /> +221 78 430 54 53
            </div>
          </Col>
          <Col xs={12} md={12} lg={12} className="mb-0 text-left">
            <div
              style={{ float: "left", fontWeight: "bold", fontSize: "1.1em" }}
              data-aos="fade-right"
            >
              <FaLocationDot /> Dakar, Sénégal
            </div>
          </Col>
          <Col xs={12} md={12} lg={12} className="mb-0 text-left">
            <div
              style={{ float: "left", fontWeight: "bold", fontSize: "1.1em" }}
              data-aos="fade-right"
            >
              <MdEmail /> ameahmada04@gmail.com
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
