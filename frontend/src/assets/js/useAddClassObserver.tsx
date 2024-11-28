import { useEffect } from "react";

export const useAddClassObserver = (
  addClass: string,
  targetRef: React.RefObject<HTMLElement>,
  isReStart?: boolean,
  rootMargin?: number,
  threshold?: number | number[],
  root?: Element | Document | null
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((io) => {
          if (io.isIntersecting) {
            targetRef.current?.classList.add(addClass);
          } else {
            targetRef.current?.classList.remove(addClass);
          }
        });
      },
      {
        threshold: threshold || [0, 0.5, 1],
        root: root || null,
        rootMargin: `${rootMargin || 0}px`,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
  }, [addClass, isReStart, threshold, root, rootMargin, targetRef]);
};
