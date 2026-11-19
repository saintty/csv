import { useRef, useState } from "react";

export const useHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return { isOpen, closeMenu, headerRef, toggleMenu };
};
