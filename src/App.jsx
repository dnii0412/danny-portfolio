import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
// import Navbar from './components/Navbar';
=======
import Navbar from './components/Navbar';
>>>>>>> bb253e584a2b032c9589deda96da9bc78b11edb6
import Hero from './components/Hero';
import Stuffs from './components/Stuffs';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {

  const screenSize =  {
    width: '100%',
  };

  return (
    <>
     <div style={screenSize} className='flex flex-col items-center justify-center bg-white h-auto '>
      
<<<<<<< HEAD
     {/* <Navbar/> */}
=======
     <Navbar/>
>>>>>>> bb253e584a2b032c9589deda96da9bc78b11edb6
      <Hero/>
      <Stuffs/>
      <Experience/>
      <Skill/>
      <Contact/>
    
      </div> 
    </>
  )
}

export default App