'use client'

import Image from "next/image"

export const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="relative bg-bg text-secondary text-center z-10 flex flex-col items-center justify-start px-4 pt-8 pb-4 -mt-12">
            <div className="absolute top-0 translate-y-[-50%]">
                <Image
                    src="/assets/nav/logo.png"
                    alt="logo"
                    width={56}
                    height={56}
                    className="w-14 h-auto"
                />
            </div>

            <p className="text-xs text-primary mb-1 mt-4">
                Strona stworzona przez fanów dla fanów. Wiedźmin: Stary Świat to przygoda, którą dzielimy razem.
            </p>
            <p className="text-xs text-secondary leading-tight">
                &copy; {year} OldWorld Codex. Fanowski projekt niezwiązany z CD Projekt RED ani Go on Board.
            </p>
        </footer>
    )
}
