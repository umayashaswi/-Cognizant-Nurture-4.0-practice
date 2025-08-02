import React from 'react';

const LoginButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '8px 16px', cursor: 'pointer' }}>
      Login
    </button>
  );
};

export default LoginButton;
