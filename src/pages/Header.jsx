import { FaEnvelope, FaPhone } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-[#388FCB] text-white">
      {/* Header */}
      <header className="p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          
          {/* Left Section: Contact Info */}
          <div className="flex flex-row sm:flex-row items-center justify-between gap-20 lg:gap-0 sm:space-y-0 sm:space-x-4">
            <a
              href="mailto:info@abc.com"
              className="flex items-center space-x-2 hover:underline"
            >
              <FaEnvelope />
              <span className="text-sm sm:text-base">info@abc.com</span>
            </a>
            <a
              href="tel:+123456789"
              className="flex items-center space-x-2 hover:underline"
            >
              <FaPhone />
              <span className="text-sm sm:text-base">+123 456 789</span>
            </a>
          </div>

          {/* Right Section: Links */}
          <div className="flex items-center justify-between gap-16 lg:gap-0">
            <a href="#" className="hover:underline text-sm sm:text-base">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline text-sm sm:text-base">
              Terms and Condition
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

 