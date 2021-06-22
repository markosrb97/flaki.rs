import React, { Component } from "react";
import Slider from "react-slick";
import Image from "../images/logo.png"
import Background from "../images/Background.png"

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Background})`
};

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div style={ sectionStyle }>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
            <img src={Image}></img>
          </div>
          <div>
          <img src={Image}></img>
          </div>
          <div>
          <img src={Image}></img>
          </div>
          <div>
          <img src={Image}></img>
          </div>
          <div>
          <img src={Image}></img>
          </div>
          <div>
          <img src={Image}></img>
          </div>
          <div>
          <img src={Image}></img>
          </div>
          <div>
          <img src={Image}></img>
          </div>
        </Slider>
      </div>
    );
  }
}