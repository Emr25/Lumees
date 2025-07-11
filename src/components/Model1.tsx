'use client'

import React from 'react'
import Image from 'next/image'

const ModelLibrarySection = () => {
    const modelData = [
        {
            title: 'Lumee-7B',
            description: 'A powerful base model trained from scratch for enterprise-scale language applications. With an extended 128,000-token context window and multilingual support, Lumi-7B is built for teams and platforms that require scalable performance across long documents, complex queries, and advanced retrieval tasks.',
        },
        {
            title: 'Lumee-7B-Chat',
            description: 'Fine-tuned for smooth, natural dialogue and long-form conversations, Lumee-7B-Chat brings the base Lumee model into assistant-ready form. It combines supervised training and reinforcement learning (RLAIF) to support trustworthy, helpful, and safe interactions — all within a 128,000-token context window.',
        },
        {
            title: 'Lumee-7B-Code',
            description: 'Fine-tuned for smooth, natural dialogue and long-form conversations, Lumee-7B-Chat brings the base Lumee model into assistant-ready form. It combines supervised training and reinforcement learning (RLAIF) to support trustworthy, helpful, and safe interactions — all within a 128,000-token context window.',
        },
        {
            title: 'Lumee-7B-Edge',
            description: 'Fine-tuned for smooth, natural dialogue and long-form conversations, Lumee-7B-Chat brings the base Lumee model into assistant-ready form. It combines supervised training and reinforcement learning (RLAIF) to support trustworthy, helpful, and safe interactions — all within a 128,000-token context window.',
        },
        {
            title: 'Lumee-7B-Embed',
            description: 'Fine-tuned for smooth, natural dialogue and long-form conversations, Lumee-7B-Chat brings the base Lumee model into assistant-ready form. It combines supervised training and reinforcement learning (RLAIF) to support trustworthy, helpful, and safe interactions — all within a 128,000-token context window.',
        },
        {
            title: 'Lumee-7B-Instruct',
            description: 'Fine-tuned for smooth, natural dialogue and long-form conversations, Lumee-7B-Chat brings the base Lumee model into assistant-ready form. It combines supervised training and reinforcement learning (RLAIF) to support trustworthy, helpful, and safe interactions — all within a 128,000-token context window.',
        },
        {
            title: 'Lumee-7B-Moderate',
            description: 'Fine-tuned for smooth, natural dialogue and long-form conversations, Lumee-7B-Chat brings the base Lumee model into assistant-ready form. It combines supervised training and reinforcement learning (RLAIF) to support trustworthy, helpful, and safe interactions — all within a 128,000-token context window.',
        },
        {
            title: 'Lumee-Audio-7B',
            description: 'Fine-tuned for smooth, natural dialogue and long-form conversations, Lumee-7B-Chat brings the base Lumee model into assistant-ready form. It combines supervised training and reinforcement learning (RLAIF) to support trustworthy, helpful, and safe interactions — all within a 128,000-token context window.',
        },
        {
            title: 'Lumee-Audio-7B-Chat',
            description: 'Fine-tuned for smooth, natural dialogue and long-form conversations, Lumee-7B-Chat brings the base Lumee model into assistant-ready form. It combines supervised training and reinforcement learning (RLAIF) to support trustworthy, helpful, and safe interactions — all within a 128,000-token context window.',
        },
        {
            title: 'Lumee-MM-7B',
            description: 'Fine-tuned for smooth, natural dialogue and long-form conversations, Lumee-7B-Chat brings the base Lumee model into assistant-ready form. It combines supervised training and reinforcement learning (RLAIF) to support trustworthy, helpful, and safe interactions — all within a 128,000-token context window.',
        },
        {
            title: 'Lumee-VL-7B',
            description: 'Fine-tuned for smooth, natural dialogue and long-form conversations, Lumee-7B-Chat brings the base Lumee model into assistant-ready form. It combines supervised training and reinforcement learning (RLAIF) to support trustworthy, helpful, and safe interactions — all within a 128,000-token context window.',
        },
        {
            title: 'Lumee-VL-7B-Chat',
            description: 'Fine-tuned for smooth, natural dialogue and long-form conversations, Lumee-7B-Chat brings the base Lumee model into assistant-ready form. It combines supervised training and reinforcement learning (RLAIF) to support trustworthy, helpful, and safe interactions — all within a 128,000-token context window.',
        },
    ]

    return (
        <section className="bg-white py-20 px-6 font-inter">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-12">
                    <span className="block text-6xl text-gray-700 font-semibold mb-2">01</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-700 border-b border-gray-300 pb-2 w-fit">
                        Our Model Library
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modelData.map((model, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-4 flex flex-col justify-between"
                        >
                            {/* Card Logo */}
                            <div className="mb-3">
                                <Image
                                    src="/logo lumess.avif" // ← LOGO YOLUNU DEĞİŞTİR
                                    alt="Model Logo"
                                    width={30}
                                    height={30}
                                />
                            </div>

                            {/* Title + Description */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{model.title}</h3>
                                <p className="text-gray-600 text-sm">{model.description}</p>
                            </div>

                            {/* Button */}
                            <div className="mt-4">
                                <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-3 py-1.5 rounded-md">
                                    MODEL DETAILS
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ModelLibrarySection
