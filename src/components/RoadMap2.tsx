'use client'

const RoadMap2 = () => {
    return (
        <section className="bg-white py-16 px-6 font-inter">
            <div className="max-w-5xl mx-auto">
                {/* Başlık */}
                <div className="mb-10">
                    <span className="text-5xl text-gray-700 font-semibold block mb-2">02</span>
                    <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-gray-300 inline-block pb-1">
                        🟡 Mid-Term — 2025 Q3–Q4
                    </h2>
                </div>

                {/* Early Access */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">🚨 Early Access</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Lumee-32B</strong> — Frontier-scale model preview</li>
                        <li>Enterprise-grade reasoning, long-context, and alignment</li>
                        <li><strong>Lumee Scholar</strong> — Academic semantic search engine and research assistant</li>
                        <li><strong>Lumee 560M</strong> — Model for smart devices</li>
                    </ul>
                </div>

                {/* Model Development */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">🧠 Model Development</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>LumeeOps alpha</strong> — Lightweight hybrid deployment toolkit</li>
                        <li>Instruction + Safety Tuning v2</li>
                        <li>FlashAttention & Long-context infra updates</li>
                        <li>Axelera / Jetson deployment support</li>
                        <li>Start of model development for Life Sciences</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default RoadMap2
