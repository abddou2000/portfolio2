const GAL_ICONS = [
  <path key="g1" d="M10 80 C 30 50, 50 30, 90 20 C 80 60, 60 80, 30 90 Z M10 80 L 90 20" />,
  <><path key="g2a" d="M30 20 L 30 60 L 20 80 L 80 80 L 70 60 L 70 20 Z" /><path key="g2b" d="M30 20 L 70 20" /></>,
  <><circle key="g3a" cx="50" cy="40" r="20" /><path key="g3b" d="M30 80 L 70 80 M50 60 L 50 80" /></>,
  <><circle key="g4a" cx="50" cy="50" r="25" /><circle key="g4b" cx="50" cy="50" r="10" /><path key="g4c" d="M50 25 L 50 75 M25 50 L 75 50" /></>,
  <><path key="g5a" d="M20 80 L 50 30 L 80 80 Z" /><path key="g5b" d="M35 60 L 65 60" /></>,
  <><path key="g6a" d="M50 80 L 50 20" /><path key="g6b" d="M50 40 C 30 40, 20 30, 20 20 C 30 20, 50 30, 50 40 Z" /><path key="g6c" d="M50 55 C 70 55, 80 45, 80 35 C 70 35, 50 45, 50 55 Z" /></>,
  <><path key="g7a" d="M30 85 L 30 50 C 30 30, 50 20, 50 30 C 50 20, 70 30, 70 50 L 70 85 Z" /></>,
  <><rect key="g8a" x="20" y="25" width="60" height="55" rx="2" /><path key="g8b" d="M30 40 L 70 40 M30 55 L 70 55 M30 70 L 55 70" /></>,
]

export default function Gallery({ t }) {
  return (
    <section id="gallery">
      <div className="container">
        <header style={{ maxWidth: 760 }}>
          <span className="eyebrow reveal">{t.eyebrow}</span>
          <h2 className="display-2 reveal" data-delay="1" style={{ margin: '18px 0 14px' }}>
            {t.title}
          </h2>
          <p className="lead reveal" data-delay="2">{t.sub}</p>
        </header>

        <div className="gallery-grid">
          {t.items.map((cap, i) => (
            <div key={i} className={`gal gal-${i + 1} reveal`} data-delay={(i % 5) + 1} data-caption={cap}>
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                {GAL_ICONS[i]}
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
