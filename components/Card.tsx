"use client"
import React, { useRef, useState } from 'react'
import { m, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface CardProps {
  title: string
  description?: string
  iconType?: 'design' | 'code' | 'animation'
  delay?: number
}

const IconSVG = ({ type }: { type: string }) => {
  const icons = {
    design: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    code: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2L10 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    animation: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
  return icons[type as keyof typeof icons] || icons.code
}

export default function Card({ title, description, iconType = 'code', delay = 0 }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <m.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="glass-card group cursor-pointer relative overflow-hidden energy-field lightning scanline"
    >
      {/* 3D Icon */}
      <m.div 
        className="relative w-16 h-16 mb-6 mx-auto"
        animate={{
          rotateY: isHovered ? 360 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-xl opacity-20 blur-xl" />
        <m.div 
          className="relative w-full h-full bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center text-white shadow-2xl"
          style={{ transform: "translateZ(20px)" }}
        >
          <IconSVG type={iconType} />
        </m.div>
      </m.div>

      <div style={{ transform: "translateZ(30px)" }}>
        <h4 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors neon-glow">
          {title}
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Wave effect */}
      <div className="wave-container absolute inset-0 pointer-events-none">
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
      </div>
      
      {/* Holographic border */}
      <m.div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          background: "linear-gradient(45deg, transparent 30%, rgba(99, 102, 241, 0.1) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
        animate={isHovered ? {
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </m.div>
  )
}
