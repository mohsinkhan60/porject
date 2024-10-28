
import { ArrowRight, Download, Users } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const Main = () => {
  return (
    <div className="min-h-screen container mx-auto items-center justify-center max-w-full lg:px-4 xl:px-5">
      {/* Navigation */}
      <nav className="container mx-auto px-4 pt-3 flex items-center justify-center">
        
        <ul className="hidden md:flex md:items-center md:justify-center space-x-6 font-bold text-[20px]">
          <li className="text-gray-800 border-b-2 border-green-500">Home</li>
          <li className="text-gray-600">About Us</li>
          <li className="text-gray-600">Wholesale</li>
          <div className="text-2xl font-bold text-gray-800">logo</div>
          <li className="text-gray-600">Service</li>
          <li className="text-gray-600">News</li>
          <li className="text-gray-600">How it Works</li>
        </ul>
        
      </nav>
      <div className="container mx-auto px-4 flex items-center justify-between">
      <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        </div>

      {/* Hero Section */}
      <div className="container mx-auto px-8 py-12 md:py-16 flex flex-col md:flex-row items-center">
        {/* Left Column */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Largest <span className="text-[#388FCB]">Wholesalers</span><br />
            of <span className="text-[#388FCB]">Mobile Phones</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Supply that meets Demand. Get the best wholesale prices of<br />
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
            <FaInstagram className='bg-gradient-to-br from-green-400 to-blue-300 h-7 w-7 p-1 rounded-full text-white' />
            <FaFacebook className='bg-gradient-to-br from-green-400 to-blue-300 h-7 w-7 p-1 rounded-full text-white' />
            <FaLinkedin className='bg-gradient-to-br from-green-400 to-blue-300 h-7 w-7 p-1 rounded-full text-white' />
            <FaTwitter className='bg-gradient-to-br from-green-400 to-blue-300 h-7 w-7 p-1 rounded-full text-white' />
            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 mr-2" />
              <span>400k people Registered</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 relative">
        <div className="w-28 h-28 bg-gradient-to-br from-green-400 to-blue-300 rounded-full absolute -top-20 right-0 -z-10"></div>
          <div className="w-96 h-96 bg-gradient-to-br from-green-300 to-blue-300 rounded-full absolute top-0 right-52 -z-10"></div>
          <div className="w-96 h-96 bg-gradient-to-br from-green-400 to-blue-300 rounded-full absolute top-10 right-48 -z-10"></div>
          <img src="/mobile.png" alt="Mobile Phone" className="mx-auto  z-[9999] " />
        </div>
        <img src="/Vector.png" alt="Mobile Phone" className="absolute right-0 hidden -z-10 lg:flex top-12 overflow-hidden" />
      </div>

      {/* Bottom Icons */}
      <div className="container mx-auto px-4 py-12 overflow-x-auto">
        <div className="flex items-center justify-center space-x-8 min-w-max">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img src="/Vector (2).png" alt="Phone" className="w-8" />
              <img src="/Vector (3).png" alt="Watch" className="w-8" />
              <img src="/g1413.png" alt="Headphones" className="w-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main