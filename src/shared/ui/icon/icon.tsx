import type { ComponentProps } from "react";
import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
} & Omit<ComponentProps<LucideIcon>, "ref">;

export const Icon = ({ icon: IconComponent, size = 20, ...props }: Props) => (
  <IconComponent size={size} strokeWidth={1.8} aria-hidden {...props} />
);
