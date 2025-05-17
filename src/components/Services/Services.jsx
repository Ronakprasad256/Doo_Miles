import React from 'react';
// import { AiOutlineSafety, FaMoneyCheckDollar, LuNotebookPen } from "react-icons/ai";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { AiOutlineSafety } from "react-icons/ai";
import { LuNotebookPen } from "react-icons/lu";
const skillData = [

    {
        name: "Best Price",
        icon: (
            <FaMoneyCheckDollar className="text-5xl
        text-primary group-hover:text-black
        duration-300" />
        ),
        link: "#",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, tempora.",
        aosDelay: "0",
    },
    {
        name: "Fast and Safe",
        icon: (
            <AiOutlineSafety className="text-5xl
        text-primary group-hover:text-black
        duration-300" />
        ),
        link: "#",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, tempora.",
        aosDelay: "0",
    },
    {
        name: "Experience Drivers",
        icon: (
            <LuNotebookPen className="text-5xl
        text-primary group-hover:text-black
        duration-300" />
        ),
        link: "#",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, tempora.",
        aosDelay: "0",
    },

]

const Services = () => {
    return (
        <div className='py-14 dark:bg-black
    dark:text-white sm:min-h-[600px] sm:grid
    sm:place-items-center'>
            <div className="container">
                <div className="pb-12">
                    <h1
                        className='text-3xl font-semibold
                text-center font-serif sm:text-4xl'>
                        Why Choose Us
                    </h1>
                    </div>
                    <div className="grid grid-cols-1 
                md:grid-cols-3 text-center gap-4">
                        {
                            skillData.map((skills) => (
                                <div
                                    key={skills.name}
                                    data-aos="fade-up"
                                    data-aos-delay={skills.aosDelay}
                                    className='cursor-pointer card text-center group
                                space-y-3 sm:space-y-6 py-4
                                sm:py-16 bg-dark hover:bg-primary
                                duration-300 text-white
                                hover:text-black rounded-lg
                                '
                                >
                                    <div className='grid place-items-center'>{skills.icon}</div>
                                    <h1>{skills.name}</h1>
                                    <p>{skills.description}</p>
                                    <a href={skills.link}>Learn More</a>
                                </div>
                            ))}
                    </div>
                
            </div>
        </div>
    )
}

export default Services