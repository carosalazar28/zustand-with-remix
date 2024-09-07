import { useRef, useEffect } from 'react';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1
};

function useIntersectionObserver(setLoading: (by: boolean) => void, targetRef) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoading(true);
          // ... tu lógica para cargar más datos ...
          setLoading(false);
        }
      },
      options
    );

    observerRef.current = observer;
    observer.observe(targetRef.current);


    return () => observer.disconnect();
  }, [setLoading, targetRef]);
}

export default useIntersectionObserver;