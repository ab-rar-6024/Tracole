import React from 'react';
import { LazyMotion, domAnimation, m } from 'motion/react';
import { Pin } from 'lucide-react';
import './HowItWorksCards.css';

const Card = ({ number, title, description, colorTheme = 'blue', className = '', rotate = '' }) => {
  return (
    <div className={`hiw-card ${rotate} ${className}`}>
      <div className="hiw-card-frame">
        <Pin size={30} className={`hiw-pin hiw-pin-${colorTheme}`} />
        <div className={`hiw-card-body hiw-card-body-${colorTheme}`}>
          <span className={`hiw-card-number hiw-card-number-${colorTheme}`}>{number}</span>
          <h3 className="hiw-card-title">{title}</h3>
          <p className="hiw-card-desc">{description}</p>
        </div>
      </div>
    </div>
  );
};

const DEFAULT_CARD_POSITIONS = [
  { className: 'hiw-pos-1', rotate: 'hiw-rotate-pos' },
  { className: 'hiw-pos-2', rotate: 'hiw-rotate-neg' },
  { className: 'hiw-pos-3', rotate: 'hiw-rotate-pos' },
  { className: 'hiw-pos-4', rotate: 'hiw-rotate-neg' },
  { className: 'hiw-pos-5', rotate: 'hiw-rotate-pos' }
];

const HowItWorksCards = ({ features, className = '', stepPositions }) => {
  const data = features && features.length > 0 ? features : [];
  const positions = stepPositions || DEFAULT_CARD_POSITIONS;

  let height = 1130;
  if (data.length === 1) height = 400;
  else if (data.length === 2) height = 450;
  else if (data.length === 3) height = 800;
  else if (data.length === 4) height = 900;
  else height = 1130;

  return (
    <LazyMotion features={domAnimation}>
      <div className={`hiw-section ${className}`}>
        <div className="hiw-bg">
          <img
            src="https://images.unsplash.com/photo-1667489011615-3a78ea25584e?fm=jpg&q=80&w=2000&auto=format&fit=crop"
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className="hiw-bg-overlay"></div>
        <div className="hiw-container">
          <div className="hiw-layout" style={{ '--md-height': `${height}px` }}>
            {data.length > 1 && (
              <svg className="hiw-path-svg" viewBox={`0 0 1000 ${height}`} preserveAspectRatio="none">
                {(() => {
                  const pathD = data.reduce((acc, _, index) => {
                    if (index >= data.length - 1) return acc;
                    if (index === 0) return 'M 290 150 C 500 150, 550 270, 710 270';
                    if (index === 1) return acc + ' C 850 270, 500 350, 290 450';
                    if (index === 2) return acc + ' C 290 600, 550 720, 750 720';
                    if (index === 3) return acc + ' C 950 720, 500 800, 290 850';
                    return acc;
                  }, '');
                  return (
                    <m.path
                      d={pathD}
                      stroke="currentColor"
                      className="hiw-path-line"
                      strokeWidth="2"
                      strokeDasharray="8 6"
                      fill="none"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{ strokeDashoffset: -140 }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                  );
                })()}
              </svg>
            )}

            {data.map((step, index) => {
              const position = positions[index % positions.length];
              return (
                <Card
                  key={step.title}
                  number={`0${index + 1}`}
                  title={step.title}
                  description={step.description}
                  colorTheme={step.colorTheme || 'blue'}
                  rotate={position.rotate}
                  className={position.className}
                />
              );
            })}
          </div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default HowItWorksCards;
