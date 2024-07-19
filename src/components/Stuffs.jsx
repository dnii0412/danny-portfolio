import React from 'react';
import honestV2 from '../assets/honestV2.webp';
import honestV1 from '../assets/honestv1.webp';
import PhoneMarket from '../assets/phoneMarket.webp';

const Stuffs = () => {

    const size = {
        width: '80%',
        height: '36vh',
        backgroundColor: '#F5F7F8',
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
                <div className='w-full flex justify-center text-4xl font-bold'>
                    <p>Stuff I've done</p>
                </div>
                <section className="container flex w-full items-center justify-center">
                    {/* first project */}
                    <figure className="relative flex flex-col items-center justify-center group overflow-hidden">
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
                    </figure>

                    {/* second project */}
                    <figure className="relative flex flex-col items-center justify-center group overflow-hidden">
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
                    </figure>

                    {/* third project */}
                    <figure className="relative flex flex-col items-center justify-center group overflow-hidden">
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
                    </figure>
                </section>
            </main>
        </>
    );
}

export default Stuffs;
