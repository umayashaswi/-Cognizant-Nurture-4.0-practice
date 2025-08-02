import React, { useState } from 'react';

const Incrementer = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const sayHello = () => {
    alert('Hello! This is a static message.');
  };

  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 300 }}>
      <div style={{ fontSize: 24 }}>Counter: {count}</div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={handleIncrement} style={{ padding: '6px 12px', cursor: 'pointer' }}>
          Increment
        </button>
        <button onClick={handleDecrement} style={{ padding: '6px 12px', cursor: 'pointer' }}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Incrementer;
