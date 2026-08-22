'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

/** Signature heavy fade-up + de-blur on scroll entry. */
export const EASE = [0.32, 0.72, 0, 1] as const

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

const Reveal = ({ children, delay = 0, className }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.8, delay, ease: EASE }}
    className={className}
  >
    {children}
  </motion.div>
)

export default Reveal
