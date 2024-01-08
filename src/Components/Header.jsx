import React from 'react';
import Logo from '../Images/Logo.png';
import { HashLink as Link } from 'react-router-hash-link';

const MenuItem = ({ text, to }) => (
  <li className="relative group w-32 max-w-max text-center">
    <Link smooth to={to}>
      {text}
      <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-beige group-hover:w-[45%] group-hover:transition-all"></span>
      <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-beige group-hover:w-[45%] group-hover:transition-all"></span>
    </Link>
  </li>
);

export default function Header() {
  return (
    <nav className='fixed font-bold flex justify-center items-center text-beige text-2xl pt-4 w-full'>
      <ul className='py-3 px-12 flex flex-row items-center justify-center bg-coffee rounded-full gap-10 shadow-xl'>
        <MenuItem text='Home' to='/#home' />
        <MenuItem text='Workshop' />
        <MenuItem text={<img src={Logo} className='h-14' alt="Logo" />} to='/#Main' />
        <MenuItem text='Menu' />
        <MenuItem text='About Us' />
      </ul>
    </nav>
  );
}