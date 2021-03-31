import React from "react";
import Card from "@material/react-card";
import { Button } from "react-bootstrap";
import { Link } from "react-scroll";

function SignUpCardUI(props) {
  const cardCompileUI = {
    width: "18rem",
    padding: "0",
    display: "flex",
    alignItems: "center",
    background: props.cardBG,
    color: "white",
    borderRadius: "20px",
    boxShadow: "5px 10px 20px 1px rgba(0,0,0,0.253)",
  };

  const cardCompileTitle = {
    background: props.titleBG,
    textAlign: "center",
    marginTop: "1.8em",
    width: "100%",
    padding: "0.7em",
  };

  const cardUIPrice = {
    marginTop: "1.5em",
  };

  const cardUIContent = {
    marginTop: "-4.3em",
    textAlign: "center",
    padding: "3.3em",
  };

  const subScribeButtonWrapper = {
    marginTop: "-2.2em",
    marginBottom: "1em",
  };

  return (
    <div>
      <Card style={cardCompileUI} id="cardCompileUI">
        <div style={cardCompileTitle}>
          <h2>{props.crown}</h2>
          <h2>{props.cardTitle}</h2>
        </div>

        <div style={cardUIPrice}>
          <h1>{props.price}</h1>
        </div>

        <div style={cardUIContent}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque luctus felis eget aliquet fermentum. Sed dapibus cursus
            tortor sed euismod. Vestibulum id odio tincidunt, pulvinar odio in,
            finibus ligula.
          </p>
        </div>

        <div style={subScribeButtonWrapper}>
          <Link
            activeClass="active"
            to="signUpContentWrapper"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button id="subscribeButton" variant="outline-light">
              Subscribe Now
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default SignUpCardUI;
