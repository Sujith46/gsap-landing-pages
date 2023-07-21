'use client'

import { AnimatedCursorNav } from "@/components/AnimatedCursor/AnimatedCursorNav";
import { usePathname } from "next/navigation";

export default function AnimatedCursor() {
    
    if(window) {
     document.querySelector('html').style.cursor = "none"
    }

    return (
        <main>
            <AnimatedCursorNav />
        </main>
    )
}