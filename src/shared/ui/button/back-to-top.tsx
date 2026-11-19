"use client";

import { ArrowUp } from "lucide-react";
import { useBackToTop } from "./hooks/use-back-to-top";

import { IconLink } from "./icon-button";

export const BackToTop = () => {
  const ref = useBackToTop();

  return (
    <IconLink
      ref={ref}
      className="fixed z-10 bottom-5 right-5 rounded-full opacity-0 invisible"
      href="#top"
    >
      <ArrowUp />
    </IconLink>
  );
};
