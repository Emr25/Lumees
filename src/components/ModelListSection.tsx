'use client'

import { ArrowRight } from 'lucide-react'

const models = [
    { number: '01', title: 'Lumee-7B' },
    { number: '02', title: 'Lumee-7B-Chat' },
    { number: '03', title: 'Lumee-7B-Code' },
    { number: '04', title: 'Lumee-7B-Edge' },
    { number: '05', title: 'Lumee-7B-Embed' },
    { number: '06', title: 'Lumee-7B-Instruct' },
    { number: '07', title: 'Lumee-7B-Moderate' },
    { number: '08', title: 'Lumee-Audio-7B' },
    { number: '09', title: 'Lumee-Audio-7B-Chat' },
    { number: '10', title: 'Lumee-MM-7B' },
    { number: '11', title: 'Lumee-VL-7B' },
    { number: '12', title: 'Lumee-VL-7B-Chat' },
]

const ModelListSection = () => {
    return (
        <section className="bg-stone-900 py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-12">
                    <span className="block text-6xl text-white font-medium mb-2">04</span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-white border-b-2 border-gray-400 inline-block pb-1">
                        Latest AI Models
                    </h2>
                </div>

                {/* Model List */}
                <div className="space-y-6">
                    {models.map((model) => (
                        <div
                            key={model.number}
                            className="flex items-center justify-between bg-stone-800 px-6 py-4 rounded-lg shadow-md transition-transform transform hover:scale-125 hover:shadow-2xl duration-300 ease-in-out"
                        >
                            <div className="flex items-center gap-6">
                                <span className="inline-block bg-[#f67d45] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                    {model.number}
                                </span>
                                <h3 className="text-lg font-medium text-white">{model.title}</h3>
                            </div>
                            <ArrowRight className="text-gray-400 hover:text-gray-200 transition" size={20} />
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="text-start mt-8">
                    <button className="px-6 py-2 text-sm font-medium text-white bg-stone-900 border border-white rounded-full hover:bg-gray-700 transition">
                        See All
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ModelListSection
