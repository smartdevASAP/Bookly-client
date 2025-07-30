import React from "react";

const books = [
  {
    title: "Atomic Habits",
    type: "Novel",
    status: "Available",
  },
  {
    title: "Rich Dad Poor Dad",
    type: "Novel",
    status: "Few remaining",
  },
  {
    title: "Money Power",
    type: "Novel",
    status: "Borrowed",
  },
  {
    title: "Wikipedia",
    type: "Novel",
    status: "Available",
  },
];

function TopRatedBooks() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-md shadow-sm">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        Top Rated Books
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-2 text-gray-600 font-medium">Title</th>
              <th className="py-2 text-gray-400 font-medium hidden md:table-cell">
                Type
              </th>
              <th className="py-2 text-gray-400 underline font-medium">
                Action
              </th>
              <th className="py-2 text-gray-400 font-medium hidden md:table-cell">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-3 flex items-center gap-2">
                  <span className="w-4 h-4 bg-gray-200 rounded hidden md:inline-block"></span>
                  <span className="font-medium text-gray-700">
                    {book.title}
                  </span>
                </td>
                <td className="py-3 text-gray-500 hidden md:table-cell">
                  {book.type}
                </td>
                <td className="py-3">
                  <button className="bg-primary text-white px-1  md:px-3 py-1 text-xs rounded ">
                    Add to wishlist
                  </button>
                </td>
                <td className="py-3 font-medium text-gray-700 hidden md:table-cell">
                  {book.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopRatedBooks;
