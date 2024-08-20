import React from 'react'
import '../index.css'
import honestLogo from '../assets/honestLogo.png'
import phoneMarketLogo from '../assets/phoneMarketLogo.png'
import churchLogo from '../assets/church.png'
<<<<<<< HEAD
import {motion} from 'framer-motion'
import {fadeIn} from '../components/variants'
=======

>>>>>>> bb253e584a2b032c9589deda96da9bc78b11edb6
const exp = () => {
    const size = {
        width: '80%',
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
    function honestWsClick() {
        window.open("https://honestmedia.mn/");
        console.log("Honest Media first ver WebSite click activeted");
    }
    function phoneClick() {
        window.open("https://phonemarket-ed42e.web.app/index.html");
        console.log("phone Click activated!")
    }
  return (
    <>
    <main style={size} className='bg-base flex items-center justify-evenly shadow-sm'>
        {/* 2 ym holder */}
<<<<<<< HEAD
       <motion.div className='flex items-between justify-center w-5/6 space-x-10 sm-280:flex-col sm-280:space-x-0 sm:flex-col lg:flex-row sm:justify-center sm:space-x-0 lg:space-x-10 mt-24'>
            <motion.section className='w-1/2 flex flex-col items-center justify-center space-y-12 sm-280:w-full sm:w-full lg:w-1/2'
             variants={fadeIn('up',)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.5}}
            >
                <div className="mainTitle w-full ">
                    <motion.p className='text-xl font-bold'
                     variants={fadeIn("up", 0.2)}
                     initial="hiddenLong"
                     whileInView={"show"}
                     viewport={{once:false, amount:0.5}}
                     
                    >My Portfolio Projects</motion.p>
=======
       <div className='flex items-between justify-center w-5/6 space-x-10 sm-280:flex-col sm-280:space-x-0 sm:flex-col lg:flex-row sm:justify-center sm:space-x-0 lg:space-x-10 mt-24'>
            <section className='w-1/2 flex flex-col items-center justify-center space-y-12 sm-280:w-full sm:w-full lg:w-1/2'>
                <div className="mainTitle w-full ">
                    <p className='text-xl font-bold'>My Portfolio Projects</p>
>>>>>>> bb253e584a2b032c9589deda96da9bc78b11edb6
                </div>
                {/* Job #1 title */}
                <div className='space-y-4 w-full'>
                    {/* first project */}
<<<<<<< HEAD
                    <motion.aside onClick={honestWsClick} style={width} className=' h-42 space-y-4 rounded-xl hover:bg-white hover:shadow-sm p-6 cursor-pointer sm:w-full'
                        variants={fadeIn("up", 0.5)}
                        initial="hidden"
                        whileInView={"showWithBounce"}
                        viewport={{once:false, amount:0.5}}
                    >
=======
                    <aside onClick={honestWsClick} style={width} className=' h-42 space-y-4 rounded-xl hover:bg-white hover:shadow-sm p-6 cursor-pointer sm:w-full'>
>>>>>>> bb253e584a2b032c9589deda96da9bc78b11edb6
                        <figure>
                        <img style={imgSize} src={honestLogo} alt="Honest Logo" />
                        </figure>
                        <div className='space-y-2 last:mb-4'>
                            <p className='font-bold'>Honest Media</p>
<<<<<<< HEAD
                            <p className='text-gray'>TV advertisement company (Updated version haven't published yet)</p>
                        </div>
                    </motion.aside>
                    {/* second project */}
                    <motion.aside onClick={phoneClick} style={width} className=' h-42 space-y-4 rounded-xl hover:bg-white hover:shadow-sm p-6 cursor-pointer'
                        variants={fadeIn("up", 0.7)}
                        initial="hidden"
                        whileInView={"showWithBounce"}
                        viewport={{once:false, amount:0.5}}
                    >
=======
                            <p className='text-gray'>TV advertisement company (haven't hosted yet)</p>
                        </div>
                    </aside>
                    {/* second project */}
                    <aside onClick={phoneClick} style={width} className=' h-42 space-y-4 rounded-xl hover:bg-white hover:shadow-sm p-6 cursor-pointer'>
>>>>>>> bb253e584a2b032c9589deda96da9bc78b11edb6
                        <figure>
                        <img style={imgSize} src={phoneMarketLogo} alt="Honest Logo" />
                        </figure>
                        <div className='space-y-2 last:mb-4'>
                        <p className='font-bold'>Phone Market</p>
<<<<<<< HEAD
                        <p className='text-gray'>Phone market sketch Website (Related on every other bigger screens except for mobile devices)</p>
                        </div>
                    </motion.aside>
                </div>
            </motion.section>
            {/* Exp sect below */}
            <motion.fieldset className='w-1/2 flex flex-col items-center border border-borderColor rounded-xl sm-280:w-full sm:w-full lg:w-1/2 pb-12 mt-8'
            variants={fadeIn ("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.5}}
            >
                    <motion.legend style={expTitle} className='font-bold ml-8 '
                        variants={fadeIn ("up", 0.7)}
                        initial= "hidden"
                        whileInView={"show"}
                        viewport={{once:false, amount:0.5}}
                    >Experience</motion.legend>
                {/* experienced work 1 */}
                <motion.div className='flex w-11/12 items-center justify-center space-y-6 space-x-4 '
                    variants={fadeIn ("up", 0.8)}
                    initial="hidden"
                    whileInView="showWithBounce"
                    viewport={{once: false, amount:0.5}}
                >
=======
                        <p className='text-gray'>Phone market sketch Website (Related on PC)</p>
                        </div>
                    </aside>
                </div>
            </section>
            {/* Exp sect below */}
            <fieldset className='w-1/2 flex flex-col items-center border border-borderColor rounded-xl sm-280:w-full sm:w-full lg:w-1/2 pb-12 mt-8'>
                    <legend style={expTitle} className='font-bold ml-8 '>Experience</legend>
                {/* experienced work 1 */}
                <div className='flex w-11/12 items-center justify-center space-y-6 space-x-4 '>
>>>>>>> bb253e584a2b032c9589deda96da9bc78b11edb6
                <figure className='flex items-center justify-center h-auto' >
                    <img src={honestLogo} style={imgSize} alt="honestmedia.mn logo" className=''/>
                </figure>
                <aside className='w-10/12 h-full '>
                <div className="title ">
                    <p>Honest Media </p>
                </div>
                <div className="subtitle flex justify-between">
                    <p style={subTextSize}>Front End Developer</p>
                    <p style={subTextSize}>2022-2023</p>
                </div>
                </aside>
<<<<<<< HEAD
                </motion.div>

                {/* experienced work 2*/}
                <motion.div className='flex w-11/12 items-center justify-center space-y-6 space-x-4'
                    variants={fadeIn("up", 1)}
                    initial="hidden"
                    whileInView={"showWithBounce"}
                    viewport={{once:false, amount:0.5}}
                >
=======
                </div>

                {/* experienced work 2*/}
                <div className='flex w-11/12 items-center justify-center space-y-6 space-x-4'>
>>>>>>> bb253e584a2b032c9589deda96da9bc78b11edb6
                <figure className='flex items-center justify-center h-auto' >
                    <img src={churchLogo} style={imgSize} alt="honestmedia.mn logo" className=''/>
                </figure>
                <aside className='w-10/12 h-full '>
                <div className="title ">
                    <p>First Church</p>
                </div>
                <div className="subtitle flex justify-between">
                    <p style={subTextSize}> Sound engineer, Technician</p>
                    <p style={subTextSize}>2022-Present</p>
                </div>
                </aside>
<<<<<<< HEAD
                </motion.div>
            </motion.fieldset>
        </motion.div>
=======
                </div>
            </fieldset>
        </div>
>>>>>>> bb253e584a2b032c9589deda96da9bc78b11edb6
    </main>
    </>
  )
}

export default exp