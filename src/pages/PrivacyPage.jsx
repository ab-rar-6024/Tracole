import React, { useEffect, useState } from 'react';
import { Shield, FileText, RefreshCw, Truck, RotateCcw } from 'lucide-react';

const PrivacyPage = () => {
  const [activeTab, setActiveTab] = useState('Terms');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      if (['Terms', 'Privacy', 'Refund', 'Return', 'shipping'].includes(hash)) {
        setActiveTab(hash);
      }
    }
  }, []);

  const sections = [
    { id: 'Terms', title: 'Terms & Conditions', icon: FileText },
    { id: 'Privacy', title: 'Privacy Policy', icon: Shield },
    { id: 'Refund', title: 'Refund & Cancellation', icon: RefreshCw },
    { id: 'Return', title: 'Return Policy', icon: RotateCcw },
    { id: 'shipping', title: 'Shipping Policy', icon: Truck }
  ];

  return (
    <div className="privacy-page">
      {/* Banner */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, #090d16 100%)',
        color: '#ffffff',
        padding: '8rem 0 4rem 0',
        borderBottom: '3px solid var(--color-accent)'
      }}>
        <div className="container">
          <span className="section-subtitle" style={{ color: 'var(--color-accent)' }}>Legal Governance</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: '#ffffff', marginBottom: '1rem' }}>
            Policies & Governance
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '720px' }}>
            Tracole Technologies Pvt. Ltd. commitment to transparency, quality compliance, data privacy, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-spacing" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '3rem' }}>
            {/* Sidebar Tabs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {sections.map((sec) => {
                const Icon = sec.icon;
                const isActive = activeTab === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => {
                      setActiveTab(sec.id);
                      window.location.hash = sec.id;
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '1rem 1.25rem',
                      fontSize: '0.9375rem',
                      fontWeight: '600',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid',
                      borderColor: isActive ? 'var(--color-primary)' : 'var(--color-border)',
                      backgroundColor: isActive ? 'var(--color-primary)' : 'var(--color-bg-light)',
                      color: isActive ? '#ffffff' : 'var(--color-primary)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <Icon size={18} style={{ color: isActive ? 'var(--color-accent)' : 'var(--color-text-muted)' }} />
                    {sec.title}
                  </button>
                );
              })}
            </div>

            {/* Tab Content Display */}
            <div style={{
              background: '#ffffff',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              padding: '2.5rem',
              lineHeight: '1.8',
              color: 'var(--color-text-muted)'
            }}>
              {activeTab === 'Terms' && (
                <div>
                  <h2 style={{ fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '1.25rem' }}>Terms & Conditions</h2>
                  <p style={{ marginBottom: '1rem' }}>
                    Welcome to Tracole Technologies Pvt. Ltd. By accessing or utilizing our website, products, and services, you agree to comply with and be bound by the following terms and conditions.
                  </p>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Manufacturing & Standards Compliance</h3>
                  <p style={{ marginBottom: '1rem' }}>
                    All High Security Registration Plates (HSRP) are manufactured strictly according to the Central Motor Vehicles Rules (CMVR) Rule 50 and Ministry of Road Transport and Highways (MORTH) specifications.
                  </p>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>2. Intellectual Property</h3>
                  <p>
                    All content, logos, product names, and technological designs presented on this website are the property of Tracole Technologies Pvt. Ltd.
                  </p>
                </div>
              )}

              {activeTab === 'Privacy' && (
                <div>
                  <h2 style={{ fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '1.25rem' }}>Privacy Policy</h2>
                  <p style={{ marginBottom: '1rem' }}>
                    Tracole Technologies respects your privacy and is committed to protecting your personal data. This policy details how we handle vehicle registration information, contact details, and client data.
                  </p>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Information Collection</h3>
                  <p style={{ marginBottom: '1rem' }}>
                    We collect necessary information strictly required for HSRP laser-engraving, vehicle registry pairing, and government compliance record keeping.
                  </p>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Data Security</h3>
                  <p>
                    Industry-standard encryption and security protocols are implemented to safeguard all stored records against unauthorized access or disclosure.
                  </p>
                </div>
              )}

              {activeTab === 'Refund' && (
                <div>
                  <h2 style={{ fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '1.25rem' }}>Refund & Cancellation Policy</h2>
                  <p style={{ marginBottom: '1rem' }}>
                    Due to the custom laser-engraved nature of High Security Registration Plates (HSRP), orders once processed and laser-coded cannot be cancelled or refunded unless a manufacturing defect is verified upon receipt.
                  </p>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Cancellation Window</h3>
                  <p>
                    Cancellations are accepted within 2 hours of order placement prior to laser embossing and hologram application.
                  </p>
                </div>
              )}

              {activeTab === 'Return' && (
                <div>
                  <h2 style={{ fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '1.25rem' }}>Return Policy</h2>
                  <p style={{ marginBottom: '1rem' }}>
                    Returns are accepted exclusively for damaged goods or manufacturing flaws reported within 7 days of delivery.
                  </p>
                  <p>
                    Returned items must be sent with original packaging and verification documentation to our Chennai plant or Noida office for inspection.
                  </p>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div>
                  <h2 style={{ fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '1.25rem' }}>Shipping & Delivery Policy</h2>
                  <p style={{ marginBottom: '1rem' }}>
                    Products are dispatched via trusted industrial logistics partners across India. Standard delivery lead times range from 3 to 7 business days depending on location.
                  </p>
                  <p>
                    Tracking details are provided upon dispatch for real-time monitoring of shipments.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
