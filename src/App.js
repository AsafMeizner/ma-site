import React from 'react';
import TopBanner from './components/TopBanner';
import RobotModel from './components/RobotModel';
import TextImages from './components/TextImages';
import ContactUs from './components/ContactUs';
import Sponsors from './components/Sponsors';
import OurTeam from './components/OurTeam';
import Footer from './components/Footer';
import GalleryOne from './components/galleryOne';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBanner />
      <RobotModel />
      <TextImages />
      <OurTeam />
      <GalleryOne />
      <Sponsors />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
