import type { HTMLAttributes, RefObject } from "react";
import { Container } from "@/shared/ui/container/container";
import { cn } from "@/shared/utils/cn";

type Props = HTMLAttributes<HTMLElement> & {
  id: string;
  ref?: RefObject<HTMLElement | null>;
};

export const Section = ({ id, className = "", children, ...props }: Props) => (
  <section
    id={id}
    className={cn("scroll-mt-16.25 py-16 sm:py-20 lg:py-24", className)}
    {...props}
  >
    <Container>{children}</Container>
  </section>
);
