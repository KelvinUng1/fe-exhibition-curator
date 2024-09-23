import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white text-center p-4">
      <p>&copy; {new Date().getFullYear()} Art Exhibition Curator</p>
      <nav className="my-2">
        <a href="https://www.museumwebsite.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-gray-500 mx-2">Museum Website</a>
        <a href="https://www.universityartcollection.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-gray-500 mx-2">University Art Collection</a>
      </nav>
      <p>
        Powered by <a href="https://developer.museumapi.com" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-600">Museum API</a> &amp; <a href="https://developer.universityapi.com" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-600">University API</a>
      </p>
    </footer>
  );
};

export default Footer;