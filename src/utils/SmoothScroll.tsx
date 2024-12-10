import React, {useEffect, useRef} from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.css';

const SmoothScroll: React.FC<{children: React.ReactNode}> = ({children}) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollContainerRef.current!,
            smooth: true,
        });

        return () => {
            scroll.destroy(); // Limpia LocomotiveScroll al desmontar
        };
    }, []);

    return <div ref={scrollContainerRef}>{children}</div>;
};

export default SmoothScroll;
