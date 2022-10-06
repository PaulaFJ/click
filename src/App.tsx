import './styles/main.css'
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Brands } from './components/Brands'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Brands />
      <Contact />
      <Footer />
    </>
  )
}

export default App
