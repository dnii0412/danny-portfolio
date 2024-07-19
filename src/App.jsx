import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stuffs from './components/Stuffs';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  <style>

  </style>
  return (
    <div className='container w-full h-auto bg-almond flex flex-col items-center'>
      <Navbar/>
      <Hero/>
      <Stuffs/>
      <Experience/>
      <Skill/>
      <Contact/>
    </div>
  )
}

export default App