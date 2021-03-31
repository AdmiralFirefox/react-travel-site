import React, { Component } from "react";
import "./signup.css";
import PenLogo from "../../extracontent/signup/signupassets/penLogo.png";
import Card, { CardMedia } from "@material/react-card";
import { Form, Row, Col, Button } from "react-bootstrap";
import SignUpCardCompile from "../../extracontent/signup/signupcardscompile";
import "@material/react-card/dist/card.css";

class SignUp extends Component {
  componentDidMount() {
    document.getElementsByTagName("body")[0].className = "signUpBG";
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    document.getElementsByTagName("body")[0].className = "";
  }

  render() {
    return (
      <div className="signUpContentWrapper" id="signUpContentWrapper">
        <div className="signUpContentPosition">
          <div className="signUpContent">
            <div className="signUpSignUp">
              <div className="signUpPhotoCard">
                <div className="signUpPhotoCardImg">
                  <h1>Sign Up and Travel Now!</h1>
                </div>
              </div>

              <div className="signUpCardContent">
                <Card id="cardContent">
                  <CardMedia square imageUrl={PenLogo} id="penImg" />
                  <h1>Sign Up</h1>
                  <h4>Please Fill the Needed Forms</h4>

                  <Form id="nameInput">
                    <Row>
                      <Col>
                        <Form.Control placeholder="First name" />
                      </Col>
                      <Col>
                        <Form.Control placeholder="Last name" />
                      </Col>
                    </Row>
                  </Form>

                  <Form id="credentialsInput">
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label>
                        <h5>Email Address</h5>
                      </Form.Label>
                      <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                      <Form.Label>
                        <h5>Password</h5>
                      </Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                      <Form.Label>
                        <h5>Confirm Password</h5>
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </Form.Group>
                  </Form>

                  <div className="signUpTOS">
                    <Form.Check aria-label="option 1" />
                    <p>
                      I accept the <a href="/">Terms of Service</a> and{" "}
                      <a href="/">Privacy Policy</a>
                    </p>
                  </div>

                  <div className="signUpButtonWrapper">
                    <Button variant="outline-light" id="signUpCardButton">
                      Sign Up
                    </Button>
                  </div>
                </Card>
              </div>
            </div>

            <div className="signUpCardCompile">
              <SignUpCardCompile />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
