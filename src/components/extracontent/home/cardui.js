import React from "react";
import Card, { CardMedia } from "@material/react-card";
import "./cardui.css";
import { Link } from "react-router-dom";

function HomeCardUI(props) {
  return (
    <div>
      <Card id="cardHomeUI">
        <Link to={props.cardLink}>
          <Card id="cardHomeOverflow">
            <CardMedia square imageUrl={props.cardImg} id="cardUIImg" />
          </Card>
        </Link>
        <div className="cardUIContent">
          <h5>{props.cardInfo}</h5>
        </div>
      </Card>
    </div>
  );
}

export default HomeCardUI;
