import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import appstore from "../../Assets/appstore.svg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={props.title == "Bureau des Légendes" ? {maxHeight: "220px", width: "140px", alignSelf: "center"} : props.title == "Cabinet d'Ormane Client" ? {maxHeight: "400px", width: "500px", marginTop: "-90px", marginBottom: "-90px", alignSelf: "center"} : {}} />
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

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            {props.ghLink ? <CgWebsite /> : <img src={appstore} style={{width: "15px", fill: "white"}}/>} &nbsp;
            {props.ghLink ? "Demo" : "AppStore"}
          </Button>
          
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
