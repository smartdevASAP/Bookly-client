import React from "react";

function Card({ item }) {
  return (
    <div className="p-4 rounded-md shadow-sm">
      <img className="h-[30px] block mx-auto" src={item.img} alt="" />
      <p className="text-xs text-gray-400">{item.text}</p>
    </div>
  );
}

export default Card;
