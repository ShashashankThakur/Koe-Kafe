import React from 'react';
import {
    FaInstagram
} from 'react-icons/fa'
import {HashLink as Link} from 'react-router-hash-link'

const redirect = () => {
    window.open('https://www.instagram.com/koethekafe/', '_blank')
}

const Footer = () => {
    return (
        <div className='w-full mt-10 mx-auto py-16 px-4 grid lg:grid-cols-4 gap-8 text-[#ece0d1] bg-[#3D281C]'>
            <div className='mr-10 ml-10'>
                <h1 className='w-full text-5xl font-bold text-[#a08a6f]'>Koe</h1>
                <p className='w-full text-xl font-semibold text-[#a08a6f] tracking-wide'>The Kafe</p>
                <p className='py-4'>205, International Finance Centre, VIP Road, opp. Fire Station, Vesu Surat, Gujarat 395007</p>
                <div className='flex gap-4 md:w-[100%] my-6'>
                    <FaInstagram size={40} className='hover:text-white' onClick={redirect}/>
                </div>
            </div>
            <div className='relative h-full w-full'>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52508.16350801297!2d72.74383039077205!3d21.14936623477984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05327ccb9c45f%3A0xe73ce99228e97293!2sKOE%20-%20The%20Kafe!5e0!3m2!1sen!2sin!4v1704193117252!5m2!1sen!2sin'
                        className='w-full h-full rounded-xl'
                        loading='lazy'
                        referrerpolicy='no-referrer-when-downgrade'
                        allowFullScreen={true}
                        title='Coffee Shop Location'
                    ></iframe>
                </div>
            <div className='lg:col-span-2 flex justify-between lg:mx-20 md:mx-20 md:my-10 mx-10 my-10 mb-4'>
                <div>
                    <h6 className='font-bold text-[#8f816f]-400'>Explore</h6>
                    <Link>
                        <ul className='mt-5'>
                            <li className='py-2 text-sm hover:text-white'>Home</li>
                            <li className='py-2 text-sm hover:text-white'>Menu</li>
                            <li className='py-2 text-sm hover:text-white'>Workshop</li>
                            <li className='py-2 text-sm hover:text-white'>About Us</li>
                        </ul>
                    </Link>
                </div>
                <div>
                    <h6 className='font-bold text-[#8f816f]-400'>Legal</h6>
                    <ul className='mt-5'>
                        <li className='py-2 text-sm hover:text-white'>Privacy Policy</li>
                        <li className='py-2 text-sm hover:text-white'>Terms of Service</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;