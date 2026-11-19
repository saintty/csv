"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import { Card } from "@/shared/ui/card/card";
import { Section } from "@/shared/ui/section/section";
import { Heading } from "@/shared/ui/heading/heading";
import { SubHeading } from "@/shared/ui/heading/sub-heading";

import { data } from "./data";

export const Approaches = () => {
  const ref = useScrollReveal({
    groups: [{ selector: "[data-reveal]", stagger: 0.15 }],
  });

  return (
    <Section
      ref={ref}
      id="approach"
      className="border-y border-border bg-surface/30"
    >
      <div className="max-w-3xl">
        <SubHeading data-reveal className="mb-3">
          Принципы работы
        </SubHeading>

        <Heading data-reveal as={2}>
          Подход к разработке
        </Heading>

        <p data-reveal className="mt-4 leading-7 text-muted">
          В разработке уделяю внимание не только реализации функциональности, но
          и качеству архитектуры, поддерживаемости и взаимодействию внутри
          команды.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {data.approaches.map((item) => {
          const ApproachIcon = item.icon;

          return (
            <Card key={item.title} data-reveal>
              <ApproachIcon
                size={26}
                strokeWidth={1.8}
                className="text-primary"
              />

              <Heading as={4} className="mt-5">
                {item.title}
              </Heading>

              <p className="mt-3 text-sm leading-7 text-muted">
                {item.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
