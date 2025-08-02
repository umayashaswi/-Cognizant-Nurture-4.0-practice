import React, { useState } from 'react';

const CurrencyConverter = () => {
  const INR_TO_EURO_RATE = 90;
  const EURO_TO_INR_RATE = 1 / INR_TO_EURO_RATE;

  const [amountINR, setAmountINR] = useState('');
  const [amountEuro, setAmountEuro] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const inr = parseFloat(amountINR);
    if (isNaN(inr)) {
      alert('Please enter a valid INR amount');
      return;
    }
    const converted = inr / INR_TO_EURO_RATE;
    setAmountEuro(converted.toFixed(2));
    setResult(`Converting to Euro Amount is ${converted.toFixed(2)}`);
    alert(`Converting to Euro Amount is ${converted.toFixed(2)}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div>
        <label>
          Amount (INR):{' '}
          <input
            type="text"
            value={amountINR}
            onChange={(e) => setAmountINR(e.target.value)}
            placeholder="e.g., 7200"
            style={{ padding: 4, width: '150px' }}
          />
        </label>
      </div>
      <div>
        <label>
          Currency: <input type="text" value="Euro" readOnly style={{ padding: 4, width: '150px' }} />
        </label>
      </div>
      <div>
        <button type="submit" style={{ padding: '6px 12px', cursor: 'pointer' }}>
          Convert
        </button>
      </div>
      {result && (
        <div style={{ marginTop: 12, fontWeight: 'bold' }}>
          {result}
        </div>
      )}
      {amountEuro && (
        <div>
          <small>
            = €{amountEuro} (1 Euro = ₹{INR_TO_EURO_RATE})
          </small>
        </div>
      )}
    </form>
  );
};

export default CurrencyConverter;
