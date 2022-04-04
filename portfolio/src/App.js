import React, { useState } from 'react';
import './App.css';
import BootNav from './components/Bootnav';
import PortfolioBody from './components/portfolioBody';
import Footer from './components/footer';

function App() {

  const [currPage, setCurrPage] = useState('AboutMe');

  return (
    <div className="App">
      <BootNav currPage={currPage} setCurrPage={setCurrPage} />
      <PortfolioBody currPage={currPage} setCurrPage={setCurrPage} />
      <Footer />
    </div>
  );
}

export default App;