'use client'

import { Button } from "../../ui"

export const OutroMobile = () => {

    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-bg px-6 pb-40 pt-12">
            {/* Tło */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 blur-sm opacity-30"
                style={{
                    backgroundImage: "url('/assets/outro/outro.png')",
                    backgroundAttachment: "scroll",
                }}
            />

            <div className="relative z-10 text-center">
                <h2 className="text-4xl font-black text-primary mb-8 leading-snug">
                    Gotów na szlak?
                </h2>
                <p className="text-sm text-secondary mb-8 max-w-xs mx-auto leading-relaxed">
                    Skorzystaj z interaktywnej instrukcji, poznaj potwory w bestiariuszu i przygotuj się
                    do walki z pomocą naszego kalkulatora.
                </p>
                <Button href="#register">Stwórz konto!</Button>
            </div>
        </section>
    )
}
