export default function About({ t }) {
  return (
    <section id="about" className="alt">
      <div className="container">

        <div className="about-layout">

          {/* ── Colonne gauche : photo + label ── */}
          <aside className="about-left reveal">
            <span className="eyebrow" style={{ marginBottom: 20, display: 'block' }}>{t.eyebrow}</span>

            <div className="about-portrait-wrap">
              <img
                src="/driss-portrait.png"
                alt="Driss Boubkiri"
                className="about-portrait"
                loading="eager"
              />
            </div>

            <p
              className="muted"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginTop: 16,
                lineHeight: 1.7,
              }}
            >
              {t.stickyLabel}
            </p>
          </aside>

          {/* ── Colonne droite : titre + intro ── */}
          <div className="about-right reveal" data-delay="1">
            <h2 className="display-2" style={{ marginBottom: 36 }}>
              {t.title}
            </h2>

            <div className="about-body">
              {t.body.map((p, i) => <p key={i}>{p}</p>)}
              <blockquote className="pull">{t.pull}</blockquote>
              {t.bodyEnd.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <div className="about-signature">{t.signature}</div>
          </div>

        </div>

      </div>
    </section>
  )
}
