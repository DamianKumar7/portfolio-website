'use client'

import { ThemeProvider } from '@/components/theme-provider'
import { MotionConfig } from 'framer-motion'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      {/* reducedMotion="user" makes every framer-motion animation honor prefers-reduced-motion */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeProvider>
  )
}
