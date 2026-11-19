import { cn } from "@/shared/utils/cn";
import { default as NextLink, type LinkProps } from "next/link";

type Props = DefaultProps & LinkProps;

export const Link = ({ href, className = "", children, ...props }: Props) => {
  const styles = cn(
    `
    text-primary hover:text-primary-hover
    transition-colors duration-200`,
    className,
  );

  return (
    <NextLink href={href} className={styles} {...props}>
      {children}
    </NextLink>
  );
};
