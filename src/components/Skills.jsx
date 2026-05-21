const SKILL_ICONS = [
  // chart bars — statistics
  <><path key="s1a" d="M4 20h16" /><rect key="s1b" x="6" y="10" width="3" height="8" /><rect key="s1c" x="11" y="6" width="3" height="12" /><rect key="s1d" x="16" y="13" width="3" height="5" /></>,
  // monitor — IT tools
  <><rect key="s2a" x="3" y="4" width="18" height="13" rx="1.5" /><path key="s2b" d="M9 21h6M12 17v4" /></>,
  // sprout in pot — greenhouse
  <><path key="s3a" d="M12 13V8" /><path key="s3b" d="M12 8c0-2 2-3 4-3 0 2-2 3-4 3Z" /><path key="s3c" d="M12 8c0-2-2-3-4-3 0 2 2 3 4 3Z" /><path key="s3d" d="M6 13h12l-1.5 7h-9Z" /></>,
  // megaphone — communication
  <><path key="s4a" d="M3 10v4l13 5V5Z" /><path key="s4b" d="M16 9a3 3 0 0 1 0 6" /></>,
  // brain / lightbulb — analysis
  <><path key="s5a" d="M9 21h6" /><path key="s5b" d="M10 17h4" /><path key="s5c" d="M12 17V13" /><path key="s5d" d="M12 3a6 6 0 0 0-4 10.5c.6.5 1 1.3 1 2V14h6v1.5c0 .7.4 1.5 1 2A6 6 0 0 0 12 3Z" /></>,
  // people — teamwork
  <><circle key="s6a" cx="8" cy="9" r="3" /><circle key="s6b" cx="17" cy="9" r="2.5" /><path key="s6c" d="M2 20c0-3 3-5 6-5s6 2 6 5" /><path key="s6d" d="M14 20c0-2 2-4 5-4s4 2 4 4" /></>,
]

export default function Skills({ t }) {
  return (
    <section id="skills">
      <div className="container">
        <header style={{ maxWidth: 760 }}>
          <span className="eyebrow reveal">{t.eyebrow}</span>
          <h2 className="display-2 reveal" data-delay="1" style={{ margin: '18px 0 14px' }}>
            {t.title}
          </h2>
          <p className="lead reveal" data-delay="2">{t.sub}</p>
        </header>

        <div className="skills-grid">
          {t.items.map((it, i) => (
            <article key={i} className="skill-row reveal" data-delay={(i % 3) + 1}>
              <div className="skill-icon-wrap">
                <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  {SKILL_ICONS[i]}
                </svg>
              </div>
              <div className="skill-body">
                <h3>{it.t}</h3>
                <p>{it.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
