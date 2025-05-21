import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const FooterLinks = [
    {
        title: "Home",
        link: "#"
    },
    {
        title: "About",
        link: "#about"
    },
    {
        title: "Contact",
        link: "#contact"
    },
    {
        title: "Blog",
        link: "#blog"
    },
]

const Footer = () => {
  return (
    <div className='bg-gray-100 dark:bg-dark dark:text-white pt-14'>
        <div className="container">
            <div className='grid md:grid-cols-3 py-5'>
                {/* company details */}
                <div className='py-8 px-4'>
                    <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 gap-3 flex items-center'>
                        Car Rental
                    </h1>
                    <p>
                        Find and book your perfect ride in seconds — fast, easy, and reliable car rentals.
                    </p>
                    <br />
                    <div className='flex items-center gap-3'>
                        <FaLocationArrow/>
                        <p>DoomDooma, Tinsukia, Assam</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaMobileAlt />
                        <p>+91 9395371111</p>
                    </div>
                    {/* Social Handles */}
                    <div className='flex items-center gap-3 mt-6'>
                        <a href="#">
                            <FaInstagram className='text-3xl hover:text-primary duration-300' />
                        </a>
                        <a href="#">
                            <FaFacebook className='text-3xl hover:text-primary duration-300' />
                        </a>
                        <a href="#">
                            <FaWhatsappSquare className='text-3xl hover:text-primary duration-300' />
                        </a>
                    </div>
                </div>
                {/* NavLinks */}
                <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                    {/* First col */}
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                            <ul>
                                {FooterLinks.map((data) => (
                                    <li key={data.title} className='cursor-pointer hover:text-primary duration-300'>
                                        <span className='mr-2'>&#11162;</span>
                                        <a href={data.link}>{data.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Second col */}
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                            <ul>
                                {FooterLinks.map((data) => (
                                    <li key={data.title} className='cursor-pointer hover:text-primary duration-300'>
                                        <span className='mr-2'>&#11162;</span>
                                        <a href={data.link}>{data.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Third col */}
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                            <ul>
                                {FooterLinks.map((data) => (
                                    <li key={data.title} className='cursor-pointer hover:text-primary duration-300'>
                                        <span className='mr-2'>&#11162;</span>
                                        <a href={data.link}>{data.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Footer Bottom Text */}
        <div className='dark:bg-dark dark:text-white text-black text-center text-sm py-4 mt-4 rounded-b-3xl'>
            <p className='px-2'>
                © 2025 <span className='font-semibold'>3AR Entertainmet</span>. All Rights Reserved.
                <span className='hidden sm:inline'> | Developed by <span className='font-semibold'>.LITE TECH ☯</span></span>
            </p>
        </div>
    </div>
  )
}

export default Footer;
