"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const path = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`w-full fixed top-0 z-40 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-white/80 dark:bg-[#0a0f1e]/70 border-b border-gray-200 dark:border-white/5 shadow-lg shadow-blue-100/20 dark:shadow-none' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-white dark:to-white bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all">asenchirantha</Link>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors font-medium">Home</a>
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors font-medium">About</a>
          <a href="#portfolio" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors font-medium">Portfolio</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors font-medium">Contact</a>
          <a href="#faq" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors font-medium">FAQ</a>
          <ThemeToggle />
          <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#0066FF]/20 dark:to-[#0066FF]/20 border-2 border-transparent dark:border-[#0066FF]/50 text-white dark:text-white font-semibold hover:from-blue-700 hover:to-purple-700 dark:hover:bg-[#0066FF]/30 dark:hover:border-[#0066FF]/70 transition-all backdrop-blur-md shadow-lg shadow-blue-500/30 dark:shadow-[#0066FF]/30 hover:shadow-blue-500/50 dark:hover:shadow-[#0066FF]/50">
            Get In Touch
          </button>
        </nav>
        <div className="md:hidden">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
