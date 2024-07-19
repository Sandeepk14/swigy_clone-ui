import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";

const TopRest = () => {
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState(0);
  const itemsToShow = 4;
  const itemWidth = 273; // Adjust this based on the actual width of your items including margin/padding

  const fetchTopRstaurant = async () => {
    try {
      const response = await axios.get(
        "https://swigy-api.onrender.com/top-restaurant-chains"
      );
      const apiData = response.data;
      setData(apiData);
    } catch (error) {
      console.error("Error fetching top restaurants:", error);
    }
  };

  useEffect(() => {
    fetchTopRstaurant();
  }, []);

  const nextSlide = () => {
    if (slide <= data.length - itemsToShow) {
      setSlide(slide + 1);
    }
  };

  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto items-center py-2">
      <div className="flex gap-2 items-center justify-between">
        <div className="font-bold text-[25px] pl-10">
          Top restaurant chains in Delhi
        </div>
        <div className="flex gap-2 ml-auto py-3">
          <div
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="relative max-w-[1200px] mx-auto overflow-hidden ">
        <div
          className="flex gap-10  py-3 cursor-pointer hover:scale-105 transition-transform duration-500 "
          style={{ transform: `translateX(-${slide * itemWidth}px)` }}
        >
          {data.map((d, i) => (
            <Card {...d} key={i} />
          ))}
        </div>
      </div>
      <hr className="my-6 border-[1px]" />
    </div>
  );
};

export default TopRest;
