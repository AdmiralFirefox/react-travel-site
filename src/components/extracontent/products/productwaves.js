import React, { Component } from "react";
import "./productwaves.css";

class ProductWaves extends Component {
  render() {
    return (
      <div className="productWavesWrapper">
        <div className="productWavesContainer">
          <div style={{height: "150px", overflow: "hidden"}}>
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              style={{height: "100%", width: "100%"}}
            >
              <path
                d="M0.00,49.98 C338.88,159.38 315.18,11.34 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                style={{stroke: "none", fill: "white"}}
              ></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductWaves;
