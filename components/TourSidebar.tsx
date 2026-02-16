"use client";

import { useState, useEffect } from "react";
import { CheckIcon, CalendarIcon, UsersIcon } from "./Icons";
import { useGsapScroll } from "@/hooks/useGsapScroll";

const whyBookItems = [
   {
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
         </svg>
      ),
      title: "Best price guaranteed",
      description: "Find it cheaper? We'll match it.",
      color: "text-blue-600",
      bg: "bg-blue-50",
   },
   {
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
         </svg>
      ),
      title: "100% financial protection",
      description: "Your money is always safe with us.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
   },
   {
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
         </svg>
      ),
      title: "Earn $20+ in travel credits",
      description: "Rewards on every booking.",
      color: "text-amber-600",
      bg: "bg-amber-50",
   },
   {
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
         </svg>
      ),
      title: "No credit card fees",
      description: "Zero hidden charges.",
      color: "text-violet-600",
      bg: "bg-violet-50",
   },
   {
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" x2="22" y1="12" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
         </svg>
      ),
      title: "Carbon neutral tours",
      description: "Travel responsibly.",
      color: "text-teal-600",
      bg: "bg-teal-50",
   },
];

export default function TourSidebar({ priceData }: { priceData: any }) {
   const [travelers, setTravelers] = useState(2);
   const [month, setMonth] = useState("Mar 2026");
   const ref = useGsapScroll({ type: "fadeRight", duration: 0.8 });

   const servicesRef = useGsapScroll<HTMLUListElement>({ type: "stagger", staggerSelector: "li", staggerDelay: 0.1 });

   const getPrice = (count: number) => {
      if (count === 1) return priceData.single;
      if (count === 2) return priceData.double;
      return priceData.triple;
   };

   const currentPrice = getPrice(travelers);
   const totalPrice = currentPrice * travelers;
   const deposit = totalPrice * 0.25;

   const [displayPrice, setDisplayPrice] = useState(currentPrice);
   useEffect(() => {
      let start = displayPrice;
      const end = currentPrice;
      if (start === end) return;
      const step = start < end ? 1 : -1;
      const diff = Math.abs(end - start);
      const interval = Math.max(10, Math.floor(300 / diff));
      const timer = setInterval(() => {
         start += step;
         setDisplayPrice(start);
         if (start === end) clearInterval(timer);
      }, interval);
      return () => clearInterval(timer);
   }, [currentPrice]);

   return (
      <div
         ref={ref}
         className="space-y-6 md:sticky md:top-[88px] self-start w-full"
      >
         {/* Booking Box */}
         <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="px-6 py-6 text-center border-b border-gray-100">
               <span className="block text-xs uppercase tracking-widest font-semibold text-gray-400 mb-2">From</span>
               <span className="text-4xl font-extrabold text-[#090A24] transition-all duration-300">€{displayPrice}</span>
               <span className="block text-sm font-medium text-gray-500 mt-1">per person</span>
            </div>

            <div className="p-6 space-y-6">
               {/* Selectors */}
               <div className="space-y-5">
                  <div>
                     <label className="block text-sm font-bold text-gray-800 uppercase mb-2">Departure Date</label>
                     <div className="relative group">
                        <select
                           className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-base font-medium text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#854EC9] focus:border-transparent transition-all duration-200 cursor-pointer group-hover:border-[#854EC9]/40"
                           value={month}
                           onChange={(e) => setMonth(e.target.value)}
                        >
                           <option>Mar 7, 2026</option>
                           <option>Mar 14, 2026</option>
                           <option>Apr 4, 2026</option>
                        </select>
                        <CalendarIcon className="w-5 h-5 text-gray-500 absolute left-3 top-3.5 transition-colors duration-200 group-hover:text-[#854EC9]" />
                     </div>
                  </div>

                  <div>
                     <label className="block text-sm font-bold text-gray-800 uppercase mb-2">Travelers</label>
                     <div className="relative group">
                        <select
                           className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-base font-medium text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#854EC9] focus:border-transparent transition-all duration-200 cursor-pointer group-hover:border-[#854EC9]/40"
                           value={travelers}
                           onChange={(e) => setTravelers(parseInt(e.target.value))}
                        >
                           <option value={1}>1 Traveler (Single Room)</option>
                           <option value={2}>2 Travelers (Double Room)</option>
                           <option value={3}>3 Travelers (Triple Room)</option>
                           <option value={4}>4 Travelers</option>
                        </select>
                        <UsersIcon className="w-5 h-5 text-gray-500 absolute left-3 top-3.5 transition-colors duration-200 group-hover:text-[#854EC9]" />
                     </div>
                  </div>
               </div>

               {/* Price Breakdown */}
               <div className="bg-gray-50 p-5 rounded-xl space-y-3">
                  <div className="flex justify-between text-base font-medium text-gray-700">
                     <span>{travelers} x €{currentPrice}</span>
                     <span>€{totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-gray-900 border-t border-gray-300 pt-3 mt-1">
                     <span>Total</span>
                     <span className="text-[#854EC9]">€{totalPrice}</span>
                  </div>
               </div>

               {/* Advantages */}
               <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 bg-emerald-50 p-3 rounded-xl border border-emerald-100 transition-all duration-300 hover:shadow-md hover:scale-[1.01] hover:border-emerald-200 cursor-default">
                     <div className="bg-white p-1.5 rounded-full shadow-sm mt-0.5 text-emerald-600 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                           <polyline points="20 6 9 17 4 12" />
                        </svg>
                     </div>
                     <div>
                        <span className="block font-bold text-gray-900 text-sm">Free Cancellation</span>
                        <span className="block text-xs text-gray-600 font-medium mt-0.5">Full refund up to 30 days before the tour</span>
                     </div>
                  </div>

                  <div className="flex items-start gap-3 bg-violet-50 p-3 rounded-xl border border-violet-100 transition-all duration-300 hover:shadow-md hover:scale-[1.01] hover:border-violet-200 cursor-default">
                     <div className="bg-white p-1.5 rounded-full shadow-sm mt-0.5 text-violet-600 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                           <circle cx="12" cy="12" r="10" />
                           <polyline points="12 6 12 12 16 14" />
                        </svg>
                     </div>
                     <div>
                        <span className="block font-bold text-gray-900 text-sm">Early Booking Advantage</span>
                        <span className="block text-xs text-gray-600 font-medium mt-0.5">Only <span className="font-bold text-violet-700">€{deposit} (25%)</span> prepayment until 30 days before departure</span>
                     </div>
                  </div>
               </div>

               {/* Buttons */}
               <div className="space-y-3">
                  <button className="w-full bg-[#854EC9] text-white py-3.5 rounded-xl font-bold text-base hover:bg-[#703db5] transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-lg hover:shadow-[#854EC9]/25">
                     Check Availability
                  </button>
                  <button className="w-full border-2 border-gray-200 text-gray-700 py-3.5 rounded-xl font-bold text-base hover:border-[#854EC9] hover:text-[#854EC9] transition-all duration-300 flex items-center justify-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                     </svg>
                     Ask a Question
                  </button>
               </div>

               <p className="text-center text-sm font-medium text-gray-500 flex items-center justify-center gap-2">
                  <CheckIcon className="w-4 h-4 text-green-500" /> No booking fees. 100% Secure.
               </p>
            </div>
         </div>

         {/* Private Tour */}
         <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 card-hover">
            <h3 className="font-bold text-lg text-[#090A24] mb-2">Request a Private Departure</h3>
            <p className="text-base text-gray-600 mb-4 leading-relaxed">Customize this tour for your own private group.</p>
            <button className="w-full border-2 border-[#854EC9] text-[#854EC9] py-3 rounded-xl font-bold hover:bg-[#854EC9] hover:text-white transition-all duration-300 text-base hover:shadow-lg hover:shadow-[#854EC9]/15">
               Request Private Tour
            </button>
         </div>

         {/* Why Book With Us - Improved */}
         <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h3 className="font-bold text-[#090A24] mb-5 text-base uppercase tracking-wide flex items-center gap-2">
               <span className="w-1 h-5 bg-[#854EC9] rounded-full inline-block"></span>
               Why book with us?
            </h3>
            <ul ref={servicesRef} className="space-y-3">
               {whyBookItems.map((item, i) => (
                  <li
                     key={i}
                     className="flex items-start gap-3 p-2.5 rounded-xl transition-all duration-500 hover:bg-gray-50 cursor-default group"
                  >
                     <div className={`${item.bg} ${item.color} p-2 rounded-lg shrink-0 transition-transform duration-200 group-hover:scale-110`}>
                        {item.icon}
                     </div>
                     <div>
                        <span className="block font-semibold text-gray-900 text-sm">{item.title}</span>
                        <span className="block text-xs text-gray-500 mt-0.5">{item.description}</span>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}
