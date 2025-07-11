'use client'

const AboutFutureSection = () => {
    return (
        <section className="bg-stone-700 py-20 px-6">
            <div className="max-w-5xl mx-auto">

                <div className="mb-12">
                    <span className="block text-6xl text-white font-medium mb-2">03</span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-white border-b-2 border-gray-400 inline-block pb-1">
                        Where We're Headed
                    </h2>
                </div>

                {/* Büyük Harfli Paragraf */}
                <p className="text-white text-3xl leading-loose uppercase tracking-wide text-left">
                    We are on a mission to bring intelligent systems closer to everyone — whether through lightweight on-device models or large-scale assistants that reason, remember, and communicate naturally. With more models, more modalities, and more access points on the way, Lumees is building for the next era of human-machine collaboration.
                </p>
            </div>
        </section>
    )
}

export default AboutFutureSection
