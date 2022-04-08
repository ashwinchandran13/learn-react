import React from "react";
import ReactDOM from "react-dom";
import './style.css';

function Header() {
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

function MainContent() {
  return (
    <div className="main-content">
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>this is a test</li>
        <li>this is a test</li>
        <li>this is a test</li>
        <li>this is a test</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer-bar">
      <small>Chandran Development. All rights reserved.</small>
    </footer>
  );
}

function PageComponent() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<PageComponent />, document.getElementById("root"));