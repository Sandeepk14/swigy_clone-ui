import React from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

const Filter = () => {
  const filter = [
    {
      name: "Filter",
      icon: <HiOutlineMenuAlt4 />,
    },
    {
      name: "Sort By",
      icon: <IoIosArrowDown />,
    },
    {
      name: "Fast Delivery",
      icon: "",
    },
    {
      name: "New on Swiggy",
      icon: "",
    },
    {
      name: "Rating: 4.0 +",
      icon: "",
    },
    {
      name: "Pure Veg",
      icon: "",
    },
    {
      name: "Offers",
      icon: "",
    },
    {
      name: "Rs. 500 - Rs. 1000",
      icon: "",
    },
    {
      name: "Less Than Rs. 500",
      icon: "",
    },
  ];

  return (
    <div className="flex gap-4 flex-wrap py-3 px-3 sm:px-6 lg:px-8 justify-center sm:justify-start">
      {filter.map((item, index) => (
        <div
          key={index}
          className="flex border-[1px] border-[#e0e0e0] rounded-[15px] items-center justify-center text-[13px] sm:text-[15px] font-medium px-2 py-1 cursor-pointer hover:bg-[#fc8019] transition-colors duration-300"
        >
          {item.icon && <span className="mr-2">{item.icon}</span>}
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Filter;
