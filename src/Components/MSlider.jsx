import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    './Images/1.jpeg',
    './Images/2.jpeg',
    './Images/3.jpeg',
    './Images/4.jpeg',
    './Images/5.jpeg',
    './Images/6.jpeg',
    './Images/7.jpeg',
    './Images/8.jpeg',
    './Images/9.jpeg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="w-5/6 mx-auto">
      <div className="max-w-full">
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <img className="w-full" src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}