'use client'

import Image from 'next/image'

const AboutHero = () => {
    return (
        <section className="relative w-full h-[500px] font-inter">
            {/* Arka Plan Görseli */}
            <Image
                src="/arka plan 1.avif"
                alt="About Background"
                fill
                className="object-cover object-center"
                priority
            />

            {/* Karartma */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Yazı: yukarı ve sağa kaydırılmış */}
            <div className="absolute bottom-20 left-24 z-20">
                <h1 className="text-3xl md:text-5xl font-bold text-white">About Us
                </h1>

            </div>
        </section>
    )
}

export default AboutHero
