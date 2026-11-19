import type { Dispatch, FC, SetStateAction, SVGProps } from "react";

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SITE_URL: string;
    }
  }

  type DefaultProps = {
    className?: string;
    root?: keyof JSX.IntrinsicElements;
    children?: ReactNode;
  };

  type DefaultLayoutProps = {
    children: ReactNode;
  };

  type ClassNames<T> = {
    classNames?: Partial<Record<T, string>>;
  };
}
