import React from 'react'
import CarPng from "/logo.png"

const About = () => {
    return (
        <div className=' dark:bg-dark bg-slate-100
     dark:text-white duration-100 sm:min-h-[600px]
     sm:grid sm:place-items-center
     '>
            <div className="container">
                <div className="grid grid-cols-1
            sm:grid-cols-2 place-items-center
            ">
                    <div
                    data-aos="slide-right"
                    data-aos-duration="1500"
                    // data-aos-once="false"
                    >
                        <img src={CarPng} alt=""
                        className='sm:scale-105
                        sm:-translate-x-11 max-h-[300px]
                        '
                        />
                    </div>
                    <div>
                        <div className='space-y-5 
                        sm:p-16 pb-6
                        '>
                            <h1 
                            data-aos="fade-up"
                            className="text-3xl
                    sm:text-4xl font-boldfont-serif
                    ">
                                About us
                            </h1>
                            <p
                            data-aos="fade-up"
                            >
                                Welcome to your trusted local car rental service, right here in our small but vibrant city.
We make transportation easy, affordable, and reliable for residents and visitors alike.
Whether it's for daily errands or weekend getaways, we’ve got the perfect ride for you.
                            </p>
                            <p
                            data-aos="fade-up"
                            >
                                Choose from a range of well-maintained vehicles suited for city roads and beyond.
Our quick booking process and friendly service ensure a smooth experience every time.
Drive with confidence, knowing support is just around the corner—literally.
                            </p>
                            <button
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            className='button-outline'
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About