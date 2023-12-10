import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import hippochat from "../../Assets/Projects/hippochat.webp";
import cabinet from "../../Assets/Projects/cabinet.png";
import prospectix from "../../Assets/Projects/prospectix.png";
import medal from "../../Assets/medal-dynamic-color.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <img style={{ width: "700px", position: "absolute", opacity: 0.1, left: 0, top: 0 }} src={medal} />
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the projects I have worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prospectix}
              isBlog={false}
              title="Prospectix"
              description='Prospectix is a CRM Software built to allow project managers to telemarket for the goal of the company. Built in AngularJS & NestJS, it is a complete powerful tool that is very usefull for small companies that rely on prospection to find new clients. I built this tool for the "Junior-Entreprise" Junior ISEP, in which I worked as a Tech Lead.'
              ghLink="https://github.com/avznog/prospectix"
              demoLink="https://prospectix.bgonzva.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hippochat}
              isBlog={false}
              title="Hippochat"
              description="Hippochat is a mobile app for long distance relationship. Built with Ionic & Angular / NestJS, its goal is to allow couples to share a mood and a picture everyday. Avalaible on the Apple Store & Play Store."
              ghLink="https://github.com/avznog/hippochat"
              GPLink="http://play.google.com/hippochat"
              appStoreLink="https://apps.apple.com/fr/app/hippochat/id6467847457"
              demoLink="https://hippochat.bgonzva.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cabinet}
              isBlog={false}
              title="Cabinet d'Ormane Client"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              appStoreLink="https://apps.apple.com/fr/app/cabinet-dormane-client/id1561541184"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
