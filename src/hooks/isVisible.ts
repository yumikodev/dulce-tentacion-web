import { RefObject, useEffect, useState } from "react";

export function useIsVisible<T = HTMLElement>(ref: RefObject<T>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current as Element);
  }, [ref]);

  return isIntersecting;
}
