import React from 'react';
import { Link } from "react-router-dom";
import '../index.css';

const Navbar = () => {
  return (
    <>
      <header className='top-8 w-full fixed h-12 flex items-center justify-center sm-280:opacity-0 sm-280:-z-40 md:opacity-100 md:z-40'>
        <nav className='w-72 bg-white flex items-center justify-center h-full rounded-full drop-shadow-lg font-bold'>
          <ul className='border-borderColor flex w-full justify-around text-black text-lg z-50 relative'>
            <li className='transition duration-200 hover:text-brown cursor-pointer' aria-label="Home">
              {/* <Link to="/">Home</Link> */}
            </li>
            <li className='transition duration-200 hover:text-brown cursor-pointer' aria-label="About">
              {/* <Link to="/about">About</Link> */}
            </li>
            <li className='transition duration-200 hover:text-brown cursor-pointer' aria-label="Contact">
              {/* <Link to="/contact">Contact</Link> */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
