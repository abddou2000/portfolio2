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
              <div className="proj-img">
                <img
                  src={it.img}
                  alt={it.alt}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                <div className="proj-img-overlay" aria-hidden="true" />
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
