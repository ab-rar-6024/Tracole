import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Facebook, Twitter } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/productsData';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand Info with Official Logo Image */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{
                background: '#ffffff',
                padding: '0.4rem 0.85rem',
                borderRadius: '6px',
                display: 'inline-block',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}>
                <img 
                  src="/images/logo/logo.png" 
                  alt="Tracole Technologies Private Limited" 
                  style={{ height: '36px', width: 'auto', display: 'block' }} 
                />
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.35rem', color: 'rgba(255,255,255,0.75)' }}>
              ISO 9001:2015 certified manufacturer of High Security Registration Plates (HSRP), Reflective Sheeting Solutions, and TrafficJet printing technology in India.
            </p>
            <div style={{ display: 'flex', gap: '0.65rem' }}>
              <a href="#" style={{ width: '34px', height: '34px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                <Linkedin size={16} />
              </a>
              <a href="#" style={{ width: '34px', height: '34px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                <Facebook size={16} />
              </a>
              <a href="#" style={{ width: '34px', height: '34px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="footer-col-title">Our Solutions</h4>
            <ul className="footer-links">
              <li><NavLink to="/products/hsrp">High Security Registration Plate</NavLink></li>
              <li><NavLink to="/products/reflective-tape">Reflective Tape Solutions</NavLink></li>
              <li><NavLink to="/products/traffic-jet">TrafficJet Print System</NavLink></li>
              <li><NavLink to="/products/temporary">Temporary Control Sheeting</NavLink></li>
              <li><NavLink to="/products/permanent">Permanent Sign Sheeting</NavLink></li>
              <li><NavLink to="/products/protective">Protective Overlay Films</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Quick Links & Policies */}
          <div>
            <h4 className="footer-col-title">Quick Links & Policies</h4>
            <ul className="footer-links">
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/products">Product Portfolio</NavLink></li>
              <li><NavLink to="/contact">Contact Support</NavLink></li>
              <li><NavLink to="/privacy">Policy</NavLink></li>
              <li><NavLink to="/privacy">Terms & Conditions</NavLink></li>
              <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
              <li><NavLink to="/privacy">Refund & Return Policy</NavLink></li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 className="footer-col-title">Headquarters & Plant</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <MapPin size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>HSRP Plant:</strong> Chettiyar Agaram Main Road, Chennai - 600077
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <MapPin size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>Corporate Office:</strong> 701, Tower-B, Noida One, Sector 62, Noida - 201309
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                <a href={`tel:${COMPANY_DETAILS.hsrpPhone}`} style={{ color: '#ffffff', fontWeight: 600 }}>
                  {COMPANY_DETAILS.hsrpPhone}
                </a>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Mail size={16} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                <a href={`mailto:${COMPANY_DETAILS.email}`} style={{ color: '#ffffff', fontWeight: 600 }}>
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Tracole Technologies Pvt. Ltd. All Rights Reserved.</p>
          <p style={{ opacity: 0.75 }}>High Visibility. Safer Roads. Trusted Quality.</p>
        </div>
      </div>

      {/* Subfooter */}
      <div className="sub-footer">
        <div className="container sub-footer-content">
          <span className="sub-footer-copyright">© {new Date().getFullYear()} AIKONIK</span>
          <span className="sub-footer-divider">|</span>
          <div className="sub-footer-contact">
            <span className="sub-footer-label">Contact:</span>
            <a
              href="https://wa.me/919042272801"
              target="_blank"
              rel="noopener noreferrer"
              className="sub-footer-whatsapp-link"
            >
              <svg
                className="sub-footer-wa-icon"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>9042272801</span>
            </a>
            <span className="sub-footer-slash">/</span>
            <a
              href="tel:+918122922605"
              className="sub-footer-phone-link"
            >
              8122922605
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
