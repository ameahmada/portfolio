import React from "react";
import "../assets/css/fonts.css";
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
  SiGooglecloud,
} from "react-icons/si";

function Skills() {
  return (
    <section className="skills py-5" data-aos="fade-up">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4} className="mb-2 text-center">
            <Row>
              <Col xs={12} md={12} lg={12} className="m-0 text-center">
                <h1
                  data-aos="fade-right"
                  className="m-0 text-center"
                  style={{ fontFamily: "zai" }}
                >
                  Compétences
                </h1>
              </Col>
              <Col
                xs={12}
                md={12}
                lg={12}
                className="mb-4 mt-0 d-none d-md-block text-center"
              >
                <img
                  data-aos="fade-right"
                  src={skillsimage}
                  alt="ahmada"
                  className="img-fluid hero-photo"
                  style={{
                    width: "50vh",
                    height: "50vh",
                    objectFit: "contain",
                  }}
                />
              </Col>
            </Row>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={8}
            className="m-0 p-3 d-flex justify-content-end"
          >
            <Row>
              <Col
                xs={12}
                md={12}
                lg={12}
                className="my-2 mx-0 d-flex justify-content-end"
              >
                {/* Langages de progrmmations */}
                <Row>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end m-0 p-0"
                  >
                    <h2
                      data-aos="fade-right"
                      className="my-2 mx-1 py-0 pr-4 pl-0"
                    >
                      Langages
                    </h2>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end m-0 p-0"
                  >
                    <div
                      className="d-flex flex-wrap gap-3 m-0"
                      data-aos="fade-right"
                    >
                      <FaJava title="Java" size={45} />
                      <FaPython title="Python" size={45} />
                      <FaPhp title="Php" size={45} />
                      <FaJs title="JavaScript" size={45} />
                      <FaHtml5 title="HTML5" size={45} />
                      <FaCss3 title="CSS3" size={45} />
                      <SiDart title="Dart" size={45} />
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* Langages frontEnd */}
              <Col
                xs={12}
                md={12}
                lg={12}
                className="my-2 mx-0 d-flex justify-content-end"
              >
                <Row>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end m-0 p-0"
                  >
                    <h2
                      data-aos="fade-right"
                      className="my-2 mx-1 py-0 pr-4 pl-0"
                    >
                      Frontend
                    </h2>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end m-0 p-0"
                  >
                    <div
                      className="d-flex flex-wrap gap-3 m-0"
                      data-aos="fade-right"
                    >
                      <FaReact title="React" size={45} />
                      <SiMui title="Material-UI" size={45} />
                      <SiBootstrap title="Bootstrap" size={45} />
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* Langages backEnd */}
              <Col
                xs={12}
                md={12}
                lg={12}
                className="my-2 mx-0 d-flex justify-content-end"
              >
                <Row>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end m-0 p-0"
                  >
                    <h2
                      data-aos="fade-right"
                      className="my-2 mx-1 py-0 pr-4 pl-0"
                    >
                      Backend
                    </h2>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end m-0 p-0"
                  >
                    <div
                      className="d-flex flex-wrap gap-3 m-0"
                      data-aos="fade-right"
                    >
                      <FaLaravel title="Laravel" size={45} />
                      <SiExpress title="Express.js" size={45} />
                      <SiSpring title="Spring" size={45} />
                      <FaNodeJs title="Node.js" size={45} />
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* Mobile */}
              <Col
                xs={12}
                md={12}
                lg={12}
                className="my-2 mx-0 d-flex justify-content-end"
              >
                <Row>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end m-0 p-0"
                  >
                    <h2
                      data-aos="fade-right"
                      className="my-2 mx-1 py-0 pr-4 pl-0"
                    >
                      Mobile
                    </h2>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end m-0 p-0"
                  >
                    <div
                      className="d-flex flex-wrap gap-3 m-0"
                      data-aos="fade-right"
                    >
                      <SiFlutter title="Flutter" size={45} />
                      <SiAndroid title="Android" size={45} />
                      <SiIonic title="Ionic" size={45} />
                      <SiReact title="React Native" size={45} />
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* Bases de données */}
              <Col
                xs={12}
                md={12}
                lg={12}
                className="my-2 mx-0 d-flex justify-content-end"
              >
                <Row>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end m-0 p-0"
                  >
                    <h2
                      data-aos="fade-right"
                      className="my-2 mx-1 py-0 pr-4 pl-0"
                    >
                      Bases de données
                    </h2>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end m-0 p-0"
                  >
                    <div
                      className="d-flex flex-wrap gap-3 m-0"
                      data-aos="fade-right"
                    >
                      <SiMysql title="MySQL" size={45} />
                      <SiPostgresql title="PostgreSQL" size={45} />
                      <SiMongodb title="MongoDB" size={45} />
                      <SiFirebase title="Firebase" size={45} />
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* Cloud et CRM */}
              <Col
                xs={12}
                md={12}
                lg={12}
                className="my-2 mx-0 d-flex justify-content-end"
              >
                <Row>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end m-0 p-0"
                  >
                    <h2
                      data-aos="fade-right"
                      className="my-2 mx-1 py-0 pr-4 pl-0"
                    >
                      Cloud & CRM
                    </h2>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end m-0 p-0"
                  >
                    <div
                      className="d-flex flex-wrap gap-3 m-0"
                      data-aos="fade-right"
                    >
                      <FaSalesforce title="Salesforce" size={45} />
                      <SiMulesoft title="Mulesoft" size={45} />
                      <SiGooglecloud title="Google Cloud" size={45} />
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* Devops */}
              <Col
                xs={12}
                md={12}
                lg={12}
                className="my-2 mx-0 d-flex justify-content-end"
              >
                <Row>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end m-0 p-0"
                  >
                    <h2
                      data-aos="fade-right"
                      className="my-2 mx-1 py-0 pr-4 pl-0"
                    >
                      Devops
                    </h2>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end m-0 p-0"
                  >
                    <div
                      className="d-flex flex-wrap gap-3 m-0"
                      data-aos="fade-right"
                    >
                      <VscAzureDevops title="Azure DevOps" size={45} />
                      <SiJenkins title="Jenkins" size={45} />
                      <SiDocker title="Docker" size={45} />
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* Outils de versionnement */}
              <Col
                xs={12}
                md={12}
                lg={12}
                className="my-2 mx-0 d-flex justify-content-end"
              >
                <Row>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end m-0 p-0"
                  >
                    <h2
                      data-aos="fade-right"
                      className="my-2 mx-1 py-0 pr-4 pl-0"
                    >
                      Outils de versionnement
                    </h2>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end m-0 p-0"
                  >
                    <div
                      className="d-flex flex-wrap gap-3 m-0"
                      data-aos="fade-right"
                    >
                      <SiGithub title="GitHub" size={45} />
                      <SiGitlab title="GitLab" size={45} />
                      <VscAzureDevops title="Azure" size={45} />
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* Outils de design */}
              <Col
                xs={12}
                md={12}
                lg={12}
                className="my-2 mx-0 d-flex justify-content-end"
              >
                <Row>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end m-0 p-0"
                  >
                    <h2
                      data-aos="fade-right"
                      className="my-2 mx-1 py-0 pr-4 pl-0"
                    >
                      Outils de design
                    </h2>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-end m-0 p-0"
                  >
                    <div
                      className="d-flex flex-wrap gap-3 m-0"
                      data-aos="fade-right"
                    >
                      <SiAdobephotoshop title="Adobe Photoshop" size={45} />
                      <SiAdobeillustrator title="Adobe Illustrator" size={45} />
                      <SiAdobepremierepro
                        title="Adobe Premiere Pro"
                        size={45}
                      />
                      <SiAdobeaftereffects
                        title="Adobe After Effects"
                        size={45}
                      />
                      <SiFigma title="Figma" size={45} />
                      <SiCanva title="Canva" size={45} />
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
