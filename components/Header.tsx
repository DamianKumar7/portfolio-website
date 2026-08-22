'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { EASE } from '@/components/Reveal'

const navItems = [
  { label: 'about', href: '#about' },
  { label: 'experience', href: '#experience' },
  { label: 'projects', href: '#projects' },
  { label: 'skills', href: '#skills' },
  { label: 'activity', href: '#github-activity' },
  { label: 'contact', href: '#contact' },
]

const Header = () => {
  const [open, setOpen] = useState(false)

  // Close the overlay on Escape and lock scroll while open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="fixed top-5 inset-x-0 z-40 flex justify-center px-4"
      >
        <div className="flex items-center gap-1 rounded-full bg-background/60 backdrop-blur-xl px-2 py-1.5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
          <a
            href="#"
            className="px-3 py-1.5 text-sm font-bold tracking-tight rounded-full hover:bg-white/5 transition-colors duration-500"
          >
            <span className="text-terminal">~</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-primary">mainak</span>
          </a>

          <nav className="hidden md:flex items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground rounded-full hover:bg-white/5 transition-colors duration-500"
              >
                <span className="text-primary/50">./</span>
                {item.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group ml-1 inline-flex items-center gap-2 rounded-full bg-primary pl-4 pr-1.5 py-1.5 text-xs font-medium text-primary-foreground transition-transform duration-500 ease-fluid active:scale-[0.97]"
            >
              résumé
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/15 transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight />
              </span>
            </a>
          </nav>

          {/* Mobile hamburger → X */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden relative h-9 w-9 rounded-full hover:bg-white/5 transition-colors duration-500 grid place-items-center"
          >
            <span
              className="absolute h-px w-4 bg-foreground transition-transform duration-500 ease-fluid"
              style={{ transform: open ? 'rotate(45deg)' : 'translateY(-3px)' }}
            />
            <span
              className="absolute h-px w-4 bg-foreground transition-transform duration-500 ease-fluid"
              style={{ transform: open ? 'rotate(-45deg)' : 'translateY(3px)' }}
            />
          </button>
        </div>
      </motion.header>

      {/* Full-screen glass overlay */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-30 md:hidden bg-background/80 backdrop-blur-2xl flex flex-col items-center justify-center gap-2"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.05, ease: EASE }}
                className="text-2xl font-display font-medium text-muted-foreground hover:text-primary transition-colors duration-500"
              >
                <span className="text-primary/50">./</span>
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.5, delay: 0.08 + navItems.length * 0.05, ease: EASE }}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              résumé
              <ArrowUpRight />
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

/* Ultra-light precise arrow (not a thick default icon). */
const ArrowUpRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
)

export default Header
