import type { HTMLAttributes } from "react";

import { cn } from "@/shared/utils/cn";

type Props = DefaultProps & {
  doubleLines?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const SubHeading = ({ className, children, ...props }: Props) => (
  <div className={cn("flex items-center gap-3", className)} {...props}>
    <span className="h-px w-8 bg-primary" />
    <span className="text-sm font-medium uppercase tracking-widest text-primary">
      {children}
    </span>
    <span className="h-px w-8 bg-primary" />
  </div>
);
