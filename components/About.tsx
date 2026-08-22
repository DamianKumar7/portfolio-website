'use client'

import { Award, Users, Rocket, Code2 } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import Reveal from '@/components/Reveal'
import BezelCard from '@/components/BezelCard'

const highlights = [
  { icon: Users, value: '500+', label: 'Enterprise customers migrated to Auth0' },
  { icon: Rocket, value: '$30M/yr', label: 'Saved via CI/CD pipeline migration' },
  { icon: Code2, value: '10M+', label: 'Customers served by migrated services' },
  { icon: Award, value: '6', label: 'Performance awards at UKG' },
]

const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-36 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading path="~/about" title="About Me" comment="who I am and what I've shipped" />

        <div className="grid md:grid-cols-5 gap-4 md:gap-6 items-stretch">
          <Reveal className="md:col-span-3">
            <BezelCard className="p-6 md:p-8 space-y-4 text-muted-foreground text-sm md:text-[15px] leading-relaxed">
              <p className="text-pretty">
                I&apos;m a Senior Software Engineer with 4+ years building fault-tolerant
                distributed systems in Java and Spring Boot at Fortune-500 scale. At{' '}
                <span className="text-foreground font-medium">UKG</span> I led an end-to-end
                authentication migration to Auth0 for 500+ enterprise customers — zero downtime,
                300K+ concurrent users — and drove a CI/CD migration that saves $30M a year.
              </p>
              <p className="text-pretty">
                Before UKG, I built AML/risk-management microservices and led KYC onboarding
                automation to PCI-DSS certification at{' '}
                <span className="text-foreground font-medium">PineLabs</span> (100K+ merchants),
                and built event-driven microservices with Kafka at{' '}
                <span className="text-foreground font-medium">Thoughtworks</span>. I care about
                clean architecture, performance, and systems that stay reliable under load.
              </p>
              <p className="text-pretty">
                Lately I&apos;ve been going deep on AI and agentic engineering — the Claude API,
                LLM workflows, and prompt engineering — bringing that same production rigor to
                AI-driven products.
              </p>
            </BezelCard>
          </Reveal>

          <div className="md:col-span-2 grid grid-cols-2 gap-4 md:gap-6">
            {highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 0.08}>
                <BezelCard className="p-5 flex flex-col gap-1.5">
                  <h.icon className="h-5 w-5 text-primary mb-1" strokeWidth={1.5} aria-hidden="true" />
                  <span className="tabular font-display text-2xl font-bold text-foreground">{h.value}</span>
                  <span className="text-xs text-muted-foreground leading-tight text-pretty">{h.label}</span>
                </BezelCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
