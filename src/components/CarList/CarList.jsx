import React from 'react'
import whiteCar from "/swift1.png"
import scor from "/scor.png"
import eon from "/eon.png"

const CarListData = [
    {
        name: "Swift",
        price: 1200,
        image: whiteCar,
        aosDelay: "300",
        km: "16KM"
    },
    {
        name: "Scorpio",
        price: 1500,
        image: scor,
        aosDelay: "400",
        km: "14KM"
    },
    {
        name: "Eon",
        price: 900,
        image: eon,
        aosDelay: "500",
        km: "18KM"
    },
]

const CarList = () => {
    return (
        <div className='pb-24 pt-12 bg-white dark:bg-dark dark:text-white'>
            <div className="container">
                {/* heading */}
                <h1
                    data-aos="fade-up"
                    className='text-primary text-3xl sm:text-4xl font-semibold font-serif mb-3'
                >
                    Miles of Smiles Begin with Your Ride
                </h1>
                <p>Let me know if you’d like variations for a specific tone—fun, professional, luxury, etc.</p>
                {/* car listing cards */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 pt-14'>
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
                                                <p>&#8377;
{data.price}/day</p>
                                                {/* <a href="#">Details</a> */}
                                            </div>
                                        </div>
                                        <p className='text-xl font-semibold absolute top-0 left-3'>{data.km}</p>
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
