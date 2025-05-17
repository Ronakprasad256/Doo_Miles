import React from 'react'
import CarPng from "/jeep.png"

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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid optio ratione officiis.
                            </p>
                            <p
                            data-aos="fade-up"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos.
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