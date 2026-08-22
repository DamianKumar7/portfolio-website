'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Github, Linkedin, Mail } from 'lucide-react'
import { EASE } from '@/components/Reveal'

const badges = ['Java', 'Spring Boot', 'Distributed Systems', 'Kafka', 'GCP', 'AI / Agents']

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden px-4 pt-28 pb-20">
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden="true" />
      <div className="w-full max-w-3xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex justify-center mb-6"
        >
          <span className="eyebrow-tag">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-terminal opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-terminal" />
            </span>
            Available for Senior / AI Engineering roles
          </span>
        </motion.div>

        {/* Terminal — double-bezel enclosure */}
        <motion.div
          initial={{ opacity: 0, y: 32, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: EASE }}
          className="bezel"
        >
          <div className="bezel-inner overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-terminal/70" />
              <span className="ml-2 text-xs text-muted-foreground/80 font-mono" translate="no">
                mainak@portfolio:&nbsp;~
              </span>
            </div>

            <div className="p-6 md:p-9 font-mono text-sm md:text-base leading-relaxed">
              <p className="prompt text-muted-foreground/80">whoami</p>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-1 mb-5">
                Mainak Kumar
              </h1>

              <p className="prompt text-muted-foreground/80">cat role.txt</p>
              <div className="font-display text-lg md:text-2xl font-medium text-primary mt-1 mb-5 min-h-[2rem]">
                <TypeAnimation
                  sequence={[
                    'Senior Software Engineer',
                    1600,
                    'Backend & Distributed Systems Engineer',
                    1600,
                    'Java · Spring Boot · Kafka · GCP',
                    1600,
                    'AI / Agentic Systems Engineer',
                    1600,
                  ]}
                  wrapper="span"
                  speed={55}
                  repeat={Infinity}
                />
              </div>

              <p className="prompt text-muted-foreground/80">cat about.txt</p>
              <p className="text-muted-foreground mt-1 mb-5 max-w-xl text-pretty">
                Senior Software Engineer at UKG. Ex-PineLabs, Thoughtworks. I architect
                high-throughput services and enterprise auth platforms — now building with
                LLMs &amp; agents.
              </p>

              <p className="prompt text-muted-foreground/80">ls skills/</p>
              <div className="flex flex-wrap gap-2 mt-2.5">
                {badges.map((b, i) => (
                  <motion.span
                    key={b}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.06, ease: EASE }}
                    className="rounded-full border border-primary/25 bg-primary/[0.07] px-3 py-1 text-xs text-primary"
                  >
                    {b}
                  </motion.span>
                ))}
              </div>

              <p className="prompt text-muted-foreground/80 mt-5 cursor-blink">&nbsp;</p>
            </div>
          </div>
        </motion.div>

        {/* CTAs — button-in-button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
          className="flex flex-wrap items-center justify-center gap-3 mt-9"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary pl-6 pr-1.5 py-1.5 text-sm font-medium text-primary-foreground transition-transform duration-500 ease-fluid active:scale-[0.98]"
          >
            View My Work
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/15 transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-[1px] group-hover:scale-105">
              <ArrowRight />
            </span>
          </a>
          <a
            href="mailto:damiankumar2000@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full pl-6 pr-1.5 py-1.5 text-sm font-medium text-foreground ring-1 ring-white/10 hover:ring-primary/30 transition duration-500 ease-fluid active:scale-[0.98]"
          >
            Get in Touch
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-primary transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-[1px]">
              <Mail size={14} strokeWidth={1.5} aria-hidden="true" />
            </span>
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
          className="flex items-center justify-center gap-6 mt-7"
        >
          <a href="https://github.com/DamianKumar7" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-muted-foreground hover:text-primary transition-colors duration-500">
            <Github size={18} strokeWidth={1.5} aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/mainak-kumar-9609761b1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-muted-foreground hover:text-primary transition-colors duration-500">
            <Linkedin size={18} strokeWidth={1.5} aria-hidden="true" />
          </a>
          <a href="mailto:damiankumar2000@gmail.com" aria-label="Email Mainak" className="text-muted-foreground hover:text-primary transition-colors duration-500">
            <Mail size={18} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
