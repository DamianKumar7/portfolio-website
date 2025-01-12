'use client'

import { motion } from 'framer-motion'
import { Progress } from '@/components/ui/progress'

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Python', level: 70 },
  { name: 'SQL', level: 65 },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <Progress value={skill.level} className="w-full bg-secondary h-2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

