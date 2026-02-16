"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function TrustBanner() {
    const { ref, isVisible } = useScrollAnimation(0.1);

    return (
        <section
            ref={ref}
            className="relative py-20 overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #854EC9 0%, #6a3da3 50%, #4a2d7a 100%)",
            }}
        >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />

            <div className="container mx-auto px-4 relative z-10">
                <div
                    className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <span className="inline-block text-white/70 text-sm font-bold uppercase tracking-widest mb-3">
                        Start Your Adventure
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
                        Ready to Explore Turkey&apos;s Hidden Gems?
                    </h2>
                    <p className="text-lg text-white/75 mb-8 leading-relaxed max-w-2xl mx-auto">
                        Join thousands of happy travelers who&apos;ve discovered the beauty of Turkey with our expertly curated tours. Book with confidence — free cancellation included.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-white text-[#854EC9] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                            Browse All Tours
                        </button>
                        <button className="border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300">
                            Contact Us
                        </button>
                    </div>

                    {/* Trust indicators */}
                    <div
                        className={`flex flex-wrap justify-center gap-6 mt-12 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                    >
                        {[
                            { icon: "🛡️", text: "100% Secure Booking" },
                            { icon: "💳", text: "No Hidden Fees" },
                            { icon: "↩️", text: "Free Cancellation" },
                            { icon: "🏆", text: "Award Winning" },
                        ].map((item) => (
                            <div
                                key={item.text}
                                className="flex items-center gap-2 text-white/80 text-sm font-medium"
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
