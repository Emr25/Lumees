'use client'

const WideCard = () => {
    return (
        <div className="w-full md:w-1/2 mt-10 mx-auto md:ml-16 bg-white border border-gray-400 rounded-xl p-6 relative font-inter shadow-md mb-12">
            {/* Sağ üstteki buton (mobilde alta iner) */}
            <div className="absolute top-4 right-4 hidden md:block">
                <button className="bg-orange-500 text-white text-sm font-medium px-4 py-2 rounded-md">
                    Read The Full Article -{">"}
                </button>
            </div>

            {/* Mobil için buton (altta gösterilir) */}
            <div className="block md:hidden mb-4">
                <button className="bg-orange-500 text-white text-sm font-medium px-4 py-2 rounded-md w-full">
                    Read The Full Article -{">"}
                </button>
            </div>

            {/* Alt bilgi */}
            <div className="text-sm text-gray-600">
                <p>Hasan Kurşun</p>
                <p>May 29, 2025</p>
            </div>

            {/* Başlık */}
            <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-4 md:mt-8">
                Multimodal Polymer Property Prediction
            </h4>
        </div>
    )
}

export default WideCard
