'use client'

import { useState, useEffect } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import SectionHeading from '@/components/SectionHeading'
import Reveal from '@/components/Reveal'
import BezelCard from '@/components/BezelCard'

interface Contribution {
  date: string
  count: number
  level: number
}

interface ContributionData {
  total: Record<string, number>
  contributions: Contribution[]
}

const getLevelColor = (level: number) => {
  switch (level) {
    case 1: return 'bg-primary/25'
    case 2: return 'bg-primary/45'
    case 3: return 'bg-primary/70'
    case 4: return 'bg-primary'
    default: return 'bg-white/[0.06]'
  }
}

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })

const GitHubActivity = () => {
  const [data, setData] = useState<ContributionData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    fetch('https://github-contributions-api.jogruber.de/v4/DamianKumar7')
      .then((r) => r.json())
      .then((d) => active && setData(d))
      .catch((e) => console.error('Error fetching GitHub contributions:', e))
      .finally(() => active && setLoading(false))
    return () => { active = false }
  }, [])

  const days = (() => {
    if (!data) return []
    const today = new Date()
    const oneYearAgo = new Date(today)
    oneYearAgo.setDate(today.getDate() - 365)
    return data.contributions
      .filter((c) => {
        const d = new Date(c.date)
        return d >= oneYearAgo && d <= today
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  })()

  const total = days.reduce((sum, c) => sum + c.count, 0)

  return (
    <section id="github-activity" className="relative py-28 md:py-36 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading path="~/activity" title="GitHub Activity" comment="git log --since='1 year ago'" />

        <Reveal>
          <BezelCard hover={false} className="p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div aria-live="polite">
                <h3 className="font-display text-base font-semibold text-foreground">Contribution History</h3>
                <p className="text-sm text-muted-foreground mt-0.5 font-mono">
                  {loading ? 'Loading contributions…' : (
                    <><span className="tabular text-primary">{total.toLocaleString('en-US')}</span> contributions in the last year</>
                  )}
                </p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground font-mono">
                @DamianKumar7
              </span>
            </div>

            {loading ? (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(0.7rem,1fr))] gap-1" aria-hidden="true">
                {Array.from({ length: 182 }).map((_, i) => (
                  <div key={i} className="aspect-square rounded-[3px] bg-white/[0.04] animate-pulse" />
                ))}
              </div>
            ) : (
              <>
                <TooltipProvider delayDuration={50}>
                  <div
                    role="img"
                    aria-label={`GitHub contribution graph: ${total.toLocaleString('en-US')} contributions over the last year`}
                    className="grid grid-cols-[repeat(auto-fill,minmax(0.7rem,1fr))] gap-1"
                  >
                    {days.map((c, i) => (
                      <Tooltip key={i}>
                        <TooltipTrigger asChild>
                          <div
                            aria-hidden="true"
                            className={`aspect-square rounded-[3px] transition-colors duration-300 hover:ring-1 hover:ring-primary/50 ${getLevelColor(c.level)}`}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-medium">{c.count} contributions</p>
                          <p className="text-xs text-muted-foreground">{formatDate(c.date)}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </TooltipProvider>
                <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground mt-4 font-mono">
                  <span>Less</span>
                  {[0, 1, 2, 3, 4].map((level) => (
                    <span key={level} className={`h-3 w-3 rounded-[3px] ${getLevelColor(level)}`} aria-hidden="true" />
                  ))}
                  <span>More</span>
                </div>
              </>
            )}
          </BezelCard>
        </Reveal>
      </div>
    </section>
  )
}

export default GitHubActivity
