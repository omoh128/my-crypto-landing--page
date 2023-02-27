import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
        <h1>Crypto Landing</h1>
        <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </nav>
      </header>
  )
}

export default Header