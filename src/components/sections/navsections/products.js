import React, { Component } from "react";
import "./products.css";
import ProductWaves from "../../extracontent/products/productwaves";
import ProductsCarousel from "../../extracontent/products/productscarousel";
import ProductsCardCompile from "../../extracontent/products/productscardcompile";

class Products extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="productsContentWrapper">
        <div className="productsContent">
          <h1 style={{ fontSize: "2.5rem" }}>PRODUCTS</h1>
          <ProductWaves />
          <ProductsCarousel />
          <ProductsCardCompile />
        </div>
      </div>
    );
  }
}

export default Products;
