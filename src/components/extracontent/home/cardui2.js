import React from "react";
import Card, { CardMedia } from "@material/react-card";
import "./cardui2.css";
import { Link } from "react-router-dom";

function HomeCardUI2(props) {
  return (
    <div>
      <Card id="cardHomeUI2">
        <Link to={props.cardLink2}>
          <Card id="cardHomeOverflow2">
            <CardMedia square imageUrl={props.cardImg2} id="cardUIImg2" />
          </Card>
        </Link>
        <div className="cardUIContent2">
          <h5>{props.cardInfo2}</h5>
        </div>
      </Card>
    </div>
  );
}

export default HomeCardUI2;
