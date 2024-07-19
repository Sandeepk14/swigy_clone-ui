import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const BestPlaces = () => {
  const Places = [
    { name: "Best Restaurants in Bangalore" },
    { name: "Best Restaurants in Pune" },
    { name: "Best Restaurants in Mumbai" },
    { name: "Best Restaurants in Delhi" },
    { name: "Best Restaurants in Hyderabad" },
    { name: "Best Restaurants in Chennai" },
    { name: "Best Restaurants in Kolkata" },
    { name: "Best Restaurants in Ahmedabad" },
    { name: "Best Restaurants in Jaipur" },
    { name: "Best Restaurants in Chandigarh" },
    { name: "Best Restaurants in Noida" },
    { name: "Show More", icon: <IoIosArrowDown className="inline" /> },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-bold py-2 text-[20px] sm:text-[25px]">
          Best Places to Eat Across Cities
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3">
          {Places.map((place) => (
            <div
              key={place.name}
              className="flex text-[13px] sm:text-[15px] items-center justify-center font-bold cursor-pointer border rounded-[15px] border-gray-200 p-4 shadow-sm hover:bg-[#fc8019] transition-shadow duration-300"
            >
              {place.name}
              {place.icon}
            </div>
          ))}
        </div>
      </div>
      <hr className="my-6 border-[1px]" />
    </div>
  );
};

export default BestPlaces;
