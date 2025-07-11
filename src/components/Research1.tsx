'use client'

const WideCard = () => {
    return (
        <div className="w-1/2 mt-10 ml-16 bg-white border border-gray-400 rounded-xl p-6 relative font-inter shadow-md">
            {/* Sağ üstteki buton */}
            <div className="absolute top-4 right-4">
                <button className="bg-orange-500 text-white text-sm font-medium px-4 py-2 rounded-md">
                    Read The Full Article
                </button>
            </div>



            {/* Alt bilgi */}
            <div className="text-sm text-gray-600">
                <p>Hasan Kurşun</p>
                <p>May 29, 2025</p>
            </div>
            {/* Başlık */}
            <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                Multimodal Polymer Property Prediction
            </h4>

        </div>
    )
}

export default WideCard
