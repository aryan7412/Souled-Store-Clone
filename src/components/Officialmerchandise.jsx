import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Officialmerchandise({heading,om}) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      
  };
  return (
    <div>
    <h3 className='text-center font-extrabold text-2xl pb-6 pt-6'>{heading}</h3>
      <div className="slider-container">
      <Slider {...settings}>
      {om.map((om)=>(
        <div>
          <div className='px-2'>
            <img src={om.image} />    
          </div>
          </div>
          ))}
      </Slider>
      </div>
    </div>
  )
}
export default Officialmerchandise