import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3,
  FaJs,
  FaPhp,
  FaSalesforce,
} from "react-icons/fa";
import skillsimage from "../assets/images/svg/skills.svg";
import { VscAzureDevops } from "react-icons/vsc";
import {
  SiMui,
  SiBootstrap,
  SiExpress,
  SiIonic,
  SiAndroid,
  SiFlutter,
  SiMongodb,
  SiFirebase,
  SiDart,
  SiMysql,
  SiPostgresql,
  SiSpring,
  SiMulesoft,
  SiJenkins,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiFigma,
  SiCanva,
  SiReact,
  SiDocker,
  SiGithub,
  SiGitlab,
} from "react-icons/si";

function Skills() {
  return (
    <section className="skills py-5" data-aos="fade-up">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4} className="mb-4 text-center">
            <h2 data-aos="fade-right">Compétences</h2>
            <img
              data-aos="fade-right"
              src={skillsimage}
              alt="ahmada"
              className="img-fluid hero-photo"
              style={{ width: "50vh", height: "50vh", objectFit: "contain" }}
            />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={8}
            className="mb-8 p-1 d-flex justify-content-end"
          >
            <Row>
              <Col
                xs={12}
                md={12}
                lg={12}
                className="mb-2 d-flex justify-content-end"
              >
                {/* Langages de progrmmations */}
                <Row>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end"
                  >
                    <h2 data-aos="fade-right">Langages</h2>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end"
                  >
                    <div
                      className="d-flex flex-wrap gap-3 mt-1"
                      data-aos="fade-right"
                    >
                      <FaJava title="Java" size={50} />
                      <FaPython title="Python" size={50} />
                      <FaPhp title="Php" size={50} />
                      <FaJs title="JavaScript" size={50} />
                      <FaHtml5 title="HTML5" size={50} />
                      <FaCss3 title="CSS3" size={50} />
                      <SiDart title="Dart" size={50} />
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* Langages frontEnd */}
              <Col
                xs={12}
                md={12}
                lg={12}
                className="mb-2 d-flex justify-content-end"
              >
                <Row>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end"
                  >
                    <h2 data-aos="fade-right">Frontend</h2>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end"
                  >
                    <div
                      className="d-flex flex-wrap gap-3 mt-1"
                      data-aos="fade-right"
                    >
                      <FaReact title="React" size={50} />
                      <SiMui title="Material-UI" size={50} />
                      <SiBootstrap title="Bootstrap" size={50} />
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* Langages backEnd */}
              <Col
                xs={12}
                md={12}
                lg={12}
                className="mb-2 d-flex justify-content-end"
              >
                <Row>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end"
                  >
                    <h2 data-aos="fade-right">Backend</h2>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end"
                  >
                    <div
                      className="d-flex flex-wrap gap-3 mt-2"
                      data-aos="fade-right"
                    >
                      <FaLaravel title="Laravel" size={50} />
                      <SiExpress title="Express.js" size={50} />
                      <SiSpring title="Spring" size={50} />
                      <FaNodeJs title="Node.js" size={50} />
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* Mobile */}
              <Col
                xs={12}
                md={12}
                lg={12}
                className="mb-2 d-flex justify-content-end"
              >
                <Row>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end"
                  >
                    <h2 data-aos="fade-right">Mobile</h2>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end"
                  >
                    <div
                      className="d-flex flex-wrap gap-3 mt-2"
                      data-aos="fade-right"
                    >
                      <SiFlutter title="Flutter" size={50} />
                      <SiAndroid title="Android" size={50} />
                      <SiIonic title="Ionic" size={50} />
                      <SiReact title="React Native" size={50} />
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* Bases de données */}
              <Col
                xs={12}
                md={12}
                lg={12}
                className="mb-2 d-flex justify-content-end"
              >
                <Row>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end"
                  >
                    <h2 data-aos="fade-right">Bases de données</h2>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end"
                  >
                    <div
                      className="d-flex flex-wrap gap-3 mt-2"
                      data-aos="fade-right"
                    >
                      <SiMysql title="MySQL" size={50} />
                      <SiPostgresql title="PostgreSQL" size={50} />
                      <SiMongodb title="MongoDB" size={50} />
                      <SiFirebase title="Firebase" size={50} />
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* Cloud et CRM */}
              <Col
                xs={12}
                md={12}
                lg={12}
                className="mb-2 d-flex justify-content-end"
              >
                <Row>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end"
                  >
                    <h2 data-aos="fade-right">Cloud & CRM</h2>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end"
                  >
                    <div
                      className="d-flex flex-wrap gap-3 mt-2"
                      data-aos="fade-right"
                    >
                      <FaSalesforce title="Salesforce" size={50} />
                      <SiMulesoft title="Mulesoft" size={50} />
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* Devops */}
              <Col
                xs={12}
                md={12}
                lg={12}
                className="mb-2 d-flex justify-content-end"
              >
                <Row>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end"
                  >
                    <h2 data-aos="fade-right">Devops</h2>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end"
                  >
                    <div
                      className="d-flex flex-wrap gap-3 mt-2"
                      data-aos="fade-right"
                    >
                      <VscAzureDevops title="Azure DevOps" size={50} />
                      <SiJenkins title="Jenkins" size={50} />
                      <SiDocker title="Docker" size={50} />
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* Outils de versionnement */}
              <Col
                xs={12}
                md={12}
                lg={12}
                className="mb-2 d-flex justify-content-end"
              >
                <Row>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end"
                  >
                    <h2 data-aos="fade-right">Outils de versionnement</h2>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end"
                  >
                    <div
                      className="d-flex flex-wrap gap-3 mt-2"
                      data-aos="fade-right"
                    >
                      <SiGithub title="GitHub" size={50} />
                      <SiGitlab title="GitLab" size={50} />
                      <VscAzureDevops title="Azure" size={50} />
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* Outils de design */}
              <Col
                xs={12}
                md={12}
                lg={12}
                className="mb-2 d-flex justify-content-end"
              >
                <Row>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end"
                  >
                    <h2 data-aos="fade-right">Outils de design</h2>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end"
                  >
                    <div
                      className="d-flex flex-wrap gap-3 mt-2"
                      data-aos="fade-right"
                    >
                      <SiAdobephotoshop title="Adobe Photoshop" size={50} />
                      <SiAdobeillustrator title="Adobe Illustrator" size={50} />
                      <SiAdobepremierepro
                        title="Adobe Premiere Pro"
                        size={50}
                      />
                      <SiAdobeaftereffects
                        title="Adobe After Effects"
                        size={50}
                      />
                      <SiFigma title="Figma" size={50} />
                      <SiCanva title="Canva" size={50} />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
