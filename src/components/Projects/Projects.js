import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bureauDesLegendes from "../../Assets/Projects/bureau-des-legendes.png";
import cabinet from "../../Assets/Projects/cabinet.png";
import emotion from "../../Assets/Projects/emotion.png";
import leaf from "../../Assets/Projects/leaf.png";
import prospectix from "../../Assets/Projects/prospectix.png";
import suicide from "../../Assets/Projects/suicide.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
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
              imgPath={bureauDesLegendes}
              isBlog={false}
              title="Bureau des Légendes"
              description="Bureau des Légendes is a mobile app created in ReactJS & NestJS. The goal is to prevent harrasment, burn-out and other problems that can occur at work. Each member of a team can fill out forms, created by the Manager and reviewed by a HR."
              ghLink="https://github.com/avznog/bureau-des-legendes"
              demoLink="https://bureau-des-legendes.bgonzva.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cabinet}
              isBlog={false}
              title="Cabinet d'Ormane Client"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://apps.apple.com/fr/app/cabinet-dormane-client/id1561541184"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
