import React from 'react';

export default function Header() {
    return (
      <header>
        <nav className="nav-header">
          <img src={require('./react.png')} className="header-img" alt='react-logo' />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }

