export default function Experience({ t }) {
  return (
    <section id="experience" className="alt">
      <div className="container">
        <header style={{ maxWidth: 720 }}>
          <span className="eyebrow reveal">{t.eyebrow}</span>
          <h2 className="display-2 reveal" data-delay="1" style={{ margin: '18px 0 14px' }}>
            {t.title}
          </h2>
          <p className="lead reveal" data-delay="2 ">{t.sub}</p>
        </header>

        <div className="exp-list">
          {t.items.map((it, i) => (
            <article key={i} className="exp-row reveal" data-delay={(i % 3) + 1}>
              <div className="exp-date">{it.date}</div>
              <div>
                <h3 className="exp-role">{it.role}</h3>
                <div className="exp-org">{it.org}</div>
                <p className="exp-desc">{it.desc}</p>
                <div className="exp-tags">
                  {it.tags.map((tag, j) => <span key={j} className="tag">{tag}</span>)}
                </div>
              </div>
              <div />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
