import React from 'react';
import './App.css';
import Header from '../Header/Header'
import BioPage from '../BioPage/BioPage'
import PorfolioSection from '../PortfolioSection/PortfolioSection'
import ContactInfo from '../ContactInfo/ContactInfo'

function App() {
  return (
    <div className="App">
      <Header/>
      <BioPage/>
      <PorfolioSection/>
      <ContactInfo/>
    </div>
  );
}

export default App;
