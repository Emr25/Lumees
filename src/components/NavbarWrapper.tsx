'use client'

import dynamic from 'next/dynamic'

// Navbar bileşeni sadece client'ta yüklensin
const Navbar = dynamic(() => import('./Navbar'), { ssr: false })

const NavbarWrapper = () => {
    return <Navbar />
}

export default NavbarWrapper
