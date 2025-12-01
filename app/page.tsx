'use client';

import { useRef, useState, useEffect } from 'react';
import { LazyMotion, domAnimation, m as motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import Card from '@/components/Card';
import AnimatedButton from '@/components/AnimatedButton';
import PortfolioFilter from '@/components/PortfolioFilter';
import TechLogo from '@/components/TechLogo';

const m = motion as any;

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-carousel animation - clockwise continuous scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 3000); // Move every 3 seconds
    
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO',
      company: 'Innovate Solutions',
      avatar: '👨‍💼',
      rating: 5,
      text: 'They not only delivered a top-notch website but also provided strategic insights that helped us improve our overall digital presence.'
    },
    {
      name: 'Emily Davis',
      role: 'Product Manager',
      company: 'Nexus Digital',
      avatar: '👩‍💼',
      rating: 5,
      text: 'The team understood our complex requirements and provided a user-friendly, high-performing website that stands out in the market.'
    },
    {
      name: 'David Lee',
      role: 'Founder',
      company: 'GreenLeaf Enterprises',
      avatar: '👨‍💻',
      rating: 5,
      text: 'Their innovative solutions helped streamline our operations, and the website design and development is both functional and visually stunning.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'BrightWave Media',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Outstanding work! The website exceeded our expectations with its sleek design and seamless functionality. Our conversion rates increased by 45%.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'TechForward Inc',
      avatar: '👨‍💻',
      rating: 5,
      text: 'Exceptional technical expertise and attention to detail. They delivered a scalable solution that perfectly aligns with our business goals.'
    },
    {
      name: 'Lisa Anderson',
      role: 'Creative Director',
      company: 'PixelCraft Studios',
      avatar: '👩‍🎨',
      rating: 5,
      text: 'The design aesthetic is absolutely stunning. They captured our brand identity perfectly and created an engaging user experience.'
    },
    {
      name: 'Robert Martinez',
      role: 'Operations Manager',
      company: 'StreamLine Logistics',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Professional, efficient, and highly creative. The team delivered on time and the results speak for themselves. Highly recommend!'
    },
    {
      name: 'Jessica Taylor',
      role: 'Startup Founder',
      company: 'InnovateLab',
      avatar: '👩‍💻',
      rating: 5,
      text: 'Working with them was a game-changer for our startup. They understood our vision and brought it to life with incredible precision.'
    }
  ];

  const portfolioImages = [
    { id: 1, size: 'large', category: 'web' },
    { id: 2, size: 'medium', category: 'design' },
    { id: 3, size: 'medium', category: 'mobile' },
    { id: 4, size: 'large', category: 'branding' },
    { id: 5, size: 'medium', category: 'web' },
    { id: 6, size: 'small', category: 'ui' }
  ];

  const services = [
    { title: 'Web Development', description: 'Modern, responsive websites built with cutting-edge technologies', icon: 'code' },
    { title: 'UI/UX Design', description: 'Beautiful, intuitive interfaces that users love', icon: 'design' },
    { title: 'Animation', description: 'Engaging animations that bring your brand to life', icon: 'animation' }
  ];

  const stats = [
    { value: 50, label: 'Projects Completed', suffix: '+' },
    { value: 30, label: 'Happy Clients', suffix: '+' },
    { value: 5, label: 'Years Experience', suffix: '+' },
    { value: 100, label: 'Satisfaction Rate', suffix: '%' }
  ];

  // Animated counter hook
  const useCounter = (end: number, duration: number = 2000, shouldStart: boolean = false) => {
    const [count, setCount] = useState(0);
    const hasAnimatedRef = useRef(false);
    const animationFrameRef = useRef<number | undefined>(undefined);
    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {
      // Don't start if already animated or shouldn't start
      if (!shouldStart || hasAnimatedRef.current) {
        return;
      }
      
      // Mark as animated immediately to prevent re-triggers
      hasAnimatedRef.current = true;
      startTimeRef.current = null;

      const animate = (currentTime: number) => {
        if (startTimeRef.current === null) {
          startTimeRef.current = currentTime;
        }
        
        const elapsed = currentTime - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);
        
        const newCount = Math.floor(progress * end);
        setCount(newCount);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          // Animation complete - set exact final value and cleanup
          setCount(end);
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = undefined;
          }
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = undefined;
        }
      };
    }, [end, duration, shouldStart]);

    return count;
  };

  const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Figma', 'UI/UX Design'];

  return (
    <LazyMotion features={domAnimation}>
      <div className="w-full overflow-hidden bg-[#0a0f1e]">
        <section id="hero" ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0f1e]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(100)].map((_, i) => (
              <m.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.6 + 0.2
                }}
                animate={{
                  y: [-20, 20],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
            
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'rgba(0, 60, 150, 0)', stopOpacity: 1 }} />
                  <stop offset="25%" style={{ stopColor: 'rgba(0, 80, 180, 0.15)', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: 'rgba(0, 100, 200, 0.25)', stopOpacity: 1 }} />
                  <stop offset="75%" style={{ stopColor: 'rgba(0, 80, 180, 0.15)', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: 'rgba(0, 60, 150, 0)', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'rgba(0, 70, 160, 0)', stopOpacity: 1 }} />
                  <stop offset="25%" style={{ stopColor: 'rgba(0, 90, 190, 0.12)', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: 'rgba(20, 110, 210, 0.2)', stopOpacity: 1 }} />
                  <stop offset="75%" style={{ stopColor: 'rgba(0, 90, 190, 0.12)', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: 'rgba(0, 70, 160, 0)', stopOpacity: 1 }} />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              <m.path
                d="M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z"
                fill="url(#waveGradient1)"
                filter="url(#glow)"
                animate={{
                  d: [
                    "M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z",
                    "M0,420 Q300,320 600,420 T1200,420 L1200,800 L0,800 Z",
                    "M0,380 Q300,280 600,380 T1200,380 L1200,800 L0,800 Z",
                    "M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z"
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <m.path
                d="M0,450 Q300,370 600,450 T1200,450 L1200,800 L0,800 Z"
                fill="url(#waveGradient2)"
                filter="url(#glow)"
                animate={{
                  d: [
                    "M0,450 Q300,370 600,450 T1200,450 L1200,800 L0,800 Z",
                    "M0,430 Q300,350 600,430 T1200,430 L1200,800 L0,800 Z",
                    "M0,470 Q300,390 600,470 T1200,470 L1200,800 L0,800 Z",
                    "M0,450 Q300,370 600,450 T1200,450 L1200,800 L0,800 Z"
                  ]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <m.path
                d="M0,500 Q300,440 600,500 T1200,500 L1200,800 L0,800 Z"
                fill="rgba(0, 70, 160, 0.08)"
                filter="url(#glow)"
                animate={{
                  d: [
                    "M0,500 Q300,440 600,500 T1200,500 L1200,800 L0,800 Z",
                    "M0,520 Q300,460 600,520 T1200,520 L1200,800 L0,800 Z",
                    "M0,480 Q300,420 600,480 T1200,480 L1200,800 L0,800 Z",
                    "M0,500 Q300,440 600,500 T1200,500 L1200,800 L0,800 Z"
                  ]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </svg>
          </div>

          <div className="container mx-auto px-6 relative z-20 text-center">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8 }}
            >
              <m.h1 
                className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Creative Digital
                <br />
                <span className="bg-gradient-to-r from-[#0066FF] via-[#0080FF] to-[#0066FF] bg-clip-text text-transparent">
                  Experiences
                </span>
              </m.h1>
              
              <m.p 
                className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Crafting exceptional web experiences with modern technologies, creative design, and performance-driven solutions.
              </m.p>
              
              <m.div 
                className="flex flex-wrap gap-4 justify-center mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <m.a
                  href="#portfolio"
                  className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all backdrop-blur-sm inline-block"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.6)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </m.a>
                <m.a
                  href="#contact"
                  className="px-8 py-4 rounded-full bg-white text-[#0a0f1e] font-semibold hover:bg-gray-100 transition-all flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let&apos;s Connect
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </m.a>
              </m.div>
            </m.div>
          </div>

          <m.div 
            className="absolute bottom-20 left-0 w-full z-20 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="container mx-auto px-6">
              <div className="relative">
                <m.div
                  className="flex items-center gap-12 md:gap-16"
                  animate={{
                    x: ['0%', '-50%']
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 25,
                      ease: "linear"
                    }
                  }}
                >
                  {[
                    'Figma', 'Node.js', 'JavaScript', 'Python', 'MongoDB', 'React', 'Next.js', 'TypeScript', 'Tailwind',
                    'Figma', 'Node.js', 'JavaScript', 'Python', 'MongoDB', 'React', 'Next.js', 'TypeScript', 'Tailwind'
                  ].map((tech, i) => (
                    <TechLogo key={`${tech}-${i}`} name={tech} index={i} />
                  ))}
                </m.div>
              </div>
            </div>
          </m.div>
        </section>

        <section id="about" className="py-20 relative">
          <div className="scanline" />
          <div className="container mx-auto px-6">
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center neon-glow">
                About Me
              </h2>

              <div className="grid md:grid-cols-4 gap-6 mb-16">
                {stats.map((stat, index) => {
                  const AnimatedStat = () => {
                    const [shouldAnimate, setShouldAnimate] = useState(false);
                    const hasAnimatedRef = useRef(false);
                    const count = useCounter(stat.value, 2000, shouldAnimate);

                    const handleViewportEnter = () => {
                      if (!hasAnimatedRef.current) {
                        hasAnimatedRef.current = true;
                        setTimeout(() => {
                          setShouldAnimate(true);
                        }, index * 100);
                      }
                    };

                    return (
                      <m.div 
                        className="relative group"
                        onViewportEnter={handleViewportEnter}
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        <div className="relative bg-[#0d1428] rounded-2xl p-8 border border-white/5 hover:border-[#0066FF]/30 transition-all duration-300 overflow-hidden">
                          {/* Animated gradient background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Content */}
                          <div className="relative z-10 text-center">
                            <m.div 
                              className="text-5xl md:text-6xl font-bold mb-3"
                              style={{
                                background: 'linear-gradient(135deg, #0066FF 0%, #00A3FF 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                              }}
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {count}{stat.suffix}
                            </m.div>
                            <div className="text-gray-400 text-sm md:text-base font-medium tracking-wide">
                              {stat.label}
                            </div>
                          </div>

                          {/* Decorative corner */}
                          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0066FF]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </m.div>
                    );
                  };

                  return <AnimatedStat key={stat.label} />;
                })}
              </div>

              <div className="max-w-5xl mx-auto mb-12">
                <div className="grid md:grid-cols-[300px,1fr] gap-8 md:gap-12 items-start">
                  {/* Profile Photo */}
                  <m.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto md:mx-0"
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF] to-[#0052CC] rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                      <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-4 border-[#0066FF]/30 group-hover:border-[#0066FF]/60 transition-all">
                        <img 
                          src="/images/profile.jpg" 
                          alt="Profile" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/300x300/0a1929/0066FF?text=Your+Photo';
                          }}
                        />
                      </div>
                    </div>
                  </m.div>

                  {/* Description and Social Links */}
                  <m.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      I am a passionate creative developer who loves building beautiful, functional, and user-friendly digital experiences. With a strong foundation in modern web technologies and a keen eye for design, I bring ideas to life through code.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                      My approach combines technical expertise with creative problem-solving to deliver solutions that not only meet requirements but exceed expectations.
                    </p>

                    {/* Social Media Links */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
                      <div className="flex flex-wrap gap-4">
                        {/* LinkedIn */}
                        <m.a
                          href="https://linkedin.com/in/yourprofile"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-5 py-3 bg-[#0077B5]/10 border border-[#0077B5] text-[#0077B5] rounded-lg font-medium hover:bg-[#0077B5]/20 transition-all"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          LinkedIn
                        </m.a>

                        {/* GitHub */}
                        <m.a
                          href="https://github.com/yourusername"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-5 py-3 bg-gray-800/50 border border-gray-600 text-gray-300 rounded-lg font-medium hover:bg-gray-700/50 transition-all"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </m.a>

                        {/* Dribbble */}
                        <m.a
                          href="https://dribbble.com/yourusername"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-5 py-3 bg-[#EA4C89]/10 border border-[#EA4C89] text-[#EA4C89] rounded-lg font-medium hover:bg-[#EA4C89]/20 transition-all"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
                          </svg>
                          Dribbble
                        </m.a>

                        {/* Behance */}
                        <m.a
                          href="https://behance.net/yourusername"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-5 py-3 bg-[#1769FF]/10 border border-[#1769FF] text-[#1769FF] rounded-lg font-medium hover:bg-[#1769FF]/20 transition-all"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M0 7.5v9c0 .825.675 1.5 1.5 1.5h21c.825 0 1.5-.675 1.5-1.5v-9c0-.825-.675-1.5-1.5-1.5h-21C.675 6 0 6.675 0 7.5zm21.62 7.024c-.168.725-.459 1.341-.87 1.847-.41.505-.92.894-1.528 1.165-.608.271-1.282.407-2.023.407-1.054 0-1.952-.232-2.693-.697-.742-.464-1.303-1.133-1.684-2.006-.381-.873-.571-1.91-.571-3.11 0-1.201.19-2.239.571-3.113.381-.873.942-1.541 1.684-2.004.741-.464 1.639-.696 2.693-.696.828 0 1.557.153 2.187.459.63.305 1.154.733 1.572 1.284.418.55.719 1.194.903 1.931.184.736.268 1.541.25 2.415h-7.424c.05.725.25 1.277.599 1.656.35.379.798.569 1.345.569.454 0 .827-.114 1.12-.342.293-.228.487-.52.581-.878h2.704zm-10.393 1.976c.454 0 .868-.077 1.243-.231.375-.154.698-.37.97-.647.272-.277.485-.61.639-1 .154-.39.231-.822.231-1.294 0-1.069-.268-1.897-.804-2.485-.536-.588-1.276-.882-2.218-.882-.458 0-.881.077-1.268.231-.387.154-.719.37-.996.647-.277.277-.494.61-.651 1-.157.39-.236.822-.236 1.294 0 1.069.27 1.897.808 2.485.538.588 1.279.882 2.222.882zm8.389-8.5c0-.387-.137-.716-.41-.988-.273-.272-.604-.408-.994-.408s-.721.136-.994.408c-.273.272-.41.601-.41.988 0 .387.137.716.41.988.273.272.604.408.994.408s.721-.136.994-.408c.273-.272.41-.601.41-.988zm-7.202 5.5h-4.5c.05-.725.25-1.277.599-1.656.35-.379.798-.569 1.345-.569.458 0 .848.12 1.169.36.321.24.537.572.647.996h.74z"/>
                          </svg>
                          Behance
                        </m.a>
                      </div>
                    </div>
                  </m.div>
                </div>
              </div>
            </m.div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-[#0a1929] relative">
          <div className="container mx-auto px-6">
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center neon-glow">
                Skills & Technologies
              </h2>

              <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
                {[
                  { name: 'React', logo: 'M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z' },
                  { name: 'Next.js', logo: 'M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.0971-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z' },
                  { name: 'TypeScript', logo: 'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z' },
                  { name: 'Tailwind CSS', logo: 'M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z' },
                  { name: 'Framer Motion', logo: 'M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z' },
                  { name: 'Node.js', logo: 'M11.435 0L5.5 3.63v7.26l5.935 3.631 5.934-3.631V3.63L11.435 0zM9.54 11.5l-2.044-1.18V7.82l2.045-1.18 2.044 1.18v2.5L9.54 11.5zm3.87-6.83l-1.964-1.13-1.963 1.13-1.963-1.13v2.26l1.963 1.13 1.964-1.13 1.963 1.13V4.67z' },
                  { name: 'Figma', logo: 'M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019 3.019-1.355 3.019-3.019V16.49H8.148z' },
                  { name: 'UI/UX Design', logo: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' }
                ].map((tech, index) => (
                  <m.button
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group px-6 py-3 bg-[#0066FF] hover:bg-[#0052CC] rounded-full font-semibold text-white transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
                  >
                    <svg 
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={tech.logo} />
                    </svg>
                    <span>{tech.name}</span>
                  </m.button>
                ))}
              </div>
            </m.div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 relative">
          <div className="lightning" />
          <div className="container mx-auto px-6">
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center neon-glow">
                What I Do
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <m.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      title={service.title}
                      description={service.description}
                      iconType={service.icon}
                    />
                  </m.div>
                ))}
              </div>
            </m.div>
          </div>
        </section>

        <section id="portfolio" className="py-20 relative bg-black">
          <div className="container mx-auto px-6">
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-sm font-medium mb-4">
                  Portfolio
                </span>
                <h2 className="text-4xl md:text-6xl font-bold neon-glow mb-4">
                  Featured Work
                </h2>
              </div>

              <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto">
                {portfolioImages.map((img, i) => (
                  <m.div
                    key={img.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                      img.size === 'large' ? 'col-span-12 md:col-span-8 h-80' : 
                      img.size === 'medium' ? 'col-span-12 md:col-span-4 h-80' :
                      'col-span-12 md:col-span-4 h-64'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/20 to-transparent group-hover:from-[#0066FF]/40 transition-all duration-500" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
                    <div className="relative w-full h-full flex items-center justify-center p-8">
                      <m.div
                        className="text-center"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="w-16 h-16 rounded-xl bg-[#0066FF]/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0066FF]/40 transition-all">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <span className="text-white/80 text-sm uppercase tracking-wider">{img.category}</span>
                      </m.div>
                    </div>
                  </m.div>
                ))}
              </div>
            </m.div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-black relative overflow-hidden">
          <div className="container mx-auto px-6">
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-4">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-sm font-medium mb-4">
                  Testimonial
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold neon-glow text-center mb-4">
                Customer Reviews About
                <br />
                <span className="text-gray-400">Work, Usability and Design.</span>
              </h2>
              <p className="text-gray-400 text-center text-lg mb-12 max-w-2xl mx-auto">
                Hear from our happy clients! See how we&apos;ve helped them achieve their goals and create lasting impact.
              </p>

              {/* Animated Client Logos */}
              <div className="relative overflow-hidden mb-16">
                <m.div 
                  className="flex items-center gap-8 md:gap-12 opacity-50"
                  animate={{ x: [0, -100] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 15, 
                    ease: "linear" 
                  }}
                >
                  {/* First set of logos */}
                  <m.div 
                    className="flex items-center gap-8 md:gap-12 flex-shrink-0"
                    whileHover={{ scale: 1.1, opacity: 0.8 }}
                  >
                    <div className="text-gray-500 text-2xl font-bold">LOGO</div>
                    <div className="px-4 py-2 border border-gray-700 rounded text-gray-500 text-sm whitespace-nowrap">Client Name</div>
                    <div className="text-gray-500 text-xl font-bold">IPSUM</div>
                    <div className="text-gray-500 text-xl">◇◇◇</div>
                    <div className="text-gray-500 text-2xl font-bold">BRAND</div>
                    <div className="px-4 py-2 border border-gray-700 rounded text-gray-500 text-sm whitespace-nowrap">Company Ltd</div>
                  </m.div>
                  {/* Duplicate set for seamless loop */}
                  <m.div 
                    className="flex items-center gap-8 md:gap-12 flex-shrink-0"
                    whileHover={{ scale: 1.1, opacity: 0.8 }}
                  >
                    <div className="text-gray-500 text-2xl font-bold">LOGO</div>
                    <div className="px-4 py-2 border border-gray-700 rounded text-gray-500 text-sm whitespace-nowrap">Client Name</div>
                    <div className="text-gray-500 text-xl font-bold">IPSUM</div>
                    <div className="text-gray-500 text-xl">◇◇◇</div>
                    <div className="text-gray-500 text-2xl font-bold">BRAND</div>
                    <div className="px-4 py-2 border border-gray-700 rounded text-gray-500 text-sm whitespace-nowrap">Company Ltd</div>
                  </m.div>
                </m.div>
              </div>

              {/* Testimonial Carousel */}
              <div className="relative max-w-6xl mx-auto">
                {/* Left blur overlay */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
                
                {/* Right blur overlay */}
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

                {/* Left Arrow */}
                <button 
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0066FF]/10 border border-[#0066FF] flex items-center justify-center text-[#0066FF] hover:bg-[#0066FF]/20 transition-all"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Right Arrow */}
                <button 
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0066FF]/10 border border-[#0066FF] flex items-center justify-center text-[#0066FF] hover:bg-[#0066FF]/20 transition-all"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Testimonial Cards Container */}
                <div className="overflow-hidden px-12 md:px-16">
                  <m.div 
                    className="flex gap-6"
                    animate={{ 
                      x: `-${(currentSlide % testimonials.length) * (100 / testimonials.length)}%`
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    {/* Create continuous loop by duplicating testimonials */}
                    {[...testimonials, ...testimonials, ...testimonials].map((testimonial, i) => (
                      <m.div
                        key={`testimonial-${i}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (i % testimonials.length) * 0.1 }}
                        className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)] bg-[#0d1428] rounded-2xl p-6 md:p-8 border border-white/5 hover:border-[#0066FF]/30 transition-all duration-300 relative"
                      >
                        {/* Close icon */}
                        <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-400 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>

                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center text-xl">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-sm md:text-base">{testimonial.name}</h4>
                            <p className="text-gray-400 text-xs md:text-sm">{testimonial.role}</p>
                          </div>
                        </div>

                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                          &ldquo;{testimonial.text}&rdquo;
                        </p>

                        <div className="mt-6 pt-4 border-t border-gray-800">
                          <p className="text-white font-bold text-sm">{testimonial.name} - {testimonial.role}</p>
                          <p className="text-gray-400 text-xs">{testimonial.company}</p>
                        </div>
                      </m.div>
                    ))}
                  </m.div>
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center gap-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className="relative group"
                      aria-label={`Go to testimonial ${index + 1}`}
                    >
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        (currentSlide % testimonials.length) === index 
                          ? 'bg-[#0066FF] w-8' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`} />
                      {(currentSlide % testimonials.length) === index && (
                        <m.div
                          className="absolute top-0 left-0 h-2 bg-[#0066FF] rounded-full"
                          key={`progress-${currentSlide}`}
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 3, ease: "linear" }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </m.div>
          </div>
        </section>

        <section id="features" className="py-20 bg-black relative">
          <div className="container mx-auto px-6">
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-sm font-medium mb-4">
                Features
              </span>
              <h2 className="text-4xl md:text-6xl font-bold neon-glow mb-4">
                Unlimited Design Features
                <br />
                <span className="text-gray-400">Delivered In A Second!</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Get unlimited design features that give you the freedom to create without boundaries.
              </p>
              <m.button
                className="px-8 py-4 rounded-lg bg-[#0066FF]/10 border border-[#0066FF] text-[#0066FF] font-semibold hover:bg-[#0066FF]/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View About Landin
              </m.button>
            </m.div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-[#0a0f1e] relative">
          <div className="container mx-auto px-6">
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-4">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-sm font-medium mb-4">
                  Pricing
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold neon-glow text-center mb-4">
                Plans for all businesses, Suitable for
                <br />
                <span className="text-gray-400">Personal, Agencies, Startups.</span>
              </h2>
              <p className="text-gray-400 text-center text-lg mb-16 max-w-3xl mx-auto">
                Our pricing plans are designed to make getting started as effortless as possible. With flexible options tailored to suit a variety of needs and budgets.
              </p>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Basic Plan */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="relative bg-[#0d1428] rounded-2xl p-8 border border-white/5 hover:border-[#0066FF]/30 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-[#1a2847] text-[#6B8AFF] text-xs font-medium">
                      Most Pick
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Basic</h3>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white">$99</span>
                      <span className="text-gray-400">/Month</span>
                      <span className="text-gray-500 line-through ml-2">$450</span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-8">
                    Our basic pricing plan is designed to offer great value while providing the essential features you need to get started.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold">100+</span>
                      <span className="text-gray-400">Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold">75+</span>
                      <span className="text-gray-400">Revisions</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {[
                      'All templates unlocked',
                      'Unlimited Licenses',
                      'Lifetime Updates',
                      'Email support',
                      '30-Days Money-Back Guarantee'
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#0066FF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <m.button
                    className="w-full py-4 rounded-lg bg-[#0066FF]/10 border border-[#0066FF] text-[#0066FF] font-semibold hover:bg-[#0066FF]/20 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book an Appointment
                  </m.button>
                </m.div>

                {/* Premium Plan */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative bg-[#0d1428] rounded-2xl p-8 border border-white/5 hover:border-[#0066FF]/30 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-[#0066FF]/20 text-[#0066FF] text-xs font-medium">
                      Recommended
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Premium</h3>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white">$2,599</span>
                      <span className="text-gray-400">/Month</span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-8">
                    Our pro pricing plan is designed for businesses looking for advanced features and premium support.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold">650+</span>
                      <span className="text-gray-400">Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold">250+</span>
                      <span className="text-gray-400">Revisions</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {[
                      'All templates unlocked',
                      'Unlimited Licenses',
                      'Lifetime Updates',
                      'Email support',
                      '30-Days Money-Back Guarantee'
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#0066FF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <m.button
                    className="w-full py-4 rounded-lg bg-[#0066FF]/10 border border-[#0066FF] text-[#0066FF] font-semibold hover:bg-[#0066FF]/20 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book an Appointment
                  </m.button>
                </m.div>
              </div>
            </m.div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-black relative">
          <div className="container mx-auto px-6">
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-[#0066FF] text-sm font-medium">★ FAQ</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold neon-glow mb-4">
                    Frequently
                    <br />
                    <span className="text-gray-400">Asked Questions</span>
                  </h2>
                  <p className="text-gray-400 text-lg max-w-2xl">
                    Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      question: "What do I need to get started?",
                      answer: "To get started, simply reach out through our contact form or email. We'll schedule a consultation to discuss your project requirements, goals, and timeline. All you need is a clear vision of what you want to achieve!"
                    },
                    {
                      question: "What kind of customization is available?",
                      answer: "We offer complete customization for all our projects including design, functionality, branding, and features. Whether you need a custom layout, specific integrations, or unique animations, we can tailor everything to match your exact requirements."
                    },
                    {
                      question: "How easy is it to edit for beginners?",
                      answer: "Our solutions are built with user-friendliness in mind. We provide comprehensive documentation, training sessions, and ongoing support to ensure you can easily manage and update your content without technical expertise."
                    },
                    {
                      question: "Let me know more about moneyback guarantee?",
                      answer: "We stand behind our work with a satisfaction guarantee. If you're not completely satisfied with the initial deliverables, we'll work with you until we get it right. We offer revisions and adjustments to ensure you're happy with the final result."
                    },
                    {
                      question: "Do I need to know how to code?",
                      answer: "Not at all! We handle all the technical aspects of development. You can manage your content through intuitive interfaces without writing a single line of code. However, if you want to make custom modifications, we provide clean, well-documented code."
                    },
                    {
                      question: "What will I get after purchasing the template?",
                      answer: "You'll receive the complete source code, detailed documentation, setup instructions, and access to our support team. We also provide free updates and bug fixes to ensure your project stays current with the latest technologies."
                    }
                  ].map((faq, index) => (
                    <m.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <m.details className="bg-[#0d1428] rounded-xl border border-white/5 hover:border-[#0066FF]/30 transition-all overflow-hidden">
                        <summary className="flex items-center justify-between cursor-pointer p-6 list-none">
                          <h3 className="text-white font-medium text-lg pr-4">{faq.question}</h3>
                          <div className="w-6 h-6 rounded-full bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0 group-open:bg-[#0066FF]/20 transition-all">
                            <svg className="w-4 h-4 text-[#0066FF] group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </div>
                        </summary>
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                          {faq.answer}
                        </div>
                      </m.details>
                    </m.div>
                  ))}
                </div>
              </div>
            </m.div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-[#0a1929] relative">
          <div className="lightning" />
          <div className="container mx-auto px-6">
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center neon-glow">
                Let&apos;s Work Together
              </h2>
              <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
                Have a project in mind? I&apos;d love to hear about it!
              </p>

              <m.form
                className="glass-card p-8 space-y-6"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <m.button
                  type="submit"
                  className="w-full bg-[#0066FF]/10 border border-[#0066FF] text-[#0066FF] font-semibold py-4 rounded-lg hover:bg-[#0066FF]/20 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </m.button>
              </m.form>

              <div className="mt-12 flex justify-center gap-6">
                {[
                  { name: 'GitHub', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
                  { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                  { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' }
                ].map((social) => (
                  <m.a
                    key={social.name}
                    href="#"
                    className="w-12 h-12 rounded-full bg-[#0066FF]/10 border border-[#0066FF] flex items-center justify-center text-[#0066FF] hover:bg-[#0066FF]/20 transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </m.a>
                ))}
              </div>
            </m.div>
          </div>
        </section>
      </div>
    </LazyMotion>
  );
}
