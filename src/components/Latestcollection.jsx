import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Latestcollection({heading,ls}) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 250,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
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
    <div>
    <h3 className='text-center font-extrabold text-2xl pb-6 pt-6'>{heading}</h3>
      <div className="slider-container">
      <Slider {...settings}>
      {ls.map((lcm)=>(
        <div>
          <div className='px-2'>
            <img src={lcm.image} />    
          </div>
          </div>
          ))}
      </Slider>
      </div>
    </div>
  )
}
export default Latestcollection