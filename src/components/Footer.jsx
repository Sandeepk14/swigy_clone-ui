import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-black text-white py-6 px-4 md:py-10 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
        <div>
          <div className="font-bold text-xl md:text-2xl mb-2">Swiggy</div>
          <div className="text-sm md:text-base">
            © 2024 Bundl <br /> Technologies Pvt. Ltd
          </div>
        </div>
        <div>
          <ul className="list-none space-y-2 text-sm md:text-base">
            <li className="font-bold text-lg md:text-xl mb-2">Company</li>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Genie</li>
          </ul>
        </div>
        <div>
          <ul className="list-none space-y-2 text-sm md:text-base">
            <li className="font-bold text-lg md:text-xl mb-2">Contact us</li>
            <li>Help & Support</li>
            <li>Partner with Us</li>
            <li>Ride with Us</li>
            <li className="font-bold text-lg md:text-xl mt-3">Legal</li>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
          </ul>
        </div>
        <div>
          <ul className="list-none space-y-2 text-sm md:text-base">
            <li className="font-bold text-lg md:text-xl mb-2">
              We deliver to:
            </li>
            <li>Bangalore</li>
            <li>Pune</li>
            <li>Noida</li>
            <li>Gujarat</li>
            <li>Hyderabad</li>
            <li className="border border-white rounded-md inline-block text-center py-1 px-3 md:py-2 md:px-4 cursor-pointer hover:bg-gray-800">
              Show More
              <IoIosArrowDown className="inline ml-1" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
