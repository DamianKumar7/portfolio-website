import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BezelCardProps {
  children: ReactNode
  /** classes for the inner core (padding, layout, etc.) */
  className?: string
  /** classes for the outer shell */
  shellClassName?: string
  /** lift + gold hairline on hover */
  hover?: boolean
}

/**
 * "Double-bezel" enclosure: an outer shell (aluminium tray) holding an inner
 * core (glass plate) with concentric radii and an inset highlight.
 */
const BezelCard = ({ children, className, shellClassName, hover = true }: BezelCardProps) => (
  <div className={cn('bezel', hover && 'bezel-hover', shellClassName)}>
    <div className={cn('bezel-inner', className)}>{children}</div>
  </div>
)

export default BezelCard
