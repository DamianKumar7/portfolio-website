'use client'

import SectionHeading from '@/components/SectionHeading'
import Reveal from '@/components/Reveal'
import BezelCard from '@/components/BezelCard'

const experience = [
  {
    company: 'Ultimate Kronos Group (UKG)',
    role: 'Senior Software Engineer',
    period: 'Sep 2024 – Present',
    location: 'Noida, India',
    stack: ['Java', 'Spring Boot', 'OAuth 2.0', 'Redis', 'Ansible', 'Terraform'],
    points: [
      'Designed an end-to-end authentication migration framework to Auth0 for 500+ enterprise customers, leading a team of 5+ engineers with a zero-downtime strategy — handling 300K+ concurrent users with full fault tolerance.',
      'Led priority migration of the WFM service from RightScale to GitHub Actions using Ansible and Terraform, saving $30M/year across 10M+ customer workloads.',
      'Built a Java + REST service automating bulk credential rotation in Google Secret Manager; migrated legacy Java 8 → Java 17.',
      'Drove a code-signing security initiative, reducing vulnerabilities by 70% (CrowdStrike).',
    ],
  },
  {
    company: 'PineLabs',
    role: 'Software Engineer',
    period: 'Apr 2023 – Aug 2024',
    location: 'Noida, India',
    stack: ['Java', 'Spring Boot', 'Kafka', 'REST APIs'],
    points: [
      'Architected Anti-Money-Laundering (AML) and Risk-Management microservices on a Kafka-driven event architecture, running real-time transaction monitoring across 100,000+ merchants.',
      'Spearheaded KYC onboarding automation and security hardening across the payments codebase, achieving PCI-DSS certification for the monolithic payments platform.',
      'Designed high-throughput, fault-tolerant payment processing pipelines with Kafka, ensuring zero-delay transaction handling under peak financial load.',
    ],
  },
  {
    company: 'Thoughtworks',
    role: 'Software Engineer',
    period: 'Feb 2022 – Mar 2023',
    location: 'Noida, India',
    stack: ['Java', 'Spring Boot', 'Kafka', 'React.js'],
    points: [
      'Led migration of a legacy codebase to a microservices architecture — authored technical design documents, conducted architecture reviews, and mentored junior engineers on distributed systems best practices.',
      'Developed an event-driven architecture using Kafka, ensuring production reliability and scalability.',
      'Enhanced UI and backend layers for client products, driving feature improvements and optimization.',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 md:py-36 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeading path="~/experience" title="Experience" comment="4+ years building backend systems at scale" />

        <div className="relative">
          <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" aria-hidden="true" />
          <div className="space-y-5">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.06} className="relative pl-8">
                <span className="absolute left-0 top-7 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background -translate-x-1/2" aria-hidden="true" />
                <BezelCard className="p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="font-display text-lg font-bold text-foreground min-w-0">{job.role}</h3>
                    <span className="text-xs text-primary font-mono tabular shrink-0">{job.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5 mb-4 font-mono">
                    {job.company} · {job.location}
                  </p>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    {job.points.map((point, j) => (
                      <li key={j} className="flex gap-2.5">
                        <span className="text-primary mt-1 shrink-0 font-mono text-xs" aria-hidden="true">▹</span>
                        <span className="text-pretty">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {job.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-xs text-muted-foreground font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </BezelCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
