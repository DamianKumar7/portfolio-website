'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/50">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-400"
        >
          <TypeAnimation
            sequence={[
              'Welcome to My Portfolio',
              1000,
              "I'm Mainak Kumar",
              1000,
              "I'm a Software Engineer",
              1000,
              "I'm a Problem Solver",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-muted-foreground"
        >
          Passionate about creating amazing web experiences
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

