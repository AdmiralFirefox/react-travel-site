import React, { Component } from "react";
import "./productscardcompile.css";
import ProductsCardUI from "./productscardui";
import Bag from "./productassets/bag.jpg";
import Earphones from "./productassets/earphones.jpg";
import Shoes from "./productassets/shoes.jpg";
import Watch from "./productassets/watch.jpg";

class ProductsCardCompile extends Component {
  render() {
    return (
      <div className="productsCardWrapper">
        <div className="productsCardContent">
          <div className="productsCardRow">
            <div>
              <ProductsCardUI productImg={Bag} productTitle="Travel Bags" />
            </div>
            <div>
              <ProductsCardUI productImg={Earphones} productTitle="Earphones" />
            </div>
            <div>
              <ProductsCardUI productImg={Shoes} productTitle="Travel Shoes" />
            </div>
            <div style={{ marginBottom: "2em" }}>
              <ProductsCardUI productImg={Watch} productTitle="Watches" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsCardCompile;
