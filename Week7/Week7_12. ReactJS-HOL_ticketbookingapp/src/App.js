import React, { useState } from 'react';

const flights = [
  { id: 1, route: 'Mumbai → Delhi', price: 4500, time: '10:00 AM' },
  { id: 2, route: 'Bangalore → Hyderabad', price: 3200, time: '01:30 PM' },
  { id: 3, route: 'Chennai → Kolkata', price: 5000, time: '06:45 PM' },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [name, setName] = useState('');
  const [seats, setSeats] = useState(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setBookingConfirmed(false);
    setSelectedFlight(null);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setSelectedFlight(null);
    setBookingConfirmed(false);
    setName('');
    setSeats(1);
  };

  const handleBook = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Enter your name');
      return;
    }
    setBookingConfirmed(true);
  };

  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif', maxWidth: 700 }}>
      <h1>Ticket Booking App</h1>
      <div style={{ marginBottom: 12 }}>
        {isLoggedIn ? (
          <>
            <strong>Welcome back!</strong> <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <strong>Please sign up.</strong> <button onClick={handleLogin}>Login</button>
          </>
        )}
      </div>

      <section style={{ marginTop: 20 }}>
        <h2>Available Flights</h2>
        {flights.map((f) => (
          <div
            key={f.id}
            style={{
              border: '1px solid #ccc',
              padding: 10,
              borderRadius: 4,
              marginBottom: 8,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <div><strong>{f.route}</strong></div>
              <div>Departure: {f.time}</div>
              <div>Price: ₹{f.price.toLocaleString()}</div>
            </div>
            <div>
              <button
                onClick={() => {
                  if (isLoggedIn) {
                    setSelectedFlight(f);
                    setBookingConfirmed(false);
                  }
                }}
                disabled={!isLoggedIn}
                style={{
                  padding: '6px 12px',
                  cursor: isLoggedIn ? 'pointer' : 'not-allowed',
                }}
              >
                {isLoggedIn ? 'Select' : 'Login to Book'}
              </button>
            </div>
          </div>
        ))}
      </section>

      {isLoggedIn && selectedFlight && (
        <section style={{ marginTop: 20 }}>
          <h2>Book: {selectedFlight.route}</h2>
          {bookingConfirmed ? (
            <div style={{ padding: 12, border: '1px solid green', borderRadius: 4 }}>
              <p>
                {name}, your {seats} seat{seats > 1 ? 's' : ''} on <strong>{selectedFlight.route}</strong> for ₹
                {(selectedFlight.price * seats).toLocaleString()} is confirmed.
              </p>
            </div>
          ) : (
            <form onSubmit={handleBook} style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 400 }}>
              <div>
                <label>
                  Name:{' '}
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ padding: 4 }}
                  />
                </label>
              </div>
              <div>
                <label>
                  Seats:{' '}
                  <input
                    type="number"
                    min={1}
                    value={seats}
                    onChange={(e) => setSeats(Number(e.target.value))}
                    style={{ padding: 4, width: 60 }}
                  />
                </label>
              </div>
              <div>
                <button type="submit" style={{ padding: '8px 16px' }}>
                  Book for ₹{(selectedFlight.price * seats).toLocaleString()}
                </button>
              </div>
            </form>
          )}
        </section>
      )}

      {!isLoggedIn && (
        <p style={{ marginTop: 20, color: 'gray' }}>Login to select and book a flight.</p>
      )}
    </div>
  );
}

export default App;
