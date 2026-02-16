"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { StarIcon, MapPinIcon } from "./Icons";
import gsap from "gsap";

function AnimatedWord({ word, index }: { word: string; index: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100 + index * 80);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <span
      className={`inline-block transition-all duration-500 ${visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-3 blur-sm"
        }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {word}&nbsp;
    </span>
  );
}

export default function TourHero({ title, price, rating }: { title: string; price: number; rating: number }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const breadcrumbRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const mobileGalleryRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      // Breadcrumb
      if (breadcrumbRef.current) {
        tl.fromTo(breadcrumbRef.current,
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      }

      // Galleries
      const galleries = [galleryRef.current, mobileGalleryRef.current].filter(Boolean);
      if (galleries.length > 0) {
        tl.fromTo(galleries,
          { y: 30, autoAlpha: 0, scale: 0.98 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.8, ease: "power3.out", stagger: 0.1 },
          "-=0.3"
        );
      }

      // Info section
      if (infoRef.current) {
        tl.fromTo(infoRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const images = [
    "/images/tour-1.jpg",
    "/images/tour-2.jpg",
    "/images/tour-3.jpg",
    "/images/tour-5-new.jpg",
    "/images/tour-5-real.jpg"
  ];

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden";
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : (prev as number) + 1));
      if (e.key === "ArrowLeft") setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : (prev as number) - 1));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, images.length]);

  const titleWords = title.split(" ");

  return (
    <>
      <section ref={sectionRef} className="relative w-full bg-gray-50 pt-6 px-4 md:px-6 lg:px-8 overflow-hidden">
        {/* Decorative glow orbs */}
        <div className="glow-orb w-64 h-64 -top-20 -right-20 opacity-30" />
        <div className="glow-orb w-48 h-48 bottom-10 left-10 opacity-20" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto relative z-10">
          {/* Breadcrumb */}
          <div
            ref={breadcrumbRef}
            className="hidden md:flex items-center space-x-2 text-sm text-gray-500 mb-4 opacity-0"
          >
            <span className="hover:text-[#854EC9] cursor-pointer transition-colors">Home</span>
            <span className="text-gray-300">/</span>
            <span className="hover:text-[#854EC9] cursor-pointer transition-colors">Turkey Tours</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium truncate">{title}</span>
          </div>
          {/* Mobile Gallery - single image slider */}
          <div
            ref={mobileGalleryRef}
            className="md:hidden opacity-0"
          >
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-md">
              <Image
                src={images[mobileIndex]}
                alt={`Tour Image ${mobileIndex + 1}`}
                fill
                className="object-cover transition-all duration-500"
              />
              {/* Prev Button */}
              {mobileIndex > 0 && (
                <button
                  onClick={() => setMobileIndex(mobileIndex - 1)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                </button>
              )}
              {/* Next Button */}
              {mobileIndex < images.length - 1 && (
                <button
                  onClick={() => setMobileIndex(mobileIndex + 1)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
              )}
              {/* Counter badge */}
              <span className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full z-10">
                {mobileIndex + 1} / {images.length}
              </span>
              {/* Tap to expand */}
              <div
                className="absolute inset-0 z-[5] cursor-pointer"
                onClick={() => openModal(mobileIndex)}
              />
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-1.5 mt-3">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setMobileIndex(idx)}
                  className={`rounded-full transition-all duration-300 ${idx === mobileIndex
                    ? "w-5 h-1.5 bg-[#854EC9]"
                    : "w-1.5 h-1.5 bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Gallery */}
          <div
            ref={galleryRef}
            className="hidden md:grid grid-cols-4 gap-2 h-[500px] rounded-2xl overflow-hidden shadow-lg opacity-0"
          >
            {/* Main Large Image */}
            <div
              className="col-span-2 relative h-full w-full group cursor-pointer overflow-hidden"
              onClick={() => openModal(0)}
            >
              <Image
                src={images[0]}
                alt="Main Tour Image"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-lg">
                  📷 Click to expand
                </span>
              </div>
            </div>
            {/* Sidebar Images */}
            <div className="hidden md:grid grid-cols-1 grid-rows-2 gap-2">
              {[1, 2].map((idx) => (
                <div
                  key={idx}
                  className="relative h-full w-full group cursor-pointer overflow-hidden"
                  onClick={() => openModal(idx)}
                >
                  <Image
                    src={images[idx]}
                    alt={`Tour Image ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500" />
                </div>
              ))}
            </div>
            <div className="hidden md:grid grid-cols-1 grid-rows-2 gap-2">
              <div
                className="relative h-full w-full group cursor-pointer overflow-hidden"
                onClick={() => openModal(3)}
              >
                <Image
                  src={images[3]}
                  alt="Tour Image 4"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500" />
              </div>
              <div
                className="relative h-full w-full group cursor-pointer overflow-hidden"
                onClick={() => openModal(4)}
              >
                <Image
                  src={images[4]}
                  alt="Tour Image 5"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500" />
                <button className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 text-sm font-semibold rounded-full shadow-lg hover:bg-white transition-all duration-300 z-10 hover:scale-105 hover:shadow-xl cursor-pointer">
                  View All Photos
                </button>
              </div>
            </div>
          </div>

          {/* Title Area with word animation */}
          <div
            ref={infoRef}
            className="mt-8 flex flex-col md:flex-row justify-between items-start gap-4 pb-6 opacity-0"
          >
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-[#090A24] mb-2 leading-tight">
                {titleWords.map((word, i) => (
                  <AnimatedWord key={i} word={word} index={i} />
                ))}
              </h1>
              <div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:space-x-4 text-sm text-gray-600"
              >
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="ml-1 text-gray-600 font-medium">({rating} Reviews)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPinIcon className="w-4 h-4" />
                  <span>Istanbul, Turkey</span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-md lightbox-enter"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-5xl h-[85vh] flex items-center justify-center lightbox-image">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-all duration-200 p-2 hover:rotate-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <button
              onClick={prevImage}
              className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-200 p-4 z-50 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

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

            <button
              onClick={nextImage}
              className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-200 p-4 z-50 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(i); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === selectedImageIndex
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/70"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
