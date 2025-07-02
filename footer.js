import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-column">
          <h4>Website</h4>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">How it works</a>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>
        <div className="footer-column">
          <h4>More</h4>
          <a href="#">Help Center</a>
          <a href="#">Become Member</a>
          <a href="#">Events</a>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <p>Medingen</p>
          <p>Helping you make better healthcare decisions.</p>
        </div>
      </div>
      <p className="footer-bottom">©2024 Medingen. All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
