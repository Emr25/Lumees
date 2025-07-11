'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'

const navItems = [
    { key: 'nav_home', href: '/' },
    { key: 'nav_about', href: '/about' },
    { key: 'nav_models', href: '/models' },
    { key: 'nav_services', href: '/services' },
    { key: 'nav_research', href: '/research-and-technology' },
    { key: 'nav_roadmap', href: '/roadmap' },
    { key: 'nav_blog', href: '/blog' },
]

const Navbar = () => {
    const { t, i18n } = useTranslation()
    const [menuOpen, setMenuOpen] = useState(false)

    const changeLanguage = (lng: 'tr' | 'en') => {
        i18n.changeLanguage(lng)
    }

    return (
        <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] z-50 bg-white rounded-xl shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Image src="/logo lumess.avif" alt="Logo" width={30} height={30} />
                    <span className="text-lg font-semibold text-gray-900">Lumees</span>
                </div>

                {/* Hamburger (Mobile) */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-4">
                    {navItems.map(({ key, href }) => (
                        <Link
                            key={key}
                            href={href}
                            className="px-4 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-orange-500"
                        >
                            {t(key)}
                        </Link>
                    ))}
                </div>

                {/* CTA + Language (Desktop) */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="/#contact"
                        className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-gray-800"
                    >
                        {t('talk_to_sales')}
                    </Link>

                    <div className="flex space-x-1">
                        <button
                            onClick={() => changeLanguage('tr')}
                            className={`px-3 py-1 rounded text-sm font-medium ${i18n.language === 'tr'
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-100 text-gray-800'
                                }`}
                        >
                            TR
                        </button>
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`px-3 py-1 rounded text-sm font-medium ${i18n.language === 'en'
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-100 text-gray-800'
                                }`}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-6 pb-4">
                    <div className="flex flex-col space-y-2">
                        {navItems.map(({ key, href }) => (
                            <Link
                                key={key}
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className="block px-4 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-orange-500"
                            >
                                {t(key)}
                            </Link>
                        ))}
                        <Link
                            href="/#contact"
                            onClick={() => setMenuOpen(false)}
                            className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-gray-800"
                        >
                            {t('talk_to_sales')}
                        </Link>
                        <div className="flex space-x-2 mt-2">
                            <button
                                onClick={() => changeLanguage('tr')}
                                className={`px-3 py-1 rounded text-sm font-medium ${i18n.language === 'tr'
                                    ? 'bg-orange-500 text-white'
                                    : 'bg-gray-100 text-gray-800'
                                    }`}
                            >
                                TR
                            </button>
                            <button
                                onClick={() => changeLanguage('en')}
                                className={`px-3 py-1 rounded text-sm font-medium ${i18n.language === 'en'
                                    ? 'bg-orange-500 text-white'
                                    : 'bg-gray-100 text-gray-800'
                                    }`}
                            >
                                EN
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
