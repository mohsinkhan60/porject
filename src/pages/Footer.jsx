
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Footer = () => {
  const phones = [
    {
      name: 'Iphone 14 Pro Max',
      description: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
      image: '/Iphone 14 pro 1.png'
    },
    {
      name: 'Iphone 14 Pro Max',
      description: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
      image: '/Iphone 14 pro 1.png'
    },
    {
      name: 'Iphone 14 Pro Max',
      description: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
      image: '/Iphone 14 pro 1.png'
    },
    {
      name: 'Iphone 14 Pro Max',
      description: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
      image: '/Iphone 14 pro 1.png'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-20 items-center justify-center max-w-full lg:px-4 xl:px-10">
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center relative gap-4 rounded-full px-6 py-2">
          <span className="text-white z-50 text-3xl font-bold ">Mobile </span>
          <span className="text-blue-700 text-3xl font-bold"> Stock</span>
          <img src="/Vector (4).png" className='absolute h-16 left-1' alt="" />
        </div>
       
      </div>

      <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto w-[500px] text-[17px]">
        We stay upto date with latest technology trends and offer innovative solutions, that help you stay ahead in competetion
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {phones.map((phone, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border-[3px] border-[#7CC141]">
            <div className="p-4 flex flex-col items-center justify-center">
              <img src={phone.image} alt={phone.name} className="w-full h-32 object-contain mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{phone.name}</h3>
              <p className="text-sm text-gray-600">{phone.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center space-x-4">
        <button className="p-2 rounded-full text-[#7cc141] border border-[#7cc141]">
          <ChevronLeft size={24} />
        </button>
        <div className="flex space-x-2">
          {[0, 1, 2, 3].map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === 0 ? 'bg-[#7cc141]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        <button className="p-2 rounded-full text-[#7cc141] border border-[#7cc141] ">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Footer