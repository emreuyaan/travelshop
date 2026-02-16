"use client";

import { useState } from "react";
import Image from "next/image";
import { StarIcon, MapPinIcon } from "./Icons";

export default function TourHero({ title, price, rating }: { title: string; price: number; rating: number }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Mock images
  const images = [
    "/images/tour-1.jpg",
    "/images/tour-2.jpg",
    "/images/tour-3.jpg",
    "/images/tour-5-new.jpg",
    "/images/tour-5-real.jpg"
  ];

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : (prev as number) + 1));
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : (prev as number) - 1));
    }
  };


  return (
    <>
      <section className="relative w-full bg-gray-50 pt-6 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Breadcrumb - Mock */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <span>Home</span>
            <span>/</span>
            <span>Turkey Tours</span>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate">{title}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-96 md:h-[500px] rounded-xl overflow-hidden shadow-sm">
            {/* Main Large Image */}
            <div 
              className="md:col-span-2 relative h-full w-full group cursor-pointer"
              onClick={() => openModal(0)}
            >
              <Image
                src={images[0]}
                alt="Main Tour Image"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
            {/* Sidebar Images */}
            <div className="hidden md:grid grid-cols-1 grid-rows-2 gap-2">
              <div 
                className="relative h-full w-full group cursor-pointer"
                onClick={() => openModal(1)}
              >
                <Image
                  src={images[1]}
                  alt="Tour Image 2"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div 
                className="relative h-full w-full group cursor-pointer"
                onClick={() => openModal(2)}
              >
                <Image
                  src={images[2]}
                  alt="Tour Image 3"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
            </div>
            <div className="hidden md:grid grid-cols-1 grid-rows-2 gap-2">
               <div 
                 className="relative h-full w-full group cursor-pointer"
                 onClick={() => openModal(3)}
               >
                <Image
                  src={images[3]}
                  alt="Tour Image 4"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div 
                className="relative h-full w-full group cursor-pointer"
                onClick={() => openModal(4)}
              >
                <Image
                  src={images[4]}
                  alt="Tour Image 5"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                 <button className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 text-sm font-semibold rounded shadow hover:bg-white transition-colors z-10 pointer-events-none">
                  View All Photos
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#090A24] mb-2">{title}</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                 <div className="flex items-center text-yellow-500">
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-gray-600 font-medium">({rating} Reviews)</span>
                 </div>
                 <div className="flex items-center space-x-1">
                   <MapPinIcon className="w-4 h-4" />
                   <span>Istanbul, Turkey</span>
                 </div>
              </div>
            </div>
            
             {/* Mobile Price Display which will be hidden on larger screens as it is in the sidebar */}
             <div className="md:hidden flex flex-col items-end">
                <span className="text-sm text-gray-500">From</span>
                <span className="text-2xl font-bold text-[#854EC9]">€{price}</span>
             </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-5xl h-[85vh] flex items-center justify-center">
             {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Previous Button */}
            <button 
              onClick={prevImage}
              className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-4 z-50 bg-black/20 hover:bg-black/40 rounded-full md:bg-transparent md:p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Image Container */}
            <div 
              className="relative w-full h-full" 
              onClick={(e) => e.stopPropagation()} 
            >
              <Image
                src={images[selectedImageIndex]}
                alt={`Gallery image ${selectedImageIndex + 1}`}
                fill
                className="object-contain"
                priority
                sizes="90vw"
              />
            </div>
            
            {/* Next Button */}
            <button 
              onClick={nextImage}
              className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-4 z-50 bg-black/20 hover:bg-black/40 rounded-full md:bg-transparent md:p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            
            {/* Image Counter */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/80 font-medium">
               {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
