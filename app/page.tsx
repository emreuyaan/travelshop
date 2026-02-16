"use client";

import { useState, useEffect, useCallback } from "react";
import { tourData } from "@/app/tour/[slug]/data";
import TourHeader from "@/components/TourHeader";
import TourHero from "@/components/TourHero";
import TourQuickInfo from "@/components/TourQuickInfo";
import TourTabs from "@/components/TourTabs";
import TourContent from "@/components/TourContent";
import TourSidebar from "@/components/TourSidebar";
import SimilarTours from "@/components/SimilarTours";
import Preloader from "@/components/Preloader";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#854EC9] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#703db5] transition-all duration-500 flex items-center justify-center hover:scale-110 hover:shadow-[#854EC9]/30 ${visible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px]">
      <div
        className="h-full bg-gradient-to-r from-[#854EC9] to-[#a76de8] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const handlePreloaderComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <Preloader onCompleteAction={handlePreloaderComplete} />}
      <div className={`min-h-screen bg-white font-sans text-gray-900 ${loading ? "overflow-hidden h-screen" : ""}`}>
        <ScrollProgress />
        <TourHeader />

        <main>
          <TourHero
            title={tourData.title}
            price={tourData.price}
            rating={4.8}
          />

          <div className="container mx-auto px-4 mb-4 md:mb-6">
            <TourQuickInfo data={tourData} />
          </div>

          <TourTabs />

          <div className="container mx-auto px-4 py-4 md:py-8 flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
            <div className="w-full md:w-2/3">
              <TourContent data={tourData} />
            </div>

            <div className="w-full md:w-1/3">
              <TourSidebar priceData={tourData.bookingInfo} />
            </div>
          </div>
        </main>

        <SimilarTours />

        <ScrollToTopButton />
      </div>
    </>
  );
}
