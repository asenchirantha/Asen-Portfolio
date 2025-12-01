"use client"

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </ThemeProvider>
  )
}
