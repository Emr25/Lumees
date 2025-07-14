'use client'

const Services1 = () => {
    const offerData = [
        {
            number: '01',
            title: 'Hosted API Access',
            description: 'Instant access to Lumee models via a high-performance, scalable cloud API. Supports multilingual prompts, long-context reasoning, and easy integration into apps or research pipelines.',
        },
        {
            number: '02',
            title: 'Custom Fine-Tuning',
            description: 'Fine-tune Lumee models on your own data with support for LoRA, full training, and alignment techniques. Build domain-specific assistants while keeping your IP secure and customizable.',
        },
        {
            number: '03',
            title: 'On-Prem & Edge Deployment',
            description: 'Deploy Lumee models directly to your infrastructure — from servers to edge devices. Our optimized formats (INT4/INT8) support Axelera, Jetson, Intel NPUs, and ensure private, offline inference.',
        },
        {
            number: '04',
            title: 'Lumees Chat Platform ',
            description: 'An all-in-one conversational interface powered by state of art Lumee models. Built for teams and products, it supports long-context interactions, interface to fine tune Lumee models, and API access.',
        },
    ]

    return (
        <section className="bg-white py-20 px-6 font-inter">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="mb-12">
                    <span className="block text-6xl text-gray-700 font-semibold mb-2">01</span>
                    <h2 className="text-xl md:text-xl font-bold text-gray-900 border-b border-gray-300 pb-2 w-fit">
                        What We Offer
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offerData.map((item, index) => (
                        <div
                            key={index}
                            className="p-4 bg-white rounded-xl text-gray-900 flex flex-col gap-4 border border-gray-300 font-inter"
                        >
                            {/* Number Badge */}
                            <div>
                                <button className="bg-orange-600 text-black font-bold text-sm px-3 py-1 rounded-md">
                                    {item.number}
                                </button>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold">{item.title}</h3>

                            {/* Description */}
                            <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services1
