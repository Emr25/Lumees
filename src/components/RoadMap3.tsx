'use client'

const RoadMap3 = () => {
    return (
        <section className="bg-white py-16 px-6 font-inter">
            <div className="max-w-5xl mx-auto">
                {/* Başlık */}
                <div className="mb-10">
                    <span className="text-5xl text-gray-700 font-semibold block mb-2">03</span>
                    <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-gray-300 inline-block pb-1">
                        🔵 Long-Term — 2026+
                    </h2>
                </div>

                {/* Lumee Chat Platform */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">💬 Lumee Chat Platform</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Memory + tool support</li>
                        <li>Secure sessions + assistant persona studio</li>
                        <li>Global API access</li>
                        <li>Fine tune engine</li>
                    </ul>
                </div>

                {/* LumeeOps (Infra Layer) */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">⚙️ LumeeOps (Infra Layer)</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Secure inference (encrypted buffers)</li>
                        <li>Full quantization pipeline (INT4, INT8)</li>
                        <li>Cloud / Edge sync architecture</li>
                    </ul>
                </div>

                {/* Get Involved */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">🤝 Get Involved</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>🔓 Request Early Access to Lumee-32B</li>
                        <li>🧪 Explore Lumee Playground</li>
                        <li>🛰️ Join Lumee Research Discord</li>
                        <li>🐦 Follow us @lumees</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default RoadMap3
