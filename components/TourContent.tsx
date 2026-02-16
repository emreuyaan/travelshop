import { MapPinIcon, CheckIcon, FlagIcon, UsersIcon } from "./Icons";
import Itinerary from "./Itinerary";

export default function TourContent({ data }: { data: any }) {
  return (
    <div className="md:w-3/4 pr-0 md:pr-8 py-8 space-y-12">
      {/* Overview */}
      <section id="overview" className="scroll-mt-32">
        <h2 className="text-2xl font-bold mb-4 text-[#090A24] border-l-4 border-[#854EC9] pl-3">Tour Overview</h2>
        <p className="text-gray-600 leading-relaxed text-lg">{data.overview}</p>
        
        {/* Style Badges */}
        <div className="flex flex-wrap gap-2 mt-6">
           {["Family", "Solo Travel", "In-depth Cultural", "Hot Air Balloon", "Historical", "Explorer", "Discovery", "Photography"].map((tag) => (
             <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full font-medium hover:bg-gray-200 cursor-default transition-colors">
               {tag}
             </span>
           ))}
        </div>

        {/* Route Info */}
        <div className="bg-blue-50/50 p-6 rounded-xl mt-8 grid md:grid-cols-2 gap-6 border border-blue-100">
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
      </section>

      {/* Highlights */}
      {/* Highlights */}
      <section id="highlights" className="scroll-mt-32">
        <h2 className="text-2xl font-bold mb-6 text-[#090A24] border-l-4 border-[#854EC9] pl-3">Highlights</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {data.highlights.map((highlight: string, index: number) => {
             // Generate deterministic pseudo-random images for highlights based on index
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
              <div key={index} className="group relative h-40 overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-md transition-all cursor-default">
                 {/* Background Image */}
                 <div 
                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                   style={{ backgroundImage: `url(${highlightImages[index % highlightImages.length]})` }}
                 />
                 
                 {/* Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                 
                 {/* Content */}
                 <div className="absolute bottom-0 left-0 p-4 w-full">
                    <div className="flex items-center gap-2 text-white">
                      <span className="bg-[#854EC9]/90 p-1.5 rounded-full backdrop-blur-sm">
                        <FlagIcon className="w-3 h-3" />
                      </span>
                      <span className="font-bold text-sm leading-tight text-shadow-sm">{highlight}</span>
                    </div>
                 </div>
              </div>
             );
          })}
        </div>
      </section>

      {/* Itinerary */}
      <section id="itinerary" className="scroll-mt-32">
        <div className="flex items-center justify-between mb-6">
           <h2 className="text-2xl font-bold text-[#090A24] border-l-4 border-[#854EC9] pl-3">Itinerary</h2>
           <button className="text-[#854EC9] text-sm font-medium hover:underline">Download PDF</button>
        </div>
        <Itinerary days={data.itinerary} />
      </section>

      {/* Included / Excluded */}
      <section id="includes" className="scroll-mt-32">
         <h2 className="text-2xl font-bold mb-6 text-[#090A24] border-l-4 border-[#854EC9] pl-3">Trip Includes</h2>
         <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
               <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                 <CheckIcon className="w-5 h-5" /> Included
               </h3>
               <ul className="space-y-3">
                 {data.included.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckIcon className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                 ))}
               </ul>
            </div>
             <div className="bg-red-50/50 p-6 rounded-xl border border-red-100">
               <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                 <span className="text-lg font-bold">×</span> Excluded
               </h3>
               <ul className="space-y-3">
                 {data.excluded.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-red-500 font-bold mr-2 mt-[-2px] text-lg">×</span>
                      {item}
                    </li>
                 ))}
               </ul>
            </div>
         </div>
      </section>

      {/* Availability */}
      <section id="availability" className="scroll-mt-32">
        <h2 className="text-2xl font-bold mb-6 text-[#090A24] border-l-4 border-[#854EC9] pl-3">Availability</h2>
        <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
           <div className="bg-gray-50 px-6 py-4 border-b flex flex-wrap justify-between items-center gap-4">
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
                 <div key={i} className="p-6 flex flex-col md:flex-row justify-between items-center gap-4 hover:bg-gray-50 transition-colors">
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
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                             Guaranteed Departure
                          </span>
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                       <div className="text-right">
                          <span className="block text-gray-500 text-xs">From</span>
                          <span className="block text-xl font-bold text-[#854EC9]">€{data.price}</span>
                       </div>
                       <button className="bg-[#854EC9] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#703db5] transition-colors shadow-sm hover:shadow">
                          Select
                       </button>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>
      
      {/* Reviews */}
      <section id="reviews" className="scroll-mt-32">
        <h2 className="text-2xl font-bold mb-6 text-[#090A24] border-l-4 border-[#854EC9] pl-3">
          What our customers say
        </h2>
        <div className="grid gap-6">
           {data.reviews.map((review: any, i: number) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4">
                 <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-500 uppercase">
                       {review.avatar}
                    </div>
                 </div>
                 <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                       <div>
                          <h4 className="font-bold text-gray-900">{review.name}</h4>
                          <span className="text-xs text-gray-500">{review.date}</span>
                       </div>
                       <div className="flex text-yellow-500 text-xs">
                          {Array.from({ length: 5 }).map((_, r) => (
                             <span key={r} className={r < review.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
                          ))}
                       </div>
                    </div>
                    <p className="text-gray-600 text-sm italic">"{review.comment}"</p>
                 </div>
              </div>
           ))}
        </div>
      </section>

    </div>
  );
}
