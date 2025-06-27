'use client'

import { useEffect, useState } from 'react'
import { KnowledgeBook } from '@/app/components/KnowledgeBook'
import { KnowledgeMobile } from '@/app/components/sections/mobile/KnowledgeMobile'

export default function KnowledgePage() {
    const [isMobile, setIsMobile] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 640)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => setLoading(false), 1500)
        return () => clearTimeout(timeout)
    }, [])

    useEffect(() => {
        if (loading || isMobile) return

        document.body.classList.add('noscroll')
        return () => {
            document.body.classList.remove('noscroll')
        }
    }, [loading, isMobile])

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-bg text-primary text-xl font-semibold gap-6">
                <svg
                    className="animate-spin h-10 w-10 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                </svg>
                <span>Wczytywanie instrukcji...</span>
            </div>
        )
    }

    return isMobile ? (
        <KnowledgeMobile />
    ) : (
        <div className="hidden sm:flex flex-col items-center justify-between h-screen bg-bg text-secondary relative">
            <div className="flex flex-col items-center justify-center w-full pt-6 pb-2">
                <KnowledgeBook />
            </div>
        </div>
    )
}
