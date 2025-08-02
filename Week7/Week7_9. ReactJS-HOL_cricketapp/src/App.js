import React from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  const flag = true; 
  return (
    <div style={{ textAlign: 'center' }}>
      <h1> Cricket App</h1>
      {flag ? (
        <>
          <ListofPlayers />
          <IndianPlayers />
        </>
      ) : (
        <p>Flag is false. No components to display.</p>
      )}
    </div>
  );
}

export default App;
