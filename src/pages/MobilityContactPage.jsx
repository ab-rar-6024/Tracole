import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/productsData';

const MobilityContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Automotive Engineering',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'Mobility' })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
      setSubmitted(true);
    } catch (err) {
      console.error('Contact form submission failed:', err);
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const mapQuery = encodeURIComponent(COMPANY_DETAILS.mobilityOfficeAddress);

  return (
    <div className="contact-page">
      {/* Banner */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, #090d16 100%)',
        color: '#ffffff',
        padding: '8rem 0 4rem 0',
        borderBottom: '3px solid var(--color-accent)'
      }}>
        <div className="container">
          <span className="section-subtitle" style={{ color: 'var(--color-accent)' }}>Get In Touch</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: '#ffffff', marginBottom: '1rem' }}>
            Contact Tracole Mobility
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '720px' }}>
            Reach out to our mobility engineering team for automotive cybersecurity, connected vehicle,
            IoT hardware and intelligent transportation inquiries.
          </p>
        </div>
      </section>

      {/* Main Form & Location Grid */}
      <section className="section-spacing" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Form */}
            <div>
              <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>Send Us a Message</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Tell us about your program and our engineering team will get back to you.
              </p>

              {submitted ? (
                <div style={{
                  backgroundColor: '#f0fdf4',
                  border: '1.5px solid #22c55e',
                  padding: '2rem',
                  borderRadius: 'var(--radius-sm)',
                  textAlign: 'center'
                }}>
                  <CheckCircle size={48} style={{ color: '#16a34a', margin: '0 auto 1rem auto' }} />
                  <h3 style={{ fontSize: '1.35rem', color: '#15803d', marginBottom: '0.5rem' }}>Message Sent Successfully!</h3>
                  <p style={{ color: '#166534' }}>Thank you for reaching out. Our mobility engineering team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="form-input"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="form-input"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Inquiry Type</label>
                      <select
                        className="form-select"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option value="Automotive Engineering">Automotive Engineering & Cybersecurity</option>
                        <option value="Connected Vehicle">Connected Vehicle Engineering</option>
                        <option value="Transport Cybersecurity">Transport Cybersecurity Platform</option>
                        <option value="AIS-140">AIS-140 Vehicle Tracking</option>
                        <option value="ROVER">ROVER™ Inspection Robot</option>
                        <option value="Test Track">Automated Test Driving Track</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      className="form-textarea"
                      placeholder="Please describe your requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {error && (
                    <div style={{
                      backgroundColor: '#fef2f2',
                      border: '1.5px solid #fca5a5',
                      padding: '1rem 1.25rem',
                      borderRadius: 'var(--radius-sm)',
                      marginBottom: '1.25rem'
                    }}>
                      <p style={{ color: '#991b1b', fontWeight: 600, marginBottom: '0.25rem' }}>
                        Our messaging service is temporarily unavailable
                      </p>
                      <p style={{ color: '#991b1b', fontSize: '0.9rem' }}>
                        Please call us directly at{' '}
                        <a href={`tel:${COMPANY_DETAILS.mobilityPhone}`} style={{ color: '#991b1b', fontWeight: 700, textDecoration: 'underline' }}>
                          {COMPANY_DETAILS.mobilityPhone}
                        </a>{' '}
                        and we'll be happy to help.
                      </p>
                    </div>
                  )}

                  <button type="submit" className="btn btn-dark" style={{ width: '100%' }} disabled={submitting}>
                    {submitting ? 'Sending...' : 'Send Message'}
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Contact Details & Office Locations */}
            <div>
              <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Plant &amp; Office Locations</h2>

              <div className="location-card">
                <h3 className="location-title">
                  <MapPin size={22} style={{ color: 'var(--color-accent-hover)' }} />
                  Tracole Mobility (Guindy, Chennai)
                </h3>
                <p className="location-address">
                  {COMPANY_DETAILS.mobilityOfficeAddress}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.75rem' }}>
                  <a href={`tel:${COMPANY_DETAILS.mobilityPhone}`} className="location-phone">
                    <Phone size={16} />
                    {COMPANY_DETAILS.mobilityPhone}
                  </a>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="location-phone">
                    <Mail size={16} />
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </div>

              {/* HSRP Manufacturing Plant */}
              <div className="location-card">
                <h3 className="location-title">
                  <MapPin size={22} style={{ color: 'var(--color-accent-hover)' }} />
                  HSRP Manufacturing Plant (Chennai)
                </h3>
                <p className="location-address">
                  {COMPANY_DETAILS.hsrpPlantAddress}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.75rem' }}>
                  <a href={`tel:${COMPANY_DETAILS.hsrpPhone}`} className="location-phone">
                    <Phone size={16} />
                    {COMPANY_DETAILS.hsrpPhone}
                  </a>
                </div>
              </div>

              {/* Interactive Map Component */}
              <div style={{
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                height: '320px'
              }}>
                <iframe
                  title="Tracole Mobility Office Location Map"
                  src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobilityContactPage;
