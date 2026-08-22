'use client'

import { Code2, Server, Database, Cloud, Radio, Sparkles, ShieldCheck } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import Reveal from '@/components/Reveal'
import BezelCard from '@/components/BezelCard'

const skillGroups = [
  { icon: Code2, category: 'Languages', skills: ['Java', 'Python', 'SQL', 'JavaScript', 'HTML/CSS', 'TypeScript'] },
  { icon: Server, category: 'Backend', skills: ['Spring Boot', 'Spring MVC', 'Hibernate/JPA', 'Node.js', 'Nest.js', 'GraphQL', 'gRPC', 'Microservices', 'OAuth 2.0', 'Auth0'] },
  { icon: Database, category: 'Databases & Caching', skills: ['MySQL', 'PostgreSQL', 'Redis', 'Query Optimization', 'DB Indexing', 'Connection Pooling'] },
  { icon: Cloud, category: 'Cloud & DevOps', skills: ['GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Ansible', 'Terraform', 'Linux/Unix'] },
  { icon: Radio, category: 'Messaging & Observability', skills: ['Apache Kafka', 'RabbitMQ', 'Amazon SQS', 'Grafana', 'DataDog'] },
  { icon: ShieldCheck, category: 'FinTech & Compliance', skills: ['AML / KYC', 'PCI DSS', 'IAM', 'Fraud & Risk Management', 'Secure Coding'] },
  { icon: Sparkles, category: 'AI & Frontend', skills: ['Claude API', 'LLM & Agentic Workflows', 'Prompt Engineering', 'React.js', 'Next.js', 'Redux'] },
]

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 md:py-36 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading path="~/skills" title="Skills & Tools" comment="my stack, grouped by layer" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={(i % 3) * 0.08}>
              <BezelCard className="p-6 h-full">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <group.icon size={17} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-foreground">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-muted-foreground font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </BezelCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
