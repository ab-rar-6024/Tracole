import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowLeftRight } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/' || location.pathname === '/Home';
  const isCheckout = location.pathname.startsWith('/checkout');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`main-header floating ${!scrolled && isHome ? 'transparent' : 'scrolled'}`}>
      <div className="header-container">
        {/* Official Tracole Logo Image */}
        <NavLink to="/" className="brand-logo-wrapper">
          <div className="logo-img-container">
            <img 
              src="/images/logo/logo.png" 
              alt="Tracole Technologies Private Limited" 
              className="brand-logo-img" 
            />
          </div>
        </NavLink>

        {/* Desktop Navigation Links (centered) */}
        <nav className="main-nav">
          <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `nav-link ${isActive && isHome ? 'active' : ''}`}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Products
              </NavLink>
            </li>
            {!isCheckout && (
              <li className="mobile-cta-wrapper">
                <NavLink to="/mobility" className="vertical-switch-btn">
                  <ArrowLeftRight size={15} />
                  Mobility
                </NavLink>
              </li>
            )}
            {!isCheckout && (
              <li className="mobile-cta-wrapper">
                <NavLink to="/contact" className="header-cta-btn">
                  Contact
                </NavLink>
              </li>
            )}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="header-actions">
          {!isCheckout && (
            <NavLink to="/mobility" className="vertical-switch-btn desktop-cta">
              <ArrowLeftRight size={15} />
              Mobility
            </NavLink>
          )}

          {!isCheckout && (
            <NavLink to="/contact" className="header-cta-btn desktop-cta">
              Contact
            </NavLink>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
