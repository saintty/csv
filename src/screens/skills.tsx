"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import { Card } from "@/shared/ui/card/card";
import { Chip } from "@/shared/ui/chip/chip";
import { Section } from "@/shared/ui/section/section";
import { Heading } from "@/shared/ui/heading/heading";
import { SubHeading } from "@/shared/ui/heading/sub-heading";

import { data } from "./data";

export const Skills = () => {
  const ref = useScrollReveal({
    groups: [{ selector: "[data-reveal]", stagger: 0.15 }],
  });

  return (
    <Section ref={ref} id="skills">
      <div className="max-w-3xl">
        <SubHeading data-reveal className="mb-3">
          Навыки
        </SubHeading>
        <Heading data-reveal as={2}>
          Технологический стек
        </Heading>

        <p data-reveal className="mt-4 leading-7 text-muted">
          Инструменты и технологии, используемые при разработке и сопровождении
          frontend-приложений.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.skillGroups.map((group) => (
          <Card data-reveal key={group.title}>
            <Heading as={4}>{group.title}</Heading>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Chip key={skill}>{skill}</Chip>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
