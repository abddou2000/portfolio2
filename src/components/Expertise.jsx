const ICONS = [
  // Botany — leaf
  <path key="i1" d="M5 21c0-9 6-15 15-15 0 9-6 15-15 15Z M5 21l8-8" />,
  // Biotech — flask
  <><path key="i2a" d="M9 3v6L3 19a2 2 0 0 0 2 3h14a2 2 0 0 0 2-3l-6-10V3" /><path key="i2b" d="M7 14h10" /></>,
  // Protection — shield
  <path key="i3" d="M12 3l8 4v6c0 5-4 8-8 9-4-1-8-4-8-9V7l8-4Z" />,
  // Phytochimie — atom
  <><circle key="i4a" cx="12" cy="12" r="2" /><ellipse key="i4b" cx="12" cy="12" rx="10" ry="4" /><ellipse key="i4c" cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse key="i4d" cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" /></>,
  // Ressources — sprout
  <><path key="i5a" d="M12 22V9" /><path key="i5b" d="M12 9c0-4 4-6 8-6 0 4-4 6-8 6Z" /><path key="i5c" d="M12 13c0-3-3-5-6-5 0 3 3 5 6 5Z" /></>,
  // Labo — droplet
  <><path key="i6" d="M12 3s-7 8-7 13a7 7 0 0 0 14 0c0-5-7-13-7-13Z" /><path key="i6b" d="M9 14a3 3 0 0 0 3 3" /></>,
  // Gestion — tree
  <><path key="i7a" d="M12 22v-6" /><path key="i7b" d="M12 16c-4 0-7-3-7-7 0-2 1-4 3-5 0-2 2-4 4-4s4 2 4 4c2 1 3 3 3 5 0 4-3 7-7 7Z" /></>,
]

export default function Expertise({ t }) {
  return (
    <section id="expertise" className="dark">
      <div className="container">
        <header style={{ maxWidth: 780 }}>
          <span className="eyebrow reveal">{t.eyebrow}</span>
          <h2 className="display-2 reveal" data-delay="1" style={{ margin: '18px 0 18px', color: 'var(--paper)' }}>
            {t.title}
          </h2>
          <p className="lead reveal" data-delay="2" style={{ color: 'var(--gris-light)' }}>
            {t.sub}
          </p>
        </header>

        <div className="expertise-grid">
          {t.items.map((it, i) => (
            <article key={i} className="expertise-card reveal" data-delay={(i % 3) + 1}>
              <div className="expertise-num">{it.n}</div>
              <svg className="expertise-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                {ICONS[i]}
              </svg>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
