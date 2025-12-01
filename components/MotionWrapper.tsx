"use client"
import { motion } from 'framer-motion'
import React from 'react'

export const pageFade = {
  hidden: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.25 } }
}

export default function MotionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial="hidden" animate="enter" exit="exit" variants={pageFade}>
      {children}
    </motion.div>
  )
}
