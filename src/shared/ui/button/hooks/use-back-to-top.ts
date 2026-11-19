"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export const useBackToTop = () => {
  const ref = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    const element = ref.current;

    if (!element) return;

    gsap.set(element, { autoAlpha: 0, y: 12 });

    ScrollTrigger.create({
      trigger: "#about",
      start: "top 65px",
      onEnter: () => {
        gsap.to(element, {
          autoAlpha: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to(element, {
          autoAlpha: 0,
          y: 12,
          duration: 0.3,
          ease: "power2.inOut",
        });
      },
    });
  });

  return ref;
};
