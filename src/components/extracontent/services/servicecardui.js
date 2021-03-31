import React from "react";
import { Card } from "react-bootstrap";
import "./servicecardui.css";
import { Link } from "react-router-dom";

function ServiceCardUI(props) {
  return (
    <div className="serviceCardWrapper">
      <Card
        style={{ width: "14rem", background: props.backgroundColor }}
        id="serviceCard"
      >
        <div className="serviceImg">
          <Card.Img variant="top" src={props.serviceimg} />
        </div>
        <Card.Body>
          <Card.Title id="serviceCardInfo">
            <p style={{ color: props.contentColor }}>{props.serviceInfo}</p>
            <div className="serviceButtonWrapper">
              <Link to="/signup">
                <button className="serviceButton">
                  <h5>{props.buttonInfo}</h5>
                </button>
              </Link>
            </div>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ServiceCardUI;
