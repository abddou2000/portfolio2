export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ color: 'var(--paper)', marginBottom: 18 }}>
              Driss<span className="dot" />Boubkiri
              <small style={{ color: 'var(--gold-soft)' }}>· MSc</small>
            </div>
            <p className="footer-tag">{t.tag}</p>
          </div>

          <div>
            <h5>{t.nav}</h5>
            <ul>
              {t.navItems.map((it, i) => <li key={i}><a href="#">{it}</a></li>)}
            </ul>
          </div>

          <div>
            <h5>{t.research}</h5>
            <ul>
              {t.researchItems.map((it, i) => <li key={i}><a href="#">{it}</a></li>)}
            </ul>
          </div>

          <div>
            <h5>{t.elsewhere}</h5>
            <ul>
              {t.elsewhereItems.map((it, i) => <li key={i}><a href="#">{it} ↗</a></li>)}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t.copy}</span>
          <span>{t.built}</span>
        </div>
      </div>
    </footer>
  )
}
