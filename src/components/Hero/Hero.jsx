import React, { useEffect } from 'react';
import carPng from "/darkcar.png";
import chatGptImage from "/swift.png";

const Hero = ({ theme }) => {
    useEffect(() => {
        // This will run when the component mounts
        const car = document.querySelector('.moving-car');
        if (car) {
            // Reset position before animation
            car.style.transform = 'translateX(100%)';
            
            // Start animation after a small delay
            setTimeout(() => {
                car.style.transition = 'transform 1.5s ease-in-out';
                car.style.transform = 'translateX(0)';
            }, 100);
        }
    }, []);

    return (
        <div className='dark:bg-black dark:text-white duration-100 relative-z-20'>
            <div className="container min-h-[620px] flex">
                <div className='grid items-start text-left sm:place-items-center grid-cols-1 sm:grid-cols-2'>

                    <div
                        data-aos='zoom-in'
                        data-aos-duration="1500"
                        className='order-1 sm:order-2 relative overflow-hidden'
                    >
                        {/* Moving car animation */}
                        <img 
                            src={theme === "dark" ? carPng : chatGptImage} 
                            alt="car"
                            className='moving-car relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]' 
                        />
                    </div>
                    <div className='order-2 sm:order-1 space-y-5 sm:pr-32'>
                        <p 
                            data-aos='fade-up'
                            data-aos-delay="400"
                            className='text-primary text-3xl font-serif'
                        >
                            Effortless
                        </p>
                        <h1
                            data-aos='fade-up'
                            data-aos-delay="400"
                            className='text-5xl lg:text-7xl font-semibold'
                        >
                            Car Rental
                        </h1>
                        <p
                            data-aos='fade-up'
                            data-aos-delay="400"
                        >
                            Miles of Smiles Begin with Your Ride
                        </p>
                        <button data-aos="fade-up" className='button-outline'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;