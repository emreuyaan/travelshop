"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const { ref, isVisible } = useScrollAnimation(0.3);

    useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const duration = 1500;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = target / steps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [isVisible, target]);

    return (
        <span ref={ref} className="tabular-nums">
            {count.toLocaleString()}{suffix}
        </span>
    );
}

export default function StatsBar() {
    const { ref, isVisible } = useScrollAnimation(0.1);

    const stats = [
        { value: 15000, suffix: "+", label: "Happy Travelers", icon: "🌍" },
        { value: 250, suffix: "+", label: "Unique Tours", icon: "🗺️" },
        { value: 98, suffix: "%", label: "Satisfaction Rate", icon: "⭐" },
        { value: 45, suffix: "+", label: "Countries", icon: "✈️" },
    ];

    return (
        <section
            ref={ref}
            className="relative py-14 bg-[#090A24] overflow-hidden"
        >
            {/* Decorative dots */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-[10%] w-32 h-32 rounded-full border border-white/30" />
                <div className="absolute bottom-4 right-[15%] w-48 h-48 rounded-full border border-white/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/10" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm text-gray-400 font-medium tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
