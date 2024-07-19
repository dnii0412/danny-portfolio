import React from 'react';
import Profile from '../assets/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Hero = () => {
    const size = {
        width: '80%',
        height: '90vh',
        backGroundColor: '#F5F7F8',
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
        <main style={size} className='bg-base shadow-sm flex flex-col justify-center items-center'>
            <section className='w-5/6 space-y-6'>
                {/* profile img below */}
                <figure>
                    <img style={proSize} src={Profile} className='shadow-lg' alt="Profile image" />
                </figure>
                {/* titles here */}
                <aside>
                    <div className="main-title flex-wrap w-9/12 space-y-4">
                        <h1 className='text-4xl font-semibold'>I'm a Front End Developer</h1>
                        <p style={customColor} className='text-lg text-gray'>Hi there! I'm <a className='font-bold'>Danny Otgontsetseg</a> , a friendly Front End developer who loves making cool stuff on the internet. I'm like a digital handyman—I build the behind-the-scenes magic (that's the back-end) and create user-friendly designs (that's the front-end). My goal? Making websites and apps that are not just functional but also super easy and fun to use. Let's create some tech magic together!</p>
                    </div>
                    {/* add social icon soon */}
                    <div className="icons w-1/6 flex justify-between text-xl mt-6 text-gray cursor-pointer ">
                    <i onClick={igClick} className="fa-brands fa-square-instagram"></i>
                    <i onClick={fbClick} className="fa-brands fa-facebook"></i>
                    <i onClick={lnkClick} className="fa-brands fa-linkedin"></i>
                    <i onClick={ytClick} className="fa-brands fa-youtube"></i>
                    </div>
                </aside>
            </section>
        </main>
    </>
  )
}

export default Hero