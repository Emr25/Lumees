'use client'
import Image from 'next/image'
import RotatingShape from './RotatingShape'

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <Image
                src="/arka plan 1.avif"
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="z-0"
                priority
            />

            {/* Karartma efekti */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* Content */}
            <div className="relative z-20 w-full px-6 pt-32 md:pt-40">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-white items-center">
                    {/* Left Side */}
                    <div className="flex flex-col justify-center text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Private intelligence.<br />
                            Built for the real world.
                        </h1>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center justify-center text-center md:text-left">
                        <p className="text-lg md:text-xl">
                            We build next-generation language and multimodal models — not for everyone, but for everything.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
