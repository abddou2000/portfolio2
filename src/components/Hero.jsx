export default function Hero({ t }) {
  return (
    <section className="hero" id="top">
      <div className="hero-deco" aria-hidden="true">{t.deco}</div>
      <div className="container hero-grid">
        <div className="hero-text">
          <div className="hero-meta reveal">
            {t.meta.map((m, i) => (
              <span key={i} className="tag solid">{m}</span>
            ))}
          </div>

          <h1 className="display-1 hero-title reveal" data-delay="1">
            {t.titleA} <em>{t.titleB}</em>{t.titleC} <em>{t.titleD}</em>{t.titleE}
          </h1>

          <p className="lead hero-sub reveal" data-delay="2">{t.sub}</p>

          <div className="hero-cta reveal" data-delay="3">
            <a href="#journey" className="btn btn-primary">
              {t.ctaPrimary} <span className="arrow">→</span>
            </a>
            <a href="#" className="btn btn-secondary">
              {t.ctaSecondary}
            </a>
            <a href="#contact" className="btn btn-ghost">{t.ctaTertiary}</a>
          </div>

          <div className="hero-facts reveal" data-delay="4">
            {t.facts.map((f, i) => (
              <div key={i}>
                <div className="fact-num">{f.num}</div>
                <span className="fact-label">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-portrait reveal" data-delay="2">
          <span className="corner tl" />
          <span className="corner tr" />
          <span className="corner bl" />
          <span className="corner br" />
          <img src="/driss-portrait.png" alt="Driss Boubkiri — portrait" />
          <div className="label">
            <em>{t.portrait.species}</em>
            <span>{t.portrait.loc}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
