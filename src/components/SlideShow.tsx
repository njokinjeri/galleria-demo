import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import type { Painting } from "../types/types";

gsap.registerPlugin(useGSAP);

type SlideShowProps = {
    children: React.ReactNode;
    painting: Painting;
}

export default function SlideShow({ children, painting }: SlideShowProps) {
    return (
        <div>
            {children}
        </div>
    )
}