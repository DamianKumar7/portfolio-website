'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['About', 'Projects', 'Skills', 'GitHub', 'Contact']

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-10 bg-background/80 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold"
        >
          Your Name
        </motion.h1>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Button key={item} variant="ghost" className="text-muted-foreground hover:text-foreground" asChild>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </Button>
          ))}
        </nav>
        <Button variant="outline" size="icon" className="md:hidden text-muted-foreground" onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </Button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          {navItems.map((item) => (
            <Button key={item} variant="ghost" className="w-full justify-start" asChild>
              <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>{item}</a>
            </Button>
          ))}
        </motion.nav>
      )}
    </motion.header>
  )
}

export default Header

