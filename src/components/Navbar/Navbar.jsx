import React from 'react'
import { FaSun, FaMoon } from "react-icons/fa6";

const NavLinks = [
  {
    id: "1",
    name: "HOME",
    link: "/#"
  },
  {
    id: "2",
    name: "CARS",
    link: "/#cars"
  },
  {
    id: "3",
    name: "ABOUT",
    link: "/#about"
  },
  {
    id: "4",
    name: "BOOKINGS",
    link: "/#bookings"
  },
]
const Navbar = ({ theme, setTheme }) => {
  return (
    <nav className='shadow-md bg-white
    dark:bg-dark dark:text-white 
    duration-100'>
      <div className="container md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <h1 className='text-3xl font-bold font-serif'>Car Rental</h1>
          </div>
          <div className='hidden md:block'>
            <ul className='flex items-center gap-8'>
              {NavLinks.map((data) => (
                <li key={data.id} className='py-4'>
                  <a
                    className='inline-block
          py-2 border-b-2 border-transparent
          hover:border-primary
          hover:text-primary
          transition-colors
          duration-500 text-lg
          font-medium'
                    href={data.link}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='cursor-pointer'>
            {
              theme === "dark" ? (
                <FaSun
                  onClick={() => setTheme
                    ("light")}
                  className='text-2xl' />
              ) : (
                <FaMoon
                  onClick={() => setTheme
                    ("dark")}
                  className='text-2xl' />
              )
            }

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar