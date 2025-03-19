import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Portfolio() {
  // Exemple : liste de projets
  const projects = [
    {
      id: 1,
      title: "Application Mobile Flutter",
      image: "projet-flutter.png", // Laisse un espace pour la photo => "nom de la photo"
      description:
        "Application mobile développée avec Flutter pour la gestion de tâches.",
    },
    {
      id: 2,
      title: "Site Web React",
      image: "projet-react.png",
      description: "Site web responsive avec React et Bootstrap.",
    },
    {
      id: 3,
      title: "API Node.js",
      image: "projet-node.png",
      description: "API RESTful utilisant Node.js et Express.",
    },
  ];

  return (
    <section id="portfolio" className="py-5 fade-in">
      <Container>
        <h2 className="section-title">Mes Projets</h2>
        <Row>
          {projects.map((project) => (
            <Col md={4} className="mb-4" key={project.id}>
              <Card
                style={{
                  backgroundColor: "#333",
                  border: "1px solid var(--secondary-color)",
                }}
              >
                {/* Remplace le "src" par le nom du fichier image réel */}
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                />
                <Card.Body>
                  <Card.Title style={{ color: "var(--secondary-color)" }}>
                    {project.title}
                  </Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
