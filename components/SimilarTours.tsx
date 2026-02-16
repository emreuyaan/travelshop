"use client";

import Image from "next/image";
import { useGsapScroll } from "@/hooks/useGsapScroll";
import { StarIcon, MapPinIcon, ClockIcon } from "./Icons";

const similarTours = [
    {
        id: 1,
        title: "Magical Cappadocia Experience",
        location: "Cappadocia, Turkey",
        duration: "4 Days",
        price: 549,
        originalPrice: 699,
        rating: 4.9,
        reviewCount: 312,
        image: "/images/tour-3.jpg",
        badge: "Best Seller",
        badgeColor: "bg-amber-500",
    },
    {
        id: 2,
        title: "Aegean Coast & Ephesus Discovery",
        location: "Izmir, Turkey",
        duration: "5 Days",
        price: 629,
        originalPrice: null,
        rating: 4.7,
        reviewCount: 189,
        image: "/images/tour-2.jpg",
        badge: "New",
        badgeColor: "bg-emerald-500",
    },
    {
        id: 3,
        title: "Pamukkale & Hierapolis Tour",
        location: "Denizli, Turkey",
        duration: "3 Days",
        price: 389,
        originalPrice: 459,
        rating: 4.8,
        reviewCount: 256,
        image: "/images/tour-5-real.jpg",
        badge: "20% Off",
        badgeColor: "bg-rose-500",
    },
    {
        id: 4,
        title: "Complete Antalya Riviera",
        location: "Antalya, Turkey",
        duration: "6 Days",
        price: 749,
        originalPrice: null,
        rating: 4.6,
        reviewCount: 142,
        image: "/images/tour-1.jpg",
        badge: null,
        badgeColor: "",
    },
];

export default function SimilarTours() {
    const ref = useGsapScroll({ type: "stagger", staggerSelector: ".tour-card", staggerDelay: 0.1 });

    return (
        <section ref={ref} className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="glow-orb w-80 h-80 -top-40 right-1/4 opacity-20" />
                <div className="glow-orb w-60 h-60 bottom-0 left-10 opacity-15" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div
                    className="text-center mb-14"
                >
                    <span className="inline-block text-[#854EC9] text-xs font-bold uppercase tracking-[0.2em] mb-3 bg-[#854EC9]/5 px-4 py-1.5 rounded-full">
                        ✦ Explore More
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#090A24] mb-3">
                        Similar Tours You May <span className="gradient-text">Love</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                        Handpicked experiences similar to your current selection. Discover new adventures across Turkey.
                    </p>
                </div>

                {/* Tour Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {similarTours.map((tour) => (
                        <div
                            key={tour.id}
                            className="tour-card group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover-premium cursor-pointer transition-all duration-300 opacity-0"
                        >
                            {/* Image Container */}
                            <div className="relative h-52 overflow-hidden">
                                <Image
                                    src={tour.image}
                                    alt={tour.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

                                {/* Badge */}
                                {tour.badge && (
                                    <div className={`absolute top-3 left-3 ${tour.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                                        {tour.badge}
                                    </div>
                                )}

                                {/* Wishlist button */}
                                <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-rose-500 hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                    </svg>
                                </button>

                                {/* Duration pill */}
                                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold text-gray-700 flex items-center gap-1 shadow-sm">
                                    <ClockIcon className="w-3 h-3" />
                                    {tour.duration}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-4 space-y-3">
                                {/* Location */}
                                <div className="flex items-center gap-1 text-gray-500 text-xs">
                                    <MapPinIcon className="w-3 h-3" />
                                    <span>{tour.location}</span>
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-[#854EC9] transition-colors duration-300 line-clamp-2">
                                    {tour.title}
                                </h3>

                                {/* Rating */}
                                <div className="flex items-center gap-1.5">
                                    <div className="flex items-center text-yellow-400">
                                        <StarIcon className="w-3.5 h-3.5 fill-current" />
                                    </div>
                                    <span className="text-sm font-semibold text-gray-800">{tour.rating}</span>
                                    <span className="text-xs text-gray-400">({tour.reviewCount} reviews)</span>
                                </div>

                                {/* Divider */}
                                <div className="border-t border-gray-100 pt-3">
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <span className="text-xs text-gray-500 block">From</span>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-xl font-bold gradient-text">€{tour.price}</span>
                                                {tour.originalPrice && (
                                                    <span className="text-sm text-gray-400 line-through">€{tour.originalPrice}</span>
                                                )}
                                            </div>
                                        </div>
                                        <button className="bg-[#854EC9]/10 text-[#854EC9] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#854EC9] hover:text-white transition-all duration-300">
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button className="inline-flex items-center gap-2 border-2 border-[#854EC9] text-[#854EC9] px-8 py-3.5 rounded-full font-bold text-base hover:bg-[#854EC9] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#854EC9]/20 group">
                        View All Tours
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
