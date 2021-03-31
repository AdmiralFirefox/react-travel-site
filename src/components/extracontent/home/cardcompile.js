import React, { Component } from "react";
import HomeCardUI from "./cardui";
import HomeCardUI2 from "./cardui2";
import "./cardcompile.css";
import Hiking from "../../assets/hiking.jpg";
import Camping from "../../assets/camping.jpg";
import Dine from "../../assets/restaurant.jpg";
import HotSpring from "../../assets/hotSpring.jpg";
import Dive from "../../assets/underwater.jpg";
import { Fade } from "react-awesome-reveal";

class HomeCardCompile extends Component {
  render() {
    return (
      <div className="cardFluidContainer">
        <div className="cardHomeContent">
          <div className="cardHomeRow1">
            <div>
              <Fade cascade direction="left" delay={200}>
                <HomeCardUI
                  cardImg={Hiking}
                  cardInfo="Hike and Discover into the Nature's Wonder"
                  cardLink="/hiking"
                />
              </Fade>
            </div>
            <div>
              <Fade cascade direction="left" delay={100}>
                <HomeCardUI
                  cardImg={Camping}
                  cardInfo="Camp and see the beautiful sunrise in the horizon"
                  cardLink="/camping"
                />
              </Fade>
            </div>
          </div>
          <div className="cardHomeRow2">
            <div>
              <Fade cascade direction="left" delay={300}>
                <HomeCardUI2
                  cardImg2={Dine}
                  cardInfo2="Dine with one of our tasty restaurant  to satisfy your stomach"
                  cardLink2="/dine"
                />
              </Fade>
            </div>
            <div>
              <Fade cascade direction="left" delay={200}>
                <HomeCardUI2
                  cardImg2={HotSpring}
                  cardInfo2="Relax your body and enjoy into our beautiful hot spring"
                  cardLink2="/hotspring"
                />
              </Fade>
            </div>
            <div>
              <Fade cascade direction="left" delay={100}>
                <HomeCardUI2
                  cardImg2={Dive}
                  cardInfo2="Dive into the deep oceans and meet mythical creatures"
                  cardLink2="/dive"
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCardCompile;
