<<<<<<< HEAD
// import React from 'react';
// import { Link } from "react-router-dom";
// import '../index.css';

// const Navbar = () => {
//   return (
//     <header className='top-8 w-full fixed h-12 flex items-center justify-center sm-280:opacity-0 sm-280:-z-40 md:opacity-100 md:z-40'>
//       <nav className='w-72 bg-white flex items-center justify-center h-full rounded-full drop-shadow-lg font-bold'>
//         <ul className='border-borderColor flex w-full justify-around text-black text-lg z-50 relative'>
//           <li className='transition duration-200 hover:text-brown cursor-pointer' aria-label="Home">
//             <Link to="/">Home</Link>
//           </li>
//           <li className='transition duration-200 hover:text-brown cursor-pointer' aria-label="Stuffs">
//             <Link to="/stuffs">Stuffs</Link>
//           </li>
//           <li className='transition duration-200 hover:text-brown cursor-pointer' aria-label="Contact">
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
=======
import React from 'react';
// import { Link } from "react-router-dom";
import '../index.css'
// import Hero from '../components/Hero'
// import Stuff from '../components/Stuffs'
// import Experience from '../components/Experience'
// import Skills from '../components/Skill'
// import Contact from '../components/Contact'
const Navbar = () => {
  // function cackProjects(){
  //   location.href("")
  // }

  return (
    <>
      <header className='top-8 w-full fixed h-12 flex items-center justify-center sm-280:opacity-0 sm-280:-z-40 md:opacity-100 md:z-40'>
        <nav className='w-72 bg-white flex items-center justify-center h-full rounded-full drop-shadow-lg font-bold'>
          <ul className='border-borderColor flex w-full justify-around text-black text-lg z-50 relative'>
            <li className='transition du`ration-200 hover:text-brown cursor-pointer' aria-label="Projects">
            {/* <Link to="/">Home</Link> */}
            Home
            </li>
            <li className='transition duration-200 hover:text-brown cursor-pointer' aria-label="Skills">
              {/* <Link to="/Stuff">Stuffs</Link> */}
              About
            </li>
            <li className='transition duration-200 hover:text-brown cursor-pointer' aria-label="Contact">
              {/* <Link to="/Stuff">Skills</Link> */}
              Contact
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar;
>>>>>>> bb253e584a2b032c9589deda96da9bc78b11edb6
