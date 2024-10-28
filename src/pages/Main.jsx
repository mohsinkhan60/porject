
import { ArrowRight, Download, Users } from 'lucide-react';

const Main = () => {
  return (
    <div className="min-h-screen container mx-auto items-center justify-center max-w-full lg:px-4 xl:px-5">
      {/* Navigation */}
      <nav className="container mx-auto px-4 pt-3 flex items-center justify-center">
        
        <ul className="hidden md:flex md:items-center md:justify-center space-x-6">
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
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
        {/* Left Column */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Largest <span className="text-blue-500">Wholesalers</span><br />
            of <span className="text-blue-500">Mobile Phones</span>
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
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 flex items-center justify-center">
              Subscribe <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 flex items-center justify-center">
              <Download className="mr-2 w-4 h-4" /> Stock List
            </button>
          </div>
          <div className="flex items-center space-x-4">
            {['instagram', 'facebook', 'linkedin-in', 'twitter'].map((icon, index) => (
              <a key={index} href="#" className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 mr-2" />
              <span>400k people Registered</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 relative">
          <div className="w-64 h-64 bg-gradient-to-br from-green-300 to-blue-300 rounded-full absolute top-0 right-0 -z-10"></div>
          <img src="/placeholder.svg?height=600&width=400" alt="Mobile Phone" className="mx-auto" />
        </div>
      </div>

      {/* Bottom Icons */}
      <div className="container mx-auto px-4 py-12 overflow-x-auto">
        <div className="flex space-x-8 min-w-max">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img src="/placeholder.svg?height=50&width=30" alt="Phone" className="w-8" />
              <img src="/placeholder.svg?height=50&width=50" alt="Watch" className="w-8" />
              <img src="/placeholder.svg?height=50&width=50" alt="Headphones" className="w-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main