import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Bot, Target, Car } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/productsData';
import { SOLUTION_TYPES } from '../data/mobilitySolutions';
import ProductSpotlight from '../components/ProductSpotlight';
import HoverRevealCards from '../components/HoverRevealCards';

const STATS = [
  { icon: ShieldCheck, number: 'R155/R156', label: 'Cybersecurity Compliance Ready' },
  { icon: MapPin, number: 'AIS-140', label: 'Certified Fleet Tracking' },
  { icon: Bot, number: 'AI-Assisted', label: 'ROVER™ Inspection Platform' },
  { icon: Target, number: 'OEM to Govt', label: 'End-to-End Mobility Programs' }
];

const ABOUT_HIGHLIGHTS = [
  'Automotive Engineering & Cybersecurity',
  'Connected Vehicle & IoT Hardware',
  'AIS-140 & ROVER™ Platforms',
  'Road Safety Infrastructure'
];

const MobilityPage = () => {
  const location = useLocation();
  const [activeTypeId, setActiveTypeId] = useState(null);
  const [activeProductId, setActiveProductId] = useState(null);

  const activeType = SOLUTION_TYPES.find((s) => s.id === activeTypeId) || null;
  const activeProduct = activeType
    ? activeType.products.find((p) => p.id === activeProductId) || activeType.products[0]
    : null;

  const selectType = (typeId) => {
    setActiveTypeId(typeId);
    const type = SOLUTION_TYPES.find((s) => s.id === typeId);
    setActiveProductId(type.products[0].id);
  };

  useEffect(() => {
    if (!activeTypeId) return;
    requestAnimationFrame(() => {
      document.getElementById('solution-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [activeTypeId]);

  useEffect(() => {
    const hash = location.hash.replace('#', '');

    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    if (SOLUTION_TYPES.some((s) => s.id === hash)) {
      selectType(hash);
    }

    if (hash === 'solution' || SOLUTION_TYPES.some((s) => s.id === hash)) {
      document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.mobility-page .fade-in-up').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mobility-page">
      {/* Hero */}
      <section className="mobility-hero">
        <div className="mobility-hero-bg">
          <video
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/mobility-hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="mobility-hero-tagline">
          <h2 className="mobility-hero-tagline-title">Our Patented Product</h2>
          <p className="mobility-hero-tagline-desc">
            An AI-assisted platform driving vehicle-fitness infrastructure modernization.
          </p>
        </div>

        <div className="mobility-hero-footer-desc">
          <p>
            From automotive engineering and connected IoT hardware to road safety infrastructure —
            explore Tracole&apos;s complete range across Mobility, IoT and Road Safety.
          </p>
        </div>
      </section>

      {/* Mobile-only caption: sits in a plain white section below the hero video instead of overlaid on it (same pattern as the Road Safety home page) */}
      <div className="hero-mobile-caption">
        <div className="hero-mobile-icon">
          <Car size={22} />
        </div>
        <span className="hero-mobile-accent"></span>
        <h1 className="hero-heading">Our Patented Product</h1>
        <p className="hero-subheading">
          An AI-assisted platform driving vehicle-fitness infrastructure modernization.
        </p>
        <p className="hero-mobile-desc">
          From automotive engineering and connected IoT hardware to road safety infrastructure —
          explore Tracole&apos;s complete range across Mobility, IoT and Road Safety.
        </p>
      </div>

      {/* Quick Stats */}
      <section className="stats-banner">
        <div className="container">
          <div className="stats-grid">
            {STATS.map(({ icon: Icon, number, label }) => (
              <div key={label} className="stat-card">
                <div className="stat-icon-wrapper">
                  <Icon size={24} />
                </div>
                <div>
                  <div className="stat-number">{number}</div>
                  <div className="stat-label">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-spacing" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
            <div className="fade-in-up">
              <span className="section-subtitle">About Mobility</span>
              <h2 className="section-title">Building India&apos;s Future of Secure, Connected &amp; Intelligent Mobility</h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.65', marginBottom: '1.15rem' }}>
                Tracole Technologies is a future-focused mobility engineering and technology company
                delivering automotive cybersecurity, connected vehicle platforms, intelligent transportation
                systems and vehicle compliance infrastructure.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                Our expertise spans automotive engineering, software-defined vehicles, cybersecurity
                compliance, intelligent fleet management, government mobility platforms and advanced
                transportation technologies.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '1.75rem' }}>
                {ABOUT_HIGHLIGHTS.map((item) => (
                  <div
                    key={item}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-primary)' }}
                  >
                    <CheckCircle2 size={18} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>

              <NavLink to="/mobility#solution" className="btn btn-dark">
                Explore Our Products
                <ArrowRight size={17} />
              </NavLink>
            </div>

            <div className="fade-in-up about-visual-wrapper">
              <div className="about-image-frame">
                <img
                  src="/images/mobility/connected-vehicle.jpg"
                  alt="Connected Vehicle Digital Cockpit"
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>
              <div className="about-badge-card">
                <div className="about-badge-icon-wrap">
                  <Target size={22} />
                </div>
                <div>
                  <div className="about-badge-title">Our Vision</div>
                  <div className="about-badge-desc">
                    India&apos;s most trusted mobility technology company — unifying engineering, cybersecurity and ITS.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products / Solutions */}
      <section id="solution" className="section-spacing" style={{ backgroundColor: 'var(--color-bg-light)', scrollMarginTop: '110px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }} className="fade-in-up">
            <span className="section-subtitle" style={{ justifyContent: 'center' }}>Product Portfolio</span>
            <h2 className="section-title">Mobility, IoT &amp; Road Safety</h2>
            <p className="section-description" style={{ margin: '0 auto' }}>
              Three solution types, one mobility ecosystem — choose a category to explore.
            </p>
          </div>

          <div className="fade-in-up">
            <HoverRevealCards
              items={SOLUTION_TYPES.map((type) => ({
                id: type.id,
                title: type.label,
                subtitle: type.kicker,
                imageUrl: type.thumb,
                active: activeTypeId === type.id,
                onClick: () => selectType(type.id)
              }))}
            />
          </div>

          {activeType && (
            <div className="mobility-tab-panel" id="solution-detail" key={activeTypeId}>
              <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
                <span className="section-subtitle" style={{ justifyContent: 'center' }}>{activeType.kicker}</span>
                <h3 className="section-title" style={{ fontSize: 'clamp(1.5rem, 2.4vw, 1.9rem)' }}>{activeType.tagline}</h3>
                <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.65' }}>
                  {activeType.description}
                </p>
              </div>

              <div className="mobility-subproduct-grid">
                {activeType.products.map((product) => {
                  const ProductIcon = product.icon;
                  return (
                    <button
                      key={product.id}
                      type="button"
                      className={`mobility-subproduct-card ${activeProductId === product.id ? 'active' : ''}`}
                      onClick={() => setActiveProductId(product.id)}
                    >
                      <span className="mobility-subproduct-card-icon">
                        <ProductIcon size={18} />
                      </span>
                      {product.name}
                    </button>
                  );
                })}
              </div>

              <ProductSpotlight product={activeProduct} />
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #090d16 100%)', color: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-subtitle" style={{ color: 'var(--color-accent)', justifyContent: 'center' }}>Guindy, Chennai</span>
          <h2 className="section-title" style={{ color: '#ffffff' }}>Let&apos;s Build Secure Mobility Together</h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 1.75rem' }}>
            Reach out to discuss automotive engineering, connected vehicle, or intelligent transportation
            programs with our team.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <NavLink to="/mobility/contact" className="btn btn-primary">
              Contact Us
              <ArrowRight size={17} />
            </NavLink>
            <a href={`tel:${COMPANY_DETAILS.mobilityPhone}`} className="btn btn-secondary">
              Call Mobility Office
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobilityPage;
