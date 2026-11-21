import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, ShieldCheck } from 'lucide-react';

const EntryGate = ({ onSelect }) => {
  const [closing, setClosing] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [mobVideoReady, setMobVideoReady] = useState(false);
  const [roadVideoReady, setRoadVideoReady] = useState(false);
  const mobVideoRef = useRef(null);
  const roadVideoRef = useRef(null);
  const navigate = useNavigate();

  const handleChoice = (path) => {
    setClosing(true);
    setTimeout(() => {
      if (path) navigate(path);
      onSelect();
    }, 650);
  };

  return (
    <div className={`entry-gate ${closing ? 'is-transitioning' : ''}`}>
      <div className="entry-gate-bg">
        <button
          type="button"
          className={`entry-gate-bg-half entry-gate-bg-left ${hovered === 'mobility' ? 'is-bright' : ''}`}
          onClick={() => handleChoice('/mobility')}
          onMouseEnter={() => setHovered('mobility')}
          onMouseLeave={() => setHovered(null)}
        >
          <video
            ref={mobVideoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/entry-gate/mobility-frame1.jpg"
            onPlaying={() => setMobVideoReady(true)}
            onLoadedData={() => {
              if (mobVideoRef.current) mobVideoRef.current.play().catch(() => {});
            }}
            className={`entry-gate-video ${mobVideoReady ? 'is-playing' : ''}`}
          >
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
          <video
            ref={roadVideoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/entry-gate/roadsafety-frame1.jpg"
            onPlaying={() => setRoadVideoReady(true)}
            onLoadedData={() => {
              if (roadVideoRef.current) roadVideoRef.current.play().catch(() => {});
            }}
            className={`entry-gate-video ${roadVideoReady ? 'is-playing' : ''}`}
          >
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
