import React, { Component } from "react";
import "./hiking.css";
import Hiking from "../../assets/hiking.jpg";
import { Link } from "react-router-dom";

class CardHiking extends Component {
  render() {
    return (
      <div className="hikingContentWrapper">
        <div className="hikingContent">
          <div className="hikingImgWrapper">
            <img src={Hiking} alt="hiking" />
            <Link to="/">
              <div className="backToHome">
                <h3>
                  <i class="fas fa-arrow-alt-circle-left"></i>
                </h3>
              </div>
            </Link>
          </div>
          <div className="hikingInfo">
            <div className="hikingInfoWrapper">
              <div className="cardTitle">
                <h1>Hike and Discover Into the Nature's Wonder</h1>
              </div>
              <div className="hikingBorderContent">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Incidunt, fugit praesentium. Aperiam fugiat alias autem quasi
                  natus voluptate ad? Corrupti doloribus aperiam debitis at
                  laborum placeat veniam asperiores reprehenderit odit. Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="hikingButtonWrapper">
                <Link to="/signup">
                  <button className="hikingButton">
                    <h4>Hike Now!</h4>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardHiking;
