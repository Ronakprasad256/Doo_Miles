import React from 'react'
import pattern from "/pattern.jpeg.jpg"
import playstore from "/playstore.png"

const bannerImg = {
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
}

const AppStoreBanner = () => {
  return (
    <div className='px-28 pb-14 bg-white dark:bg-black
        dark:text-white'>
        <div
          className=' text-black py-10 sm:min-h-[400px]
          sm:grid sm:place-items-center rounded-xl'
          style={bannerImg}
        >
            <div>
                <div className='space-y-3 max-w-xl mx-auto'>
                    <h1
                      data-aos="fade-up"
                      className='text-2xl text-center sm:text-4xl font-semibold font-serif'
                    >
                      Get Started with our app
                    </h1>
                    <p
                      data-aos="fade-up"
                      className='text-center sm:px-20'
                    >
                      Find and book your perfect ride in seconds — fast, easy, and reliable car rentals.
                    </p>
                    <div className="flex flex-wrap justify-center items-center" data-aos="fade-up">
                        <a href="#">
                            <img className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' src={playstore} alt="Get it on Play Store" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppStoreBanner
