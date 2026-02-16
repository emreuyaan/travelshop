"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType = "fadeUp" | "fadeLeft" | "fadeRight" | "scale" | "stagger";

interface UseGsapScrollOptions {
    type?: AnimationType;
    delay?: number;
    duration?: number;
    staggerDelay?: number;
    staggerSelector?: string;
    start?: string;
}

export function useGsapScroll<T extends HTMLElement = HTMLDivElement>(
    options: UseGsapScrollOptions = {}
) {
    const ref = useRef<T>(null);
    const {
        type = "fadeUp",
        delay = 0,
        duration = 0.8,
        staggerDelay = 0.12,
        staggerSelector = ":scope > *",
        start = "top 85%",
    } = options;

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let ctx: gsap.Context;

        if (type === "stagger") {
            const children = el.querySelectorAll(staggerSelector);
            if (children.length === 0) return;

            ctx = gsap.context(() => {
                gsap.set(children, { y: 30, opacity: 0 });
                gsap.to(children, {
                    y: 0,
                    opacity: 1,
                    duration,
                    delay,
                    stagger: staggerDelay,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start,
                        toggleActions: "play none none none",
                    },
                });
            });
        } else {
            const fromVars: gsap.TweenVars = { opacity: 0 };
            const toVars: gsap.TweenVars = { opacity: 1, duration, delay, ease: "power3.out" };

            switch (type) {
                case "fadeUp":
                    fromVars.y = 40;
                    toVars.y = 0;
                    break;
                case "fadeLeft":
                    fromVars.x = -50;
                    toVars.x = 0;
                    break;
                case "fadeRight":
                    fromVars.x = 50;
                    toVars.x = 0;
                    break;
                case "scale":
                    fromVars.scale = 0.9;
                    toVars.scale = 1;
                    break;
            }

            ctx = gsap.context(() => {
                gsap.fromTo(el, fromVars, {
                    ...toVars,
                    scrollTrigger: {
                        trigger: el,
                        start,
                        toggleActions: "play none none none",
                    },
                });
            });
        }

        return () => ctx?.revert();
    }, [type, delay, duration, staggerDelay, staggerSelector, start]);

    return ref;
}
