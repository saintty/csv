"use client";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealGroup = {
  selector: string;
  stagger?: number;
  duration?: number;
  y?: number;
};

type ScrollRevealOptions = {
  start?: string;
  groups?: RevealGroup[];
  once?: boolean;
};

export function useScrollReveal({
  start = "top 70%",
  once = true,
  groups,
}: ScrollRevealOptions = {}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const container = ref.current;

      if (!container) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const timeline = gsap.timeline({
        scrollTrigger: { trigger: container, start, once },
      });

      groups?.forEach(({ selector, stagger = 0, duration = 0.6, y = 20 }) => {
        const elements = gsap.utils.toArray<HTMLElement>(selector, container);

        if (!elements.length) return;

        timeline.fromTo(
          elements,
          { autoAlpha: 0, y },
          {
            autoAlpha: 1,
            y: 0,
            duration,
            stagger,
            ease: "power2.out",
          },
          ">",
        );
      });
    },
    {
      scope: ref,
      dependencies: [start, once, groups],
      revertOnUpdate: true,
    },
  );

  return ref;
}
