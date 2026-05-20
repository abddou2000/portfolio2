import { useState, useEffect } from 'react'
import { content } from './i18n/content.js'
import { useReveal } from './hooks/useReveal.js'

import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Expertise from './components/Expertise.jsx'
import Journey from './components/Journey.jsx'
import Experience from './components/Experience.jsx'
import Research from './components/Research.jsx'
import Publications from './components/Publications.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [lang, setLang] = useState('fr')
  const t = content[lang]

  useReveal()

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <>
      <Nav t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t.hero} />
        <About t={t.about} />
        <Expertise t={t.expertise} />
        <Journey t={t.journey} />
        <Experience t={t.experience} />
        <Research t={t.research} />
        <Publications t={t.publications} />
        <Gallery t={t.gallery} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} />
    </>
  )
}
