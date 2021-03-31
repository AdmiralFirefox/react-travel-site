import React, { Component } from "react";
import "./home.css";
import HomeTwo from "../../extracontent/home/homeparttwo";
import { Link } from "react-scroll";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="homeContentWrapper" id="homeContent">
        <div className="homeContent">
          <h1>TRAVEL AROUND THE WORLD</h1>
          <h3>What are you waiting for?</h3>
          <div className="homeButtonWrapper">
            <Link
              activeClass="active"
              to="homePartTwo"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              <button className="homeButton1">Choose Destination</button>
            </Link>

            <Link
              activeClass="active"
              to="homeFooter"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              <button className="homeButton2">Subscribe Now</button>
            </Link>
          </div>
        </div>
        {/* <BackgroundVideo /> */}
        <HomeTwo />
      </div>
    );
  }
}

export default Home;
