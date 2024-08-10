import React from 'react'
import '../index.css'
import honestLogo from '../assets/honestLogo.png'
import phoneMarketLogo from '../assets/phoneMarketLogo.png'
import churchLogo from '../assets/church.png'
import Figma from '../assets/figma.png'
import Html from '../assets/html.png'
import JS from '../assets/js.png'
import Rust from '../assets/rust.png'
import PS from '../assets/ps.png'
import ReactLg from '../assets/ReactLg.webp'
import rating from '../assets/star.png'
import Go from '../assets/go.png'
import GraphQL from '../assets/graphql.png'

const Skill = () => {
        const size = {
            width: '80%',
        };
        const imgSize = {
            width: '36px',
            height: '36px',
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
        const ratingImgSize = {
            width: '16px'
        }
  return (
    <>
    <main style={size} className='bg-base flex items-center justify-evenly shadow-sm pb-12'>   
    <div className="flex items-between justify- w-5/6 space-x-10 sm-280:flex-col sm-280:space-x-0 sm:flex-col lg:flex-row sm:justify-center sm:space-x-0 lg:space-x-10 mt-24">

        {/* skills holder 1 by 1 */}
        <fieldset className="w-1/2 border border-borderColor rounded-xl flex flex-col items-center justify-around space-y-2 sm-280:items sm-280:w-full sm:w-full lg:w-1/2 pb-4">
                    <legend style={expTitle} className='font-bold ml-8'>Skills</legend>
            {/* both holder */} 
            <article className='w-full flex items-between justify-center sm-280:w-3/4 sm:w-3/4 md:w-3/4 lg-3/4  sm-280:flex-col sm:flex-col lg:flex-row lg:w-5/6'  >
                {/* line 0  */}
                <div className="w-1/2 space-y-2 flex flex-col justify-center sm-280:w-full sm:w-full lg:w-1/2 ">
                    {/* figma rating */}
                    <aside className="1 flex items-center space-x-2 w-full">
                        <figure>
                            <img style={imgSize} src={Figma} alt="" />
                        </figure>
                        {/* skills title and rating star images */}
                        <article>
                            <div className="title">
                                <p>Figma</p>
                            </div>
                            <figure className='flex'>
                                <img src={rating} style={ratingImgSize} alt="1/5" />
                                <img src={rating} style={ratingImgSize} alt="2/5" />
                                <img src={rating} style={ratingImgSize} alt="3/5" />
                            </figure>
                        </article>
                    </aside>
                    {/* PS rating */}
                    <aside className="1 flex items-center space-x-2 w-full">
                        <figure>
                            <img style={imgSize} src={PS} alt="" />
                        </figure>
                        {/* skills title and rating star images */}
                        <article>
                            <div className="title">
                                <p>PhotShop</p>
                            </div>
                            <figure className='flex'>
                                <img src={rating} style={ratingImgSize} alt="1/5" />
                                <img src={rating} style={ratingImgSize} alt="2/5" />
                            </figure>
                        </article>
                    </aside>
                    {/* React rating */}
                    <aside className="1 flex items-center space-x-2 w-full">
                        <figure>
                            <img style={imgSize} src={ReactLg} alt="" />
                        </figure>
                        {/* skills title and rating star images */}
                        <article>
                            <div className="title">
                                <p>React</p>
                            </div>
                            <figure className='flex'>
                                <img src={rating} style={ratingImgSize} alt="1/5" />
                                <img src={rating} style={ratingImgSize} alt="2/5" />
                            </figure>
                        </article>
                    </aside>
                    {/* JS rating */}
                    <aside className="1 flex items-center space-x-2 w-full">
                        <figure>
                            <img style={imgSize} src={JS} alt="" />
                        </figure>
                        {/* skills title and rating star images */}
                        <article>
                            <div className="title">
                                <p>JavaScript</p>
                            </div>
                            <figure className='flex'>
                                <img src={rating} style={ratingImgSize} alt="1/5" />
                                <img src={rating} style={ratingImgSize} alt="2/5" />
                                <img src={rating} style={ratingImgSize} alt="3/5" />
                            </figure>
                        </article>
                    </aside>
                </div>
                {/* line 1 */}
                <div className="w-1/2 space-y-2 flex flex-col justify-center sm-280:w-full sm:w-full lg:w-1/2">
                    {/* Rust rating */}
                    <aside className="1 flex items-center space-x-2 w-full">
                        <figure>
                            <img style={imgSize} src={Rust} alt="" />
                        </figure>
                        {/* skills title and rating star images */}
                        <article>
                            <div className="title">
                                <p>Rust</p>
                            </div>
                            <figure className='flex'>
                                <img src={rating} style={ratingImgSize} alt="1/5" />
                                {/* <img src={rating} style={ratingImgSize} alt="2/5" /> */}
                            </figure>
                        </article>
                    </aside>
                    {/* GoLang rating */}
                    <aside className="1 flex items-center space-x-2 w-full">
                        <figure>
                            <img style={imgSize} src={Go} alt="" />
                        </figure>
                        {/* skills title and rating star images */}
                        <article>
                            <div className="title">
                                <p>GoLang</p>
                            </div>
                            <figure className='flex'>
                                <img src={rating} style={ratingImgSize} alt="1/5" />
                                {/* <img src={rating} style={ratingImgSize} alt="2/5" /> */}
                            </figure>
                        </article>
                    </aside>
                    {/* GraphQl rating */}
                    <aside className="1 flex items-center space-x-2 w-full">
                        <figure>
                            <img style={imgSize} src={GraphQL} alt="" />
                        </figure>
                        {/* skills title and rating star images */}
                        <article>
                            <div className="title">
                                <p>GraphQL</p>
                            </div>
                            <figure className='flex'>
                                <img src={rating} style={ratingImgSize} alt="1/5" />
                                {/* <img src={rating} style={ratingImgSize} alt="2/5" /> */}
                            </figure>
                      </article>
                    </aside>
                    {/* HTMl,CSS rating */}
                        <aside className=" flex items-center space-x-2 w-full ">
                        <figure className=''>
                            <img className='w-full h-full object-cover' style={imgSize} src={Html} alt="" />
                        </figure>
                        {/* skills title and rating star images */}
                        <article>
                            <div className="title">
                                <p>HTMl,CSS</p>
                            </div>
                            <figure className='flex'>
                                <img src={rating} style={ratingImgSize} alt="1/5" />
                                <img src={rating} style={ratingImgSize} alt="2/5" />
                                <img src={rating} style={ratingImgSize} alt="3/5" />
                            </figure>
                        </article>
                    </aside>
                </div>
            </article>
        </fieldset> 

        {/* sertifocates section below */}
        <section className='w-1/2 rounded-xl flex flex-col items-center justify-around space-y-2 sm-280:items sm-280:w-full sm:w-full lg:w-1/2 pb-4'>
        {/* <div className='w-full h-full'>
            <p className='font-bold ml-8'>FAQ</p>
            <button className='flex justify-between w-full'>
                <span>+</span>
            </button>
            <div>
                <div>This is the answer</div>
            </div>
        </div> */}

        </section> 
    
    </div>    

    </main>
    </>
  )
}

export default Skill