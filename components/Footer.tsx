import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 mt-12 py-8 bg-white dark:bg-[#0a0f1e] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">© {new Date().getFullYear()} Your Name. Built with Next.js and Framer Motion.</p>
        <div className="mt-3">
          <Link href="/resume.pdf" className="text-sm text-[#0066FF] hover:text-[#0052CC] transition-colors">Download CV</Link>
        </div>
      </div>
    </footer>
  )
}
