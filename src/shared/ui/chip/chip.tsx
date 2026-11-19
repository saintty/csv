import type { HTMLAttributes } from "react";

import { cn } from "@/shared/utils/cn";

type Props = HTMLAttributes<HTMLSpanElement>;

export const Chip = ({ children, className, ...props }: Props) => (
  <span
    {...props}
    className={cn(
      "rounded-md border border-border bg-background px-3 py-1.5 text-sm text-muted transition-all duration-200 hover:border-primary/40 hover:bg-surface-hover hover:text-foreground",
      className,
    )}
  >
    {children}
  </span>
);
