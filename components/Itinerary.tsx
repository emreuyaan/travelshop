"use client";

import { useState } from "react";

export default function Itinerary({ days }: { days: any[] }) {
  const [openDay, setOpenDay] = useState<number | null>(1); // Open first day by default

  const toggleDay = (day: number) => {
    setOpenDay(openDay === day ? null : day);
  };

  return (
    <div className="space-y-4">
      {days.map((item) => (
        <div key={item.day} className="border rounded-lg overflow-hidden bg-white shadow-sm">
          <button
            onClick={() => toggleDay(item.day)}
            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none"
          >
            <div className="flex items-center space-x-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#854EC9] text-white font-bold text-sm">
                {item.day}
              </span>
              <span className="font-semibold text-gray-900 text-left">{item.title}</span>
            </div>
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                openDay === item.day ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div
            className={`transition-all duration-300 ease-in-out ${
              openDay === item.day ? "max-h-96 opacity-100 p-4 border-t" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
            {/* Mock content specific to the item if description is short */}
            <div className="mt-4 flex space-x-2 text-xs text-gray-400">
               <span className="bg-gray-100 px-2 py-1 rounded">Accommodation Included</span>
               <span className="bg-gray-100 px-2 py-1 rounded">Breakfast & Dinner</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
