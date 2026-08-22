import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Target, Eye, ArrowRight, ShieldCheck } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GridDistortion from '../components/GridDistortion';
import HowItWorksCards from '../components/HowItWorksCards';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const q = gsap.utils.selector(containerRef);

    // Initial page fade-in
    gsap.fromTo(containerRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.6, ease: 'power2.out' }
    );

    // 1. Banner Entrance Animation
    gsap.fromTo(q('.about-banner-animate'),
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.95, ease: 'power3.out', stagger: 0.12 }
    );

    // 2. About us text & Image reveal
    gsap.fromTo(q('.about-info-text-animate'),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: q('.about-info-section'),
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Reveal image and do a zoom effect
    gsap.fromTo(q('.about-image-wrapper'),
      { y: 60, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: q('.about-info-section'),
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo(q('.about-image-inner'),
      { scale: 1.12 },
      {
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: q('.about-info-section'),
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );

    // 3. Short History — punchy scale/bounce header + alternating slide-in quotes
    gsap.fromTo(q('.history-header-animate'),
      { y: 24, opacity: 0, scale: 0.94 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: 'back.out(1.6)',
        stagger: 0.1,
        scrollTrigger: {
          trigger: q('.history-section'),
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // 4. Vision & Mission Cards
    gsap.fromTo(q('.philosophy-header-animate'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: q('.philosophy-section'),
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo(q('.philosophy-visual-wrapper'),
      { y: 50, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: q('.philosophy-cards-container'),
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo(q('.philosophy-card-left'),
      { x: -50, opacity: 0, scale: 0.96 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: q('.philosophy-cards-container'),
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo(q('.philosophy-card-right'),
      { x: 50, opacity: 0, scale: 0.96 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: q('.philosophy-cards-container'),
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    // 5. Support CTA
    gsap.fromTo(q('.cta-button-animate'),
      { scale: 0.92, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: q('.cta-section'),
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );

    return () => {
      // Kill all ScrollTriggers on unmount to prevent leaks and event duplications
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="about-page" ref={containerRef}>
      {/* Banner */}
      <section className="about-distortion-banner" style={{
        color: '#ffffff',
        padding: '11rem 0 6rem 0',
        borderBottom: '3px solid var(--color-accent)'
      }}>
        <div className="about-distortion-bg">
          <GridDistortion
            imageSrc="/images/gallery/corporate-building.jpeg"
            grid={12}
            mouse={0.2}
            strength={0.22}
            relaxation={0.92}
          />
        </div>
        <div className="about-distortion-overlay"></div>
        <div className="container about-distortion-content">
          <span className="section-subtitle about-banner-animate" style={{ color: 'var(--color-accent)' }}>Company Profile</span>
          <h1 className="about-banner-animate" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: '#ffffff', marginBottom: '1rem' }}>
            About Tracole Technologies
          </h1>
          <p className="about-banner-animate" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '720px' }}>
            Dedicated to illuminating roads and raising safety benchmarks across India through certified manufacturing and engineering excellence.
          </p>
        </div>
      </section>

      {/* Main Content & History */}
      <section className="section-spacing about-info-section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="section-subtitle about-info-text-animate">About Us</span>
              <h2 className="section-title about-info-text-animate">A Benchmark in Road Safety Manufacturing</h2>
              <p className="about-info-text-animate" style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                At Tracole Technologies Pvt. Ltd., we are committed to making our roads safer for everyone. Our range of road safety products is designed to enhance visibility, reduce accidents, and ultimately save lives. Whether you're a government agency, a construction company, a transportation authority, or an individual looking to improve road safety, we have the solutions you need. Tracole Technologies Pvt. Ltd. is an ISO 9001-2015 certified company for manufacturing various safety products such and have excellent experience in manufacturing, embossing of HSRP plates, Reflective Tape, TrafficJet Print System, Permanent Traffic Control Sheeting, Temporary Traffic Control Sheeting, Protective Overlay Films. Road safety products are essential components of a comprehensive strategy to reduce accidents, save lives, and create safer roadways for everyone. These tools and devices work together to enhance visibility, regulate traffic, and encourage responsible driving behavior, contributing to overall road safety.
              </p>
            </div>

            <div className="about-image-wrapper" style={{ perspective: '1000px' }}>
              <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img className="about-image-inner" src="/images/gallery/corporate-building.jpeg" alt="Tracole Technologies Corporate Office" style={{ width: '100%', height: '480px', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short History */}
      <section className="section-spacing history-section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-subtitle history-header-animate" style={{ justifyContent: 'center' }}>Short History</span>
            <h2 className="section-title history-header-animate">We Are Always Best</h2>
            <p className="section-description history-header-animate" style={{ margin: '0 auto' }}>
              "We Are A Creative Team For Your Dream Project"
            </p>
          </div>

        </div>

        <HowItWorksCards
          features={[
            {
              title: 'Reflective Tape Leadership',
              description: 'Our company is a leading supplier of road safety products, and we hold the exclusive distributorship for reflective tape in South India, ensuring that safety and visibility are our top priorities.',
              colorTheme: 'orange'
            },
            {
              title: 'TrafficJet Technology',
              description: 'We are proud to supply top-quality reflective tape and cutting-edge traffic jet technology to ensure the highest standards of road safety and traffic management.',
              colorTheme: 'blue'
            },
            {
              title: 'Permanent Signage',
              description: 'We specialize in supplying permanent traffic sign sheeting, delivering long-lasting and highly visible signage solutions for improved road safety.',
              colorTheme: 'purple'
            },
            {
              title: 'Protective Overlay',
              description: 'We excel in supplying protective overlay films, offering a crucial layer of defense to enhance the longevity and resilience of various surfaces and products.',
              colorTheme: 'orange'
            }
          ]}
        />
      </section>

      {/* Vision & Mission */}
      <section className="section-spacing philosophy-section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-subtitle philosophy-header-animate" style={{ justifyContent: 'center' }}>Core Philosophy</span>
            <h2 className="section-title philosophy-header-animate">Our Vision & Mission</h2>
            <p className="section-description philosophy-header-animate" style={{ margin: '0 auto' }}>
              Building a safer tomorrow through creative engineering, continuous product research, and unwavering commitment to quality.
            </p>
          </div>

          <div className="philosophy-layout">
            <div className="philosophy-visual-wrapper about-visual-wrapper">
              <div className="about-image-frame philosophy-image-frame">
                <img src="/images/gallery/reflective-lighttrails.jpg" alt="Illuminated Safer Roads" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="about-badge-card">
                <div className="about-badge-icon-wrap">
                  <span className="about-badge-pulse"></span>
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <div className="about-badge-title">Our Promise</div>
                  <div className="about-badge-desc">Zero Compromise on Safety & Quality</div>
                </div>
              </div>
            </div>

            <div className="philosophy-cards-container">
              <div className="philosophy-card-left philosophy-card">
                <div className="philosophy-icon-wrap philosophy-icon-accent">
                  <span className="philosophy-icon-ring"></span>
                  <Eye size={28} />
                </div>
                <h3 className="philosophy-card-title">VISION</h3>
                <p className="philosophy-card-desc">
                  "We dedicate ourselves to producing products that not only meet industry standards but redefine them, ensuring the safety of every journey, one reflective tape at a time."
                </p>
              </div>

              <div className="philosophy-card-right philosophy-card">
                <div className="philosophy-icon-wrap philosophy-icon-primary">
                  <span className="philosophy-icon-ring"></span>
                  <Target size={28} />
                </div>
                <h3 className="philosophy-card-title">MISSION</h3>
                <p className="philosophy-card-desc">
                  "Our vision is to be the trailblazing force behind a world where TrafficJet reflective tape doesn't just illuminate roads; it lights up the path to a safer, more secure future for all."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-spacing cta-section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="cta-button-animate">
            <NavLink to="/contact" className="btn btn-primary">
              Contact Our Support Team
              <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
