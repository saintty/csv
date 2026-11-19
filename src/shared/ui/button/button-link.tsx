import { cn } from "@/shared/utils/cn";
import type { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "default" | "primary";
};

export const ButtonLink = ({
  className,
  children,
  variant = "default",
  ...props
}: Props) => (
  <a
    {...props}
    className={cn(
      "inline-flex items-center gap-2 rounded-lg p-2 lg:px-5 lg:py-3 font-medium text-white transition-colors",
      className,
      {
        "border border-border bg-surface hover:bg-surface-hover":
          variant === "default",
        "bg-primary hover:bg-primary-hover": variant === "primary",
      },
    )}
  >
    {children}
  </a>
);
