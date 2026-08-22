import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const ProductSpotlight = ({ product }) => (
  <div className="rover-spotlight" key={product.id}>
    <div className="rover-spotlight-media">
      <img src={product.image} alt={product.tagline} />
      {product.badge && (
        <span className="rover-spotlight-badge">
          <Sparkles size={13} />
          {product.badge}
        </span>
      )}
    </div>

    <div className="rover-spotlight-content">
      <span className="section-subtitle" style={{ color: 'var(--color-accent)' }}>{product.kicker}</span>
      <h3 className="rover-spotlight-title">{product.name}</h3>
      <p className="rover-spotlight-tagline">{product.tagline}</p>
      <p className="rover-spotlight-desc">{product.description}</p>

      <div className="rover-spotlight-chips">
        {product.capabilities.map((cap) => (
          <span key={cap} className="rover-chip">
            <CheckCircle2 size={14} />
            {cap}
          </span>
        ))}
      </div>

      {product.link && (
        <NavLink to={product.link} className="btn btn-primary" style={{ marginTop: '1.5rem', alignSelf: 'flex-start' }}>
          {product.linkLabel || 'Learn More'}
          <ArrowRight size={17} />
        </NavLink>
      )}
    </div>
  </div>
);

export default ProductSpotlight;
