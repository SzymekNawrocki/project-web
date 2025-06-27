'use client'

import { useState } from "react"
import Image from "next/image"
import { NavLink } from "../../ui/NavLink"

export const NavbarMobile = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="sm:hidden relative z-50 w-full">
            <div className="flex items-center justify-between px-4 py-4 bg-bg z-50">
                <NavLink href="/">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/assets/nav/logo.png"
                            alt="logo"
                            width={40}
                            height={40}
                            className="w-10 h-auto"
                        />
                        <span className="text-xl font-semibold text-primary">OldWorld Codex</span>
                    </div>
                </NavLink>

                <button onClick={() => setOpen(!open)}>
                    <Image
                        src={open ? "/assets/nav/closemenuIcon.png" : "/assets/nav/menuIcon.png"}
                        alt="menu button"
                        width={32}
                        height={32}
                        className="cursor-pointer transition-transform duration-200"
                    />
                </button>
            </div>

            <div
                className={`absolute top-[72px] right-4 z-40 bg-primary text-secondary rounded-lg px-6 py-4 shadow-md transform transition-all duration-300 origin-top-right ${
                    open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
            >
                <ul className="flex flex-col gap-4 text-center" onClick={() => setOpen(false)}>
                    <li><NavLink href="/knowledge">Instrukcja</NavLink></li>
                    <li><NavLink href="/setup">Szybki Start</NavLink></li>
                    <li><NavLink href="#bestiary">Bestiariusz</NavLink></li>
                    <li><NavLink href="/inventory">Ekwipunek</NavLink></li>
                    <li><NavLink href="#login">Logowanie</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
