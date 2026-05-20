const PROJ_ICONS = [
  // leaf abstract
  <path key="p1" d="M10 80 C 30 50, 50 30, 90 20 C 80 60, 60 80, 30 90 Z M10 80 L 90 20" />,
  // molecule
  <><circle key="p2a" cx="30" cy="40" r="6" /><circle key="p2b" cx="70" cy="30" r="6" /><circle key="p2c" cx="60" cy="70" r="6" /><circle key="p2d" cx="20" cy="75" r="6" /><path key="p2e" d="M30 40 L 70 30 M70 30 L 60 70 M60 70 L 20 75 M20 75 L 30 40" /></>,
  // tree silhouette
  <><path key="p3a" d="M50 90 L 50 60" /><path key="p3b" d="M50 60 C 30 60, 20 45, 25 30 C 30 15, 50 15, 50 25 C 50 15, 70 15, 75 30 C 80 45, 70 60, 50 60 Z" /></>,
  // map / mountain
  <><path key="p4" d="M10 80 L 30 50 L 50 65 L 70 35 L 90 80 Z" /><path key="p4b" d="M30 50 L 50 65" /></>,
  // flask
  <><path key="p5a" d="M40 15 L 40 40 L 25 80 C 23 88, 30 90, 35 90 L 65 90 C 70 90, 77 88, 75 80 L 60 40 L 60 15 Z" /><path key="p5b" d="M30 65 L 70 65" /></>,
]

export default function Research({ t }) {
  return (
    <section id="research">
      <div className="container">
        <header style={{ maxWidth: 760, marginBottom: 0 }}>
          <span className="eyebrow reveal">{t.eyebrow}</span>
          <h2 className="display-2 reveal" data-delay="1" style={{ margin: '18px 0 14px' }}>
            {t.title}
          </h2>
          <p className="lead reveal" data-delay="2">{t.sub}</p>
        </header>

        <div className="research-grid">
          {t.items.map((it, i) => (
            <article key={i} className={`proj proj-${i + 1} reveal`} data-delay={(i % 3) + 1}>
              <div className={`proj-img alt${i + 1}`}>
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  {PROJ_ICONS[i]}
                </svg>
              </div>
              <div className="proj-tag">{it.tag}</div>
              <h3 className="proj-title">{it.title}</h3>
              <p className="proj-desc">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
