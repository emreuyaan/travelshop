"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const tabs = [
  { id: "overview", label: "OVERVIEW" },
  { id: "highlights", label: "HIGHLIGHTS" },
  { id: "itinerary", label: "ITINERARY" },
  { id: "includes", label: "INCLUDES" },
  { id: "availability", label: "AVAILABILITY" },
  { id: "reviews", label: "REVIEWS" },
];

export default function TourTabs() {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      // Very basic scroll spy
      const sections = tabs.map(tab => document.getElementById(tab.id));
      const scrollPosition = window.scrollY + 200; // Offset

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveTab(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-16 z-40 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 overflow-x-auto">
        <div className="flex space-x-8 min-w-max">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={`#${tab.id}`}
              className={`py-4 text-sm font-semibold border-b-2 transition-colors duration-200 ${
                activeTab === tab.id
                  ? "border-[#854EC9] text-[#854EC9]"
                  : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(tab.id)?.scrollIntoView({ behavior: "smooth" });
                setActiveTab(tab.id);
              }}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
