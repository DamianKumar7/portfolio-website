'use client'

import { Mail, Github, Linkedin, MapPin } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import Reveal from '@/components/Reveal'
import BezelCard from '@/components/BezelCard'

const links = [
  { icon: Mail, label: 'Email', value: 'damiankumar2000@gmail.com', href: 'mailto:damiankumar2000@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'in/mainak-kumar', href: 'https://www.linkedin.com/in/mainak-kumar-9609761b1/' },
  { icon: Github, label: 'GitHub', value: 'DamianKumar7', href: 'https://github.com/DamianKumar7' },
]

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
)

const Contact = () => {
  return (
    <section id="contact" className="relative py-28 md:py-36 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading path="~/contact" title="Get in Touch" comment="open to Senior Backend / SDE-2 & AI Engineering roles" />

        <Reveal>
          <p className="text-muted-foreground max-w-xl text-pretty">
            Have an interesting problem or opportunity? My inbox is always open — I usually
            reply within a day.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground mt-3 font-mono">
            <MapPin size={15} strokeWidth={1.5} aria-hidden="true" /> Noida, India · open to remote &amp; relocation
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mt-10">
          {links.map((link, i) => {
            const external = link.href.startsWith('http')
            return (
              <Reveal key={link.label} delay={i * 0.08}>
                <a
                  href={link.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group block h-full"
                  aria-label={`${link.label}: ${link.value}`}
                >
                  <BezelCard className="p-5 flex flex-col gap-2 h-full">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <link.icon size={17} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span className="font-display text-sm font-semibold text-foreground mt-1">{link.label}</span>
                    <span className="text-xs text-muted-foreground break-words font-mono group-hover:text-primary transition-colors duration-500" translate="no">
                      {link.value}
                    </span>
                  </BezelCard>
                </a>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-3 mt-10">
            <a
              href="mailto:damiankumar2000@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-primary pl-6 pr-1.5 py-1.5 text-sm font-medium text-primary-foreground transition-transform duration-500 ease-fluid active:scale-[0.98]"
            >
              Say Hello
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/15 transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-[1px]">
                <Mail size={14} strokeWidth={1.5} aria-hidden="true" />
              </span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full pl-6 pr-1.5 py-1.5 text-sm font-medium text-foreground ring-1 ring-white/10 hover:ring-primary/30 transition duration-500 ease-fluid active:scale-[0.98]"
            >
              Download Résumé
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-primary transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight />
              </span>
            </a>
          </div>
        </Reveal>

        <p className="text-xs text-muted-foreground/70 mt-20 font-mono">
          © 2026 Mainak Kumar · Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </section>
  )
}

export default Contact
