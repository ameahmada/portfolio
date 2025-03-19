import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import skillsimage from "../assets/images/svg/experience1.svg";
import logolycs from "../assets/images/png/logoLycs.png";
import logoluxeevents from "../assets/images/png/luxe-events.PNG";
import "../assets/css/experience.css";

function Experience() {
  const experiences = [
    {
      company: "Lycs SAS",
      logo: logolycs,
      contractDuration: "Avril 2023",
      projects: [
        {
          name: "VCF Portal",
          date: "Jun 2024 - Dec 2024",
          duration: "6 mois",
          tasks: [
            "Developpement Apex/LWC",
            "Configurations de flux Salesforce",
            "Developpement Mulesoft",
            "Developpement Excel/VBA",
          ],
        },
        {
          name: "LycsFid",
          date: "oct 2023 - Avril 2024",
          duration: "6 mois",
          tasks: [
            "Design d'interface",
            "Analyse - Conception - Proposition",
            "Developpement Dart/Flutter",
            "Intégration API",
          ],
        },
        {
          name: "LycsSatisfaction",
          date: "Sept 2023 - Oct 2023",
          duration: "6 mois",
          tasks: [
            "Design d'interface",
            "Analyse - Conception - Proposition",
            "Developpement Dart/Flutter",
            "Intégration Salesforce",
          ],
        },
      ],
    },
    {
      company: "Luxe Events",
      logo: logoluxeevents,
      contractDuration: "Aout 2019 - Dec 2019",
      projects: [
        {
          name: "",
          date: "Jul 2019 - Dec 2019",
          duration: "5 mois",
          tasks: [
            "Gestion des locations de matériel pour les événements",
            "Proposition de modèles de décoration",
            "Gestion des factures",
            "Gestion des caisses",
          ],
        },
      ],
    },
  ];

  return (
    <section className="experience py-5" data-aos="fade-up">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4} className="mb-4 text-center">
            <h4 data-aos="fade-right">Experiences</h4>
            <img
              data-aos="fade-right"
              src={skillsimage}
              alt="ahmada"
              className="img-fluid hero-photo"
              style={{ width: "50vh", height: "50vh", objectFit: "contain" }}
            />
          </Col>
          <Col xs={12} md={6} lg={8} className="mb-8 p-1">
            <Row data-aos="fade-right">
              {experiences.map((exp, index) => (
                <Col xs={12} md={12} lg={12} className="mb-4" key={index}>
                  <Card className="bg-burlywood">
                    <Card.Body>
                      <Row>
                        <Col
                          xs={12}
                          md={4}
                          className="text-center"
                          data-aos="fade-right"
                        >
                          <img
                            data-aos="fade-right"
                            src={exp.logo}
                            alt={exp.company}
                            className="img-fluid hero-photo"
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "contain",
                            }}
                          />
                          <h5 data-aos="fade-right">{exp.company}</h5>
                          <p data-aos="fade-right">{exp.contractDuration}</p>
                        </Col>
                        <Col xs={12} md={8} data-aos="fade-right">
                          {exp.projects.map((project, idx) => (
                            <div key={idx} className="mb-3">
                              <h6 data-aos="fade-right">{project.name}</h6>
                              <p data-aos="fade-right">{project.date}</p>
                              <p data-aos="fade-right">{project.duration}</p>
                              <ul>
                                {project.tasks.map((task, taskIdx) => (
                                  <li key={taskIdx} data-aos="fade-right">
                                    {task}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
