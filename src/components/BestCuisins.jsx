import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Cuisins = () => {
  const cuisins = [
    { name: "Chinies Cuisines Near Me" },
    { name: "Chinies Cuisines Near Me" },
    { name: "Chinies Cuisines Near Me" },
    { name: "Delhi Cuisines Near Me" },
    { name: "Hyderabad Cuisines Near Me" },
    { name: "Chennai Cuisines Near Me" },
    { name: "Kolkata Cuisines Near Me" },
    { name: "Ahmedabad Cuisines Near Me" },
    { name: "Jaipur Cuisines Near Me" },
    { name: "Chandigarh Cuisines Near Me" },

    { name: "Show More", icon: <IoIosArrowDown className="inline" /> },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-bold py-2 text-[20px] sm:text-[25px]">
          Best Cuisines Near Me
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3">
          {cuisins.map((cuisin) => (
            <div
              key={cuisin.name}
              className="flex items-center justify-center text-[13px] sm:text-[15px] font-bold cursor-pointer border rounded-[15px] border-gray-200 p-4 shadow-sm hover:bg-[#fc8019] transition-shadow duration-300"
            >
              {cuisin.name}
              {cuisin.icon}
            </div>
          ))}
        </div>
      </div>
      <hr className="my-6 border-[1px]" />
    </div>
  );
};

export default Cuisins;
