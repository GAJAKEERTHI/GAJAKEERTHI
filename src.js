import React from 'react';
import './index.css';
import NavBar from './components/NavBar';
import MedicineInfo from './components/MedicineInfo';
import CompareSection from './components/CompareSection';
import FAQSection from './components/FAQSection';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <div className="container main-container">
        <MedicineInfo />
        <CompareSection />
        <FAQSection />
        <Highlights />
      </div>
      <Footer />
    </>
  );
}

export default App;
