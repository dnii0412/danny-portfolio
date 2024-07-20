import React from 'react'
import '../index.css'
const Contact = () => {
    const size = {
        width: '80%',
        height: '16vh',
        backGroundColor: '',
        borderTop: '1px solid #E5E7EB',
        // border: '1px solid'
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
    <main style={size} className=' bg-base flex items-center justify-center shadow-sm'>
        <div className=' w-5/6 flex items-center sm-280:flex-col sm-280:space-y-4 sm:flex-row sm:space-y-0 '>
            {/* social section below */}
            <section className='w-1/2 flex flex-col sm-280:w-full sm:w-1/2 lg:w-1/2'>
                <div className="flex items-center justify-start text-lg space-x-6 text-gray">
                    <i onClick={igClick} className="fa-brands fa-square-instagram hover:text-black  transition-colors duration-300"></i>
                    <i onClick={fbClick} className="fa-brands fa-facebook hover:text-black  transition-colors duration-300"></i>
                    <i onClick={lnkClick} className="fa-brands fa-linkedin hover:text-black  transition-colors duration-300"></i>
                    <i onClick={ytClick} className="fa-brands fa-youtube hover:text-black  transition-colors duration-300"></i>
                </div>
            </section>
            {/* text section below */}
            <section className=' w-1/2 flex flex-col items-center justify-center sm-280:w-full sm-280:items-start sm:w-1/2 lg:w-1/2'>
                <div className="w-full flex items-end justify-end sm-280:justify-start sm:justify-end">
                    <p className='text-gray font-sans text-sm align-end'>© 2024 Danny Otgontsetseg. All right reserved </p>
                </div>
            </section>
        </div>
    </main>
    </>
  )
}

export default Contact