import { useState } from 'react'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''

export default function Contact({ t }) {
  const [status, setStatus] = useState({ state: 'idle', msg: '' })

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!FORMSPREE_ENDPOINT) {
      setStatus({ state: 'error', msg: t.form.notConfigured })
      return
    }

    setStatus({ state: 'loading', msg: t.form.sending })

    const form = e.target
    const fd = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus({ state: 'success', msg: t.form.success })
        form.reset()
      } else {
        setStatus({ state: 'error', msg: t.form.error })
      }
    } catch {
      setStatus({ state: 'error', msg: t.form.error })
    }
  }

  const loading = status.state === 'loading'

  return (
    <section id="contact" className="dark">
      <div className="container contact-grid">
        <div className="contact-info reveal">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="display-2" style={{ margin: '18px 0 24px' }}>{t.title}</h2>
          <p className="lead" style={{ color: 'var(--gris-light)', maxWidth: 460, marginBottom: 40 }}>
            {t.sub}
          </p>

          <div className="contact-detail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
            </svg>
            <div>
              <span className="label">{t.email.label}</span>
              <a href={`mailto:${t.email.value}`} className="value">{t.email.value}</a>
            </div>
          </div>

          <div className="contact-detail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7v.01M12 17v-5M16 17v-3a2 2 0 0 0-4 0" />
            </svg>
            <div>
              <span className="label">{t.linkedin.label}</span>
              <a href={`https://${t.linkedin.value}`} target="_blank" rel="noreferrer" className="value">{t.linkedin.value}</a>
            </div>
          </div>

          <div className="contact-detail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s-7-7-7-13a7 7 0 1 1 14 0c0 6-7 13-7 13Z" /><circle cx="12" cy="9" r="2.5" />
            </svg>
            <div>
              <span className="label">{t.location.label}</span>
              <span className="value">{t.location.value}</span>
            </div>
          </div>
        </div>

        <form className="contact-form reveal" data-delay="1" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">{t.form.name}</label>
            <input id="name" name="name" type="text" required placeholder={t.form.namePh} disabled={loading} />
          </div>
          <div className="field">
            <label htmlFor="email">{t.form.email}</label>
            <input id="email" name="email" type="email" required placeholder={t.form.emailPh} disabled={loading} />
          </div>
          <div className="field">
            <label htmlFor="subject">{t.form.subject}</label>
            <input id="subject" name="subject" type="text" placeholder={t.form.subjectPh} disabled={loading} />
          </div>
          <div className="field">
            <label htmlFor="message">{t.form.message}</label>
            <textarea id="message" name="message" rows={5} required placeholder={t.form.messagePh} disabled={loading} />
          </div>

          {status.state !== 'idle' && (
            <div className={`form-status form-status-${status.state}`} role="status" aria-live="polite">
              {status.msg}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            disabled={loading || status.state === 'success'}
          >
            {loading ? t.form.sending : t.form.send} <span className="arrow">→</span>
          </button>
        </form>
      </div>
    </section>
  )
}
