import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import type { Painting } from "../types/types";

gsap.registerPlugin(useGSAP);

type SlideShowProps = {
    children: React.ReactNode;
    painting: Painting;
}

export default function SlideShow({ children, painting }: SlideShowProps) {

    const scope = useRef(null);

    useGSAP(() => {
        gsap.fromTo(scope.current,
            { 
                opacity: 0, 
                y: 15 
            },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.6, 
                ease: "power2.in"}
        )
    }, { dependencies: [painting], scope: scope });
    return (
        <div ref={scope}>
            {children}
        </div>
    )
}