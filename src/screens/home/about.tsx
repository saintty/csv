"use client";

import { Code2 } from "lucide-react";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import { Card } from "@/shared/ui/card/card";
import { Section } from "@/shared/ui/section/section";
import { Heading } from "@/shared/ui/heading/heading";
import { SubHeading } from "@/shared/ui/heading/sub-heading";

import { data } from "./data";

export const About = () => {
  const ref = useScrollReveal({
    groups: [
      {
        selector: "[data-reveal-left]",
        duration: 0.7,
      },
      {
        selector: "[data-reveal-card]",
        stagger: 0.12,
        y: 24,
      },
    ],
  });

  return (
    <Section
      ref={ref}
      id="about"
      className="border-t border-border bg-surface/30"
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_max-content] lg:gap-16">
        <div>
          <SubHeading data-reveal-left className="mb-3">
            Обо мне
          </SubHeading>

          <Heading data-reveal-left as={2}>
            Персональный профиль
          </Heading>

          <div className="mt-6 space-y-4 text-base leading-8 text-muted">
            {data.about.descriptions.map((item) => (
              <p data-reveal-left key={item}>
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 self-start">
          {data.about.cards.map(({ description, title }) => (
            <Card key={title} data-reveal-card className="lg:max-w-60">
              <Code2 className="mb-4 text-primary" size={24} />
              <p className="text-2xl font-bold text-foreground">{title}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
