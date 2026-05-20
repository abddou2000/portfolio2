export default function Journey({ t }) {
  return (
    <section id="journey">
      <div className="container container-narrow" style={{ textAlign: 'center' }}>
        <span className="eyebrow reveal">{t.eyebrow}</span>
        <h2 className="display-2 reveal" data-delay="1" style={{ margin: '18px 0 32px' }}>
          {t.title}
        </h2>
        <span className="divider" />
      </div>

      <div className="container">
        <ol className="timeline">
          {t.items.map((it, i) => (
            <li key={i} className="tl-item reveal" data-delay={(i % 3) + 1}>
              <div className="tl-date">{it.date}</div>
              <h3 className="tl-title">{it.title}</h3>
              <div className="tl-org">{it.org}</div>
              <p className="tl-desc">{it.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
