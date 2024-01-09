import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

// Desktop Components
import Home from "./Components/Slider";
import Header from "./Components/Header";
import Menu from './Components/Menu';
import Workshop from './Components/Workshop'
import About from './Components/About';
import Footer from './Components/Footer';
import Testimonials from './Components/testimonial';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

// Mobile Components
import MHome from './Components/MHome';
import MHeader from './Components/MHeader';
import MSlider from './Components/MSlider';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
      const intervalId = setInterval(() => {
      setDisplayText((prevText) => prevText + text[index]);
      index++;

      if (index === text.length-1) {
      startBlinkingCursor();
      clearInterval(intervalId);
      }
    }, 175);

    return () => clearInterval(intervalId);
  }, [text]);

  const startBlinkingCursor = () => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    setTimeout(() => {
      clearInterval(cursorInterval);
      setShowCursor(false);
    }, 5000);
  };

  const decodedText = displayText.replace(/&apos;/g, "'").replace(/&quot;/g, '"');

  return (
    <div className='animation_layer parallax text-6xl font-semibold text-beige relative'>
      <div className='inline-block'>{decodedText}</div>
      {showCursor && <span className='inline-block w-1 h-15 ml-1 bg-coffee'>&nbsp;</span>}
    </div>
  );
};

function App() {
  return (

    <BrowserRouter>

      <div className="App bg-[#E7DED0]">

        <div className='desktop hidden lg:block'>

        <div className="z-auto">
          <Header />
        </div>

        <div className="parallaxer z-0">

          <Parallax pages={1.25} style={{ top: '0', left: '0' }} className='sm:hidden animation bg-[#E7DED0]'>

            <ParallaxLayer offset={0}>
              <div className='animation_layer parallax' id='background'></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0}  speed={1} id='Main'>
              <div className='animation_layer parallax' id='layer3'></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0}  speed={1.25}>
              <div className='animation_layer parallax' id='layer2'></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0}  speed={1.5}>
              <div className='animation_layer parallax' id='layer1'></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0.62}  speed={2.5} className='text-center'>
              <Typewriter text="  WELCOME TO KOE'S KAFE"/>
            </ParallaxLayer>

          </Parallax>

        </div>

          <div className='pt-[700px]'></div>

          <div className='pb-10 z-10' id='home'>
            <div className="text-center text-[#412F26] pt-40 text-6xl font-semibold" style={{ fontFamily: 'Monospace' }}>
              F L A V O R <br />  
              F R A M E S
            </div>
            <Home />
          </div>

          <div className="z-20" id='menu'>
            <div className='pt-32'>
              <Menu />
            </div>
          </div>

          <div className="z-30 pt-8" id='workshop'>
            <Workshop />
          </div>

          <div>
              <Testimonials />
            </div>

          <div className="About" id='about'>
            <About />
          </div>

          <div className="footer z-40">
            <Footer />
          </div>

        </div>

        <div className='mobile lg:hidden scroll-smooth overflow-x-hidden'>

          <div className="h-screen">

            <MHeader></MHeader>
          
            <div id='MHome' className="MHome h-full bg-cover bg-center" style={{backgroundImage: "url('../Images/landing3.jpg')"}}>
              <MHome></MHome>
            </div>

            <div className="MSlider py-10">
              <MSlider></MSlider>
            </div>

            <div id='MMenu'>
              <Menu></Menu>
            </div>

            <div id='MWorkshop'>
              <Workshop />
            </div>

            <div>
              <Testimonials />
            </div>

            <div className="About " id='MAbout'>
              <About />
            </div>

            <div className="footer z-40">
              <Footer />
            </div>

          </div>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;