"use client";

import Link from "next/link";
import { Code2, Menu, X } from "lucide-react";

import { navigation } from "./constants";

import { useActionOnEsc } from "@/hooks/use-action-on-esc";
import { useClickOutside } from "@/hooks/use-click-outside";
import { useActionOnScroll } from "@/hooks/use-action-on-scroll";

import { Icon } from "@/shared/ui/icon/icon";
import { Container } from "@/shared/ui/container/container";
import { useHeader } from "./hooks/use-header";
import { useSlogan } from "./hooks/use-slogan";
import { IconButton } from "../button/icon-button";
import { Chip } from "../chip/chip";

export const Header = () => {
  const { closeMenu, headerRef, isOpen, toggleMenu } = useHeader();
  const { slogan, onNext, ref } = useSlogan();

  useActionOnEsc(closeMenu, isOpen);
  useActionOnScroll(closeMenu, isOpen);
  useClickOutside([headerRef], closeMenu, isOpen);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-border bg-background "
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <IconButton variant="primary" onClick={onNext}>
              <Code2 size={18} />
            </IconButton>
            <span
              ref={ref}
              className="text-sm font-semibold tracking-tight text-foreground italic"
            >
              {slogan}
            </span>
          </div>

          <IconButton
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
            aria-controls="header-navigation"
            onClick={toggleMenu}
          >
            <Icon icon={isOpen ? X : Menu} />
          </IconButton>
        </div>

        {isOpen && (
          <nav
            id="header-navigation"
            aria-label="Основная навигация"
            className="absolute left-0 right-0 top-full border-b border-border bg-surface shadow-xl "
          >
            <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
              <ul className="flex flex-wrap gap-2">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                    >
                      <Chip className="block rounded-full">{item.label}</Chip>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
};
