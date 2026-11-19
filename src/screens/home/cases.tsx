"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import { Card } from "@/shared/ui/card/card";
import { Badge } from "@/shared/ui/badge/badge";
import { Section } from "@/shared/ui/section/section";
import { Heading } from "@/shared/ui/heading/heading";
import { SubHeading } from "@/shared/ui/heading/sub-heading";

import { data } from "./data";

export const Cases = () => {
  const ref = useScrollReveal({
    groups: [{ selector: "[data-reveal]", stagger: 0.15 }],
  });

  return (
    <Section
      ref={ref}
      id="cases"
      className="border-y border-border bg-surface/30"
    >
      <div className="max-w-3xl">
        <SubHeading data-reveal className="mb-3">
          {" "}
          Практический опыт
        </SubHeading>
        <Heading data-reveal as={2}>
          Инженерные задачи и значимые достижения
        </Heading>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {data.cases.map((item) => (
          <Card data-reveal key={item.number} className="flex flex-col">
            <div className="flex items-center justify-between">
              <span
                data-reveal
                className="text-sm font-semibold tracking-widest text-primary"
              >
                {item.number}
              </span>

              <Badge data-reveal className="font-medium">
                {item.category}
              </Badge>
            </div>

            <Heading data-reveal as={3} className="mt-5">
              {item.title}
            </Heading>

            <div className="my-6" data-reveal>
              <p className="mb-3 text-sm font-semibold text-foreground">
                Основные задачи
              </p>

              <ul className="space-y-2.5">
                {item.tasks.map((task) => (
                  <li
                    key={task}
                    className="flex gap-3 text-sm leading-6 text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>

            <div
              data-reveal
              className="mt-auto border-t border-border pt-5 lg:min-h-25"
            >
              <p className="text-sm font-semibold text-foreground">Результат</p>

              <p className="mt-2 text-sm leading-6 text-muted">{item.result}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
