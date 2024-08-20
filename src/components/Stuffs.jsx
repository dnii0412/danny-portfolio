import React from 'react';
import '../index.css'
<<<<<<< HEAD
import {motion} from 'framer-motion'
import {fadeIn} from '../components/variants'
=======
>>>>>>> bb253e584a2b032c9589deda96da9bc78b11edb6
import honestV2 from '../assets/honestV2.webp';
import honestV1 from '../assets/honestv1.webp';
import PhoneMarket from '../assets/phoneMarket.webp';

const Stuffs = () => {

    const size = {
        width: '80%',
<<<<<<< HEAD
        height: '90vh',
=======
        // height: '36vh',
>>>>>>> bb253e584a2b032c9589deda96da9bc78b11edb6
        backgroundColor: '',
    };
    const mainImgSize = {
        width: '400px'
    };
    const sec = {
        width: '360px',
    };
    const third = {
        width: '360px',
    };
    function honestWsClick() {
        window.open("https://honestmedia.mn/");
        console.log("Honest Media first ver WebSite click activeted");
    }
    function phoneClick() {
        window.open("https://phonemarket-ed42e.web.app/index.html");
        console.log("phone Click activated!")
    }
    function honestV2Click() {
        window.alert("This Website haven't hosted yet! ");
        console.log("alert pop up activated")
    }
    return (
        <>
            <main style={size} className='bg-base shadow-sm flex flex-col items-center justify-center h-full space-y-12'>
<<<<<<< HEAD
                <div className='w-full flex justify-center text-4xl font-bold '>
                    <motion.p
                        variants={fadeIn("right", 0.4)}
                        initial="hiddenLong"
                        whileInView={"show"}
                        viewport={{once:false, amount:0.7}}
                    >Stuff I've done</motion.p>
                </div>
                <section className="container flex w-full items-center justify-center sm:flex-row sm-280:flex-col sm-280:space-y-1 sm:h-auto md:flex-row lg:flex-row xl:flex-row 2xl-flex-row">
                    {/* first project */}
                    <motion.figure className="relative flex flex-col items-center justify-center group overflow-hidden"
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"showWithBounce"}
                            viewport={{once:false, amount:0.7}}                          
                    >
=======
                <div className='w-full flex justify-center text-4xl font-bold mt-24'>
                    <p>Stuff I've done</p>
                </div>
                <section className="container flex w-full items-center justify-center sm:flex-row sm-280:flex-col sm-280:space-y-1 sm:h-auto md:flex-row lg:flex-row xl:flex-row 2xl-flex-row">
                    {/* first project */}
                    <figure className="relative flex flex-col items-center justify-center group overflow-hidden">
>>>>>>> bb253e584a2b032c9589deda96da9bc78b11edb6
                        <button onClick={honestWsClick} style={{ border: 'none', background: 'none' }}>
                            <img
                                src={honestV1}
                                style={sec}
                                alt="main WS of HonestMedia"
                                className="rounded-xl transform transition duration-300 ease-in-out group-hover:scale-105 group-hover:blur-sm z-10"
                            />
                        </button>
                        <div onClick={honestWsClick} className="viewBtn border border-base absolute rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <button className="text-white text-lg w-32">View Page</button>
                        </div>
<<<<<<< HEAD
                    </motion.figure>

                    {/* second project */}
                    <motion.figure className="relative flex flex-col items-center justify-center group overflow-hidden"
                            variants={fadeIn("up", 0.1)}
                            initial="hiddenLong"
                            whileInView={"showWithBounce"}
                            viewport={{once:false, amount:0.7}}                      
                    >
=======
                    </figure>

                    {/* second project */}
                    <figure className="relative flex flex-col items-center justify-center group overflow-hidden">
>>>>>>> bb253e584a2b032c9589deda96da9bc78b11edb6
                        <button onClick={honestV2Click} style={{ border: 'none', background: 'none' }}>
                            <img
                                src={honestV2}
                                style={mainImgSize}
                                alt="main WS of HonestMedia"
                                className="rounded-xl transform transition duration-300 ease-in-out group-hover:scale-105 group-hover:blur-sm z-10"
                            />
                        </button>
                        <div onClickCapture={honestV2Click} className="viewBtn border border-base absolute rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <button className="text-white text-lg w-32">View Page</button>
                        </div>
<<<<<<< HEAD
                    </motion.figure>

                    {/* third project */}
                    <motion.figure className="relative flex flex-col items-center justify-center group overflow-hidden"
                            variants={fadeIn("up", 0.6)}
                            initial="hidden"
                            whileInView={"showWithBounce"}
                            viewport={{once:false, amount:0.7}}                      
                    >
=======
                    </figure>

                    {/* third project */}
                    <figure className="relative flex flex-col items-center justify-center group overflow-hidden">
>>>>>>> bb253e584a2b032c9589deda96da9bc78b11edb6
                        <button onClick={phoneClick} style={{ border: 'none', background: 'none' }}>
                            <img
                                src={PhoneMarket}
                                style={third}
                                alt="main WS of HonestMedia"
                                className="rounded-xl transform transition duration-300 ease-in-out group-hover:scale-105 group-hover:blur-sm z-10"
                            />
                        </button>
                        <div onClick={phoneClick} className="viewBtn border border-base absolute rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <button className="text-white text-lg w-32">View Page</button>
                        </div>
<<<<<<< HEAD
                    </motion.figure>
=======
                    </figure>
>>>>>>> bb253e584a2b032c9589deda96da9bc78b11edb6
                </section>
            </main>
        </>
    );
}

export default Stuffs;
