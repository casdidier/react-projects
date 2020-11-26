import React from 'react';

// eslint-disable-next-line react/prop-types
const Header = ({ text }) => {
  return (
    <div>
      <header className="App-header">
        <h2>{text}</h2>
      </header>
    </div>
  );
};

export default Header;
