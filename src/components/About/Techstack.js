import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiAngularSimple,
  DiDocker,
  DiGit,
  DiIonic,
  DiLinux,
  DiPython,
  DiReact,
  DiScrum
} from "react-icons/di";
import {
  SiGrafana,
  SiNestjs,
  SiNotion,
  SiPostgresql,
  SiTypescript,
  SiXcode
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple/>
        <div style={{fontSize: "19px"}}>Angular</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs></SiNestjs>
        <div style={{fontSize: "19px"}}>NestJS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div style={{fontSize: "19px"}}>React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <div style={{fontSize: "19px"}}>TypeScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <div style={{fontSize: "19px"}}>PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
        <div style={{fontSize: "19px"}}>Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <div style={{fontSize: "19px"}}>Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div style={{fontSize: "19px"}}>Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiScrum />
        <div style={{fontSize: "19px"}}>Scrum Master</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion />
        <div style={{fontSize: "19px"}}>Notion</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div style={{fontSize: "19px"}}>Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana />
        <div style={{fontSize: "19px"}}>Grafana</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIonic />
        <div style={{fontSize: "19px"}}>Ionic</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXcode />
        <div style={{fontSize: "19px"}}>Xcode</div>
      </Col>
    </Row>
  );
}

export default Techstack;
