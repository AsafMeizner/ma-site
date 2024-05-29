import React from 'react';
import '../styles/TopBanner.css';

const TopBanner = () => {

  const isPortrait = window.screen.width < window.screen.height;

  return (
    <div className="top-banner">
      <img
        src="/bannerBackground.JPG"
        alt="Banner"
        className="banner-background-image"
      />
      <div className="img-overlay">
        <h1 className="banner-title">Makers Assemble #5951</h1>
        <p className="banner-subtitle">Makers Lead The Way</p>
        <img 
          src="/ma-logo.png" 
          alt="Team 5951 Logo" 
          style={{
            height: isPortrait? '30%' : 'auto',
            width: isPortrait? 'auto' : '30%',
          }}
        />
      </div>
    </div>
  );
};

export default TopBanner;