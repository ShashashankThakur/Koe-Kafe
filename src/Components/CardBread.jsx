import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import imgBread1 from '../Images/bread1.jpg';
import imgBread2 from '../Images/bread2.jpg';
import imgBread3 from '../Images/bread3.jpg';
import imgBread4 from '../Images/bread4.jpg';
import imgBread5 from '../Images/bread5.jpg';

export const CardBread = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {[
          imgBread1,
          imgBread2,
          imgBread2,
          imgBread3,
          imgBread4,
          imgBread5
        ].map((img, index) => (
          <div key={index} className="embla__slide">
            <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
              <img
                className="rounded-xl object-cover"
                src={img}
                alt={`bread${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardBread;