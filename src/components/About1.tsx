'use client'

import { motion } from 'framer-motion'

const AboutMultimodalSection = () => {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-12">
                    <span className="block text-6xl text-gray-700 font-medium mb-2">01</span>
                    <h2 className="text-xl md:text-xl font-semibold text-gray-900 border-b-2 border-gray-400 inline-block pb-1">
                        Building the Future of Multimodal Intelligence
                    </h2>
                </div>

                {/* Main Card */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-md flex flex-col md:flex-row overflow-hidden">
                    {/* Sol: SVG animasyonlu logo */}
                    <div className="md:w-1/2 flex items-center justify-center bg-gray-100 p-10">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="w-48 h-48 md:w-64 md:h-64"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 64 64"
                                fill="none"
                                className="w-full h-full text-[#f67d45]"
                            >
                                <circle cx="32" cy="32" r="30" stroke="#f67d45" strokeWidth="4" fill="white" />
                                <path
                                    d="M20 32c0-6.6 5.4-12 12-12s12 5.4 12 12-5.4 12-12 12-12-5.4-12-12z"
                                    stroke="#f67d45"
                                    strokeWidth="2"
                                    fill="none"
                                />
                                <text
                                    x="50%"
                                    y="54%"
                                    textAnchor="middle"
                                    fill="#f67d45"
                                    fontSize="10"
                                    fontFamily="Arial"
                                    dy=".3em"
                                >
                                    AI
                                </text>
                            </svg>
                        </motion.div>
                    </div>

                    {/* Sağ: Paragraf */}
                    <div className="md:w-1/2 p-8 flex items-center">
                        <p className="text-lg text-gray-800 leading-relaxed">
                            At Lumee, we are committed to creating AI that understands and generates across multiple modalities —
                            from text and images to audio and beyond. Our closed-weight, long-context models are designed with security,
                            performance, and real-world adaptability in mind.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMultimodalSection
