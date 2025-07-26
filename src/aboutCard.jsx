import React from "react";

function AboutCard({ item }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow flex flex-col gap-4 md:gap-6">
      <p className="font-bold text-2xl md:text-3xl text-primary">
        {item.index}
      </p>
      <h3 className="font-semibold text-gray-800 md:text-xl">{item.title}</h3>
      <p className="text-gray-500 text-sm md:text-base">{item.info}</p>
      <button className="self-start mt-2 px-4 py-2 bg-primary text-white rounded-md text-sm hover:bg-primary/90 transition">
        {item.btn_txt}
      </button>
    </div>
  );
}

export default AboutCard;
