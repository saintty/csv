import { cn } from "@/shared/utils/cn";
import type { HTMLAttributes } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type Props = HTMLAttributes<HTMLHeadingElement> & {
  as?: HeadingLevel;
};

const headingStyles: Record<HeadingLevel, string> = {
  1: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight",
  2: "text-3xl sm:text-4xl font-bold tracking-tight",
  3: "text-2xl sm:text-3xl font-semibold tracking-tight",
  4: "text-xl sm:text-2xl font-semibold",
  5: "text-lg font-semibold",
  6: "text-base font-semibold",
};

export const Heading = ({
  as = 2,
  className = "",
  children,
  ...props
}: Props) => {
  const Tag = `h${as}` as const;

  return (
    <Tag
      className={cn("text-foreground", headingStyles[as], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
