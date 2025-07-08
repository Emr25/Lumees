'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav className="w-full fixed top-0 z-50 bg-white shadow">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-gray-900">
                    Lumees
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center">
                    <Link href="/product" className="text-gray-700 hover:text-black">Product</Link>
                    <Link href="/pricing" className="text-gray-700 hover:text-black">Pricing</Link>
                    <Link href="/blog" className="text-gray-700 hover:text-black">Blog</Link>
                    <Link href="/login" className="text-gray-700 hover:text-black">Login</Link>
                    <Link href="/get-started">
                        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                            Get Started
                        </button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white px-6 py-4 shadow">
                    <div className="flex flex-col gap-4">
                        <Link href="/product" onClick={toggleMenu}>Product</Link>
                        <Link href="/pricing" onClick={toggleMenu}>Pricing</Link>
                        <Link href="/blog" onClick={toggleMenu}>Blog</Link>
                        <Link href="/login" onClick={toggleMenu}>Login</Link>
                        <Link href="/get-started" onClick={toggleMenu}>
                            <button className="w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
