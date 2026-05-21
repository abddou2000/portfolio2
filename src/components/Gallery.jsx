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
          {t.items.map((it, i) => (
            <div
              key={i}
              className={`gal gal-${i + 1} reveal`}
              data-delay={(i % 5) + 1}
              data-caption={it.cap}
            >
              <img
                src={it.img}
                alt={it.alt}
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
