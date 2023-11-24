import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import appstore from "../../Assets/appstore.svg";
import googleplay from "../../Assets/google-play.svg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={props.title == "Hippochat" ? { maxHeight: "220px", width: "140px", alignSelf: "center" } : props.title == "Cabinet d'Ormane Client" ? { maxHeight: "400px", width: "500px", marginTop: "-90px", marginBottom: "-90px", alignSelf: "center" } : {}} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {
          props.ghLink && <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        }
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {
          // ! button appstore
          !props.isBlog && props.appStoreLink && (
            <Button
              variant="primary"
              href={props.appStoreLink}
              target="_blank"
              style={{ margin: "10px" }}
            >
              <img src={appstore} style={{ width: "15px", fill: "white" }} /> AppStore
            </Button>
          )
        }
        {
          // ! button gpstore
          !props.isBlog && props.GPLink && (
            <Button
              variant="primary"
              href={props.GPLink}
              target="_blank"
              style={{ margin: "10px" }}
            >
              <img src={googleplay} style={{ width: "15px", fill: "white" }} /> Google Play
            </Button>
          )
        }
        {
          // ! button demo
          !props.isBlog && props.ghLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ margin: "10px" }}
            >
              <CgWebsite /> Demo
            </Button>
          )
        }
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
