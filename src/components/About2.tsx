'use client'

const values = [
    {
        title: 'Human-centered AI',
        description:
            'We believe AI should serve real human needs — not just chase benchmark scores. Our models are trained and aligned to assist, inform, and collaborate in natural, helpful ways. Whether you’re a researcher, product builder, or end-user, Lumee models are designed to work with you, not around you.',
    },
    {
        title: 'Global by Default',
        description:
            'Intelligence shouldn’t be limited by language. From the beginning, we’ve prioritized multilingual training across a diverse corpus of global languages. Our models are built to understand and generate content in many languages — enabling inclusive access and relevance across borders, markets, and cultures.',
    },
    {
        title: 'No Lock-In',
        description:
            'You should never be forced into someone else’s stack. We support flexible deployment options: run Lumee models on your own hardware, inside secure clouds, or even on edge devices. With INT4/INT8 optimized variants and hardware support from Intel NPUs to Jetson boards, we give you freedom — not friction.',
    },
    {
        title: 'Privacy-First',
        description:
            'We respect data ownership. Our systems are designed for secure fine-tuning, private deployments, and offline inference, so your proprietary information stays protected. Whether you are building in finance, healthcare, or defense, Lumees enables high-performance AI without compromising data integrity.',
    },
]

const AboutValuesSection = () => {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-left">
                <div className="mb-12">
                    <span className="block text-6xl text-gray-700 font-medium mb-2">02</span>
                    <h2 className="text-xl md:text-xl font-semibold text-gray-900 border-b-2 border-gray-400 inline-block pb-1">
                        🧠 What We Stand For
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition text-left"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-700 text-base leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutValuesSection
