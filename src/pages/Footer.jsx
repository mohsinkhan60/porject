import { ChevronLeft, ChevronRight } from 'lucide-react';

const Footer = () => {
  const phones = [
    {
      name: 'iPhone 14 Pro Max',
      description: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
      image: '/Iphone 14 pro 1.png'
    },
    {
      name: 'iPhone 14 Pro Max',
      description: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
      image: '/Iphone 14 pro 1.png'
    },
    {
      name: 'iPhone 14 Pro Max',
      description: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
      image: '/Iphone 14 pro 1.png'
    },
    {
      name: 'iPhone 14 Pro Max',
      description: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
      image: '/Iphone 14 pro 1.png'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-20 max-w-full lg:px-10">
      {/* Title Section */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center relative gap-4 rounded-full px-6 py-2">
          <span className="text-white z-50 text-3xl font-bold">Mobile</span>
          <span className="text-blue-700 text-3xl font-bold">Stock</span>
          <img src="/Vector (4).png" className="absolute h-[70px] left-2" alt="Decoration" />
        </div>
      </div>

      {/* Subtitle Section */}
      <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto w-full text-[17px] px-4 sm:px-0">
        We stay up-to-date with the latest technology trends and offer innovative solutions 
        that help you stay ahead in the competition.
      </p>

      {/* Phone Cards Section */}
      <div className="flex items-center justify-center gap-6 mb-8">
        {phones.map((phone, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md overflow-hidden border-[3px] border-[#7CC141] transition-transform hover:scale-105"
          >
            <div className="p-4 flex flex-col items-center">
              <img 
                src={phone.image} 
                alt={phone.name} 
                className="w-full h-32 object-contain mb-4" 
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {phone.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {phone.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center items-center space-x-4 mb-4">
        <button className="p-2 rounded-full text-[#7cc141] border border-[#7cc141] hover:bg-[#7cc141] hover:text-white transition">
          <ChevronLeft size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {[0, 1, 2, 3].map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition duration-300 ${
                index === 0 ? 'bg-[#7cc141]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button className="p-2 rounded-full text-[#7cc141] border border-[#7cc141] hover:bg-[#7cc141] hover:text-white transition">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Footer;
