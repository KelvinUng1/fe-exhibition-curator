import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';  

const Header = ({ onSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto p-6 flex items-center justify-between">
        

        {/* Hamburger Menu - mob */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>


        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="text-black hover:text-blue-600 transition-colors">
            <img src="src/assets/image-removebg-preview.png" alt="Logo" className="h-16 w-auto" />
          </Link>
        </div>


        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-lg font-semibold">
          <Link to="/" className="text-gray-700 hover:text-black transition-colors">Home</Link>
          <Link to="/browse-art" className="text-gray-700 hover:text-black transition-colors">Browse Art</Link>
          <Link to="/exhibition" className="text-gray-700 hover:text-black transition-colors">My Exhibition</Link>
        </nav>
        

        {/* SearchBar */}
        <div className="hidden md:block">
          <SearchBar onSearch={onSearch} />  
        </div>
      </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white h-screen w-full fixed top-0 left-0 p-6 z-40">
          <button onClick={toggleMenu} className="absolute top-6 right-6 text-white text-3xl">
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <nav className="mt-12 space-y-6 text-xl">
            <Link to="/" className="block text-white hover:text-gray-300" onClick={toggleMenu}>Home</Link>
            <Link to="/browse-art" className="block text-white hover:text-gray-300" onClick={toggleMenu}>Browse Art</Link>
            <Link to="/exhibition" className="block text-white hover:text-gray-300" onClick={toggleMenu}>My Exhibition</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

