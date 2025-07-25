'use client'

import Image from 'next/image'

const ResearchHero = () => {
    return (
        <section className="relative w-full h-[500px] font-inter">
            {/* Arka Plan Görseli */}
            <Image
                src="/techno.avif"
                alt="About Background"
                fill
                className="object-cover object-center"
                priority
            />

            {/* Karartma */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Yazı: yukarı ve sağa kaydırılmış */}
            <div className="absolute bottom-20 left-24 z-20">
                <h1 className="text-3xl md:text-5xl font-bold text-white">Research and Technology

                </h1>
                <h5 className="text-white max-w-xl mt-2">
                    Our models power conversations, agents, copilots, retrieval, moderation, and multimodal apps — in the wild.



                </h5>
            </div>
        </section>
    )
}

export default ResearchHero
