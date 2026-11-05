import { useState } from 'react'
import { ChevronDown, Mail, Phone, MapPin, Send, Loader, Check, HelpCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { faqs } from '../data/faqs'

export default function Help() {
  const [openFaq, setOpenFaq] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const update = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Enter your name'
    if (!form.email.trim()) e.email = 'Enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.subject.trim()) e.subject = 'Enter a subject'
    if (!form.message.trim()) e.message = 'Enter your message'
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 1200)
  }

  return (
    <>
      <PageHeader
        tag="Help & Support"
        title="How can we help?"
        subtitle="Find answers to common questions, get in touch, or send us a message. We are here to help."
      />

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <div className="help-layout">
            <div className="help-faqs">
              <h2 className="help-section-title"><HelpCircle size={20} /> Frequently asked questions</h2>
              <div className="faq-list">
                {faqs.map((faq) => (
                  <div key={faq.id} className={`faq-item ${openFaq === faq.id ? 'open' : ''}`}>
                    <button
                      className="faq-question"
                      onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                      aria-expanded={openFaq === faq.id}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown size={18} className="faq-chevron" />
                    </button>
                    {openFaq === faq.id && (
                      <div className="faq-answer slide-down">{faq.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <aside className="help-contact">
              <h2 className="help-section-title">Contact information</h2>
              <div className="contact-list">
                <div className="contact-item">
                  <div className="contact-icon"><Mail size={20} /></div>
                  <div>
                    <small>Email</small>
                    <strong>support@vayo.example</strong>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><Phone size={20} /></div>
                  <div>
                    <small>Phone</small>
                    <strong>0800 123 4567</strong>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><MapPin size={20} /></div>
                  <div>
                    <small>Office</small>
                    <strong>123 demo street, London EC1</strong>
                  </div>
                </div>
              </div>
              <p className="contact-note">Placeholder contact details for this demonstration project.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section bg-off-white">
        <div className="container">
          <div className="help-form-wrap">
            <h2 className="help-section-title">Send us a message</h2>
            <p className="section-subtitle">Fill out the form below and we will get back to you as soon as possible.</p>

            {status === 'success' && (
              <div className="alert alert-success fade-in">
                <Check size={16} style={{ display: 'inline', marginRight: 8 }} />
                Message sent! We will get back to you soon. (Demo — no message was actually sent.)
              </div>
            )}

            <form className="card help-form" onSubmit={handleSubmit} noValidate>
              <div className="help-form-grid">
                <div className="form-group">
                  <label className="form-label">Your name</label>
                  <input
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    type="text"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                  />
                  {errors.name && <div className="form-error">{errors.name}</div>}
                </div>
                <div className="form-group">
                  <label className="form-label">Email address</label>
                  <input
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    type="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                  />
                  {errors.email && <div className="form-error">{errors.email}</div>}
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  type="text"
                  placeholder="How can we help?"
                  value={form.subject}
                  onChange={(e) => update('subject', e.target.value)}
                />
                {errors.subject && <div className="form-error">{errors.subject}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Tell us more about your issue or question..."
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                />
                {errors.message && <div className="form-error">{errors.message}</div>}
              </div>
              <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'loading'}>
                {status === 'loading' ? <><Loader size={18} className="spin" /> Sending...</> : <><Send size={16} /> Send message</>}
              </button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .help-layout {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 32px;
          align-items: start;
        }
        .help-section-title {
          font-size: 1.2rem; font-weight: 700;
          margin-bottom: 20px;
          display: flex; align-items: center; gap: 8px;
        }
        .faq-list { display: flex; flex-direction: column; gap: 8px; }
        .faq-item {
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          overflow: hidden;
          transition: border-color var(--transition);
        }
        .faq-item.open { border-color: var(--vayo-green); }
        .faq-question {
          width: 100%;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 18px;
          background: none; border: none;
          font-size: 0.92rem; font-weight: 600;
          color: var(--text-primary);
          text-align: left;
        }
        .faq-chevron { color: var(--text-muted); transition: transform var(--transition); flex-shrink: 0; }
        .faq-item.open .faq-chevron { transform: rotate(180deg); color: var(--vayo-green); }
        .faq-answer {
          padding: 0 18px 16px;
          font-size: 0.88rem; color: var(--text-secondary);
          line-height: 1.6;
        }

        .contact-list { display: flex; flex-direction: column; gap: 16px; }
        .contact-item { display: flex; gap: 14px; align-items: center; }
        .contact-icon {
          width: 44px; height: 44px;
          border-radius: var(--radius-sm);
          background: var(--vayo-green-light);
          color: var(--vayo-green-darker);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .contact-item small { font-size: 0.75rem; color: var(--text-muted); display: block; }
        .contact-item strong { font-size: 0.92rem; }
        .contact-note { font-size: 0.78rem; color: var(--text-muted); margin-top: 16px; }

        .help-form-wrap { max-width: 720px; margin: 0 auto; }
        .help-form { padding: 32px; }
        .help-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

        @media (max-width: 768px) {
          .help-layout { grid-template-columns: 1fr; }
          .help-form-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
