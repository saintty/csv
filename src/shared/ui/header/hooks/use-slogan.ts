import { gsap } from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";

import { slogans } from "@/shared/ui/header/constants";

export function useSlogan() {
  const [index, setIndex] = useState(0);

  const ref = useRef<HTMLSpanElement>(null);
  const isAnimating = useRef(false);

  const onNext = useCallback(() => {
    const element = ref.current;
    if (!element || isAnimating.current) return;

    isAnimating.current = true;
    const nextIndex = (index + 1) % slogans.length;

    gsap
      .timeline({
        onComplete: () => {
          isAnimating.current = false;
        },
      })
      .to(element, {
        autoAlpha: 0,
        y: -15,
        duration: 0.5,
        ease: "sine.in",
      })
      .call(() => {
        setIndex(nextIndex);
      })
      .set(element, {
        y: 15,
      })
      .to(element, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "sine.out",
      });
  }, [index]);

  useEffect(() => {
    const timeout = setTimeout(onNext, 10_000);

    return () => clearTimeout(timeout);
  }, [index, onNext]);

  return { slogan: slogans[index], onNext, ref };
}
