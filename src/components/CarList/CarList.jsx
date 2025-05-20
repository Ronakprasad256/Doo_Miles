import React from 'react'
import whiteCar from "/bmw.png"
import scor from "/scor.png"
import scorpio from "/scorpio.png"

const CarListData = [
    {
        name: "BMW UX",
        price: 100,
        image: whiteCar,
        aosDelay: "0",
    },
    {
        name: "KIA UX",
        price: 140,
        image: scor,
        aosDelay: "500",
    },
    {
        name: "BMW UX",
        price: 120,
        image: scorpio,
        aosDelay: "1000",
    },
]

const CarList = () => {
    return (
        <div className='pb-24 pt-12 bg-white dark:bg-dark dark:text-white'>
            <div className="container">
                {/* heading */}
                <h1
                    data-aos="fade-up"
                    className='text-3xl sm:text-4xl font-semibold font-serif mb-3'
                >
                    Miles of Smiles Begin with Your Ride
                </h1>
                {/* car listing cards */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
                        {
                            CarListData.map((data, index) => {
                                return (
                                    <div
                                        key={`${data.name}-${data.price}-${index}`}
                                        data-aos="fade-up"
                                        data-aos-duration={data.aosDelay}
                                        className='space-y-3 border-2 border-gray-300 hover:border-primary cursor-pointer p-3 rounded-xl relative group'
                                    >
                                        <div className='w-full h-[120px]'>
                                            <img
                                                className='w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-24 duration-700'
                                                src={data.image}
                                                alt=""
                                            />
                                        </div>
                                        <div className='space-y-2'>
                                            <h1 className='text-primary font-semiboldsem'>{data.name}</h1>
                                            <div className='flex justify-between items-center text-xl font-semibold'>
                                                <p>${data.price}/day</p>
                                                <a href="#">Details</a>
                                            </div>
                                        </div>
                                        <p className='text-xl font-semibold absolute top-0 left-3'>12Km</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className='grid place-content-center mt-8'>
                    <button data-aos="fade-up" className='button-outline'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default CarList;
