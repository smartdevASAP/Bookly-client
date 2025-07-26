import React from "react";

function Card({ item }) {
  return (
    <div className="flex flex-col items-center min-w-[120px] md:min-w-[180px] bg-white shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow">
      <img
        className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full object-cover mb-2"
        src={item.img}
        alt={item.title}
      />
      <p className="text-center text-xs md:text-sm text-gray-700 font-medium">
        {item.title}
      </p>
    </div>
  );
}

export default Card;
