'use client';

import { useState } from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';
import projects from '@/data/projects';

const m = motion as any;

export default function PortfolioFilter() {
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  const getIconForIndex = (index: number) => {
    const icons = [
      <svg key="design" className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>,
      <svg key="code" className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>,
      <svg key="mobile" className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>,
      <svg key="globe" className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      <svg key="chart" className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>,
      <svg key="star" className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ];
    return icons[index % icons.length];
  };

  return (
    <div>
      <m.div
        className="flex flex-wrap gap-3 mb-10 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {categories.map((cat, i) => (
          <m.button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-2.5 rounded-full font-medium transition-all relative overflow-hidden ${
              active === cat ? 'text-white shadow-lg' : 'glass-card hover:scale-105'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            {active === cat && (
              <m.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </m.button>
        ))}
      </m.div>

      <m.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <m.a
              layout
              key={project.id}
              href={project.url || '#'}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-card block group relative overflow-hidden"
            >
              <m.div
                className="relative h-48 mb-4 -mx-6 -mt-6 overflow-hidden rounded-t-xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <m.div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 opacity-40"
                  whileHover={{ scale: 1.2, rotate: 10, opacity: 0.6 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />

                <div className="absolute inset-0 bg-grid opacity-20" />

                <m.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotateY: 360 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="w-20 h-20 relative">
                    <div className="absolute inset-0 bg-white rounded-xl opacity-20 blur-xl" />
                    <div className="relative w-full h-full bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shadow-2xl">
                      {getIconForIndex(i)}
                    </div>
                  </div>
                </m.div>

                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold border border-white/30">
                  {project.category}
                </div>
              </m.div>

              <div className="px-6 pb-6">
                <h3 className="font-bold text-xl mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {project.description}
                </p>

                <m.div
                  className="mt-4 flex items-center text-indigo-600 dark:text-indigo-400 font-semibold text-sm"
                  whileHover={{ x: 5 }}
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </m.div>
              </div>

              <div className="energy-field opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </m.a>
          ))}
        </AnimatePresence>
      </m.div>
    </div>
  );
}
