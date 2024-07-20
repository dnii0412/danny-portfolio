import React from 'react';
import Navbar from './components/Navbar';
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
      
     <Navbar/>
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