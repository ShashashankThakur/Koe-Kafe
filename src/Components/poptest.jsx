import React, { useState, useEffect } from 'react';
import Popup from './popup';
import './resppop.css'; // Make sure to include your CSS file here
import img5 from '../Images/popup1.jpg';

function Pop() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    handleOpen();
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && (
        <Popup
          content={
            <>
              <div className="p-4 flex justify-center">
                <img src={img5} alt="Coffee" className="w-full max-w-md" />
              </div>
              <div className="p-2 text-center">
                <h2 className="text-black font-semibold text-xl">Coffee Roasting Workshop</h2>
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg text-black">
                  🌟 Join us for an aromatic adventure at our Coffee Roasting Workshop! ☕
                </p>
                <p className="font-semibold text-lg text-black">
                  Indulge your senses in the world of freshly roasted coffee beans as we guide you through the art and science of crafting the perfect cup. Discover the secrets behind selecting premium beans, mastering the roasting process, and unlocking unique flavor profiles.☕✨
                </p>
                <h2 className="text-black font-semibold">#CoffeeRoastingWorkshop</h2>
              </div>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default Pop;