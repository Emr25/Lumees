'use client'

import { useState } from 'react'

const ContactSection = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        category: '',
        message: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert('Form submitted! Thank you.')
    }

    return (
        <section className="bg-[#f67d45] py-20 px-6" id='contact'>
            <div className="max-w-6xl mx-auto text-gray-700 text-left">
                {/* Section Header */}
                <div className="mb-12">
                    <span className="block text-6xl font-medium mb-2">06</span>
                    <h2 className="text-3xl md:text-4xl font-semibold border-b-2 border-white inline-block pb-1">
                        Contact Us
                    </h2>
                    <p className='font-thin text-3xl text-black text-center'>
                        Ready to Partner with Us?
                        Contact us today.</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* İsimler */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-md text-gray-900 border border-black bg-white text-left"
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-md text-gray-900 border border-black bg-white text-left"
                        />
                    </div>

                    {/* Email ve Telefon */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-md text-gray-900 border border-black bg-white text-left"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md text-gray-900 border border-black bg-white text-left"
                        />
                    </div>

                    {/* Company Name */}
                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md text-gray-900 border border-black bg-white text-left"
                    />

                    {/* Category (Radio Buttons) */}
                    <fieldset className="text-white rounded-md p-4">
                        <legend className="mb-2 font-semibold text-white">Category</legend>
                        <div className="flex flex-wrap gap-6">
                            {[
                                'Service request',
                                'Investment',
                                'Collaboration',
                                'Other Research',
                            ].map((cat) => (
                                <label key={cat} className="flex items-center gap-2 cursor-pointer text-white">
                                    <input
                                        type="radio"
                                        name="category"
                                        value={cat}
                                        checked={formData.category === cat}
                                        onChange={handleChange}
                                        required
                                        className="accent-white bg-transparent"
                                    />
                                    <span>{cat}</span>
                                </label>
                            ))}
                        </div>
                    </fieldset>

                    {/* Message */}
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md text-gray-900 border border-black bg-white resize-y text-left"
                    />

                    {/* Submit */}
                    <button
                        type="submit"
                        className="bg-white text-[#f67d45] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}

export default ContactSection
