import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Exhibition Curator App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/browse-art">Browse Art</Link>
        <Link to="/exhibition">My Exhibition</Link>
      </nav>
    </header>
  );
};

export default Header;