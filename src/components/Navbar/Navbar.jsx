import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon, FaLocationDot } from "react-icons/fa6";
import "./Navbar.css";
import { auth, provider } from '../Firebase';
import { signInWithPopup, signOut } from "firebase/auth";

const NavLinks = [
  { id: "1", name: "HOME", link: "/#" },
  { id: "2", name: "CARS", link: "/#cars" },
  { id: "3", name: "ABOUT", link: "/#about" },
  { id: "4", name: "BOOKINGS", link: "/#bookings" },
];

const Navbar = ({ theme, setTheme }) => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [locationName, setLocationName] = useState("No location fetched");
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showLocationPermissionPopup, setShowLocationPermissionPopup] = useState(false); // NEW STATE
  const [triggerSignInAfterLocation, setTriggerSignInAfterLocation] = useState(false); // CONTROL FLOW

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

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

  const handleGoogleSignIn = () => {
    if (!locationEnabled) {
      setShowLocationPermissionPopup(true);
    } else {
      signInWithGoogle();
    }
  };

  const signInWithGoogle = async () => {
    try {
      setIsAuthLoading(true);
      const result = await signInWithPopup(auth, provider);
      const loggedUser = {
        name: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      };
      setUser(loggedUser);
      localStorage.setItem('user', JSON.stringify(loggedUser));
    } catch (error) {
      console.error("Google Sign-In Error:", error.code, error.message);
      alert(`Sign-in failed: ${error.message}`);
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setIsAuthLoading(true);
      await signOut(auth);
      setUser(null);
      localStorage.removeItem('user');
      setDropdownOpen(false);
    } catch (error) {
      console.error("Logout failed:", error.message);
      alert("Logout failed. Try again.");
    } finally {
      setIsAuthLoading(false);
    }
  };

  const fetchLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setIsLoadingLocation(true);

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
          setLocationEnabled(true);
          localStorage.setItem("locationEnabled", true);
        } catch (error) {
          console.error("Geocoding failed:", error);
          setLocationName("Failed to get city name");
        } finally {
          setIsLoadingLocation(false);
          if (triggerSignInAfterLocation) {
            setTriggerSignInAfterLocation(false);
            signInWithGoogle();
          }
        }
      },
      (error) => {
        alert("Unable to retrieve your location.");
        console.error(error);
        setIsLoadingLocation(false);
      }
    );
  };

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

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length < 3) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    try {
      setIsSearching(true);
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
      );
      const results = await response.json();
      setSearchResults(results);
    } catch (error) {
      console.error("Search failed:", error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleLocationSelect = (location) => {
    const displayName = location.display_name || "Unknown location";
    setLocationName(displayName);
    localStorage.setItem("locationName", displayName);
    setIsLocationModalOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleAllowLocationAndSignIn = () => {
    setShowLocationPermissionPopup(false);
    setTriggerSignInAfterLocation(true);
    fetchLocation();
  };

  return (
    <nav className='shadow-md bg-white dark:bg-dark dark:text-white duration-100 relative z-50'>
      <div className="md:py-0">
        <div className="flex justify-between items-center flex-wrap gap-4 py-2 px-4">
          {/* Left: Logo + Location */}
          <div className="flex items-center gap-4">
            <img 
              src="/logo.png" 
              className="w-[60px] h-[50px] sm:w-[120px] sm:h-[90px] md:w-[110px] md:h-[80px]" 
              alt="Logo" 
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="checkboxInput"
                checked={locationEnabled}
                onChange={handleLocationToggle}
                className="hidden-checkbox"
              />
              <label htmlFor="checkboxInput" className="toggleSwitch"></label>
              <div 
                className='text-sm max-w-[160px] truncate flex items-center gap-1 cursor-pointer'
                onClick={() => locationEnabled && setIsLocationModalOpen(true)}
              >
                <span className='truncate'>{locationName}</span>
                <FaLocationDot className="text-blue-500" />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className='flex items-center gap-4'>
            <div className='hidden md:flex items-center gap-8'>
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

              <div className='cursor-pointer text-xl'>
                {theme === "dark" ? (
                  <FaSun onClick={() => setTheme("light")} />
                ) : (
                  <FaMoon onClick={() => setTheme("dark")} />
                )}
              </div>

              <div className="relative">
                {!user ? (
                  <button
                    onClick={handleGoogleSignIn}
                    className="bg-primary text-black px-4 py-2 rounded hover:bg-primary/60 transition"
                  >
                    Sign In
                  </button>
                ) : (
                  <div className="relative">
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300"
                    />
                    {dropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg p-3 z-50 dark:bg-dark dark:text-white">
                        <p className="font-semibold mb-2">{user.name}</p>
                        <button className="w-full text-left py-1 hover:text-blue-500">
                          Your Bookings
                        </button>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left py-1 text-red-500 hover:underline"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Hamburger */}
            <button
              className='block md:hidden text-2xl'
              onClick={() => setMenuOpen(!menuOpen)}
            >
              &#9776;
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-dark shadow-lg z-50 p-6 flex flex-col gap-4 transition-transform duration-300 md:hidden">
          <button className="self-end text-xl mb-4" onClick={() => setMenuOpen(false)}>✕</button>
          <div className='mt-4 flex items-center gap-2'>
            <span className='font-medium'>Mode:</span>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="text-xl">
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          <div className="mt-6">
            {!user ? (
              <button
                onClick={handleGoogleSignIn}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Sign In
              </button>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <img src={user.photoURL} className="w-10 h-10 rounded-full" alt="User" />
                  <span className="font-medium">{user.name}</span>
                </div>
                <button className="block text-left py-1 hover:text-blue-500">Your Bookings</button>
              </div>
            )}
          </div>

          <ul className='flex flex-col gap-4'>
            {NavLinks.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="text-lg hover:text-primary transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>

          {user && (
            <button
              onClick={handleLogout}
              className="block text-left py-1 text-red-500 hover:underline"
            >
              Logout
            </button>
          )}
        </div>
      )}

      {/* Global Loader */}
      {(isLoadingLocation || isAuthLoading) && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999]">
          <div className="loader">
            <span></span>
          </div>
        </div>
      )}

      {/* Location Modal */}
      {isLocationModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999]">
          <div className="bg-white dark:bg-dark rounded-lg shadow-xl p-6 w-[90%] max-w-md">
            <h2 className="text-lg font-semibold mb-4 text-center">Change your location</h2>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Change your location"
              className="w-full px-4 py-2 border rounded mb-4 dark:text-black"
            />
            <div className="max-h-60 overflow-y-auto">
              {isSearching && (
                <p className="text-sm text-center text-blue-500 mb-2">Searching...</p>
              )}
              {searchResults.length > 0 ? (
                searchResults.map((loc, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleLocationSelect(loc)}
                  >
                    {loc.display_name}
                  </div>
                ))
              ) : (
                searchQuery.length >= 3 &&
                !isSearching && (
                  <p className="text-sm text-center text-gray-500">No results found</p>
                )
              )}
            </div>
            <button
              onClick={() => setIsLocationModalOpen(false)}
              className="mt-4 block w-full py-2 text-center bg-red-500 text-white rounded hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Location Permission Alert */}
      {showLocationPermissionPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999]">
          <div className="bg-white dark:bg-dark rounded-lg shadow-xl p-6 w-[90%] max-w-md text-center">
            <h2 className="text-lg font-semibold mb-6">Before Sign In Allow The Location Access</h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleAllowLocationAndSignIn}
                style={{ backgroundColor: "#ffc727" }}
                className="px-4 py-2 rounded text-black font-medium hover:opacity-90"
              >
                Allow
              </button>
              <button
                onClick={() => setShowLocationPermissionPopup(false)}
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
