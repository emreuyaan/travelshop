"use client";

import { useState } from "react";
import { CheckIcon, CalendarIcon, UsersIcon } from "./Icons";

export default function TourSidebar({ priceData }: { priceData: any }) {
  const [travelers, setTravelers] = useState(2);
  const [month, setMonth] = useState("Mar 2026");

  const getPrice = (count: number) => {
    if (count === 1) return priceData.single;
    if (count === 2) return priceData.double;
    return priceData.triple;
  };

  const currentPrice = getPrice(travelers);
  const totalPrice = currentPrice * travelers;
  const deposit = totalPrice * 0.25;

  return (
     <div className="space-y-8 sticky top-32 w-full">
      {/* Booking Box */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-[#854EC9] px-6 py-5 text-white text-center">
            <span className="block text-sm uppercase tracking-wider font-bold opacity-90 mb-1">From</span>
            <span className="text-4xl font-extrabold">€{currentPrice}</span>
            <span className="block text-sm font-medium opacity-90 mt-1">per person</span>
        </div>
        
        <div className="p-6 space-y-6">
           {/* Selectors */}
           <div className="space-y-5">
              <div>
                 <label className="block text-sm font-bold text-gray-800 uppercase mb-2">Departure Date</label>
                 <div className="relative">
                    <select 
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-base font-medium text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#854EC9] focus:border-transparent transition-shadow cursor-pointer"
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                    >
                       <option>Mar 7, 2026</option>
                       <option>Mar 14, 2026</option>
                       <option>Apr 4, 2026</option>
                    </select>
                    <CalendarIcon className="w-5 h-5 text-gray-500 absolute left-3 top-3.5" />
                 </div>
              </div>

               <div>
                 <label className="block text-sm font-bold text-gray-800 uppercase mb-2">Travelers</label>
                 <div className="relative">
                    <select
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-base font-medium text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#854EC9] focus:border-transparent transition-shadow cursor-pointer"
                      value={travelers}
                      onChange={(e) => setTravelers(parseInt(e.target.value))}
                    >
                       <option value={1}>1 Traveler (Single Room)</option>
                       <option value={2}>2 Travelers (Double Room)</option>
                       <option value={3}>3 Travelers (Triple Room)</option>
                       <option value={4}>4 Travelers</option>
                    </select>
                    <UsersIcon className="w-5 h-5 text-gray-500 absolute left-3 top-3.5" />
                 </div>
              </div>
           </div>

           {/* Price Breakdown */}
           <div className="bg-gray-50 p-5 rounded-lg space-y-3">
             <div className="flex justify-between text-base font-medium text-gray-700">
               <span>{travelers} x €{currentPrice}</span>
               <span>€{totalPrice}</span>
             </div>
             <div className="flex justify-between text-xl font-bold text-gray-900 border-t border-gray-300 pt-3 mt-1">
                <span>Total</span>
                <span>€{totalPrice}</span>
             </div>
           </div>
           
           {/* Advantages */}
           <div className="space-y-3 pt-2">
             <div className="flex items-start gap-3 bg-emerald-50 p-3 rounded-xl border border-emerald-100 transition-all hover:shadow-md hover:scale-[1.01] hover:border-emerald-200">
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
             
             <div className="flex items-start gap-3 bg-violet-50 p-3 rounded-xl border border-violet-100 transition-all hover:shadow-md hover:scale-[1.01] hover:border-violet-200">
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

           <button className="w-full bg-[#854EC9] text-white py-4 rounded-xl font-bold text-xl hover:bg-[#703db5] transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg">
             Book Now
           </button>
           
           <p className="text-center text-sm font-medium text-gray-500 mt-2 flex items-center justify-center gap-2">
             <CheckIcon className="w-4 h-4 text-green-500" /> No booking fees. 100% Secure.
           </p>
        </div>
      </div>

       {/* Private Tour */}
       <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-6">
          <h3 className="font-bold text-lg text-[#090A24] mb-2">Request a Private Departure</h3>
          <p className="text-base text-gray-600 mb-4 leading-relaxed">Customize this tour for your own private group.</p>
          <button className="w-full border-2 border-[#854EC9] text-[#854EC9] py-3 rounded-lg font-bold hover:bg-[#854EC9] hover:text-white transition-colors text-base">
              Request Private Tour
          </button>
       </div>

       {/* Why Book With Us */}
       <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-[#090A24] mb-4 text-base uppercase tracking-wide border-b border-gray-200 pb-2">Why book with us?</h3>
          <ul className="space-y-4">
            {[
              "Best price guaranteed", 
              "100% financial protection", 
              "Earn $20+ in travel credits", 
              "No credit card fees", 
              "Carbon neutral tours"
            ].map((item, i) => (
              <li key={i} className="flex items-center text-base font-medium text-gray-700">
                <CheckIcon className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
       </div>
    </div>
  );
}
