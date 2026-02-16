"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Preloader({ onCompleteAction }: { onCompleteAction: () => void }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const topHalfRef = useRef<HTMLDivElement>(null);
    const bottomHalfRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    onCompleteAction();
                },
            });

            // 1. Logo scales in with elastic ease
            tl.fromTo(
                logoRef.current,
                { scale: 0, opacity: 0, rotation: -10 },
                { scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" }
            );

            // 2. Line draws from center outward
            tl.fromTo(
                lineRef.current,
                { scaleX: 0 },
                { scaleX: 1, duration: 0.6, ease: "power3.inOut" },
                "-=0.2"
            );

            // 3. Text fades up
            tl.fromTo(
                textRef.current,
                { y: 10, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
                "-=0.3"
            );

            // 4. Short pause
            tl.to({}, { duration: 0.4 });

            // 5. Everything scales down slightly and fades
            tl.to(logoRef.current, {
                scale: 0.8,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
            });
            tl.to(
                [lineRef.current, textRef.current],
                { opacity: 0, duration: 0.2, ease: "power2.in" },
                "-=0.2"
            );

            // 6. Curtain split — top goes up, bottom goes down
            tl.to(topHalfRef.current, {
                yPercent: -100,
                duration: 0.7,
                ease: "power4.inOut",
            });
            tl.to(
                bottomHalfRef.current,
                {
                    yPercent: 100,
                    duration: 0.7,
                    ease: "power4.inOut",
                },
                "-=0.7"
            );
        }, containerRef);

        return () => ctx.revert();
    }, [onCompleteAction]);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[200] pointer-events-none">
            {/* Top half */}
            <div
                ref={topHalfRef}
                className="absolute top-0 left-0 right-0 h-1/2 bg-white z-[201]"
            />
            {/* Bottom half */}
            <div
                ref={bottomHalfRef}
                className="absolute bottom-0 left-0 right-0 h-1/2 bg-white z-[201]"
            />

            {/* Center content — sits on the seam */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-[202]">
                {/* Logo */}
                <div ref={logoRef} className="mb-5 opacity-0">
                    <Image
                        src="/logo.svg"
                        alt="Travelshop"
                        width={140}
                        height={40}
                        className="w-32 md:w-36 h-auto"
                        priority
                    />
                </div>

                {/* Horizontal line */}
                <div
                    ref={lineRef}
                    className="w-16 h-[2px] bg-[#854EC9] origin-center mb-3"
                    style={{ transform: "scaleX(0)" }}
                />

                {/* Tagline */}
                <span
                    ref={textRef}
                    className="text-[11px] font-medium tracking-[0.25em] uppercase text-gray-400 opacity-0"
                >
                    Discover the world
                </span>
            </div>
        </div>
    );
}
