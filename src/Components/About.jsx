import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function AboutUsSlider() {
    const sliderRef = useRef(null);
    const [isSmall, setIsSmall] = useState(window.innerWidth <= 768);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isSmall ? 1 : 2,
        slidesToScroll: 1,
    };

    const aboutUsSlides = [
        {
            image: '/Images/about_slide1.jpg',
            title: "The Journey of Kôė",
            description: "Kôė offers a unique micro-scale coffee roasting and culinary experience, going beyond the ordinary cafe. With a deep passion for coffee, we master roasting techniques and curate a diverse menu. Kôė is a haven for enthusiasts, telling a story of exploration and commitment to coffee culture. Our sustainability and fair trade practices support Indian coffee farmers. Welcome to Kôė, where the coffee experience is a vibrant tapestry of passion and quality.",
        },
        {
            image: '/Images/about_slide3.jpg',
            title: 'Supporting all communities',
            description: "Koe's Kafe is a welcoming space for all, regardless of gender identity or sexual orientation. We actively support LGBTQ+ causes through awareness campaigns and partnerships, contributing to positive change. Our diverse menu caters to various tastes, and our events embrace diversity, fostering a sense of community. Join us in spreading love and acceptance at Koe's Kafe, where everyone is free to be themselves. Cheers to diversity, inclusion, and a warm cup of acceptance!",
        },
        {
            image: '/Images/about_slide2.jpg',
            title: 'Community Engagement',
            description: "Discover a coffee haven at Koe's Kafe, Surat's exclusive spot for an exceptional coffee experience. With in-house roasting for the freshest flavors and a cutting-edge coffee machine skillfully handled by our baristas, each cup is a unique masterpiece. Redefining coffee culture in the city, we invite you to savor the extraordinary at Koe's Kafe, where every brew is a crafted memory. Join us in celebrating authenticity, craftsmanship, and unparalleled taste, one cup at a time",
        },
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                sliderRef.current.slickNext();
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center lg:px-32 px-5 pt-8 pb-8 bg-transparent">
            <h1 className="md:text-6xl text-4xl font-semibold text-center lg:mt-14 mb-8 text-[#4F483F]" style={{ fontFamily: 'Monospace' }}>A B O U T <br />U S</h1>
            <div className="w-[95%] md:max-h-max max-h-max mx-auto">
                <div className="max-w-full overflow-hidden">
                    <Slider ref={sliderRef} {...settings}>
                        {aboutUsSlides.map((slide, index) => (
                            <div key={index} style={{ margin: '0 10px' }}>
                                <div
                                    className={`w-full h-[400px] md:h-[400px] text-[#E2D3C4] bg-cover bg-center relative ${isSmall ? 'rounded-xl overflow-hidden' : ''}`} style={{ backgroundImage: `url(${slide.image})`, display: 'flex' }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                                    <div className="absolute inset-0 bg-black opacity-50"></div>
                                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                                        <h3 className={`text-${isSmall ? 'xl mb-2' : '3xl mb-4'} font-serif font-semibold`}>{slide.title}</h3>
                                        <p className={`${isSmall ? 'text-sm mx-4 my-2 text-center' : 'text-md mx-8 my-4'} `}>{slide.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
