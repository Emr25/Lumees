'use client'

import Image from 'next/image'

const Blog1 = () => {
    return (
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-white border border-gray-300 rounded-xl overflow-hidden shadow-md font-inter mt-10 mr-auto">
            {/* Üst görsel */}
            <div className="relative h-56 sm:h-64">
                <Image
                    src="/ev foto.avif" // görselini buraya koy
                    alt="Article Banner"
                    fill
                    className="object-cover"
                />
            </div>

            {/* İçerik */}
            <div className="p-6 space-y-4">
                {/* Küçük logo ve meta bilgi */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo lumess.avif" // küçük logo görseli
                        alt="Lumees Logo"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                    <div className="text-sm text-gray-600">
                        <p className="font-medium text-gray-800">Lumees Team</p>
                        <p>May 26</p>
                    </div>
                </div>

                {/* Başlık */}
                <h3 className="text-xl font-bold text-gray-900">
                    Why the Future of AI Isn’t Just Bigger — It’s Smarter
                </h3>

                {/* Açıklama */}
                <p className="text-gray-700 text-sm">
                    Artificial Intelligence (AI) has moved from a specialized area of research to a vital part of our daily lives and various industries.
                </p>
                <div>
                    <button className='text-orange-500'>Read the blog</button>
                </div>
            </div>
        </div>
    )
}

export default Blog1
