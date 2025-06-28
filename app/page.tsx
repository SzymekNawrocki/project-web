'use client'

import { Hero } from "@/app/components/sections/Hero"
import { HeroMobile } from "@/app/components/sections/mobile/HeroMobile"

import { About } from "@/app/components/sections/About"
import { AboutMobile } from "@/app/components/sections/mobile/AboutMobile"

import { Outro } from "@/app/components/sections/Outro"
import { OutroMobile} from "@/app/components/sections/mobile/OutroMobile";


export default function Home() {
    return (
        <>
            <div className="hidden sm:block">
                <Hero />
            </div>
            <div className="block sm:hidden">
                <HeroMobile />
            </div>

            <div className="hidden sm:block">
                <About />
            </div>
            <div className="block sm:hidden">
                <AboutMobile />
            </div>

            <section
                id="register">
            </section>

            <div className="hidden sm:block">
                <Outro />
            </div>
            <div className="block sm:hidden">
                <OutroMobile />
            </div>
        </>
    )
}
