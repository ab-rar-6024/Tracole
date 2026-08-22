import React, { useEffect, useRef } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PRODUCTS } from '../data/productsData';

gsap.registerPlugin(ScrollTrigger);

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Find product by id or slug or legacy route lookup
  const product = PRODUCTS.find(
    (p) => p.id === productId || p.slug === productId || p.legacyPath.toLowerCase().endsWith(productId?.toLowerCase() || '')
  ) || PRODUCTS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  useEffect(() => {
    const q = gsap.utils.selector(containerRef);
    const ctx = gsap.context(() => {
      // Banner entrance (above the fold — no scroll trigger needed)
      gsap.fromTo(q('.pd-banner-animate'),
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1 }
      );

      // Overview reveal
      gsap.fromTo(q('.pd-overview-animate'),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: q('.pd-main-section'),
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Staggered feature cards, smooth scroll-linked reveal
      gsap.fromTo(q('.pd-feature-card'),
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: q('.pd-features-list'),
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // CTA banner
      gsap.fromTo(q('.pd-cta-animate'),
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: q('.pd-cta-animate'),
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Sidebar image
      gsap.fromTo(q('.pd-sidebar-image'),
        { y: 40, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: q('.pd-main-section'),
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Sidebar spec card
      gsap.fromTo(q('.pd-sidebar-card'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          delay: 0.15,
          scrollTrigger: {
            trigger: q('.pd-main-section'),
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, [productId]);

  return (
    <div className="product-detail-page" ref={containerRef}>
      {/* Banner */}
      <section className="pd-banner" style={{
        color: '#ffffff',
        padding: '8rem 0 4rem 0',
        borderBottom: '3px solid var(--color-accent)'
      }}>
        {product.bgImage && (
          <div className="pd-banner-bg">
            <img src={product.bgImage} alt="" aria-hidden="true" />
          </div>
        )}
        <div className="pd-banner-overlay"></div>
        <div className="container pd-banner-content">
          <div className="pd-banner-animate">
            <button
              onClick={() => navigate('/products')}
              className="btn btn-secondary back-to-products-btn"
            >
              <ArrowLeft size={18} /> Back to Products
            </button>
          </div>
          <span className="section-subtitle pd-banner-animate" style={{ color: 'var(--color-accent)' }}>{product.category}</span>
          <h1 className="pd-banner-animate" style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.25rem)', color: '#ffffff', marginBottom: '1rem' }}>
            {product.title}
          </h1>
          <p className="pd-banner-animate" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', maxWidth: '780px', marginBottom: '1.5rem' }}>
            {product.description}
          </p>
          <div className="pd-banner-animate">
            <button
              onClick={() => navigate(`/checkout/${product.slug}`)}
              className="buy-now-btn"
            >
              Buy Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-spacing pd-main-section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'flex-start' }}>
            {/* Overview & Key Specifications */}
            <div>
              <h2 className="pd-overview-animate" style={{ fontSize: '1.75rem', marginBottom: '1.25rem', color: 'var(--color-primary)' }}>
                Product Overview
              </h2>
              <p className="pd-overview-animate" style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
                {product.overview}
              </p>

              <h3 className="pd-overview-animate" style={{ fontSize: '1.35rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                Key Technical Features & Compliance
              </h3>

              <div className="pd-features-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                {product.features?.map((feat, idx) => (
                  <div key={idx} className="pd-feature-card" style={{
                    display: 'flex',
                    gap: '1rem',
                    background: 'var(--color-bg-light)',
                    padding: '1.25rem 1.5rem',
                    borderRadius: 'var(--radius-sm)',
                    borderLeft: '4px solid var(--color-accent)'
                  }}>
                    <CheckCircle2 size={24} style={{ color: 'var(--color-accent-hover)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h4 style={{ fontSize: '1.05rem', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>{feat.title}</h4>
                      <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pd-cta-animate" style={{
                background: 'var(--color-primary)',
                color: '#ffffff',
                padding: '2.5rem',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.5rem'
              }}>
                <div>
                  <h4 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.5rem' }}>Need Pricing or Technical Datasheets?</h4>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-light)' }}>Our technical team provides customized quotes and tender specifications.</p>
                </div>
                <NavLink to="/contact" className="btn btn-primary">
                  Inquire Now
                  <ArrowRight size={18} />
                </NavLink>
              </div>
            </div>

            {/* Sidebar Visual & Spec Summary */}
            <div className="pd-sidebar-sticky" style={{ position: 'sticky', top: '100px' }}>
              <div className="pd-sidebar-image" style={{
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                marginBottom: '2rem',
                border: '1px solid var(--color-border)'
              }}>
                <img src={product.bannerImg || product.image} alt={product.title} style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
              </div>

              <div className="pd-sidebar-card" style={{
                background: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '1.75rem'
              }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={20} style={{ color: 'var(--color-accent-hover)' }} />
                  Compliance Highlights
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>
                    <span>Standard:</span>
                    <strong style={{ color: 'var(--color-primary)' }}>ISO 9001:2015</strong>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>
                    <span>Category:</span>
                    <strong style={{ color: 'var(--color-primary)' }}>{product.category}</strong>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>
                    <span>Testing:</span>
                    <strong style={{ color: 'var(--color-primary)' }}>ARAI / CIRT</strong>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Warranty:</span>
                    <strong style={{ color: 'var(--color-primary)' }}>Manufacturer Guarantee</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
