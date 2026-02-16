"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function TourHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white/60 backdrop-blur-xl border-b ${scrolled ? "border-gray-200/50" : "border-transparent"
        }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center shrink-0 group">
            <Image
              src="/logo.svg"
              alt="Travelshop"
              width={120}
              height={40}
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {["Destinations", "Activities", "Deals"].map((item) => (
              <Link
                key={item}
                href="#"
                className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-[#854EC9] hover:bg-[#854EC9]/5 rounded-lg transition-all duration-200"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Search + Profile */}
        <div className="flex items-center gap-3">
          {/* Search bar */}
          <div className="hidden md:flex items-center border border-gray-200 rounded-full px-4 py-2.5 bg-white/80 hover:border-[#854EC9]/30 focus-within:border-[#854EC9] focus-within:ring-4 focus-within:ring-[#854EC9]/10 transition-all duration-200 w-80">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-2 shrink-0">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Where do you want to go?"
              className="bg-transparent border-none outline-none text-sm text-gray-700 placeholder:text-gray-400 w-full"
            />
            <kbd className="hidden lg:inline-flex items-center text-[10px] text-gray-400 border border-gray-200 rounded px-1.5 py-0.5 ml-2 shrink-0 font-mono">⌘K</kbd>
          </div>

          {/* Mobile search icon */}
          <button className="md:hidden p-2 text-gray-500 hover:text-[#854EC9] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Divider */}
          <div className="hidden md:block w-px h-6 bg-gray-200" />

          {/* Profile */}
          <button className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full hover:bg-gray-100/80 transition-all duration-200 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#854EC9] to-[#6a3da3] flex items-center justify-center text-white text-xs font-bold shadow-sm group-hover:shadow-md group-hover:shadow-[#854EC9]/20 transition-all duration-200">
              EU
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 hidden md:block">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-[#854EC9] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-3 border-t border-gray-100/50">
          {/* Mobile search */}
          <div className="flex items-center border border-gray-200 rounded-full px-4 py-2.5 bg-white/80 focus-within:border-[#854EC9] focus-within:ring-4 focus-within:ring-[#854EC9]/10 transition-all duration-200 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-2 shrink-0">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Where do you want to go?"
              className="bg-transparent border-none outline-none text-sm text-gray-700 placeholder:text-gray-400 w-full"
            />
          </div>
          {["Destinations", "Activities", "Deals"].map((item, i) => (
            <Link
              key={item}
              href="#"
              className="text-gray-700 hover:text-[#854EC9] font-medium transition-colors py-2 px-2 rounded-lg hover:bg-[#854EC9]/5"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
