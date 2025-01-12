'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <Card className="bg-card/50 backdrop-blur-sm border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">My Journey</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4"
            >
              I'm a passionate full-stack developer with a love for creating intuitive and efficient web applications. With experience in both front-end and back-end technologies, I strive to build seamless user experiences backed by robust server-side logic.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book on software architecture and design patterns.
            </motion.p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default About

