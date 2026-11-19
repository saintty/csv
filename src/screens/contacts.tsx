"use client";

import { ArrowUpRight, Mail } from "lucide-react";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Card } from "@/shared/ui/card/card";
import { Section } from "@/shared/ui/section/section";
import { Heading } from "@/shared/ui/heading/heading";
import { ButtonLink } from "@/shared/ui/button/button-link";
import { SubHeading } from "@/shared/ui/heading/sub-heading";

import { data } from "./data";

export const Contacts = () => {
  const ref = useScrollReveal({
    groups: [{ selector: "[data-reveal]", stagger: 0.15 }],
  });

  return (
    <Section
      ref={ref}
      id="contacts"
      className="border-t border-border bg-surface/30"
    >
      <div className="mx-auto max-w-3xl text-center">
        <SubHeading data-reveal className="mb-3 justify-center">
          Контакты
        </SubHeading>

        <Heading data-reveal as={2}>
          Давайте обсудим сотрудничество
        </Heading>

        <p data-reveal className="mx-auto mt-5 max-w-xl leading-7 text-muted">
          Открыт к предложениям о работе и профессиональному общению.
          Предпочитаемый способ связи - электронная почта.
        </p>

        <ButtonLink
          data-reveal
          href="mailto:artem.auzinger@gmail.com"
          className="mt-8 "
        >
          <Mail size={18} />
          Написать на Email
          <ArrowUpRight size={18} />
        </ButtonLink>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
        {data.contacts.map((contact) => {
          const ContactIcon = contact.icon;

          const content = (
            <>
              <ContactIcon size={20} className="text-primary" />

              <div className="mt-4">
                <p className="text-xs text-subtle">{contact.label}</p>

                <p className="mt-1 break-all text-sm font-medium text-foreground">
                  {contact.value}
                </p>
              </div>
            </>
          );

          return (
            <Card
              data-reveal
              key={contact.label}
              className="flex flex-col items-center text-center"
            >
              {contact.href ? (
                <a
                  href={contact.href}
                  target={
                    contact.href.startsWith("https://") ? "_blank" : undefined
                  }
                  rel={
                    contact.href.startsWith("https://")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex w-full flex-col items-center"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
