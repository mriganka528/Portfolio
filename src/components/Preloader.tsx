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
                    setTimeout(() => setIsLoading(false), 300)
                    return 100
                }
                return prev + Math.random() * 15 + 2.5
            })
        }, 90)

        return () => clearInterval(interval)
    }, [])

    if (!isLoading) return null

    return (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-blue-900/10"></div>

            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
            </div>

            <div className="relative z-10 text-center">


                <div className="mb-8">
                    <div className="relative w-64 h-64 mx-auto">
                        <div className="absolute inset-0 rounded-full border border-gray-800">
                            <div
                                className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-400 border-r-blue-400 animate-spin"
                                style={{ animationDuration: "3s" }}
                            ></div>
                        </div>

                        <div className="absolute inset-8 rounded-full border border-gray-800/50">
                            <div
                                className="absolute inset-0 rounded-full border border-transparent border-b-blue-400 border-l-purple-400 animate-spin"
                                style={{ animationDuration: "2s", animationDirection: "reverse" }}
                            ></div>
                        </div>

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
                        </div>

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <div className="text-2xl font-light text-white mb-2">{Math.round(progress)}%</div>
                            <div className="text-xs text-gray-400 tracking-widest">LOADING</div>
                        </div>
                    </div>
                </div>

                <div className="w-80 mx-auto">
                    <div className="h-0.5 bg-gray-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                <div className="mt-8 text-gray-400 text-sm tracking-widest animate-pulse">CRAFTING EXPERIENCE</div>
            </div>
        </div>
    )
}
