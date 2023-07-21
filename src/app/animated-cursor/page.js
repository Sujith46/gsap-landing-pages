'use client'

import { AnimatedCursorNav } from "@/components/AnimatedCursor/AnimatedCursorNav";
import { BackToHome } from "@/components/common/backToHome/BackToHome";
import { usePathname } from "next/navigation";

export default function AnimatedCursor() {

    if(window) {
     document.querySelector('html').style.cursor = "none"
    }

    return (
        <main>
            <BackToHome style="py-4"/>
            <AnimatedCursorNav />
        </main>
    )
}