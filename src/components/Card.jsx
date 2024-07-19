import React from "react";
import { FcPlus } from "react-icons/fc";

const Card = (props) => {
  return (
    <div className="w-full sm:w-[273px] shrink-0 grow">
      <div className="overflow-hidden h-[182px] rounded-[15px] relative">
        <img
          src={"https://swigy-api.onrender.com/images/" + props.image}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[14px] sm:text-[20px] font-bold text-white tracking-tighter bg-gradient-to-t from-black via-transparent to-transparent">
          {props.offer}
        </div>
      </div>

      <div className="mt-2 text-[14px] sm:text-[16px] font-bold">
        {props.title}
      </div>
      <div className="mt-1 text-[12px] sm:text-[14px] font-bold flex gap-2 items-center">
        <FcPlus className="inline" />
        {props.rating} . {props.minTime} - {props.maxTime}
      </div>
      <div className="mt-1 text-[12px] sm:text-[14px]">
        {props.name} <br />
        {props.place}
      </div>
    </div>
  );
};

export default Card;
