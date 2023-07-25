import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import {
  SiDebian,
  SiMacos,
  SiNotion,
  SiVisualstudiocode
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div style={{fontSize: "19px"}}>VSCode</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsGithub />
        <div style={{fontSize: "19px"}}>GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDebian />
        <div style={{fontSize: "19px"}}>Debian</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion />
        <div style={{fontSize: "19px"}}>Notion</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
