import React from 'react';

const LogoutButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '8px 16px', cursor: 'pointer' }}>
      Logout
    </button>
  );
};

export default LogoutButton;
