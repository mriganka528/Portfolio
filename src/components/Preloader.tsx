"use client"

import { useEffect, useState } from "react"

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(() => setIsLoading(false), 300) // Delay before hiding
                    return 100
                }
                return prev + Math.random() * 20 + 3 // Adjusted increment for 1.6s timing
            })
        }, 60) // Slightly slower interval for better timing

        return () => clearInterval(interval)
    }, [])

    if (!isLoading) return null

    return (
        <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-900 via-purple-900/10 to-blue-900/10 flex items-center justify-center">
            <div className="relative z-10 text-center">
                {/* Minimalistic Logo */}
                <div className="mb-16">
                    <div className="relative">
                        {/* Main logo */}
                        <h1 className="text-3xl md:text-4xl font-light text-gray-300 tracking-[0.3em] mb-8 animate-fade-in">
                            MRIGANKA
                        </h1>

                        {/* Subtle underline */}
                        <div className="w-24 h-px bg-white/20 mx-auto mb-4"></div>

                        {/* Tagline */}
                        <p className="text-xs text-gray-500 tracking-[0.2em] font-light">FULLSTACK DEVELOPER</p>
                    </div>
                </div>

                {/* Minimalistic Loading Indicator */}
                <div className="mb-12">
                    {/* Simple progress bar */}
                    <div className="w-48 mx-auto mb-6">
                        <div className="h-px bg-gray-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-white transition-all duration-300 ease-out"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Progress percentage */}
                    <div className="text-sm font-light text-gray-400 tracking-wider">{Math.round(progress)}%</div>
                </div>
            </div>
        </div>
    )
}
