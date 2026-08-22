import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import GitHubActivity from '@/components/GitHubActivity'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="mesh-bg" aria-hidden="true" />
      <Header />
      <main id="main" className="min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <GitHubActivity />
        <Contact />
      </main>
    </>
  )
}
