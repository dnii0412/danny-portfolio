import React from 'react'
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
            height: '80vh',
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
        const ratingImgSize = {
            width: '16px'
        }
  return (
    <>
    <main style={size} className='bg-base flex items-start justify-evenly shadow-sm'>
      
    <div className="skils-and-cert-holder w-5/6 flex h-auto justify-between space-x-10">

        {/* skills holder 1 by 1 */}
        <section className="container-0 w-1/2 h-auto border border-borderColor rounded-xl flex flex-col items-cbenter justify-around">
                <div className="title-of-all w-5/6 h-12 flex justify-start items-center">
                    <p style={expTitle} className='font-bold '>Skills</p>
                </div>
            {/* both holder */}
            <article className='w-5/6 flex h-auto items-start '  >
                {/* line 0  */}
                <div className="line-0 w-1/2 space-y-2 ">
                    {/* figma rating */}
                    <aside className="1 flex items-center">
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
                    <aside className="1 flex items-center">
                        <figure>
                            <img style={imgSize} src={PS} alt="" />
                        </figure>
                        {/* skills title and rating star images */}
                        <article>
                            <div className="title">
                                <p>PhotShop</p>
                            </div>
                    =        <figure className='flex'>
                                <img src={rating} style={ratingImgSize} alt="1/5" />
                                <img src={rating} style={ratingImgSize} alt="2/5" />
                            </figure>
                        </article>
                    </aside>
                    {/* React rating */}
                    <aside className="1 flex items-center">
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
                    <aside className="1 flex items-center">
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
                <div className="line-1 w-1/2 space-y-2 ">
                    {/* Rust rating */}
                    <aside className="1 flex items-center">
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
                    <aside className="1 flex items-center">
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
                    <aside className="1 flex items-center">
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
                    <aside className="1 flex items-center">
                        <figure>
                            <img style={imgSize} src={Html} alt="" />
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
        </section>

        {/* sertofocates section below */}
        <section className="container-1 w-1/2 h-auto border border-borderColor rounded-xl">

        </section>

    </div>    

    </main>
    </>
  )
}

export default Skill