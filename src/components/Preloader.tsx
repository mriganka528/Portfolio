"use client"

import { useEffect, useState } from "react"

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(() => setIsLoading(false), 300) 
                    return 100
                }
                return prev + Math.random() * 20 + 3 
            })
        }, 60) 

        return () => clearInterval(interval)
    }, [])

    if (!isLoading) return null

    return (
        <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-900 via-purple-900/10 to-blue-900/10 flex items-center justify-center">
            <div className="relative z-10 text-center">
                <div className="mb-16">
                    <div className="relative">
                        <h1 className="text-3xl md:text-4xl font-light text-gray-300 tracking-[0.3em] mb-8 animate-fade-in">
                            MRIGANKA
                        </h1>

                        <div className="w-24 h-px bg-white/20 mx-auto mb-4"></div>

                        <p className="text-xs text-gray-500 tracking-[0.2em] font-light">FULL-STACK DEVELOPER</p>
                    </div>
                </div>

                <div className="mb-12">
                    <div className="w-48 mx-auto mb-6">
                        <div className="h-px bg-gray-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-white transition-all duration-300 ease-out"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="text-sm font-light text-gray-400 tracking-wider">{Math.round(progress)}%</div>
                </div>
            </div>
        </div>
    )
}
