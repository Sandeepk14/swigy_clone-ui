import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import Filter from "./Filter";

const FoodDelivery = () => {
  const [delivery, setDelivery] = useState([]);

  const fetchDelivery = async () => {
    try {
      const response = await axios.get(
        "https://swigy-api.onrender.com/top-restaurant-chains"
      );
      setDelivery(response.data);
    } catch (error) {
      console.error("Error fetching delivery:", error);
    }
  };

  useEffect(() => {
    fetchDelivery();
  }, []);

  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);
  const stickyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current && stickyRef.current) {
        const sticky = stickyRef.current.getBoundingClientRect().top;
        setIsSticky(sticky <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state based on the current scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-[20px] sm:text-[25px] font-bold mb-4">
          Restaurants with online food delivery in Delhi
        </div>
        <div
          ref={stickyRef}
          className={`transition-transform duration-300 ${
            isSticky
              ? "fixed top-0 left-0 right-0 bg-white shadow-lg"
              : "relative"
          }`}
          style={{ zIndex: 9999 }}
        >
          <Filter />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5">
          {delivery.map((d, i) => (
            <div
              key={i}
              className="cursor-pointer hover:scale-105 transition-transform duration-500"
            >
              <Card {...d} />
            </div>
          ))}
        </div>
      </div>
      <hr className="my-6 border-[1px]" />
    </div>
  );
};

export default FoodDelivery;
