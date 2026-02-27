import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: send to backend or email service
    console.log('contact form', form)
    setSent(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setSent(false)
      setForm({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in">Get In Touch</h1>
          <p className="hero-subtitle animate-fade-in animate-delay-1">
            We'd love to hear from you. Reach out with any questions or to book your appointment.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info animate-slide-right">
            <h2 className="section-title">Contact Information</h2>
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h3>Visit Us</h3>
                  <p>Gerji Alfoz Plaza, 4th Floor</p>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <h3>Call Us</h3>
                  <p>
                    <a href="tel:+251911234567">+251 911 234 567</a>
                  </p>
                  <p>
                    <a href="tel:+251922345678">+251 922 345 678</a>
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">✉️</div>
                <div className="info-content">
                  <h3>Email Us</h3>
                  <p>
                    <a href="mailto:info@beautysalon.et">info@beautysalon.et</a>
                  </p>
                  <p>
                    <a href="mailto:bookings@beautysalon.et">bookings@beautysalon.et</a>
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">⏰</div>
                <div className="info-content">
                  <h3>Working Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="social-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <span className="social-icon">📘</span>
                  <span className="social-name">Facebook</span>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <span className="social-icon">📷</span>
                  <span className="social-name">Instagram</span>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <span className="social-icon">🐦</span>
                  <span className="social-name">Twitter</span>
                </a>
                <a href="#" className="social-link" aria-label="WhatsApp">
                  <span className="social-icon">📱</span>
                  <span className="social-name">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper animate-slide-left">
            <div className="form-header">
              <h2 className="section-title">Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            {sent ? (
              <div className="success-message animate-scale-up">
                <div className="success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <div className="input-wrapper">
                    <span className="input-icon">👤</span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <div className="input-wrapper">
                    <span className="input-icon">✉️</span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <div className="input-wrapper">
                    <span className="input-icon">💬</span>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="form-input"
                      rows="5"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  <span className="btn-text">Send Message</span>
                  <span className="btn-icon">→</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map Section */}
        <section className="map-section animate-scale-up">
          <h2 className="section-title text-center">Find Us Here</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.287854724302!2d38.763945!3d9.022731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDEnMjEuOCJOIDM4wrA0NSc1MC4yIkU!5e0!3m2!1sen!2set!4v1620000000000!5m2!1sen!2set"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Salon Location"
              className="map-iframe"
            ></iframe>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item animate-scale-up">
              <h3>Do I need to book in advance?</h3>
              <p>Yes, we recommend booking at least 24 hours in advance to ensure availability for your preferred time slot.</p>
            </div>
            <div className="faq-item animate-scale-up animate-delay-1">
              <h3>What payment methods do you accept?</h3>
              <p>We accept cash, credit/debit cards, and mobile money transfers.</p>
            </div>
            <div className="faq-item animate-scale-up animate-delay-2">
              <h3>Do you offer gift certificates?</h3>
              <p>Yes! Gift certificates are available for purchase at our salon or through our website.</p>
            </div>
            <div className="faq-item animate-scale-up animate-delay-3">
              <h3>What if I need to cancel?</h3>
              <p>Please notify us at least 4 hours in advance for cancellations to avoid any fees.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}