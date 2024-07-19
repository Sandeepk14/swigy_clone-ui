import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import axios from "axios";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [slide, setSlide] = useState(0);

  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        "https://swigy-api.onrender.com/categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const visibleCount = 8;
  const itemsPerSlide = 3;
  const maxSlide = -Math.max(0, (categories.length - visibleCount) * 152);

  const nextSlide = () => {
    setSlide((prevSlide) =>
      Math.max(prevSlide - itemsPerSlide * 152, maxSlide)
    );
  };

  const preSlide = () => {
    setSlide((prevSlide) => Math.min(prevSlide + itemsPerSlide * 152, 0));
  };

  return (
    <div className="max-w-[1200px] mx-auto items-center py-3 px-4 sm:px-6 lg:px-8">
      <div className="flex gap-2 items-center justify-between">
        <div className="font-bold text-[20px] sm:text-[25px]">
          What's on your mind?
        </div>
        <div className="flex gap-2 ml-auto">
          <div
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer"
            onClick={preSlide}
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
      <div className="overflow-hidden mt-4">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(${slide}px)` }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex-grow shrink-0 w-[120px] sm:w-[152px] cursor-pointer hover:scale-105 transition-transform duration-500 mx-1 sm:mx-2"
            >
              <img
                src={`https://swigy-api.onrender.com/images/${category.image}`}
                alt={category.name}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <hr className="my-6 border-[1px]" />
    </div>
  );
};

export default Category;
