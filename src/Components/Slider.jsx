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
    slidesToShow: 4,
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
    <div data-aos="fade-up" data-aos-delay="200">
    <div className="w-[90%] mx-auto mt-32 z-0">
      <div>
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden">
              <img className="h-[650px]" src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  );
}