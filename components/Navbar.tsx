"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import { useState, useEffect } from 'react'
import { m, AnimatePresence } from 'framer-motion'

const motion = m as any

export default function Navbar() {
  const path = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
    { href: '#faq', label: 'FAQ' }
  ]

  const handleMenuClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className={`w-full fixed top-0 z-40 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-white/80 dark:bg-[#0a0f1e]/70 border-b border-gray-200 dark:border-white/5 shadow-lg shadow-blue-100/20 dark:shadow-none' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-white dark:to-white bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all">asenchirantha</Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {menuItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors font-medium">
                {item.label}
              </a>
            ))}
            <ThemeToggle />
            <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#0066FF]/20 dark:to-[#0066FF]/20 border-2 border-transparent dark:border-[#0066FF]/50 text-white dark:text-white font-semibold hover:from-blue-700 hover:to-purple-700 dark:hover:bg-[#0066FF]/30 dark:hover:border-[#0066FF]/70 transition-all backdrop-blur-md shadow-lg shadow-blue-500/30 dark:shadow-[#0066FF]/30 hover:shadow-blue-500/50 dark:hover:shadow-[#0066FF]/50">
              Get In Touch
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-y-0 right-0 z-50 w-full sm:w-80 bg-white dark:bg-[#0a0f1e] shadow-2xl md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-white/10">
                <Link href="/" onClick={handleMenuClick} className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-white dark:to-white bg-clip-text text-transparent">
                  asenchirantha
                </Link>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 overflow-y-auto p-6">
                <div className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={handleMenuClick}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-white/5 hover:text-blue-600 dark:hover:text-white rounded-lg transition-all font-medium"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </nav>

              {/* Footer Button */}
              <div className="p-6 border-t border-gray-200 dark:border-white/10">
                <button 
                  onClick={handleMenuClick}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#0066FF]/20 dark:to-[#0066FF]/20 border-2 border-transparent dark:border-[#0066FF]/50 text-white dark:text-white font-semibold hover:from-blue-700 hover:to-purple-700 dark:hover:bg-[#0066FF]/30 dark:hover:border-[#0066FF]/70 transition-all backdrop-blur-md shadow-lg"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}
