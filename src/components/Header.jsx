import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import logo from '../assets/src/assets/image-removebg-preview.png';


const Header = ({ onSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto p-6 flex items-center justify-between">
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src= {logo}
            alt="Exhibition Curator Logo"
            className="h-16 w-auto"
          />
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleSearch}
            className="text-gray-700 focus:outline-none"
            aria-label="Open search"
          >
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
        </div>

        <nav className="hidden md:flex space-x-6 text-lg font-semibold">
          <Link
            to="/"
            className="text-gray-800 hover:text-black transition-colors"
          >
            Home
          </Link>
          <Link
            to="/browse-art"
            className="text-gray-800 hover:text-black transition-colors"
          >
            Browse Art
          </Link>
          <Link
            to="/exhibition"
            className="text-gray-800 hover:text-black transition-colors"
          >
            My Exhibition
          </Link>
        </nav>

        <div className="hidden md:block">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white h-screen w-full fixed top-0 left-0 p-6 z-40">
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-white text-3xl"
            aria-label="Close mobile menu"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <nav className="mt-12 space-y-6 text-xl">
            <Link
              to="/"
              className="block text-white hover:text-gray-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/browse-art"
              className="block text-white hover:text-gray-300"
              onClick={toggleMenu}
            >
              Browse Art
            </Link>
            <Link
              to="/exhibition"
              className="block text-white hover:text-gray-300"
              onClick={toggleMenu}
            >
              My Exhibition
            </Link>
          </nav>
        </div>
      )}

      {searchOpen && (
        <div className="md:hidden bg-white fixed top-0 left-0 w-full p-6 z-50">
          <button
            onClick={toggleSearch}
            className="absolute top-4 right-4 text-gray-700 text-2xl z-50"
            aria-label="Close search bar"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <div className="p-4">
            <SearchBar onSearch={onSearch} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
