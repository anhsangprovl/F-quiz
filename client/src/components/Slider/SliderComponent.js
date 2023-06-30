import React from "react";
import Slider from "react-slick";
import "./slider.css";

const SliderComponent = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings}>
      {arrImages.map((image) => {
        return (
          <img src={image} alt="slider" preview={false} className="image" />
        );
      })}
    </Slider>
  );
};

export default SliderComponent;
