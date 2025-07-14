'use client'

const jobs = [
    {
        title: 'Machine Learning Engineer / Research Scientist',
        location: 'İstanbul',
        responsibilities: [
            'Optimize training and inference for large-scale models',
            'Lead fine-tuning, LoRA, and evaluation pipelines',
            'Work on multimodal model architecture (VLM/Audio)',
        ],
    },
    {
        title: 'Full-Stack Engineer (Web + API Platform)',
        location: 'İstanbul',
        responsibilities: [
            'Build/scale hosted API endpoints for Lumee models',
            'Develop chat interface, early dashboard, pricing controls',
            'Handle auth, usage metering, and deployment logic',
        ],
    },
    {
        title: 'Founding GTM / Product Marketing Lead',
        location: 'İstanbul',
        responsibilities: [
            'Lead product launches, early PR, and partner growth',
            'Own content marketing, positioning, and blog strategy',
            'Help shape messaging for developers, researchers, and enterprise clients',
        ],
    },
]

const AboutCareersSection = () => {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-12">
                    <span className="block text-6xl text-gray-700 font-medium mb-2">04</span>
                    <h2 className="text-xl md:text-xl font-semibold text-gray-900 border-b-2 border-gray-400 inline-block pb-1">
                        Careers
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">{job.location}</p>

                            <h4 className="text-md font-semibold text-gray-800 mb-2">Responsibilities</h4>
                            <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700 text-sm">
                                {job.responsibilities.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            <button className="mt-auto bg-[#f67d45] text-white px-4 py-2 rounded-full hover:bg-[#d96c36] transition">
                                Apply
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutCareersSection
