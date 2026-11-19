import { useEffect, useRef } from 'react';

export const useActionOnScroll = (callback: () => void, enabled: boolean) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!enabled) return;

    const handler = () => callbackRef.current();

    window.addEventListener('scroll', handler, { passive: true });

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, [enabled]);
};
