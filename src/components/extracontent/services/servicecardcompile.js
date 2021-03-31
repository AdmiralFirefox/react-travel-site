import React, { Component } from "react";
import ServiceCardUI from "./servicecardui";
import "./servicecardcompile.css";
import Coupon from "./serviceassets/coupon.png";
import Van from "./serviceassets/van.png";
import TourGuide from "./serviceassets/tourGuide.png";
import VIP from "./serviceassets/vip.png";

class ServiceCardCompile extends Component {
  render() {
    return (
      <div className="serviceFluidContainer">
        <div className="serviceCardContent">
          <div className="serviceCards">
            <div>
              <ServiceCardUI
                serviceimg={Coupon}
                serviceInfo="Get our travelling coupon and receive up to 75% discount in travelling"
                buttonInfo="Get Discount"
              />
            </div>

            <div>
              <ServiceCardUI
                serviceimg={Van}
                serviceInfo="Rent a van to enhance your travelling experience"
                buttonInfo="Rent Van"
                backgroundColor="#cc0000"
                contentColor="#fff"
              />
            </div>

            <div>
              <ServiceCardUI
                serviceimg={TourGuide}
                serviceInfo="Hire a tour guide for guiding you to your journey"
                buttonInfo="Hire Tour Guide"
                backgroundColor="#cc0000"
                contentColor="#fff"
              />
            </div>

            <div>
              <ServiceCardUI
                serviceimg={VIP}
                serviceInfo="Become a VIP and have access to first class areas"
                buttonInfo="Get VIP"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceCardCompile;
