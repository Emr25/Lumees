'use client'

const features = [
    {
        number: '01',
        title: 'Lumees Frontier AI — Built Around You',
        description:
            'Shape AI that thinks and works like you do. With Lumees, train, refine, and customize our proprietary state-of-the-art models to perfectly fit your unique vision — no compromises.',
    },
    {
        number: '02',
        title: 'Enterprise Power, Lumees Simplicity',
        description:
            'Deploy smart, agile agents that don’t just follow commands—they learn, adapt, and deliver meaningful results with seamless orchestration and intuitive tools built for the future.',
    },
    {
        number: '03',
        title: 'Your Data, Your Rules',
        description:
            'Run AI anywhere — on your premises, in the cloud, at the edge, or on device while Lumees keeps your data locked tight under your control, prioritizing privacy above all.',
    },
    {
        number: '04',
        title: 'Partnering Beyond AI',
        description:
            'Work hand-in-hand with Lumees’ elite AI experts, guiding you through every stage from rollout to safety, ensuring your AI journey is powerful, secure, and tailored for impact.',
    },
]

const ControlSection = () => {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-12">
                    <span className="block text-6xl text-gray-700 font-medium mb-2">03</span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 border-b-2 border-gray-500 inline-block pb-1">
                        Built for Impact, Designed for Control
                    </h2>
                </div>

                {/* Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {features.map((feature) => (
                        <div key={feature.number} className="rounded-lg">
                            <span className="inline-block bg-[#f67d45] text-gray-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                                {feature.number}
                            </span>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-700 text-base leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ControlSection
