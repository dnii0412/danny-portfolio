import React from 'react';

const Navbar = () => {
  // function clickProjects(){
  //   location.href("")
  // }
  return (
    <>
      <header className='top-8 w-full fixed h-12 flex items-center justify-center '>
        <nav className='w-72 bg-white flex items-center justify-center h-full rounded-full drop-shadow-lg font-bold'>
          <ul className='border-borderColor flex w-full justify-around text-black text-lg z-50 relative'>
            <li className='transition duration-200 hover:text-brown cursor-pointer' aria-label="Projects">
              Projects
            </li>
            <li className='transition duration-200 hover:text-brown cursor-pointer' aria-label="Skills">
              Skills
            </li>
            <li className='transition duration-200 hover:text-brown cursor-pointer' aria-label="Contact">
              Contact
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar;
