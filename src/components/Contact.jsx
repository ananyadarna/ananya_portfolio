import React, { useState } from 'react'
import useReveal from '../hooks/useReveal'
import '../styles/Contact.css'

const CONTACT_ITEMS = [
  { faIcon: 'fa-solid fa-envelope',   label: 'Email',    value: 'ananyadarna@email.com' },
  { faIcon: 'fa-brands fa-linkedin',  label: 'LinkedIn', value: 'linkedin.com/in/ananyadarna' },
  { faIcon: 'fa-brands fa-github',    label: 'GitHub',   value: 'github.com/ananyadarna' },
  { faIcon: 'fa-brands fa-whatsapp',  label: 'WhatsApp', value: '+91 93924 11970' },
]

const INITIAL = { fname: '', lname: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm]       = useState(INITIAL)
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)

  const headerRef = useReveal()
  const gridRef   = useReveal()

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSuccess(true)
      setForm(INITIAL)
      setTimeout(() => setSuccess(false), 5000)
    }, 1500)
  }

  return (
    <section className="contact" id="contact">
      <div className="grid-bg" />
      <div className="glow-orb orb2" style={{ opacity: 0.5 }} />

      <div className="contact-inner">
        <div className="contact-header reveal" ref={headerRef}>
          <div className="section-tag">Contact</div>
          <h2 className="section-title">Let's <span>Work Together</span></h2>
          <p className="section-desc">
            Have a project in mind or want to discuss opportunities?
            I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid reveal" ref={gridRef}>
          {/* Info */}
          <div className="contact-info">
            {CONTACT_ITEMS.map(item => (
              <div className="contact-item hoverable" key={item.label}>
                <div className="contact-icon">
                  <i className={item.faIcon} />
                </div>
                <div>
                  <div className="contact-label">{item.label}</div>
                  <div className="contact-value">{item.value}</div>
                </div>
              </div>
            ))}
            <a
              className="btn-primary whatsapp-btn hoverable"
              href="https://wa.me/919392411970"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-whatsapp" /> Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                  className="form-input"
                  name="fname"
                  value={form.fname}
                  onChange={handleChange}
                  placeholder="E.g. John"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                  className="form-input"
                  name="lname"
                  value={form.lname}
                  onChange={handleChange}
                  placeholder="E.g. Doe"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="e.g. john@company.com"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                className="form-input"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="e.g. Project Collaboration / Job Opportunity"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                required
              />
            </div>

            <button
              type="submit"
              className="form-submit hoverable"
              disabled={sending}
            >
              {sending
                ? <><i className="fa-solid fa-spinner fa-spin" /> Sending...</>
                : <><i className="fa-solid fa-paper-plane" /> Send Message</>
              }
            </button>

            {success && (
              <div className="form-success">
                <i className="fa-solid fa-circle-check" /> Message sent! I'll get back to you within 24 hours.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
