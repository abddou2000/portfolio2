import { useEffect, useState } from 'react'

export default function Nav({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="logo" onClick={closeMenu}>
          Driss Boubkiri
          <small>· MSc</small>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#about" onClick={closeMenu}>{t.nav.about}</a>
          <a href="#expertise" onClick={closeMenu}>{t.nav.expertise}</a>
          <a href="#skills" onClick={closeMenu}>{t.nav.skills}</a>
          <a href="#journey" onClick={closeMenu}>{t.nav.journey}</a>
          <a href="#research" onClick={closeMenu}>{t.nav.research}</a>
          <a href="#publications" onClick={closeMenu}>{t.nav.publications}</a>
          <a href="#contact" onClick={closeMenu}>{t.nav.contact}</a>

          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === 'fr' ? 'active' : ''}
              onClick={() => setLang('fr')}
            >FR</button>
            <button
              type="button"
              className={lang === 'en' ? 'active' : ''}
              onClick={() => setLang('en')}
            >EN</button>
          </div>
        </nav>

        <button
          type="button"
          className="mobile-toggle"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>
    </header>
  )
}
