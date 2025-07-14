'use client'

import { ArrowRight } from 'lucide-react'

const ResearchSection = () => {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-12">
                    <span className="block text-6xl text-gray-700 font-medium mb-2">05</span>
                    <h2 className="text-xl md:text-xl font-semibold text-gray-700 border-b-2 border-gray-400 inline-block pb-1">
                        Research
                    </h2>
                </div>

                {/* Research Card */}
                <div className="flex items-center justify-between bg-gray-100 px-6 py-6 rounded-lg shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col gap-2 text-left">
                        <p className="text-md font-medium text-gray-900">Hasan Kurşun</p>
                        <p className="text-sm text-gray-600">May 29, 2025</p>
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-2">
                            Multimodal Polymer Property Prediction
                        </h3>
                    </div>

                    {/* Sağdaki Buton */}
                    <button className="flex items-center gap-2 text-sm font-medium text-white bg-[#f67d45] px-4 py-2 rounded-full hover:bg-[#e26e3a] transition">
                        READ THE FULL ARTICLE <ArrowRight size={18} />
                    </button>
                </div>


            </div>
        </section>
    )
}

export default ResearchSection
