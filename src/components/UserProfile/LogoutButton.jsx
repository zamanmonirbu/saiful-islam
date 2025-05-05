
// File: src/components/LogoutButton.jsx
import React from 'react';

const LogoutButton = () => {
  const handleLogout = () => {
    // Handle logout functionality
    console.log('User logged out');
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 border border-red-40000 rounded hover:bg-red-500"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;