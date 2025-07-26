import React from "react";
import Card from "../card";
import { categories } from "../assets/assets";

function Explore() {
  return (
    <div className="px-4 mt-16 md:px-10">
      <p className="text-xl font-bold mb-2 text-center text-gray-800">
        Explore
      </p>
      <small className="block mb-4 text-center text-gray-500">
        Explore our diverse categories and discover your next great read —
        whether you’re into thrillers, history, or hidden gems waiting on the
        shelf.
      </small>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
        {categories.map((item, id) => (
          <div key={id} className="snap-start shrink-0">
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
