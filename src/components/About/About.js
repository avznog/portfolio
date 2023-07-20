import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import rocketImg from "../../Assets/rocket-dynamic-color.png";
import teaCupImg from "../../Assets/tea-cup-dynamic-color.png";
import wifiImg from "../../Assets/wifi-dynamic-color.png";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               <strong className="purple">Who</strong> am I ?
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Tilt>
            <Row>
              <Col md={4}>
              <img src={rocketImg} alt="about" className="img-fluid" class="about-rocket-image" />
              </Col>
              <Col md={4}>
            <img src={teaCupImg} alt="about" className="img-fluid" class="about-tea-cup-image" />
              </Col>
              <Col md={4}>
            <img src={wifiImg} alt="about" className="img-fluid" class="about-wifi-image" />
              </Col>
            </Row>
            </Tilt>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
