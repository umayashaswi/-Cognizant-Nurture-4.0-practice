import React from 'react';
import Incrementer from './Incrementer';
import CurrencyConverter from './CurrencyConverter';
import './App.css';

function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ color: 'green' }}>Event Examples App</h1>

        <section style={{ marginBottom: 40 }}>
          <h2>1. Counter with Multiple Actions</h2>
          <Incrementer />
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2>2. Say Welcome</h2>
          <WelcomeButton message="welcome" />
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2>3. Synthetic OnPress</h2>
          <button
            onClick={() => alert('I was clicked')}
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            Click on me
          </button>
        </section>

        <section>
          <h2 style={{ color: 'darkgreen' }}>Currency Convertor</h2>
          <CurrencyConverter />
        </section>
    </div>
  );
}

const WelcomeButton = ({ message }) => {
  const sayWelcome = (msg) => {
    alert(`You have said: ${msg}`);
  };

  return (
    <button
      onClick={() => sayWelcome(message)}
      style={{ padding: '8px 16px', cursor: 'pointer' }}
    >
      Say Welcome
    </button>
  );
};

export default App;
