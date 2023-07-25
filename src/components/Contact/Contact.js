import { Col, Container, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import at from "../../Assets/at-dynamic-color.png";
import chat from "../../Assets/chat-text-dynamic-color.png";
import github from "../../Assets/github.png";
import linkedin from "../../Assets/linkedin.png";
import thumb from "../../Assets/thumb-up-dynamic-color.png";
import Particle from "../Particle";

function Contact() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <h1 className="project-heading">
        Contact me !
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        
        <Col md={3}>
          <a
          href="https://github.com/avznog"
          rel="noreferrer"
          target="_blank"
          style={{textDecoration: "none"}}
          >
          <Tilt>
            <img src={github} style={{ width: "300px" }} />
          </Tilt>
          <p style={{color: "white"}}>avznog</p>
          </a>
        </Col>
        <Col md={3}>
          <a href="mailto:bengonzva75@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Tilt>
              <img src={at} style={{ width: "300px" }} />
            </Tilt>
            <p style={{color: "white"}}>bengonzva75@gmail.com</p>
          </a>
        </Col>
        
        <Col md={3}>
          <a
          href="https://www.linkedin.com/in/benjamingonzva"
          target="_blank"
          rel="noreferrer"
          style={{textDecoration: "none"}}
          >
          <Tilt>
            <img src={linkedin} style={{width: "300px"}}/>
          </Tilt>
          <p style={{color: "white"}}>benjamingonzva</p>
          </a>
        </Col>
        <Col md={3}>
          <a
            href="tel:+33684653454"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}>
            <Tilt>
              <img src={chat} style={{ width: "300px" }} />
            </Tilt>
            <p style={{color: "white"}}>+33 6 84 65 34 54</p>
          </a>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", padding: "0px" }}>
        <Col md={12}>
        <img src={thumb} style={{width: "170px"}}/>
        <p style={{color: "white"}}>I'll be more than happy to work with <span className="purple">you</span> !</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;