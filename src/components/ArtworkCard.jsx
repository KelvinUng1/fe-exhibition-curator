import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const ArtworkCard = ({ artwork, onAddToExhibition, onRemoveFromExhibition, isInExhibition, isExhibitionPage }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 hover:shadow-xl transition-shadow duration-300 relative flex flex-col h-full">
      {/* image */}
      <img src={artwork.image_url} alt={artwork.title} className="w-full h-auto" />
      
      {/* Card content */}
      <div className="px-6 py-4 flex-grow flex flex-col justify-between">
        <div>
          <div className="font-bold text-xl mb-2 flex justify-between items-center">
            {artwork.title}
            <Link to={`/artwork/${artwork.id}`} className="text-blue-500">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="text-blue-500 cursor-pointer ml-2"
              />
            </Link>
          </div>
          <p className="text-gray-600 text-sm">
            {artwork.artist} ({artwork.year})
          </p>
        </div>

        {/* Conditional button logic depending if on exhib orbrowse art page */}
        <div className="mt-4">
          {!isExhibitionPage ? (
            isInExhibition ? (
              <button
                disabled
                className="w-full bg-gray-500 text-[12px] text-white  py-2 px-4 rounded cursor-not-allowed"
              >
                Already in Exhibition
              </button>
            ) : (
              <button
                onClick={() => onAddToExhibition(artwork)}
                className="w-full bg-blue-500 hover:bg-blue-700 text-[12px] text-white  py-2 px-4 rounded"
              >
                Add to Exhibition
              </button>
            )
          ) : (
            <button
              onClick={() => onRemoveFromExhibition(artwork)}
              className="w-full bg-red-500 hover:bg-red-700 text-[12px] text-white py-2 px-4 rounded"
            >
              Remove from Exhibition
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
