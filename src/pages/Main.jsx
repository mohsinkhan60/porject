import { ArrowRight, Download, Users } from "lucide-react";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Main = () => {
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleClick = (item) => {
    setActive(item);
  };

  return (
    <div>
    <div className="min-h-screen bg-[#F2FAFF] container mx-auto flex flex-col items-center justify-center max-w-full lg:px-4 xl:px-5">
      {/* Navigation */}
      <nav className="container mx-auto px-4 pt-6 h-full">
        <ul className="md:flex hidden relative items-center justify-center space-x-10 font-semibold text-[20px]">
          {["Home", "About Us", "Wholesale"].map((item) => (
            <li
              key={item}
              onClick={() => handleClick(item)}
              className={`text-[18px] relative cursor-pointer ${
                active === item ? "text-black font-bold" : "text-gray-600"
              }`}
            >
              {item}
              {active === item && (
                <span className="absolute left-0 bottom-[-2px] w-full h-[3px] bg-green-500 rounded-md" />
              )}
            </li>
          ))}
          {/* Logo Centered */}
          <div className="flex justify-center items-center">
            <img src="/Vector (6).png" alt="Logo" className="w-16" />
          </div>
          <img src="/Vector (7).png" alt="" className="absolute -top-2 pl-7" />
          {["Service", "News", "How it Works"].map((item) => (
            <li
              key={item}
              onClick={() => handleClick(item)}
              className={`text-[18px] relative cursor-pointer ${
                active === item ? "text-black font-bold" : "text-gray-600"
              }`}
            >
              {item}
              {active === item && (
                <span className="absolute left-0 bottom-[-2px] w-full h-[3px] bg-green-500 rounded-md" />
              )}
            </li>
          ))}
        </ul>
        <div className="container mx-auto px-4 flex items-center justify-between md:hidden">
          <button onClick={() => setMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <ul className="flex flex-col mt-4 space-y-4 md:hidden">
            {[
              "Home",
              "About Us",
              "Wholesale",
              "Service",
              "News",
              "How it Works",
            ].map((item) => (
              <li
                key={item}
                onClick={() => handleClick(item)}
                className={`text-[18px] cursor-pointer ${
                  active === item ? "text-black font-bold" : "text-gray-600"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <div className="container min-h-[75vh] h-full mx-auto py-12 md:py-16 flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="relative md:w-1/2 mb-12 md:mb-0 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Largest <span className="text-[#388FCB]">Wholesalers</span>
            <br />
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            of <span className="text-[#388FCB]"> Mobile Phones</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Supply that meets Demand. Get the best wholesale prices of
            <br />
            used and refurbished Mobile Stocks
          </p>
          <a href="#" className="text-blue-500 flex items-center mb-6">
            Learn More <ArrowRight className="ml-2 w-4 h-4" />
          </a>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-[#7CC140] text-white rounded-full hover:bg-green-600 transition duration-300 flex items-center justify-center">
              Subscribe <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button className="px-6 py-2 bg-[#388Fcb] text-white rounded-full transition duration-300 flex items-center justify-center">
              <Download className="mr-2 w-4 h-4" /> Stock List
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <FaInstagram className="bg-gradient-to-br from-green-400 to-blue-300 h-7 w-7 p-1 rounded-full text-white" />
            <FaFacebook className="bg-gradient-to-br from-green-400 to-blue-300 h-7 w-7 p-1 rounded-full text-white" />
            <FaLinkedin className="bg-gradient-to-br from-green-400 to-blue-300 h-7 w-7 p-1 rounded-full text-white" />
            <FaTwitter className="bg-gradient-to-br from-green-400 to-blue-300 h-7 w-7 p-1 rounded-full text-white" />
            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 mr-2 text-[#7CC140]" />
              <span className="text-[#388Fcb] mr-1"> 400k</span>
              <span className="text-[#7CC140]"> people Registered</span>
            </div>
          </div>
          <div className="container absolute mx-auto hidden lg:flex flex-col space-y-4 px-4 py-12">
            {/* Gradient Bar 1 */}
            <div className="w-full h-5 rounded-r-full bg-gradient-to-r from-green-400 to-blue-500"></div>
            {/* Gradient Bar 2 */}
            <div className="w-full h-5 rounded-r-full bg-gradient-to-r from-blue-400 to-green-500"></div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 relative">
          <img
            src="/Vector (5).png"
            alt="Decoration"
            className="w-32 h-32 hidden md:flex absolute -top-20 right-0"
          />
          <img
            src="/Vector (8).png"
            alt="Decoration"
            className="w-32 h-32 absolute hidden md:flex -top-20 -right-2"
          />
          <img
            src="/Vector (5).png"
            alt="Decoration"
            className="w-96 h-96 rounded-full hidden md:flex absolute top-0 right-48"
          />
          <img
            src="/Vector (8).png"
            alt="Decoration"
            className="w-96 h-96 rounded-full hidden md:flex absolute top-5 right-44"
          />
          <img
            src="/mobile.png"
            alt="Mobile Phone"
            className="mx-auto z-50 absolute hidden lg:flex top-0 left-1/2 -translate-x-1/2"
          />
        </div>
        <img
          src="/Vector.png"
          alt="Decoration"
          className="absolute right-0 hidden z-10 lg:flex top-12 overflow-hidden"
        />
      </div>

      {/* Bottom Icons */}
      <div className="container mx-auto px-4 py-12 overflow-hidden">
        <div className="scrolling-content space-x-8">
          {/* Original set of images */}
          {[...Array(9)].map((_, index) => (
            <div key={index} className="flex items-center space-x-10">
              <img src="/Vector (2).png" alt="Phone" className="w-8 mx-3" />
              <img src="/Vector (3).png" alt="Watch" className="w-8 mx-3" />
              <img src="/g1413.png" alt="Headphones" className="w-8 mx-3" />
            </div>
          ))}
          {/* Duplicate the items to create the illusion of infinite scrolling */}
          {[...Array(9)].map((_, index) => (
            <div key={index + 9} className="flex items-center space-x-10">
              <img src="/Vector (2).png" alt="Phone" className="w-8 mx-3" />
              <img src="/Vector (3).png" alt="Watch" className="w-8 mx-3" />
              <img src="/g1413.png" alt="Headphones" className="w-8 mx-3" />
            </div>
          ))}
          {[...Array(9)].map((_, index) => (
            <div key={index + 9} className="flex items-center space-x-10">
              <img src="/Vector (2).png" alt="Phone" className="w-8 mx-3" />
              <img src="/Vector (3).png" alt="Watch" className="w-8 mx-3" />
              <img src="/g1413.png" alt="Headphones" className="w-8 mx-3" />
            </div>
          ))}
          {[...Array(9)].map((_, index) => (
            <div key={index + 9} className="flex items-center space-x-10">
              <img src="/Vector (2).png" alt="Phone" className="w-8 mx-3" />
              <img src="/Vector (3).png" alt="Watch" className="w-8 mx-3" />
              <img src="/g1413.png" alt="Headphones" className="w-8 mx-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="-translate-y-2">
    <img src="Vector (9).png" className="w-full z-50 hidden lg:flex" alt="" />
    </div>
    </div>
  );
};

export default Main;
