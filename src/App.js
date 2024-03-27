import React from 'react';
import TopBanner from './components/TopBanner';
import ThreeDModel from './components/ThreeDModel';
import TextImages from './components/TextImages';
import ContactUs from './components/ContactUs';
import Sponsors from './components/Sponsors';
import OurTeam from './components/OurTeam';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBanner />
      <ThreeDModel />
      <TextImages />
      <OurTeam />
      <Sponsors />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
