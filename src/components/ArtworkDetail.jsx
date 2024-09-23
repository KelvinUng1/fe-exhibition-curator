import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  

const ArtworkDetail = ({ artworks }) => {
  const { id } = useParams();
  const navigate = useNavigate();  

  // Track caption or info is open 
  const [openSection, setOpenSection] = useState(null);
  const [infoSubSection, setInfoSubSection] = useState(null);  // sub-sections

  
  if (!artworks || artworks.length === 0) {
    return <div>Loading artwork details...</div>;
  }

  const artwork = artworks.find((art) => art.id.toString() === id);

  if (!artwork) return <div>Artwork not found</div>;

  // Toggle 
  const toggleMainSection = (section) => {
    setOpenSection(prevSection => prevSection === section ? null : section);  // If open, close,otherwise, open the selected one
  };

  // Toggle sub-sections
  const toggleSubSection = (section) => {
    setInfoSubSection(prevSection => prevSection === section ? null : section);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}  
        className="mb-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        ← Back
      </button>

      {/* pre- main layout--- image and caption/info buttons */}
      <div className="flex flex-col md:flex-row">
        {/* Artwork pic */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img 
            src={artwork.image_url} 
            alt={artwork.title} 
            className="max-w-full h-auto object-cover border border-gray-300 shadow-md rounded-lg"
          />
        </div>

        {/* artist+year */}
        <div className="md:w-1/2 md:ml-8">
          <h1 className="text-5xl font-bold mb-4">{artwork.title}</h1>
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold">{artwork.artist}</span> - {artwork.year}
          </p>

          {/* COLLAPSEABLE BUTTONS */}

          {/* caption BUTTON */}
          <button
            className="mb-4 w-full bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg shadow-sm flex justify-between items-center"
            onClick={() => toggleMainSection('caption')}
          >
            Caption <span>{openSection === 'caption' ? '▲' : '▼'}</span>
          </button>

          {/* Expanded caption infosection */}
          {openSection === 'caption' && (
            <div className="bg-gray-50 p-4 border-l-4 border-blue-500 rounded-lg shadow-inner mt-2">
              <p className="text-gray-700">{artwork.description}</p>
            </div>
          )}



          {/* Artwork Information BUTTON */}
          <button
            className="mb-4 w-full bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg shadow-sm flex justify-between items-center"
            onClick={() => toggleMainSection('info')}
          >
            Artwork Information <span>{openSection === 'info' ? '▲' : '▼'}</span>
          </button>




          {/* Expanded artwork infosection */}
          {openSection === 'info' && (
            <div className="bg-gray-50 p-4 border-l-4 border-blue-500 rounded-lg shadow-inner mt-2">
              {/* sub-section - details */}
              <button
                className="text-lg font-bold flex justify-between items-center w-full bg-gray-100 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-200"
                onClick={() => toggleSubSection('details')}
              >
                Details <span>{infoSubSection === 'details' ? '▲' : '▼'}</span>
              </button>
              {infoSubSection === 'details' && (
                <div className="p-4 bg-white border-l-4 border-blue-300 rounded-lg shadow-inner mt-2">
                  <p><strong>Artist:</strong> {artwork.artist}</p>
                  <p><strong>Medium:</strong> {artwork.medium}</p>
                  <p><strong>Dimensions:</strong> {artwork.dimensions}</p>
                  <p><strong>Collection:</strong> {artwork.collection}</p>
                  <p><strong>Acquisition:</strong> {artwork.acquisition}</p>
                  <p><strong>Reference:</strong> {artwork.reference}</p>
                </div>
              )}

              {/* sub-section - cata entry */}
              <button
                className="text-lg font-bold flex justify-between items-center w-full bg-gray-100 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-200 mt-4"
                onClick={() => toggleSubSection('catalogue')}
              >
                Catalogue Entry <span>{infoSubSection === 'catalogue' ? '▲' : '▼'}</span>
              </button>
              {infoSubSection === 'catalogue' && (
                <div className="p-4 bg-white border-l-4 border-blue-300 rounded-lg shadow-inner mt-2">
                  <p>{artwork.catalogue_entry}</p>
                </div>
              )}
            </div>
          )}

          {/* on display at: */}
          <div className="bg-white p-4 rounded-lg shadow-md mt-4">
            <h2 className="font-bold">Artwork can viewed at</h2>
            <p>Somewhere</p>
            <p className="text-green-600">FREE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;

