'use client'

import Link from 'next/link'

const InfoSection = () => {
    return (
        <section className="bg-[#f67d45] py-20 px-6">
            <div className="max-w-6xl mx-auto"> {/* Değiştirildi */}
                {/* Heading */}
                <div className="mb-6">
                    <span className="block text-6xl text-gray-700 font-medium mb-2">01</span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 border-b-2 border-gray-500 inline-block pb-1">
                        Private intelligence. Built for the real world.
                    </h2>
                </div>

                {/* Paragraph */}
                <p className="text-gray-800 text-3xl leading-relaxed mb-6">
                    At Lumees, we are driven by the belief that true innovation lies in creating AI that is not only powerful
                    but also practical, secure, and purpose-built for diverse real-world applications. Our commitment to
                    closed-weight, long-context, and fully multimodal architectures ensures that Lumee models offer unparalleled
                    performance and versatility.
                </p>

                {/* Read more button */}
                <Link href="/about">
                    <button className="text-sm text-gray-900 border border-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition">
                        Read more
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default InfoSection
