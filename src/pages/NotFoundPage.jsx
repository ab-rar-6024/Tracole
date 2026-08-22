import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, ArrowRight, Compass, Car, ShieldCheck, Radio } from 'lucide-react';

const NotFoundPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="notfound-page">
      <section className="notfound-section">
        <div className="notfound-glow"></div>

        <div className="container notfound-content">
          <div className="notfound-number">
            <span className="notfound-digit notfound-digit-text">4</span>
            <span className="notfound-digit notfound-sign-wrap">
              <span className="notfound-sign-ring"></span>
              <img
                src="/images/gallery/temporary-roadclosed.jpg"
                alt="Road Closed sign"
                className="notfound-sign-img"
              />
            </span>
            <span className="notfound-digit notfound-digit-text">4</span>
          </div>

          <span className="section-subtitle notfound-reveal" style={{ justifyContent: 'center', animationDelay: '0.55s' }}>
            Error 404
          </span>
          <h1 className="notfound-title notfound-reveal" style={{ animationDelay: '0.65s' }}>
            Looks Like You Took a Wrong Turn
          </h1>
          <p className="notfound-desc notfound-reveal" style={{ animationDelay: '0.75s' }}>
            The page you're looking for has been moved, renamed, or never existed.
            Let's get you back on a road we've actually mapped.
          </p>

          <div className="notfound-actions notfound-reveal" style={{ animationDelay: '0.85s' }}>
            <NavLink to="/" className="btn btn-primary">
              <Home size={18} />
              Back to Home
            </NavLink>
            <NavLink to="/contact" className="btn btn-outline">
              Contact Support
              <ArrowRight size={17} />
            </NavLink>
          </div>

          <div className="notfound-quicklinks">
            <span className="notfound-quicklinks-label notfound-reveal" style={{ animationDelay: '0.95s' }}>
              <Compass size={16} />
              Or explore
            </span>
            <NavLink to="/mobility" className="notfound-chip notfound-reveal" style={{ animationDelay: '1s' }}>
              <Car size={15} />
              Mobility
            </NavLink>
            <NavLink to="/road-safety" className="notfound-chip notfound-reveal" style={{ animationDelay: '1.05s' }}>
              <ShieldCheck size={15} />
              Road Safety
            </NavLink>
            <NavLink to="/mobility#solution" className="notfound-chip notfound-reveal" style={{ animationDelay: '1.1s' }}>
              <Radio size={15} />
              IoT
            </NavLink>
            <NavLink to="/products" className="notfound-chip notfound-reveal" style={{ animationDelay: '1.15s' }}>
              Products
            </NavLink>
          </div>
        </div>

        <div className="notfound-road" aria-hidden="true">
          <div className="notfound-road-lines"></div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
