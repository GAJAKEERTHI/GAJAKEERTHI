import React from 'react';

function NavBar() {
  return (
    <header>
      <div className="container header-container">
        <h2>Medingen</h2>
        <nav>
          <a href="#">Home</a>
          <a href="#">Offers</a>
          <a href="#">Notifications</a>
          <a href="#">Profile</a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
