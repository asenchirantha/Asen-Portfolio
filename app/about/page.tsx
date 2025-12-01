"use client"
import { m } from 'framer-motion'
import Section from '../../components/Section'

export default function AboutPage() {
  return (
    <Section>
      <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="mb-6">A short intro about you — background, interests and what you build.</p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card">React</div>
          <div className="glass-card">Next.js</div>
          <div className="glass-card">Design Systems</div>
          <div className="glass-card">Animation</div>
        </div>
      </m.div>
    </Section>
  )
}

