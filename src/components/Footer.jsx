import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <div className="container mx-auto">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} Art Exhibition Curator.
        </p>

        <nav className="mb-4 text-sm">
          <a
            href="https://www.artic.edu"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-gray-500 mx-2"
          >
            Art Institute of Chicago
          </a>
          <a
            href="https://www.clevelandart.org"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-gray-500 mx-2"
          >
            Cleveland Museum of Art
          </a>
        </nav>

        <p className="text-sm">
          Powered by
          <br></br>
          <a
            href="https://api.artic.edu"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            {" "}
            Art Institute of Chicago API
          </a>
          <br></br>
          <a
            href="https://openaccess-api.clevelandart.org"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            {" "}
            Cleveland Museum of Art API
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
