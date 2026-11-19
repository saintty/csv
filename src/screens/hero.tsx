"use client";

import { MapPin, ArrowUpRight, BriefcaseBusiness } from "lucide-react";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import { Section } from "@/shared/ui/section/section";
import { Heading } from "@/shared/ui/heading/heading";
import { SubHeading } from "@/shared/ui/heading/sub-heading";
import { ButtonLink } from "@/shared/ui/button/button-link";

export const Hero = () => {
  const ref = useScrollReveal({
    groups: [
      {
        selector: "[data-reveal]",
        stagger: 0.15,
        duration: 0.6,
        y: 20,
      },
    ],
  });

  return (
    <Section id="top" ref={ref} className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-4xl">
        <SubHeading data-reveal>Кто я?</SubHeading>

        <Heading
          data-reveal
          as={1}
          className="max-w-4xl text-5xl leading-[1.1] sm:text-6xl lg:text-7xl"
        >
          Артём Узингер
        </Heading>

        <p
          data-reveal
          className="mt-6 text-xl font-medium text-muted sm:text-2xl"
        >
          React · Next.js · TypeScript
        </p>

        <p
          data-reveal
          className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg"
        >
          Frontend-разработчик с коммерческим опытом разработки веб-приложений.
          Основная специализация - проектировании архитектуры приложений,
          создание сложных пользовательских интерфейсов, внимание к
          переиспользуемости готовых frontend-решений.
        </p>

        <div data-reveal className="mt-10 flex flex-wrap items-center gap-3">
          <ButtonLink href="#contacts" variant="primary">
            Связаться со мной
            <ArrowUpRight size={18} />
          </ButtonLink>
        </div>

        <div
          data-reveal
          className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} />
            Тверь, Россия
          </span>
          <span className="inline-flex items-center gap-2">
            <BriefcaseBusiness size={16} />
            Удалённая / гибридная работа
          </span>
        </div>
      </div>
    </Section>
  );
};
