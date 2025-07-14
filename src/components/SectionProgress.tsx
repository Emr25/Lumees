'use client'

import { useEffect, useRef, useState } from 'react'

interface SectionProgressBarProps {
    children: React.ReactNode
}

const SectionProgressBar = ({ children }: SectionProgressBarProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            if (!ref.current) return

            const rect = ref.current.getBoundingClientRect()
            const windowHeight = window.innerHeight

            const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
            const clampedVisibleHeight = Math.max(0, visibleHeight)

            const progress = Math.min(clampedVisibleHeight / rect.height, 1)

            setProgress(progress)
        }

        onScroll()
        window.addEventListener('scroll', onScroll)
        window.addEventListener('resize', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [])

    return (
        <div ref={ref} className="relative">
            {/* İnce açık gri arka plan çizgisi */}
            <div className="relative h-[2px] bg-gray-300 w-full">
                {/* İlerleyen küçük siyah nokta */}
                <div
                    className="absolute top-[-5px] bg-black rounded-full w-3 h-3 shadow-sm"
                    style={{ left: `calc(${progress * 100}% - 6px)` }}
                />
            </div>

            {/* İçerik için üst boşluk */}
            <div className="pt-6">
                {children}
            </div>
        </div>
    )
}

export default SectionProgressBar
