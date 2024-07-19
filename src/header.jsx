import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown, IoMdHelpBuoy, IoMdSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";

import "./index.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (toggle) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [toggle]);

  const showSideMenu = () => {
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <IoMdSearch />,
      name: "Search",
    },
    {
      icon: <BiSolidOffer />,
      name: "Offers",
      sup: "new",
    },
    {
      icon: <IoMdHelpBuoy />,
      name: "Help",
    },
    {
      icon: <RxAvatar />,
      name: "Sign in",
    },
    {
      icon: <FaCartShopping />,
      name: "Cart",
      sup: "5",
    },
  ];

  const handleSidebarClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className={`black-overlay w-full h-full fixed top-0 left-0 bg-black transition-opacity duration-500 ${
          toggle ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={hideSideMenu}
        style={{
          zIndex: 10,
        }}
      >
        <div
          ref={sidebarRef}
          onClick={handleSidebarClick}
          className={`w-72 sm:w-96 md:w-[500px] bg-white h-full absolute top-0 left-0 transition-transform duration-500 ${
            toggle ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ zIndex: 20 }}
        >
          {/* Sidebar content goes here */}
          <div className="flex justify-center py-10">
            <div className=" w-full max-w-md">
              <input
                className="border-2 border-gray-300 bg-white h-12 w-full px-5 pr-10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="search"
                name="search"
                placeholder="Search area, street or landmark..."
              />
            </div>
          </div>
        </div>
      </div>

      <header className="p-3 shadow-xl text-[#686b78]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img src="/images/logo1.png" alt="Logo" className="w-[100px]" />
          </div>
          <div className="ml-2">
            <span className="font-bold border-b-[3px] border-black">
              India Gate
            </span>{" "}
            New Delhi, Delhi, India
            <IoIosArrowDown
              onClick={showSideMenu}
              fontSize={25}
              className="font-bold cursor-pointer inline text-[#fc8019] ml-1"
            />
          </div>
          <nav className="hidden md:flex items-center gap-4 list-none ml-auto text-[18px] font-semibold">
            {links.map((link) => (
              <li
                className="flex items-center gap-2 hover:text-[#fc8019] cursor-pointer"
                key={link.name}
              >
                {link.icon}
                {link.name}
                {link.sup && <sup className="ml-1">{link.sup}</sup>}
              </li>
            ))}
          </nav>
          <div className="md:hidden ml-auto">
            <IoIosArrowDown
              onClick={showSideMenu}
              fontSize={25}
              className="font-bold cursor-pointer text-[#fc8019]"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
