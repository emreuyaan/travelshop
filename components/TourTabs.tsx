"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "highlights", label: "Highlights" },
  { id: "itinerary", label: "Itinerary" },
  { id: "includes", label: "Includes" },
  { id: "availability", label: "Availability" },
  { id: "reviews", label: "Reviews" },
];

export default function TourTabs() {
  const [activeTab, setActiveTab] = useState("overview");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Update indicator position
  useEffect(() => {
    const activeIndex = tabs.findIndex((t) => t.id === activeTab);
    const activeEl = tabRefs.current[activeIndex];
    if (activeEl) {
      const parent = activeEl.parentElement;
      if (parent) {
        setIndicatorStyle({
          left: activeEl.offsetLeft,
          width: activeEl.offsetWidth,
        });
      }
    }
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map(tab => document.getElementById(tab.id));
      const scrollPosition = window.scrollY + 200;

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
    <div className="sticky top-16 z-40 bg-white/60 backdrop-blur-xl border-b border-gray-200/50">
      <div className="container mx-auto px-4">
        {/* Desktop: horizontal flex */}
        <div className="hidden md:flex space-x-8 relative">
          {/* Animated indicator */}
          <div
            className="absolute bottom-0 h-0.5 bg-[#854EC9] rounded-full transition-all duration-300 ease-out"
            style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
          />
          {tabs.map((tab, index) => (
            <Link
              key={tab.id}
              ref={(el) => { tabRefs.current[index] = el; }}
              href={`#${tab.id}`}
              className={`py-4 text-sm font-semibold border-b-2 border-transparent transition-colors duration-200 ${activeTab === tab.id
                ? "text-[#854EC9]"
                : "text-gray-500 hover:text-gray-900"
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
        {/* Mobile: grid */}
        <div className="grid grid-cols-3 md:hidden">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={`#${tab.id}`}
              className={`py-2.5 text-xs font-semibold text-center transition-colors duration-200 ${activeTab === tab.id
                ? "text-[#854EC9] border-b-2 border-[#854EC9]"
                : "text-gray-500 border-b-2 border-transparent"
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
