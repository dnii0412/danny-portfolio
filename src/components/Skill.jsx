import React from 'react'
import honestLogo from '../assets/honestLogo.png'
import phoneMarketLogo from '../assets/phoneMarketLogo.png'
import churchLogo from '../assets/church.png'

const Skill = () => {
        const size = {
            width: '80%',
            height: '100vh',
            backGroundColor: '#F5F7F8',
            // border: '1px solid'
        };
        const imgSize = {
            width: '36px',
            border: '1px solid #E5E7EB',
            borderRadius: '100%',
            padding: '4px',
            top:'0'
        }
        const width = {
            width: '100%'
        }
        const secSize = {
            width: '80%',
        }
        const subTextSize = {
            fontSize: '14px'
        }
        const expTitle = {
            fontSize : '16px'
        }
  return (
    <>
    <main style={size} className='bg-base flex items-center justify-evenly shadow-sm'>
        {/* 2 ym holder */}
       <div className='flex items-between justify-center w-5/6 h-auto space-x-10'>
       <section className='w-1/2 flex flex-col items-center justify-center space-y-12'>
      <div className="mainTitle w-full ">
        <p className='text-xl font-bold'>My Portfolio Projects</p>
      </div>
      {/* Job #1 title */}
        <div className='space-y-4'>
            {/* first project */}
            <aside style={width} className=' h-42 rounded-xl hover:bg-white hover:shadow-sm p-6'>
                <figure>
                <img style={imgSize} src={honestLogo} alt="Honest Logo" />
                </figure>
                <div className='space-y-2 last:mb-4'>
                <p className='font-bold'>Honest Media</p>
                <p className='text-gray'>Реклам, зар сурталчилгааны студийн танилцуулга сайт</p>
                </div>
            </aside>
            {/* second project */}
            <aside style={width} className=' h-36 space-y-4 rounded-xl hover:bg-white hover:shadow-sm p-6'>
                <figure>
                <img style={imgSize} src={phoneMarketLogo} alt="Honest Logo" />
                </figure>
                <div className='space-y-2 last:mb-4'>
                <p className='font-bold'>Phone Market</p>
                <p className='text-gray'>Гар утас танилцуулгын сайт</p>
                </div>
            </aside>
        </div>
    </section>
        {/* Exp sect below */}
    <section className='w-1/2 flex flex-col items-center border border-borderColor rounded-xl'>
    <div style={expTitle} className="mainTitle font-bold mt-4 ml-6">
        <p>Experience</p>
    </div>
    {/* experienced work 1 */}
        <div className='flex w-11/12 items-center justify-center space-y-6 space-x-4'>
        <figure className='flex items-center justify-center h-auto' >
            <img src={honestLogo} style={imgSize} alt="honestmedia.mn logo" className=''/>
        </figure>
        <aside className='w-10/12 h-full '>
        <div className="title ">
            <p>Honest Media LLC</p>
        </div>
        <div className="subtitle flex justify-between w-full ">
            <p style={subTextSize}>Front End Developer</p>
            <p style={subTextSize}>2022-2023</p>
        </div>
        </aside>
        </div>

        {/* experienced work 2*/}
        <div className='flex w-11/12 items-center justify-center space-y-6 space-x-4'>
        <figure className='flex items-center justify-center h-auto' >
            <img src={churchLogo} style={imgSize} alt="honestmedia.mn logo" className=''/>
        </figure>
        <aside className='w-10/12 h-full '>
        <div className="title ">
            <p>First Church</p>
        </div>
        <div className="subtitle flex justify-between w-full ">
            <p style={subTextSize}> Sound engineer, Technician</p>
            <p style={subTextSize}>2022-Present</p>
        </div>
        </aside>
        </div>
    </section>
        </div>
        {/* skills section below */}
    </main>
    </>
  )
}

export default Skill