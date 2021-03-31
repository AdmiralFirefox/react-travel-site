import React from "react";
import "./productscardui.css";
import "@material/react-card/dist/card.css";
import Card, { CardMedia } from "@material/react-card";
import { Button } from "react-bootstrap";
import { Link } from "react-scroll";

function ProductsCardUI(props) {
  return (
    <div>
      <Card
        style={{ width: "300px", borderRadius: "0" }}
        className="productsCard"
      >
        <CardMedia square imageUrl={props.productImg}>
          <div className="overlay">
            <div className="overlayContent">
              <h2>{props.productTitle}</h2>
              <div className="productButtonsWrapper">
                <Button variant="outline-light" id="productButtons">
                  Order Now
                </Button>
                <Link
                  activeClass="active"
                  to="productsCarousel"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {" "}
                  <Button variant="outline-light" id="productButtons">
                    Similar Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardMedia>
      </Card>
    </div>
  );
}

export default ProductsCardUI;
