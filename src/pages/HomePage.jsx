import React, { useEffect, useMemo, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award, Truck, CheckCircle2, Activity, MapPin } from 'lucide-react';
import { PRODUCTS, CERTIFICATIONS } from '../data/productsData';
import ChromaGrid from '../components/ChromaGrid';

const PRODUCT_ACCENT_COLORS = ['#00A3E0', '#0EA5E9', '#38BDF8', '#22D3EE', '#0284C7', '#0891B2'];

const HomePage = () => {
  const heroRef = useRef(null);
  const navigate = useNavigate();

  const galleryItems = useMemo(
    () =>
      PRODUCTS.map((prod, index) => {
        const accent = PRODUCT_ACCENT_COLORS[index % PRODUCT_ACCENT_COLORS.length];
        return {
          image: prod.galleryImage,
          title: prod.shortTitle,
          subtitle: prod.tag,
          handle: prod.category,
          borderColor: accent,
          gradient: `linear-gradient(160deg, ${accent}, #075985)`,
          slug: prod.slug
        };
      }),
    []
  );

  const handleGalleryItemClick = (item) => {
    if (item?.slug) navigate(`/products/${item.slug}`);
  };

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

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      {/* ================= CLEAN UNCLUTTERED HERO VIDEO SECTION =================
          The actual <video> lives in HeroVideoBackground, mounted once at the
          App level so it keeps playing (no reload/poster-flash) when
          navigating away and back. This section just reserves the same
          space, with a transparent background, so that persistent video
          shows through here. */}
      <section className="hero-section clean-hero" ref={heroRef}>
        {/* Ambient Overlay + Bottom Scrim for Text Readability */}
        <div className="hero-overlay clean-overlay"></div>

        {/* Hero Tagline Content — overlaid on the video, desktop/tablet only (see .hero-mobile-caption for mobile) */}
        <div className="hero-content">
          <h1 className="hero-heading">Engineering Safer Roads Across India</h1>
          <p className="hero-subheading">
            ISO 9001:2015 certified manufacturer of HSRP, retro-reflective sheeting, and TrafficJet print systems trusted nationwide.
          </p>
        </div>
      </section>

      {/* Mobile-only caption: sits in a plain white section below the hero image instead of overlaid on it */}
      <div className="hero-mobile-caption">
        <div className="hero-mobile-icon">
          <ShieldCheck size={22} />
        </div>
        <span className="hero-mobile-accent"></span>
        <h1 className="hero-heading">Engineering Safer Roads Across India</h1>
        <p className="hero-subheading">
          ISO 9001:2015 certified manufacturer of HSRP, retro-reflective sheeting, and TrafficJet print systems trusted nationwide.
        </p>
        <p className="hero-mobile-desc">
          Tracole Technologies designs, manufactures, and deploys High Security Registration Plates, retro-reflective sheeting, and TrafficJet print systems for OEMs, government agencies, and highway infrastructure projects across India.
        </p>
      </div>

      {/* ================= STATS / HIGHLIGHTS BANNER (SLIDES OVER HERO) ================= */}
      <section className="stats-banner">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <Award size={24} />
              </div>
              <div>
                <div className="stat-number">ISO 9001:2015</div>
                <div className="stat-label">Certified Manufacturing</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="stat-number">MORTH</div>
                <div className="stat-label">CMVR Rule 50 Compliant</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <Truck size={24} />
              </div>
              <div>
                <div className="stat-number">South India</div>
                <div className="stat-label">Exclusive Reflective Partner</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <Activity size={24} />
              </div>
              <div>
                <div className="stat-number">100%</div>
                <div className="stat-label">Precision Quality Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <div className="main-content-section">
        {/* About Company Intro */}
        <section className="section-spacing about-teaser" style={{ backgroundColor: '#ffffff' }}>
          <div className="container">
            <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
              <div className="fade-in-up about-fade-left">
                <span className="section-subtitle">About Tracole</span>
                <h2 className="section-title">We Provide Best Road Safety Services & Solutions</h2>
                <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.65', marginBottom: '1.15rem' }}>
                  Tracole Technologies Pvt. Ltd. is an ISO 9001:2015 certified leader specializing in MORTH-compliant High Security Registration Plates (HSRP), retro-reflective solutions, TrafficJet print systems, and road safety infrastructure across India.
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                  All our activities are geared towards road safety innovation and engineering precision. We invest continuously in workforce training, research and development, and automated machinery to meet future industry expectations.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '1.75rem' }}>
                  <div className="about-feature-item" style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-primary)' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-accent)' }} />
                    High Security Registration Plates
                  </div>
                  <div className="about-feature-item" style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-primary)' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-accent)' }} />
                    TrafficJet Printing Systems
                  </div>
                  <div className="about-feature-item" style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-primary)' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-accent)' }} />
                    Retroreflective Sheeting & Tapes
                  </div>
                  <div className="about-feature-item" style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-primary)' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-accent)' }} />
                    Protective Overlay & Safety Films
                  </div>
                </div>

                <NavLink to="/about" className="btn btn-dark about-cta-btn">
                  Learn More About Us
                  <ArrowRight size={17} />
                </NavLink>
              </div>

              <div className="fade-in-up about-fade-right about-visual-wrapper">
                <div className="about-image-frame">
                  <img src="/images/home/banner1.jpg" alt="Tracole Precision HSRP Manufacturing" style={{ width: '100%', height: '420px', objectFit: 'cover' }} />
                </div>
                <div className="about-badge-card">
                  <div className="about-badge-icon-wrap">
                    <span className="about-badge-pulse"></span>
                    <Award size={22} />
                  </div>
                  <div>
                    <div className="about-badge-title">ISO 9001:2015</div>
                    <div className="about-badge-desc">Certified Quality Standard in Safety Manufacturing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Catalog Grid */}
        <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-light)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="fade-in-up">
              <span className="section-subtitle" style={{ justifyContent: 'center' }}>Product Portfolio</span>
              <h2 className="section-title">Our Specialized Safety Products</h2>
              <p className="section-description" style={{ margin: '0 auto' }}>
                Engineered to meet stringent MORTH, CMVR, IRC, and international safety standards for vehicle registration and highway infrastructure.
              </p>
            </div>

            <div className="fade-in-up product-chroma-wrapper">
              <ChromaGrid
                items={galleryItems}
                columns={3}
                rows={2}
                radius={320}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
                onItemClick={handleGalleryItemClick}
              />
            </div>

            <div style={{ textAlign: 'center', marginTop: '1rem' }} className="fade-in-up">
              <NavLink to="/products" className="btn btn-dark">
                View All Products
                <ArrowRight size={17} />
              </NavLink>
            </div>
          </div>
        </section>

        {/* Certifications Showcase */}
        <section className="cert-showcase">
          <div className="cert-showcase-bg">
            <img src="/images/gallery/corporate-building.jpeg" alt="" aria-hidden="true" />
          </div>
          <div className="cert-showcase-overlay"></div>

          <div className="container cert-showcase-content">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="fade-in-up">
              <span className="section-subtitle" style={{ justifyContent: 'center', color: 'var(--color-accent)' }}>Trust & Compliance</span>
              <h2 className="section-title" style={{ color: '#ffffff' }}>Certifications & Quality Assurance</h2>
              <p className="section-description" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.75)' }}>
                Our products undergo thorough testing and adhere strictly to national safety regulations and quality management frameworks.
              </p>
            </div>

            <div className="cert-medal-row">
              {CERTIFICATIONS.map((cert, index) => {
                const CertIcon = [Award, ShieldCheck, Activity, Truck][index % 4];
                return (
                  <div
                    key={index}
                    className="cert-medal fade-in-up cert-medal-pop"
                    style={{ transitionDelay: `${index * 0.12}s` }}
                  >
                    <div className="cert-medal-badge">
                      <span className="cert-medal-ring"></span>
                      <CertIcon size={26} />
                    </div>
                    <h3 className="cert-medal-title">{cert.title}</h3>
                    <div className="cert-medal-subtitle">{cert.subtitle}</div>
                    <p className="cert-medal-desc">{cert.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Plant & Regional Footprint Banner */}
        <section className="section-spacing" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #090d16 100%)', color: '#ffffff' }}>
          <div className="container">
            <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div className="fade-in-up">
                <span className="section-subtitle" style={{ color: 'var(--color-accent)' }}>Manufacturing & Support</span>
                <h2 className="section-title" style={{ color: '#ffffff' }}>State-of-the-Art Production & Regional Facilities</h2>
                <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.65', marginBottom: '1.75rem' }}>
                  With an automated HSRP manufacturing plant in Chennai and corporate regional headquarters in Noida, Tracole guarantees continuous supply chain reliability and technical support nationwide.
                </p>

                <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                  <NavLink to="/contact" className="btn btn-primary">
                    Get In Touch
                    <ArrowRight size={17} />
                  </NavLink>
                  <a href="tel:+919619057777" className="btn btn-secondary">
                    Call Chennai Plant
                  </a>
                </div>
              </div>

              <div className="fade-in-up" style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                <div className="location-card" style={{ background: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.12)', color: '#ffffff' }}>
                  <h4 className="location-title" style={{ color: '#ffffff' }}>
                    <MapPin size={18} style={{ color: 'var(--color-accent)' }} />
                    Chennai HSRP Plant
                  </h4>
                  <p className="location-address" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
                    S.No 21/1, Chettiyar Agaram Main Road, Karambakkam, Chennai - 600077
                  </p>
                  <a href="tel:+919619057777" className="location-phone" style={{ color: 'var(--color-accent)' }}>
                    +91 9619057777
                  </a>
                </div>

                <div className="location-card" style={{ background: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.12)', color: '#ffffff' }}>
                  <h4 className="location-title" style={{ color: '#ffffff' }}>
                    <MapPin size={18} style={{ color: 'var(--color-accent)' }} />
                    Noida Corporate Office
                  </h4>
                  <p className="location-address" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
                    701, 7th Floor, Tower-B, Noida One, Sector 62, Noida, UP - 201309
                  </p>
                  <a href="tel:+919560703785" className="location-phone" style={{ color: 'var(--color-accent)' }}>
                    +91 9560703785
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
