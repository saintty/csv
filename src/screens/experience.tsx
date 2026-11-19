"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import { Card } from "@/shared/ui/card/card";
import { Chip } from "@/shared/ui/chip/chip";
import { Badge } from "@/shared/ui/badge/badge";
import { Section } from "@/shared/ui/section/section";
import { Heading } from "@/shared/ui/heading/heading";
import { SubHeading } from "@/shared/ui/heading/sub-heading";

import { data } from "./data";

export const Experience = () => {
  const ref = useScrollReveal({
    groups: [{ selector: "[data-reveal]", stagger: 0.15 }],
  });

  return (
    <Section ref={ref} id="experience">
      <div className="max-w-3xl">
        <SubHeading data-reveal className="mb-3">
          Карьерный путь
        </SubHeading>

        <Heading data-reveal as={2}>
          Опыт работы
        </Heading>
      </div>

      {data.experience.map(({ company, location, stages, skills }) => (
        <Card data-reveal className="mt-10" key={company}>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <Heading data-reveal as={3}>
              {company}
            </Heading>
            <span data-reveal className="text-sm text-muted">
              {location}
            </span>
          </div>

          <div className="mt-8 space-y-8">
            {stages.map((item) => (
              <div
                data-reveal
                key={item.position}
                className="relative border-l border-border pl-6"
              >
                <span className="absolute -left-1.25 top-0 h-2.5 w-2.5 rounded-full bg-primary" />

                <p className="text-sm font-medium text-primary">
                  {item.period}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <Heading as={4}>{item.position}</Heading>
                  <Badge>{item.type}</Badge>
                </div>

                <p className="mt-3 max-w-2xl leading-7 text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div data-reveal className="mt-8 border-t border-border pt-6">
            <p className="mb-3 text-sm font-semibold text-foreground">
              Основные направления работы
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </Section>
  );
};
