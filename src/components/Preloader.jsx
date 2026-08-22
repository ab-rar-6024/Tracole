import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsDone(true), 400);
          return 100;
        }
        return prev + 15;
      });
    }, 60);

    return () => clearInterval(timer);
  }, []);

  if (isDone) return null;

  return (
    <div className={`preloader ${progress >= 100 ? 'fade-out' : ''}`}>
      <div className="preloader-glow"></div>
      <div className="preloader-brand">
        <div className="preloader-logo-ring">
          <div className="preloader-logo-card">
            <img
              src="/images/logo/logo.png"
              alt="Tracole Technologies"
              className="preloader-logo-img"
            />
          </div>
        </div>
        <div className="preloader-subtitle">Precision in Every Signal</div>
      </div>
      <div className="preloader-bar-bg">
        <div className="preloader-bar-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="preloader-percent">{Math.min(progress, 100)}%</div>
    </div>
  );
};

export default Preloader;
