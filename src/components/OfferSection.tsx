'use client'

const offers = [
    {
        number: '01',
        title: 'Hosted API Access',
        description:
            'Instant access to Lumee models via a high-performance, scalable cloud API. Supports multilingual prompts, long-context reasoning, and easy integration into apps or research pipelines.',
    },
    {
        number: '02',
        title: 'Custom Fine-Tuning',
        description:
            'Fine-tune Lumee models on your own data with support for LoRA, full training, and alignment techniques. Build domain-specific assistants while keeping your IP secure and customizable.',
    },
    {
        number: '03',
        title: 'On-Prem & Edge Deployment',
        description:
            'Deploy Lumee models directly to your infrastructure — from servers to edge devices. Our optimized formats (INT4/INT8) support Axelera, Jetson, Intel NPUs, and ensure private, offline inference.',
    },
]

const OfferSection = () => {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-12">
                    <span className="block text-6xl text-gray-700 font-medium mb-2">02</span>
                    <h2 className="text-lg md:text-lg font-semibold text-gray-900 border-b-2 border-black w-fit pb-1">
                        What we Offer
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {offers.map((offer) => (
                        <div
                            key={offer.number}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
                        >
                            <span className="inline-block bg-[#f67d45] text-gray-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                                {offer.number}
                            </span>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {offer.title}
                            </h3>
                            <p className="text-gray-700 text-base leading-relaxed">
                                {offer.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OfferSection
