import React from 'react';
import OfficeCard from './OfficeCard';

function App() {
  const singleOffice = {
    name: 'DBS',
    rent: 50000,
    address: 'Chennai',
    imageUrl: '/image1.jpeg'
  };


  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <header style={{ marginBottom: 24 }}>
        <h1>Office Space , At Affordable Range</h1>
      </header>
      <section style={{ marginBottom: 32 }}>
        <h2>Featured Office</h2>
        <OfficeCard office={singleOffice} />
      </section>
    </div>
  );
}

export default App;
