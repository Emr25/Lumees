'use client'

import { useState } from 'react'

const Footer = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert(`Subscribed with ${email}`)
        setEmail('')
    }

    return (
        <footer className="bg-stone-900 text-white py-16 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Contact */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact</h3>
                    <p className="mb-2">Email: hello@lumees.io</p>
                    <p className="mb-2">Phone: +90 538 359 68 14</p>
                    <p className="mb-2">Address: Istanbul/Turkey</p>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">QUICK LINKS</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Privacy Policy
                        </a></li>
                        <li><a href="#" className="hover:underline">Accessibility Statement
                        </a></li>
                        <li><a href="#" className="hover:underline">Research </a></li>
                        <li><a href="#" className="hover:underline">Roadmap</a></li>
                        <li><a href="#" className="hover:underline">Manifesto</a></li>
                    </ul>
                </div>

                {/* Subscribe */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
                    <span className='text-white font-thin'>Stay at the forefront of innovation. Sign up for our newsletter and receive exclusive insights, project updates, and industry news delivered straight to your inbox.</span>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Your email entry"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-md bg-white text-stone-900 border border-white focus:outline-none focus:ring-2 focus:ring-[#f67d45]"
                        />
                        <button
                            type="submit"
                            className="bg-[#f67d45] text-white px-6 py-3 rounded-md hover:bg-[#d96c36] transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div className="mt-12 text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} LumeeS. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
