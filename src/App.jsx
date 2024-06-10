import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Service from './components/Service'

const App = () => {
  return (
    <>
    <Header/>
    <main className='min-h-screen flex flex-col gap-[50px]
    max-w-[1100px] mx-auto'>
      <Hero />
      <Skills />
      <Projects />
      <Service/>
      <Contact />
    </main>
    </>
  )
}

export default App