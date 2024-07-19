import React from 'react'

const Contact = () => {
    const size = {
        width: '80%',
        height: '16vh',
        backGroundColor: '#F5F7F8',
        borderTop: '1px solid #E5E7EB'
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
        <main style={size} className='container bg-base flex items-center justify-evenly shadow-sm'>
                <div className='w-full flex '>
            {/* social section below */}
            <section className='w-1/2 '>
                <div className="flex items-start justify-start text-lg space-x-6 text-gray">
                    <i onClick={igClick} className="fa-brands fa-square-instagram"></i>
                    <i onClick={fbClick} className="fa-brands fa-facebook"></i>
                    <i onClick={lnkClick} className="fa-brands fa-linkedin"></i>
                    <i onClick={ytClick} className="fa-brands fa-youtube"></i>
                </div>
            </section>
            {/* text section below */}
            <section className='w-1/2 flex flex-col items-end justify-end '>
                <div className="w-full flex items-center justify-end">
                    <p className='text-gray font-sans text-sm'>© 2024 Danny Otgontsetseg. All right reserved </p>
                </div>
            </section>
            </div>
        </main>
    </>
  )
}

export default Contact