import React from "react";
import Card from "./dashContent/card";
import { userCard } from "../../assets/assets";
import TopRatedBooks from "./dashContent/topRated";
import StatusSelector from "./dashContent/statusSelector";
function Dashboard() {
  return (
    <>
      <h1 className="text-gray-600 text-xl mb-4">Dashboard</h1>

      <div className="p-2 md:flex gap-5">
        {/* Left main content */}
        <div className="w-full md:w-[80%] space-y-8">
          {/* Quick Access */}
          <div className="bg-indigo-100 rounded-sm p-4 w-full">
            <h2 className="md:text-2xl text-xs mb-4">Quick Access</h2>
            <div className="flex gap-4 overflow-x-auto bg-white p-4 rounded-sm">
              {userCard.map((item, _id) => (
                <Card item={item} key={_id} />
              ))}
            </div>
          </div>

          {/* More content below */}
          <div className="rounded-sm p-4">
            <div>
              <TopRatedBooks />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full  rounded-sm p-4 mt-8 md:mt-0">
          <StatusSelector />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
