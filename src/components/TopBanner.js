import React from 'react';
import '../styles/TopBanner.css'

const TopBanner = () => {
  return (
    <div className="top-banner">
      <img src="/banner.png" alt="Banner" className="banner-image" />
      <h1>Your Text Here</h1>
    </div>
  );
};

export default TopBanner;
