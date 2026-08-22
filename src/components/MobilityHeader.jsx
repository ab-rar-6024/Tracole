import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowLeftRight } from 'lucide-react';
import { SOLUTION_TYPES } from '../data/mobilitySolutions';

const MobilityHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const hash = location.hash.replace('#', '');
  const isSolutionActive = hash === 'solution' || SOLUTION_TYPES.some((sol) => sol.id === hash);
  const isHome = location.pathname === '/mobility' && !isSolutionActive;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setSolutionOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSolutionSelect = (id) => {
    setSolutionOpen(false);
    setMobileMenuOpen(false);
    navigate(`/mobility#${id}`);
  };

  return (
    <header className={`main-header floating ${!scrolled && isHome ? 'transparent' : 'scrolled'}`}>
      <div className="header-container">
        <NavLink to="/mobility" className="brand-logo-wrapper">
          <div className="logo-img-container">
            <img
              src="/images/logo/logo.png"
              alt="Tracole Technologies Private Limited"
              className="brand-logo-img"
            />
          </div>
        </NavLink>

        <nav className="main-nav">
          <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <li>
              <NavLink
                to="/mobility"
                className={() => `nav-link ${isHome ? 'active' : ''}`}
                end
              >
                Home
              </NavLink>
            </li>
            <li className="solution-dropdown" ref={dropdownRef}>
              <button
                type="button"
                className={`nav-link solution-trigger ${solutionOpen || isSolutionActive ? 'active' : ''}`}
                onClick={() => setSolutionOpen((open) => !open)}
                aria-expanded={solutionOpen}
              >
                Solution
                <ChevronDown size={15} className={`solution-chevron ${solutionOpen ? 'open' : ''}`} />
              </button>

              <ul className={`solution-dropdown-panel ${solutionOpen ? 'open' : ''}`}>
                {SOLUTION_TYPES.map((sol) => {
                  const SolIcon = sol.icon;
                  return (
                    <li key={sol.id}>
                      <button type="button" className="solution-dropdown-item" onClick={() => handleSolutionSelect(sol.id)}>
                        <SolIcon size={16} />
                        {sol.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="mobile-cta-wrapper">
              <NavLink to="/" className="vertical-switch-btn">
                <ArrowLeftRight size={15} />
                Road Safety
              </NavLink>
            </li>
            <li className="mobile-cta-wrapper">
              <NavLink to="/mobility/contact" className="header-cta-btn">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <NavLink to="/" className="vertical-switch-btn desktop-cta">
            <ArrowLeftRight size={15} />
            Road Safety
          </NavLink>

          <NavLink to="/mobility/contact" className="header-cta-btn desktop-cta">
            Contact
          </NavLink>

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

export default MobilityHeader;
