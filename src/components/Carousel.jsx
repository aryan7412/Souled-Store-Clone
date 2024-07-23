import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Carousel({car}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
 <div className="slider-container pb-6">
      <Slider {...settings}>
      {car.map((car)=>(
        <div>
            <div>
              <img src={car.image} />
            </div>
        </div>
        ))}
      </Slider>
    </div>
  );
}


export default Carousel