import React from "react";
import "./productscarousel.css";
import Slider from "react-slick";
import Carousel1 from "./productassets/carousel1.jpg";
import Carousel2 from "./productassets/carousel2.jpg";
import Carousel3 from "./productassets/carousel3.jpg";
import Carousel4 from "./productassets/carousel4.jpg";

function ProductsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carouselWrapper">
      <div className="carouselContent" id="productsCarousel">
        <div className="carouselInnerWrapper">
          <h1>Hot Deals</h1>
          <Slider {...settings} className="carouselSlides">
            <div>
              <img src={Carousel1} alt="img carousel" />
            </div>
            <div>
              <img src={Carousel2} alt="img carousel" />
            </div>
            <div>
              <img src={Carousel3} alt="img carousel" />
            </div>
            <div>
              <img src={Carousel4} alt="img carousel" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ProductsCarousel;
