import React from 'react';
import CardCoffee from './CardCoffee';
import CardBread from './CardBread';
import CardCheese from './CardCheese';
import KoeCafeFood from '../Images/KoeCafeFood.pdf';

const Menu = () => {
  return (
    <div>
      <div className='w-full bg-[#946342] pt-8 mb-0 md:h-[350px] h-[395px]'>
        <h1 style={{ fontFamily: 'Monospace' }} className="text-3xl md:text-6xl font-semibold text-center md:mt-4 mt-4 mb-4 text-[#E2D3C4]">M E N U</h1>
        <div className='max-w-[740px] mx-auto md:pt-6 md:pb-4 md:text-2xl'>
          <p className="text-center text-[#E2D3C4] md:mx-0 mx-4">
            Explore our culinary haven with a touch of warmth and flavor. Indulge in <strong>premium in-house roasted coffee</strong>, experience the artistry of <strong>artisanal bread making</strong>, and savor <strong>gourmet cheese</strong> delights.
          </p>
        </div>

        <div className='w-full px-4 bg-transparent md:mb-[-10rem] mb-[-6rem]'>
          
          <div className='max-w-[1040px] mx-auto flex justify-center gap-0'>
            {/* Adjusted card sizes for md and larger screens */}
            <div className='md:h-[300px] md:w-64 w-40 h-56 flex flex-col items-center shadow-2xl bg-[#b89d65] p-4 my-4 gap-2 rounded-tl-xl rounded-bl-xl hover:scale-105 duration-300 hover:z-10 hover:rounded-xl'>
              <div className='h-[75%] w-full flex flex-col items-center justify-center '>
                <CardCoffee />
              </div>
              <h2 className='h-[25%] md:text-2xl text-xs font-bold text-center py-4 text-[#2c1b13]'>COFFEE</h2>
            </div>

            <div className='md:h-[300px] md:w-64 w-40 h-56 flex flex-col items-center shadow-2xl bg-[#513726] p-4 my-4 gap-2 hover:scale-105 duration-300 hover:z-10 hover:rounded-xl'>
              <div className='h-[75%] w-full flex flex-col items-center justify-center'>
                <CardBread />
              </div>
              <h2 className='h-[25%] md:text-2xl text-xs font-bold text-center py-4 text-[#C88755]'>BREAD</h2>
            </div>

            <div className='md:h-[300px] md:w-64 w-40 h-56 flex flex-col items-center shadow-2xl bg-[#2c1b13] p-4 my-4 gap-2 rounded-tr-xl rounded-br-xl hover:scale-105 duration-300 hover:z-10 hover:rounded-xl'>
              <div className='h-[75%] w-full flex flex-col items-center justify-center'>
                <CardCheese />
              </div>
              <h2 className='h-[25%] md:text-2xl text-xs font-bold text-center py-4 text-yellow-600'>CHEESE</h2>
            </div>
          </div>
          </div>
          <div className='flex justify-center md:pt-0 py-8'>
            <button
              onClick={() => window.open(KoeCafeFood, '_blank')}
              className="bg-[#3B1C0A] md:w-[528px] w-[340px] text-[#E2D3C4] md:text-3xl md:py-3 md:mt-44 mt-24 py-2 rounded-xl hover:bg-[#b89d65] hover:text-[#3B1C0A]">
              View Menu
            </button>
          </div>
      </div>
      <div className='w-full md:h-[350px] h-[130px] bg-transparent mt-0'></div>
    </div>
  );
};

export default Menu;