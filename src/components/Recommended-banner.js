import React, { Component } from "react";
import Slider from "react-slick";
import '../css/Recommended-baner.css';
import image from "../images/logo.png"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Istaknute životinje</h2>
        <Slider {...settings}>
          <div>
            <div>
                <img src={image} alt="Slider-image" />
            </div>
          </div>
          <div>
            <div>
                <img src={image} alt="Slider-image" />
            </div>
          </div>
          <div>
            <div>
                <img src={image} alt="Slider-image" />
            </div>
          </div>
          <div>
            <div>
                <img src={image} alt="Slider-image" />
            </div>
          </div>
          <div>
            <div>
                <img src={image} alt="Slider-image" />
            </div> 
          </div>
          <div>
            <div>
                <img src={image} alt="Slider-image" />
            </div> 
          </div>
        </Slider>
      </div>
    );
  }
}