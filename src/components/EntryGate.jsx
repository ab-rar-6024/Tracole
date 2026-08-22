import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, ShieldCheck } from 'lucide-react';

const EntryGate = ({ onSelect }) => {
  const [closing, setClosing] = useState(false);
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const handleChoice = (path) => {
    setClosing(true);
    setTimeout(() => {
      if (path) navigate(path);
      onSelect();
    }, 450);
  };

  return (
    <div className={`entry-gate ${closing ? 'fade-out' : ''}`}>
      <div className="entry-gate-bg">
        <button
          type="button"
          className={`entry-gate-bg-half entry-gate-bg-left ${hovered === 'mobility' ? 'is-bright' : ''}`}
          onClick={() => handleChoice('/mobility')}
          onMouseEnter={() => setHovered('mobility')}
          onMouseLeave={() => setHovered(null)}
        >
          <video autoPlay loop muted playsInline poster="/images/mobility/automotive-engineering.jpg">
            <source src="/video/mobility-hero.mp4" type="video/mp4" />
          </video>
          <span className="entry-gate-half-content">
            <span className="entry-gate-icon">
              <Car size={26} />
            </span>
            <span className="entry-gate-label">Mobility</span>
            <span className="entry-gate-desc">Automotive engineering, connected vehicles &amp; cybersecurity</span>
          </span>
        </button>

        <button
          type="button"
          className={`entry-gate-bg-half entry-gate-bg-right ${hovered === 'roadSafety' ? 'is-bright' : ''}`}
          onClick={() => handleChoice('/road-safety')}
          onMouseEnter={() => setHovered('roadSafety')}
          onMouseLeave={() => setHovered(null)}
        >
          <video autoPlay loop muted playsInline poster="/images/home/homerelf.png">
            <source src="/video/video.mp4" type="video/mp4" />
          </video>
          <span className="entry-gate-half-content">
            <span className="entry-gate-icon">
              <ShieldCheck size={26} />
            </span>
            <span className="entry-gate-label">Road Safety</span>
            <span className="entry-gate-desc">Signage, reflective sheeting &amp; TrafficJet systems</span>
          </span>
        </button>
      </div>

      <div className="entry-gate-divider"></div>

      <div className="entry-gate-brand">
        <h2 className="entry-gate-title">What brings you to Tracole?</h2>
        <p className="entry-gate-subtitle">Choose a path to continue</p>
      </div>

      <div className="entry-gate-glow"></div>
      <div className="entry-gate-circle">
        <img src="/images/logo/logo.png" alt="Tracole Technologies" className="entry-gate-logo" />
      </div>
    </div>
  );
};

export default EntryGate;
