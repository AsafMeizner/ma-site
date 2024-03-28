import React from 'react';
import TopBanner from './components/TopBanner';
import ThreeDModel from './components/ThreeDModel';
import TextImages from './components/TextImages';
import ContactUs from './components/ContactUs';
import Sponsors from './components/Sponsors';
import OurTeam from './components/OurTeam';
import Footer from './components/Footer';
import './App.css';

import GalleryOne from './components/galleryOne';
// import GalleryTwo from './components/galleryTwo';

function App() {
  return (
    <div className="App">
      <TopBanner />
      <ThreeDModel />
      <TextImages />
      <OurTeam />
      <GalleryOne />
      <Sponsors />
      <ContactUs />
      <Footer />
      {/* <GalleryTwo /> */}
    </div>
  );
}

export default App;
