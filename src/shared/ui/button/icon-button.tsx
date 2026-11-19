import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  RefObject,
} from "react";

import { cn } from "@/shared/utils/cn";

type Props = { variant?: "default" | "primary" };

const commonClasses = (variant: Props["variant"]) =>
  cn(
    "flex size-9 items-center justify-center rounded-lg border border-border bg-surface duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
    {
      "text-primary transition-colors hover:border-primary/40 hover:bg-primary/5":
        variant === "primary",
    },
    {
      "text-muted transition-all hover:border-border-hover hover:bg-surface-hover hover:text-foreground":
        variant === "default",
    },
  );

export const IconButton = ({
  children,
  className,
  variant = "default",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & Props) => (
  <button
    {...props}
    type="button"
    className={cn(commonClasses(variant), className)}
  >
    {children}
  </button>
);

export const IconLink = ({
  children,
  className,
  variant = "default",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> &
  Props & { ref?: RefObject<HTMLAnchorElement | null> }) => (
  <a {...props} className={cn(commonClasses(variant), className)}>
    {children}
  </a>
);
