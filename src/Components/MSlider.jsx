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
    <div className="w-5/6 mx-auto mt-8 text-center">
      <h2 className="text-4xl font-semibold mb-2" style={{ fontFamily: 'Monospace' }}>F L A V O R</h2>
      <h2 className="text-4xl font-semibold mb-4" style={{ fontFamily: 'Monospace' }}>F R A M E S</h2>
      <div className="max-w-full">
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <img className="w-full" src={image}/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
