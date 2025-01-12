'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Badge } from '@/components/ui/badge'

interface Contribution {
  date: string
  count: number
  level: number
}

interface ContributionData {
  total: Record<string, number>
  contributions: Contribution[]
}

const GitHubActivity = () => {
  const [data, setData] = useState<ContributionData | null>(null)
  const [loading, setLoading] = useState(true)
  const today = new Date('2025-01-11') // Hardcoding today's date since we know it
  const currentYear = today.getFullYear()

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch('https://github-contributions-api.jogruber.de/v4/DamianKumar7')
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.error('Error fetching GitHub contributions:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchContributions()
  }, [])

  const getLast365DaysContributions = () => {
    if (!data) return []
    
    const oneYearAgo = new Date(today)
    oneYearAgo.setDate(today.getDate() - 365)

    return data.contributions.filter(contribution => {
      const contributionDate = new Date(contribution.date)
      // Only include dates up to today and not older than 365 days
      return contributionDate >= oneYearAgo && 
             contributionDate <= today
    }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }

  const getTotalContributionsLast365Days = () => {
    return getLast365DaysContributions().reduce((total, contribution) => total + contribution.count, 0)
  }

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-muted hover:bg-muted/80'
      case 1: return 'bg-primary/30 hover:bg-primary/40'
      case 2: return 'bg-primary/50 hover:bg-primary/60'
      case 3: return 'bg-primary/70 hover:bg-primary/80'
      case 4: return 'bg-primary hover:bg-primary/90'
      default: return 'bg-muted hover:bg-muted/80'
    }
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const yearContributions = !loading ? getLast365DaysContributions() : []

  return (
    <section id="github-activity" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          GitHub Activity
        </motion.h2>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Contribution History</CardTitle>
                {data && (
                  <CardDescription>
                    {getTotalContributionsLast365Days()} contributions in the last year
                  </CardDescription>
                )}
              </div>
              {data && (
                <Badge variant="secondary" className="ml-auto">
                  Last 365 days
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(1rem,1fr))] gap-1">
                {[...Array(365)].map((_, index) => (
                  <Skeleton key={index} className="w-4 h-4" />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                <TooltipProvider>
                  <div className="grid grid-cols-[repeat(auto-fill,minmax(1rem,1fr))] gap-1">
                    {yearContributions.map((contribution, index) => (
                      <Tooltip key={index} delayDuration={50}>
                        <TooltipTrigger asChild>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.01 }}
                            className={`w-4 h-4 rounded-sm cursor-help transition-colors ${getLevelColor(contribution.level)}`}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-medium">{contribution.count} contributions</p>
                          <p className="text-sm text-muted-foreground">{formatDate(contribution.date)}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </TooltipProvider>
                <div className="flex items-center justify-start gap-2 text-sm text-muted-foreground">
                  <span>Less</span>
                  {[0, 1, 2, 3, 4].map(level => (
                    <div
                      key={level}
                      className={`w-4 h-4 rounded-sm ${getLevelColor(level)}`}
                    />
                  ))}
                  <span>More</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default GitHubActivity