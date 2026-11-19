"use client";

import { GraduationCap } from "lucide-react";

import { Card } from "@/shared/ui/card/card";
import { Section } from "@/shared/ui/section/section";
import { Heading } from "@/shared/ui/heading/heading";
import { SubHeading } from "@/shared/ui/heading/sub-heading";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Education = () => {
  const ref = useScrollReveal({
    groups: [{ selector: "[data-reveal]", stagger: 0.15 }],
  });

  return (
    <Section ref={ref} id="education">
      <div className="max-w-3xl">
        <SubHeading data-reveal className="mb-3">
          Образование
        </SubHeading>

        <Heading data-reveal as={2}>
          Академическая подготовка
        </Heading>
      </div>

      <Card data-reveal className="mt-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <div
            data-reveal
            className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-neutral text-primary"
          >
            <GraduationCap size={26} />
          </div>

          <div>
            <Heading data-reveal as={3}>
              Тверской государственный университет
            </Heading>

            <p data-reveal className="mt-2 text-muted">
              Бакалавриат
            </p>

            <p data-reveal className="mt-1 text-sm leading-6 text-muted">
              Фундаментальная информатика и информационные технологии
            </p>

            <p data-reveal className="mt-4 text-sm font-medium text-primary">
              2020 - 2024
            </p>
          </div>
        </div>
      </Card>
    </Section>
  );
};
