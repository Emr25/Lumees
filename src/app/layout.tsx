import './globals.css'
import type { Metadata } from 'next'
import { Inter } from "next/font/google"
import NavbarWrapper from '@/components/NavbarWrapper'
import '@/lib/i18n'

const inter = Inter({ subsets: ['latin'], display: 'swap' }) // fontu alıyoruz

export const metadata: Metadata = {
  title: 'Lumees Clone',
  description: 'Clone of Lumees.io built with Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarWrapper />
        {children}
      </body>
    </html>
  )
}
