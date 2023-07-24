import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Benjamin Gonzva </span>
            from <span className="purple"> Paris, France.</span>
            <br /> <br />I am a final engineering student at ISEP, currently studying at UC Berkeley in Computer Science and System of Informations.
            <br />
            <br />
            Additionally, I am a freelance developer on my own ! I like building websites, apps, softwares, and many more !
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Interesting myself in cars
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing sports : Football, tennis !
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
