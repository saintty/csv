import { cn } from "@/shared/utils/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary: "bg-neutral text-foreground hover:bg-neutral-hover",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-surface-hover",
  ghost:
    "bg-transparent text-muted hover:bg-surface-hover hover:text-foreground",
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-2 text-sm gap-2",
  md: "px-4 py-2.5 text-sm gap-2",
  lg: "px-6 py-3 text-base gap-2.5",
};

export const Button = ({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  className = "",
  children,
  ...props
}: Props) => (
  <button
    className={cn(
      `
        inline-flex items-center justify-center
        rounded-lg font-medium
        transition-colors duration-200
        disabled:pointer-events-none disabled:opacity-50`,
      variants[variant],
      sizes[size],
      className,
    )}
    {...props}
  >
    {leftIcon}
    {children}
    {rightIcon}
  </button>
);
