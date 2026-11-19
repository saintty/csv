import { cn } from "@/shared/utils/cn";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export const Container = ({ className = "", children, ...props }: Props) => (
  <div
    className={cn(
      `
        mx-auto w-full max-w-6xl
        px-4 sm:px-6 lg:px-8`,
      className,
    )}
    {...props}
  >
    {children}
  </div>
);
