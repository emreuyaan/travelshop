"use client";

import { useState } from "react";

export default function Itinerary({ days }: { days: any[] }) {
  const [openDay, setOpenDay] = useState<number | null>(1);

  const toggleDay = (day: number) => {
    setOpenDay(openDay === day ? null : day);
  };

  return (
    <div className="space-y-3 relative">
      {/* Vertical timeline line */}
      <div className="absolute left-[24px] top-5 bottom-5 w-0.5 bg-gradient-to-b from-[#854EC9] via-[#854EC9]/40 to-[#854EC9]/10 hidden md:block pointer-events-none z-0 rounded-full" />

      {days.map((item, index) => (
        <div
          key={item.day}
          className={`relative z-10 border rounded-xl overflow-hidden bg-white transition-all duration-400 ${openDay === item.day
            ? "shadow-md border-[#854EC9]/20 animate-border-glow"
            : "shadow-sm hover:shadow-md"
            }`}
          style={{ animationDelay: `${index * 60}ms` }}
        >
          <button
            onClick={() => toggleDay(item.day)}
            className={`w-full flex items-center justify-between p-4 transition-all duration-300 focus:outline-none ${openDay === item.day
              ? "bg-[#854EC9]/5"
              : "bg-gray-50 hover:bg-gray-100"
              }`}
          >
            <div className="flex items-center space-x-4">
              <span
                className={`relative flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm transition-all duration-300 ${openDay === item.day
                  ? "bg-[#854EC9] text-white shadow-lg shadow-[#854EC9]/25 scale-110"
                  : "bg-[#854EC9]/10 text-[#854EC9]"
                  }`}
              >
                {item.day}
                {openDay === item.day && (
                  <span className="absolute inset-0 rounded-full bg-[#854EC9] animate-ping opacity-20" />
                )}
              </span>
              <div className="text-left">
                <span className="block text-xs text-gray-500 font-medium uppercase tracking-wide">Day {item.day}</span>
                <span className="font-semibold text-gray-900">{item.title}</span>
              </div>
            </div>
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${openDay === item.day ? "rotate-180 text-[#854EC9]" : ""
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            className={`transition-all duration-400 ease-in-out ${openDay === item.day
              ? "max-h-96 opacity-100 p-5 border-t border-[#854EC9]/10"
              : "max-h-0 opacity-0 overflow-hidden"
              }`}
          >
            <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="bg-green-50 text-green-700 px-3 py-1.5 rounded-full font-medium border border-green-100 transition-all duration-200 hover:shadow-sm hover:scale-[1.02]">🏨 Accommodation Included</span>
              <span className="bg-orange-50 text-orange-700 px-3 py-1.5 rounded-full font-medium border border-orange-100 transition-all duration-200 hover:shadow-sm hover:scale-[1.02]">🍽️ Breakfast & Dinner</span>
              <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full font-medium border border-blue-100 transition-all duration-200 hover:shadow-sm hover:scale-[1.02]">🚌 Transport Included</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
