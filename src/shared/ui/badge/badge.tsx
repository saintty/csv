import type { HTMLAttributes } from "react";

import { cn } from "@/shared/utils/cn";

type Props = HTMLAttributes<HTMLSpanElement>;

export const Badge = ({ children, className, ...props }: Props) => (
  <span
    {...props}
    className={cn(
      "rounded-md bg-neutral px-2.5 py-1 text-xs text-muted",
      className,
    )}
  >
    {children}
  </span>
);
