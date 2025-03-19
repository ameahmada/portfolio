import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Certifications() {
  return (
    <section id="certifications" className="py-5 fade-in">
      <Container>
        <h2 className="section-title">Certifications</h2>
        <Row>
          <Col>
            <ul>
              <li>Mulesoft Certified Developer Level 1</li>
              <li>Maintenance et déploiement Windows</li>
              <li>Base de données</li>
              <li>Java</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Certifications;
