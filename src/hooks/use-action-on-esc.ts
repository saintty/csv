import { useEffect } from "react";

export const useActionOnEsc = (onAction: () => void, enable?: boolean) => {
  useEffect(() => {
    if (!enable) return;

    const closeOnEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onAction();
    };

    window.addEventListener("keydown", closeOnEsc);

    return () => {
      window.removeEventListener("keydown", closeOnEsc);
    };
  }, [enable, onAction]);
};
