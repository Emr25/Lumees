'use client'

const RoadMap1 = () => {
    return (
        <section className="bg-white py-16 px-6 font-inter">
            <div className="max-w-5xl mx-auto">
                {/* Başlık */}
                <div className="mb-10">
                    <span className="text-5xl text-gray-700 font-semibold block mb-2">01</span>
                    <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-gray-300 inline-block pb-1">
                        🟢 Available Soon
                    </h2>
                </div>

                {/* Core Language Models */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">🔡 Core Language Models</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Lumee-7B</strong> — Base foundation model (128k context)</li>
                        <li><strong>Lumee-7B-Chat</strong> — Aligned conversational model</li>
                        <li><strong>Lumee-7B-Code</strong> — Code-specialized variant</li>
                        <li><strong>Lumee-7B-Moderate</strong> — Content filtering and moderation model</li>
                        <li><strong>Lumee-7B-Edge</strong> — Optimized INT4/INT8 variant for edge devices</li>
                    </ul>
                </div>

                {/* Multimodal & Experimental */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">🌐 Multimodal & Experimental</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Lumee-VLM</strong> — Vision-language foundation model</li>
                        <li><strong>Lumee-Audio</strong> — Foundational model for audio and speech understanding</li>
                    </ul>
                </div>

                {/* Tools & Evaluation */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">🧪 Tools & Evaluation</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>LumeeEval</strong> — Internal benchmark and eval suite</li>
                        <li><strong>Lumee Playground</strong> — Model testing and web demo interface</li>
                        <li><strong>Lumee RAG Starter</strong> — Initial SDK for retrieval-augmented generation</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default RoadMap1
