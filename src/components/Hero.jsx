import React from 'react';
import Profile from '../assets/profile.png';
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
                        <p className='text-xl'>Hi there! I'm <a className='font-bold'>Danny Otgontsetseg</a> , a friendly Front End developer who loves making cool stuff on the internet. I'm like a digital handyman—I build the behind-the-scenes magic (that's the back-end) and create user-friendly designs (that's the front-end). My goal? Making websites and apps that are not just functional but also super easy and fun to use. Let's create some tech magic together!</p>
                    </div>
                    {/* add social icon soon */}
                    <div className="social">
                    </div>
                </aside>
            </section>
        </main>
    </>
  )
}

export default Hero