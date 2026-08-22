'use client'

import { Github } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import Reveal from '@/components/Reveal'
import BezelCard from '@/components/BezelCard'
import { cn } from '@/lib/utils'

const projects = [
  {
    title: 'RowOne Asia — Live Ticketing Platform',
    description:
      'Production Ticketmaster-like platform serving 500,000+ users across Asia. Built a GraphQL API (Nest.js) cutting over-fetching 40%, TTL-based optimistic seat-locking to prevent double-booking, and an SSR-first Next.js frontend.',
    tech: ['Next.js', 'Nest.js', 'GraphQL', 'PostgreSQL'],
    live: 'https://www.rowone.asia/home',
    repo: null,
    featured: true,
  },
  {
    title: 'High-Throughput URL Shortener',
    description:
      'Base62-encoded URL shortener with collision-free short codes and custom aliases. Redis caching gives sub-5ms redirects for hot URLs and an 80% DB-load reduction under concurrency, with indexed PostgreSQL click-analytics.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis'],
    live: null,
    repo: 'https://github.com/DamianKumar7/urlshortener',
    featured: false,
  },
  {
    title: 'GCP CDN with Terraform',
    description:
      'Fully automated GCP CDN (backend buckets, URL maps, HTTPS LB, SSL) provisioned via Terraform — 90% less manual setup. Cloud Armor policies for IP allowlisting and edge rate limiting, with 85%+ cache-hit ratios.',
    tech: ['Terraform', 'GCP', 'Cloud Armor', 'HCL'],
    live: null,
    repo: 'https://github.com/DamianKumar7/cdn-with-terraform',
    featured: false,
  },
]

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
)

const Projects = () => {
  return (
    <section id="projects" className="relative py-28 md:py-36 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading path="~/projects" title="Featured Projects" comment="things I've designed and shipped" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 0.08}
              className={cn(project.featured && 'md:col-span-2')}
            >
              <BezelCard className="p-6 md:p-7 h-full flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg md:text-xl font-bold leading-snug text-foreground min-w-0">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-terminal/10 px-2.5 py-1 text-[10px] uppercase tracking-widest text-terminal font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-terminal" />
                      Live
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3 text-pretty max-w-2xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-primary/[0.07] px-2.5 py-1 text-xs text-primary font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-6">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-primary pl-4 pr-1.5 py-1.5 text-xs font-medium text-primary-foreground transition-transform duration-500 ease-fluid active:scale-[0.97]"
                    >
                      Visit Live
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/15 transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight />
                      </span>
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full pl-4 pr-1.5 py-1.5 text-xs font-medium text-foreground ring-1 ring-white/10 hover:ring-primary/30 transition duration-500 ease-fluid active:scale-[0.97]"
                    >
                      View Code
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-primary transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <Github size={13} strokeWidth={1.5} aria-hidden="true" />
                      </span>
                    </a>
                  )}
                </div>
              </BezelCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
