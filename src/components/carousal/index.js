import React from "react";
import Slider from "react-slick";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings} className="carousel">
      <div>
        <img
          className="slider-img"
          src="https://imgur.com/96OnkX7.png"
          alt="slider-img"
        />
      </div>
      <div>
        <img
          className="slider-img"
          src="https://imgur.com/KtGxwnN.png"
          alt="slider-img"
        />
      </div>
      <div>
        <img
          className="slider-img"
          src="https://imgur.com/sfjg9R8.png"
          alt="slider-img"
        />
      </div>
      <div>
        <img
          className="slider-img"
          src="https://imgur.com/p0wdadG.png"
          alt="slider-img"
        />
      </div>
    </Slider>
  );
}
