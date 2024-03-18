import React from 'react';
import TopBanner from './components/TopBanner';
import ThreeDModel from './components/ThreeDModel';
import TextImages from './components/TextImages';
import ContactUs from './components/ContactUs';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBanner />
      <ThreeDModel />
      <TextImages />
      <ContactUs />
    </div>
  );
}

export default App;
