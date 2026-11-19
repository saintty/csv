import { cn } from "@/shared/utils/cn";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & { hover?: boolean };

export const Card = ({
  hover = false,
  className = "",
  children,
  ...props
}: Props) => (
  <div
    className={cn(
      `
        rounded-xl border border-border
        bg-surface p-5 sm:p-6`,
      {
        "transition-colors hover:bg-surface-hover hover:border-border-hover":
          hover,
      },
      className,
    )}
    {...props}
  >
    {children}
  </div>
);
