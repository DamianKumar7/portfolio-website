'use client'

import { motion } from 'framer-motion'
import { EASE } from '@/components/Reveal'

interface SectionHeadingProps {
  /** terminal-style path shown in the eyebrow, e.g. "~/experience" */
  path: string
  /** the human title, e.g. "Experience" */
  title: string
  /** optional one-line description rendered as a comment */
  comment?: string
}

const SectionHeading = ({ path, title, comment }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: EASE }}
      className="mb-12"
    >
      <span className="eyebrow-tag mb-4" translate="no">cd&nbsp;{path}</span>
      <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-3 mt-1">
        <span className="text-primary/70 font-mono">#</span>
        {title}
      </h2>
      {comment && (
        <p className="mt-3 text-sm text-muted-foreground font-mono">
          <span className="text-muted-foreground/50">// </span>
          {comment}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading
