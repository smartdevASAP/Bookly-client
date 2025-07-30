import React, { useState } from "react";

const statuses = [
  { label: "Active", color: "bg-green-500" },
  { label: "Idle", color: "bg-yellow-500" },
  { label: "Inactive", color: "bg-red-500" },
];

function StatusSelector() {
  const [selectedStatus, setSelectedStatus] = useState("Active");

  return (
    <div className="w-full max-w-xs mx-auto bg-indigo-200 p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Set Status</h2>
      <div className="space-y-3">
        {statuses.map((status) => (
          <button
            key={status.label}
            onClick={() => setSelectedStatus(status.label)}
            className={`w-full flex items-center gap-2 px-4 py-2 rounded-md shadow-sm bg-white text-sm font-medium transition ${
              selectedStatus === status.label
                ? "ring-2 ring-indigo-400"
                : "hover:bg-gray-50"
            }`}
          >
            <span className={`w-3 h-3 rounded-full ${status.color}`}></span>
            <span>{status.label}</span>
          </button>
        ))}
      </div>
      <div className="mt-4 text-sm text-gray-700">
        Selected: <span className="font-semibold">{selectedStatus}</span>
      </div>
    </div>
  );
}

export default StatusSelector;
