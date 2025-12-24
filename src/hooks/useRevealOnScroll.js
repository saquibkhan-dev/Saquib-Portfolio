import { useEffect, useRef, useState } from "react";
export function useRevealOnScroll() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (!ref.current)
            return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.15 });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return { ref, visible };
}
