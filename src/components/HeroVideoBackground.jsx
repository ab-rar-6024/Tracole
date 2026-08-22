import React from 'react';

// Mounted once at the App level so it never unmounts/restarts when
// navigating between routes. Sits fixed behind all page content
// (z-index: -1) and only becomes visible where a page's own background
// is transparent (currently just HomePage's hero section) — every other
// page simply paints over it with its own opaque background.
const HeroVideoBackground = () => (
  <div className="global-hero-video-bg">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="hero-video"
      poster="/images/home/homerelf.png"
    >
      <source src="/video/video.mp4" type="video/mp4" />
      Your browser does not support HTML5 video playback.
    </video>
  </div>
);

export default HeroVideoBackground;
