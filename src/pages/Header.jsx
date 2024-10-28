
import {
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-[#388FCB] flex flex-col">
      {/* Header */}
      <header className="bg-[#388FCB] text-white p-4 ">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="mailto:info@abc.com" className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span className="hidden sm:inline">info@abc.com</span>
            </a>
            <a href="tel:+123456789" className="flex items-center">
              <FaPhone className="mr-2" />
              <span className="hidden sm:inline">+123 456 789</span>
            </a>
          </div>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms and Condition
            </a>
          </div>
        </div>
      </header>


    </div>
  );
};

export default Header;