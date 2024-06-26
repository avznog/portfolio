import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import homeLogo from "../../Assets/computer-dynamic-color.png";
import mobileLogo from "../../Assets/mobile-dynamic-color.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> BENJAMIN GONZVA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} >
              <Row>
                <Col md={6}>
                  <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  class="home-computer-image"
                  
                />
                </Col>
                <Col md={5}>
                  <img
                  src={mobileLogo}
                  alt="home pic"
                  className="img-fluid"
                  class="home-phone-image"
                  />
                  </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
