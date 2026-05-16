import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Impact from '@/components/Impact'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Architecture from '@/components/Architecture'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="bg-black min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Impact />
      <Skills />
      <Experience />
      <Projects />
      <Architecture />
      <Education />
      <Contact />
    </main>
  )
}
