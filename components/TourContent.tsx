"use client";

import { MapPinIcon, CheckIcon, FlagIcon, UsersIcon } from "./Icons";
import Itinerary from "./Itinerary";
import { useGsapScroll } from "@/hooks/useGsapScroll";

function AnimatedSection({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
   const ref = useGsapScroll<HTMLElement>({ type: "fadeUp", duration: 0.7 });
   return (
      <section
         id={id}
         ref={ref}
         className={`scroll-mt-32 ${className}`}
      >
         {children}
      </section>
   );
}

function SectionHeading({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
   return (
      <div className="mb-6">
         {subtitle && (
            <span className="text-[#854EC9] text-xs font-bold uppercase tracking-widest mb-1 block">
               {subtitle}
            </span>
         )}
         <h2 className="text-2xl font-bold text-[#090A24] flex items-center gap-3">
            <span className="w-1 h-7 bg-gradient-to-b from-[#854EC9] to-[#a76de8] rounded-full inline-block" />
            {children}
         </h2>
      </div>
   );
}

export default function TourContent({ data }: { data: any }) {
   return (
      <div className="pr-0 md:pr-8 py-6 md:py-8 space-y-10 md:space-y-14">
         {/* Overview */}
         <AnimatedSection id="overview">
            <SectionHeading subtitle="About this tour">Tour Overview</SectionHeading>
            <p className="text-gray-600 leading-relaxed text-lg">{data.overview}</p>

            {/* Style Badges */}
            <div className="flex flex-wrap gap-2 mt-6">
               {["Family", "Solo Travel", "In-depth Cultural", "Hot Air Balloon", "Historical", "Explorer", "Discovery", "Photography"].map((tag, i) => (
                  <span
                     key={tag}
                     className="bg-gray-100 text-gray-700 px-3 py-1.5 text-sm rounded-full font-medium cursor-default border border-transparent hover:border-[#854EC9]/20 hover:bg-[#854EC9]/5 hover:text-[#854EC9] hover:scale-105 transition-all duration-300"
                     style={{ animationDelay: `${i * 50}ms` }}
                  >
                     {tag}
                  </span>
               ))}
            </div>

            {/* Route Info */}
            <div className="bg-blue-50/50 p-4 md:p-6 rounded-xl mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 border border-blue-100 card-hover">
               <div>
                  <h3 className="font-semibold text-[#090A24] mb-3 flex items-center gap-2">
                     <MapPinIcon className="w-5 h-5 text-blue-600" /> Route
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-700 ml-1 border-l-2 border-gray-200 pl-4 py-1 relative">
                     <li className="relative">
                        <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-600 border-2 border-white ring-1 ring-blue-100"></span>
                        <span className="font-medium text-gray-900 block text-xs uppercase tracking-wide text-gray-500 mb-0.5">Start</span>
                        Istanbul
                     </li>
                     <li className="relative mt-4">
                        <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white ring-1 ring-red-100"></span>
                        <span className="font-medium text-gray-900 block text-xs uppercase tracking-wide text-gray-500 mb-0.5">End</span>
                        Istanbul
                     </li>
                  </ul>
               </div>
               <div>
                  <h3 className="font-semibold text-[#090A24] mb-3">Logistics</h3>
                  <div className="space-y-4 text-sm text-gray-700">
                     <div>
                        <span className="block text-gray-500 text-xs uppercase font-medium mb-1">Pickup Location</span>
                        <p className="font-medium">Istanbul Airport</p>
                     </div>
                     <div>
                        <span className="block text-gray-500 text-xs uppercase font-medium mb-1">Dropoff Location</span>
                        <p className="font-medium">Nevşehir Kapadokya Airport</p>
                     </div>
                  </div>
               </div>
            </div>
         </AnimatedSection>

         {/* Highlights */}
         <AnimatedSection id="highlights">
            <SectionHeading subtitle="What makes it special">Highlights</SectionHeading>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               {data.highlights.map((highlight: string, index: number) => {
                  const highlightImages = [
                     "/images/tour-1.jpg",
                     "/images/tour-2.jpg",
                     "/images/tour-3.jpg",
                     "/images/tour-5-new.jpg",
                     "/images/tour-5-real.jpg",
                     "/images/tour-1.jpg",
                     "/images/tour-2.jpg",
                     "/images/tour-3.jpg",
                     "/images/tour-5-new.jpg",
                     "/images/tour-5-real.jpg"
                  ];

                  return (
                     <div
                        key={index}
                        className="group relative h-44 overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-default card-hover-premium"
                        style={{ animationDelay: `${index * 80}ms` }}
                     >
                        <div
                           className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-115"
                           style={{ backgroundImage: `url(${highlightImages[index % highlightImages.length]})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 p-4 w-full transition-transform duration-500 group-hover:translate-y-[-4px]">
                           <div className="flex items-center gap-2 text-white">
                              <span className="bg-[#854EC9]/90 p-1.5 rounded-full backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                                 <FlagIcon className="w-3 h-3" />
                              </span>
                              <span className="font-bold text-sm leading-tight">{highlight}</span>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </AnimatedSection>

         {/* Itinerary */}
         <AnimatedSection id="itinerary">
            <div className="flex items-center justify-between mb-6">
               <SectionHeading subtitle="Day by day">Itinerary</SectionHeading>
               <button className="text-[#854EC9] text-sm font-medium hover:underline transition-colors duration-200 hover:text-[#703db5] flex items-center gap-1 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:-translate-y-0.5">
                     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                     <polyline points="7 10 12 15 17 10" />
                     <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PDF
               </button>
            </div>
            <Itinerary days={data.itinerary} />
         </AnimatedSection>

         {/* Included / Excluded */}
         <AnimatedSection id="includes">
            <SectionHeading subtitle="What&apos;s covered">Trip Includes</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
               <div className="bg-green-50/50 p-4 md:p-6 rounded-xl border border-green-100 card-hover">
                  <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                     <span className="bg-green-100 p-1.5 rounded-full"><CheckIcon className="w-4 h-4" /></span> Included
                  </h3>
                  <ul className="space-y-3">
                     {data.included.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700 transition-all duration-200 hover:translate-x-1">
                           <CheckIcon className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="bg-red-50/50 p-4 md:p-6 rounded-xl border border-red-100 card-hover">
                  <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                     <span className="bg-red-100 p-1.5 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                           <line x1="18" y1="6" x2="6" y2="18" />
                           <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                     </span> Excluded
                  </h3>
                  <ul className="space-y-3">
                     {data.excluded.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700 transition-all duration-200 hover:translate-x-1">
                           <span className="text-red-500 font-bold mr-2 mt-[-2px] text-lg">×</span>
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </AnimatedSection>

         {/* Availability */}
         <AnimatedSection id="availability">
            <SectionHeading subtitle="Choose your date">Availability</SectionHeading>
            <div className="bg-white border rounded-xl overflow-hidden shadow-sm card-hover">
               <div className="bg-gray-50 px-4 md:px-6 py-4 border-b flex flex-wrap justify-between items-center gap-3">
                  <div className="flex items-center gap-4">
                     <div>
                        <span className="block text-xs uppercase text-gray-500 font-bold">Service Type</span>
                        <span className="text-sm font-medium">Group Tour</span>
                     </div>
                     <div>
                        <span className="block text-xs uppercase text-gray-500 font-bold">Month</span>
                        <select className="text-sm font-medium border-none bg-transparent focus:ring-0 p-0 cursor-pointer">
                           <option>March 2026</option>
                           <option>April 2026</option>
                        </select>
                     </div>
                  </div>
               </div>

               <div className="divide-y">
                  {[1].map((_, i) => (
                     <div key={i} className="p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-gray-50/80 transition-colors duration-300">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                           <div>
                              <span className="text-xs text-gray-500 uppercase font-bold">Tours Start</span>
                              <p className="font-bold text-gray-900">Mar 7, 2026</p>
                           </div>
                           <div>
                              <span className="text-xs text-gray-500 uppercase font-bold">Tours End</span>
                              <p className="font-bold text-gray-900">Mar 16, 2026</p>
                           </div>
                           <div className="col-span-2 mt-2">
                              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                 Guaranteed Departure
                              </span>
                           </div>
                        </div>

                        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                           <div className="text-right">
                              <span className="block text-gray-500 text-xs">From</span>
                              <span className="block text-xl font-bold gradient-text">€{data.price}</span>
                           </div>
                           <button className="bg-[#854EC9] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#703db5] transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#854EC9]/20 hover:scale-[1.02]">
                              Select
                           </button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </AnimatedSection>

         {/* Reviews */}
         <AnimatedSection id="reviews">
            <SectionHeading subtitle="Real experiences">What our customers say</SectionHeading>
            <div className="grid gap-6">
               {data.reviews.map((review: any, i: number) => (
                  <div
                     key={i}
                     className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 card-hover-premium"
                     style={{ transitionDelay: `${i * 100}ms` }}
                  >
                     <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#854EC9] to-[#6a3da3] flex items-center justify-center text-xl font-bold text-white uppercase shadow-md">
                           {review.avatar}
                        </div>
                     </div>
                     <div className="flex-grow">
                        <div className="flex justify-between items-start mb-2">
                           <div>
                              <h4 className="font-bold text-gray-900">{review.name}</h4>
                              <span className="text-xs text-gray-500">{review.date}</span>
                           </div>
                           <div className="flex text-sm gap-0.5">
                              {Array.from({ length: 5 }).map((_, r) => (
                                 <span
                                    key={r}
                                    className={`transition-transform duration-200 hover:scale-125 cursor-default ${r < review.rating ? "text-yellow-400" : "text-gray-300"
                                       }`}
                                 >
                                    ★
                                 </span>
                              ))}
                           </div>
                        </div>
                        <p className="text-gray-600 text-sm italic leading-relaxed">&quot;{review.comment}&quot;</p>
                     </div>
                  </div>
               ))}
            </div>
         </AnimatedSection>

      </div>
   );
}
