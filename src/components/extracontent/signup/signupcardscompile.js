import React, { Component } from "react";
import "./signupcardscompile.css";
import SignUpCardUI from "./signupcardui";

class SignUpCardCompile extends Component {
  render() {
    return (
      <div className="signUpCardCompileWrapper">
        <div className="signUpCardCompileContent">
          <h1>Subscriptions Available</h1>
          <div className="signUpCardCompileRow">
            <div>
              <SignUpCardUI
                cardBG="blue"
                titleBG="red"
                cardTitle="Three Days Starter Pack"
                price="$40"
              />
            </div>

            <div>
              <SignUpCardUI
                cardBG="black"
                titleBG="darkgray"
                cardTitle="Seven Days Starter Pack"
                price="$80"
              />
            </div>

            <div>
              <SignUpCardUI
                cardBG="orange"
                titleBG="blue"
                cardTitle="VIP"
                crown={<i class="fas fa-crown" style={{ color: "orange" }}></i>}
                price="$120"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpCardCompile;
