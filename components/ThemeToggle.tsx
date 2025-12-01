"use client"
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { m } from 'framer-motion'

// Type assertion for motion components to work properly with LazyMotion
const motion = m as any;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-20 h-10 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/50 focus:ring-offset-2 focus:ring-offset-transparent"
      style={{
        background: isDark 
          ? 'linear-gradient(to right, #1e1b4b, #312e81)' 
          : 'linear-gradient(to right, #0ea5e9, #38bdf8)',
      }}
      aria-label="Toggle theme"
    >
      {/* Night sky with stars */}
      {isDark && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-2 left-8 w-1 h-1 bg-white rounded-full"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="absolute top-4 left-12 w-0.5 h-0.5 bg-white rounded-full"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-6 left-10 w-0.5 h-0.5 bg-white rounded-full"
          />
        </>
      )}

      {/* Day sky with clouds */}
      {!isDark && (
        <>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-2 left-8 flex items-center gap-1"
          >
            <div className="w-3 h-2 bg-white/80 rounded-full" />
            <div className="w-2 h-1.5 bg-white/60 rounded-full -ml-1" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="absolute bottom-2 left-10 flex items-center gap-1"
          >
            <div className="w-2.5 h-1.5 bg-white/70 rounded-full" />
            <div className="w-1.5 h-1 bg-white/50 rounded-full -ml-0.5" />
          </motion.div>
        </>
      )}

      {/* Toggle circle (sun/moon) */}
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30
        }}
        className="absolute top-1 left-1 w-8 h-8 rounded-full shadow-lg flex items-center justify-center"
        style={{
          x: isDark ? 0 : 40,
          background: isDark ? '#f1f5f9' : '#ffffff'
        }}
      >
        {/* Moon craters */}
        {isDark && (
          <>
            <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-gray-300 rounded-full" />
            <div className="absolute bottom-2 right-2 w-1 h-1 bg-gray-300 rounded-full" />
            <div className="absolute top-4 right-2.5 w-0.5 h-0.5 bg-gray-300 rounded-full" />
          </>
        )}

        {/* Sun rays */}
        {!isDark && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0"
          >
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-0.5 h-1 bg-yellow-400"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-12px)`,
                  transformOrigin: 'center'
                }}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </button>
  )
}
