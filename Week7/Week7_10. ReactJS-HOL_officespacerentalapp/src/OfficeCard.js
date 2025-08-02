import React from 'react';

const OfficeCard = ({ office }) => {
  const { name, rent, address, imageUrl } = office;
  const rentStyle = {
    color: rent < 60000 ? 'red' : 'green',
    fontWeight: 'bold'
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: 8,
      padding: 16,
      marginBottom: 12,
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      maxWidth: 600
    }}>
      <div style={{ flexShrink: 0 }}>
        <img
          src={imageUrl}
          alt={`${name} office`}
          style={{ width: 140, height: 100, objectFit: 'cover', borderRadius: 4 }}
        />
      </div>
      <div>
        <h3 style={{ margin: '4px 0' }}>{name}</h3>
        <p style={{ margin: '4px 0' }}><strong>Address:</strong> {address}</p>
        <p style={{ margin: '4px 0' }}>
          <strong>Rent:</strong>{' '}
          <span style={rentStyle}>₹{rent.toLocaleString()}</span>
        </p>
      </div>
    </div>
  );
};

export default OfficeCard;
