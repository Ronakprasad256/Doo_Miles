import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon, FaLocationDot } from "react-icons/fa6";
import "./Navbar.css"

const NavLinks = [
  { id: "1", name: "HOME", link: "/#" },
  { id: "2", name: "CARS", link: "/#cars" },
  { id: "3", name: "ABOUT", link: "/#about" },
  { id: "4", name: "BOOKINGS", link: "/#bookings" },
];

const Navbar = ({ theme, setTheme }) => {
  const [locationName, setLocationName] = useState("No location fetched");
  const [locationEnabled, setLocationEnabled] = useState(false);

  // Load saved state on page load
  useEffect(() => {
    const enabled = localStorage.getItem("locationEnabled") === "true";
    const savedLocation = localStorage.getItem("locationName");

    if (enabled) {
      setLocationEnabled(true);
      if (savedLocation) {
        setLocationName(savedLocation);
      } else {
        fetchLocation();
      }
    }
  }, []);

  // Fetch location and reverse geocode it
  const fetchLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await response.json();
          const city = data?.address?.city || data?.address?.town || data?.address?.village || data?.display_name;
          const finalLocation = city || "Location not found";

          setLocationName(finalLocation);
          localStorage.setItem("locationName", finalLocation);
        } catch (error) {
          console.error("Geocoding failed:", error);
          setLocationName("Failed to get city name");
        }
      },
      (error) => {
        alert("Unable to retrieve your location.");
        console.error(error);
      }
    );
  };

  // Handle toggle switch
  const handleLocationToggle = () => {
    const newState = !locationEnabled;
    setLocationEnabled(newState);
    localStorage.setItem("locationEnabled", newState);

    if (newState) {
      fetchLocation();
    } else {
      setLocationName("No location fetched");
      localStorage.removeItem("locationName");
    }
  };

  return (
    <nav className='shadow-md bg-white dark:bg-dark dark:text-white duration-100'>
      <div className="container md:py-0">
        <div className="flex justify-between items-center flex-wrap gap-4 py-2 px-4">
          {/* Logo */}
          <div>
            <img 
              src="/logo.png" 
              className="w-[100px] h-[80px] sm:w-[120px] sm:h-[90px] md:w-[130px] md:h-[100px]" 
              alt="Logo" 
            />
          </div>

          {/* Navigation Links */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-8'>
              {NavLinks.map((data) => (
                <li key={data.id} className='py-4'>
                  <a
                    className='inline-block py-2 border-b-2 border-transparent hover:border-primary hover:text-primary transition-colors duration-500 text-lg font-medium'
                    href={data.link}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Toggle + Theme */}
          <div className='flex items-center gap-4'>
            {/* Toggle + Location Display */}
            <div className="flex items-center gap-2">
  {/* Custom toggle switch */}
  <input
    type="checkbox"
    id="checkboxInput"
    checked={locationEnabled}
    onChange={handleLocationToggle}
    className="hidden-checkbox"
  />
  <label htmlFor="checkboxInput" className="toggleSwitch"></label>

  {/* Location text and icon */}
  <div className='text-sm max-w-[160px] truncate flex items-center gap-1'>
    <span className='truncate'>{locationName}</span>
    <FaLocationDot className="text-blue-500" />
  </div>
</div>


            {/* Theme Toggle Dark & Light Mode*/}
            <div className='cursor-pointer text-xl'>
              {theme === "dark" ? (
                <FaSun onClick={() => setTheme("light")} />
              ) : (
                <FaMoon onClick={() => setTheme("dark")} />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
