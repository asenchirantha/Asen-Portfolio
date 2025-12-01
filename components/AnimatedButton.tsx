"use client"
import { m } from 'framer-motion'
import React from 'react'

// Type assertion for motion components to work properly with LazyMotion
const motion = m as any;

export default function AnimatedButton({ children, variant = 'solid' }: { children: React.ReactNode, variant?: 'solid' | 'outline' }) {
  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        boxShadow: variant === 'solid' 
          ? "0 10px 40px rgba(99, 102, 241, 0.4), 0 0 20px rgba(99, 102, 241, 0.3)"
          : "0 10px 40px rgba(99, 102, 241, 0.2), 0 0 20px rgba(99, 102, 241, 0.1)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`
        px-8 py-3 rounded-lg font-semibold relative overflow-hidden group
        ${variant === 'solid' 
          ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg' 
          : 'border-2 border-primary/50 glass-card hover:border-primary'
        }
      `}
    >
      {/* Animated shine effect */}
      {variant === 'solid' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      )}
      
      {/* Lightning effect on hover */}
      <div className="lightning" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.span>
      </span>
      
      {/* Outline variant hover gradient */}
      {variant === 'outline' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      )}
    </motion.button>
  )
}
