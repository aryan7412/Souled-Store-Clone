import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Newarivals({heading,productsa}) {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
          }
        ]
      };
      return (
        <div>
        <h3 className='text-center font-extrabold text-2xl pb-6 pt-6'>{heading}</h3>
        <div className="slider-container">
        <Slider {...settings}>
            
            {productsa.map((product)=>(
                <div className=' pb-10 pt-4 grid grid-cols-4'>
                        <div className='mx-3'>
                            <img className='rounded-lg' src={product.image} />
                            <p className='font-bold text-gray-700 font-sans text-sm'>{product.subtitle}</p>
                            <div className='h-px my-0 mb-1 border-0 w-[340px] dark:bg-gray-300'></div>
                            <p className='text-gray-500 text-sm'>{product.type}</p>
                            <p className=' text-sm'>{product.price}</p>
                            <p className='text-gray-500 text-sm'>MRP incl. of all taxes</p>
                        </div>  
                </div>        
                ))}
            
        </Slider>  
        </div>
        </div>
      )
    
}

export default Newarivals