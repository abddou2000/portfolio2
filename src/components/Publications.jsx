export default function Publications({ t }) {
  return (
    <section id="publications" className="alt">
      <div className="container">
        <header style={{ maxWidth: 760 }}>
          <span className="eyebrow reveal">{t.eyebrow}</span>
          <h2 className="display-2 reveal" data-delay="1" style={{ margin: '18px 0 14px' }}>
            {t.title}
          </h2>
          <p className="lead reveal" data-delay="2">{t.sub}</p>
        </header>

        <div className="pub-grid">
          {t.items.map((it, i) => (
            <article key={i} className="pub reveal" data-delay={(i % 3) + 1}>
              <div className="pub-type">{it.type}</div>
              <h4>{it.title}</h4>
              <p>{it.desc}</p>
              <div className="pub-date">{it.date}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
