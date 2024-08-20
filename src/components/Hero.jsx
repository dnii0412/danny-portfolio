import React from 'react';
import '../index.css'
// motion 
import {motion} from 'framer-motion'
import {fadeIn} from '../components/variants'
import Profile from '../assets/profile.png';
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Hero = () => {
    const size = {
        width: '80%',
        height: '90vh',
        backGroundColor: '#EEEDED',
        // border: '1px solid'
    };
    const proSize = {
        width: '14%',
        borderRadius: '100%',
        border: '1px solid #E5E7EB'
    };
    const customColor = {
        color: ' #888888',
    }
    const customW = {
        width: '16px'
    };
    function igClick() {
        window.open("https://www.instagram.com/dnii_d/");
    };
    function fbClick(){
        window.open("https://www.facebook.com/dnii.dnii.0412")
    }
    function lnkClick(){
        window.open("https://www.linkedin.com/feed/")
    }
    function ytClick(){
        window.open("https://www.youtube.com/@ClimeLab")
    }
  return (
    <>
        <main style={size} className='bg-base shadow-sm flex flex-col justify-center items-center '>
            <section className='w-5/6 space-y-6 mt-24'>
                {/* profile img below */}
                <figure>
                    <motion.img style={proSize} src={Profile} className='shadow-lg' alt="Profile image" 
                        variants={fadeIn("right", 0.2)}
                        initial="hiddenLong"
                        whileInView={"showQuick"}
                        viewport={{once:false, amount:0.7}}
                    />
                </figure>
                {/* titles here */}
                <aside>
                    <div className="main-title flex-wrap w-9/12 space-y-4">
                        <motion.h1 className='text-4xl font-semibold'
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:false, amount:0.7}}  
                        >I'm a Front End Developer</motion.h1>
                        <motion.p style={customColor} className='text-lg text-gray'
                            variants={fadeIn("up", 0.2)}
                            initial="hiddenLong"
                            whileInView={"show"}
                            viewport={{once:false, amount:0.7}}
                        >Hi there! I'm <a className='font-bold'>Danny Otgontsetseg</a> , a friendly Front End developer who loves making cool stuff on the internet. When I'm not coding, I enjoy learning about the latest developments in tech and finding inspiration from other developers. </motion.p>
                    </div>
                    {/* add social icon soon */}
                    <div className="icons flex space-x-8 text-lg mt-6 text-gray cursor-pointer ">
                        <motion.i onClick={igClick} className="fa-brands fa-square-instagram hover:text-black  transition-colors duration-300"
                            variants={fadeIn("up", 0.6)}
                            initial="hidden"
                            whileInView={"showWithBounce "}
                            viewport={{once:false, amount:0.7}}                       
                        ></motion.i>
                        <motion.i onClick={fbClick} className="fa-brands fa-facebook hover:text-black  transition-colors duration-300"
                            variants={fadeIn("up", 0.8)}
                            initial="hidden"
                            whileInView={"showWithBounce "}
                            viewport={{once:false, amount:0.7}}  ></motion.i>
                        <motion.i onClick={lnkClick} className="fa-brands fa-linkedin hover:text-black  transition-colors duration-300"
                            variants={fadeIn("up", 0.9)}
                            initial="hidden"
                            whileInView={"showWithBounce "}
                            viewport={{once:false, amount:0.7}}  ></motion.i>
                        <motion.i onClick={ytClick} className="fa-brands fa-youtube hover:text-black  transition-colors duration-300"
                            variants={fadeIn("up", 1)}
                            initial="hidden"
                            whileInView={"showWithBounce "}
                            viewport={{once:false, amount:0.7}}  ></motion.i>
                    </div>
                </aside>
            </section>
        </main>
    </>
  )
}

export default Hero