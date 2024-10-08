import React from "react";
import { Link } from "react-router-dom";

const ArtworkCard = ({
  artwork,
  onAddToExhibition,
  onRemoveFromExhibition,
  isInExhibition,
  isExhibitionPage,
}) => {
  return (
    <Link
      to={`/artwork/${artwork.source}/${artwork.id}`}
      className="max-w-md rounded overflow-hidden shadow-lg m-2 hover:shadow-2xl hover:scale-102 transition-transform transform duration-300 relative flex flex-col h-full"
    >
      {/* image section */}
      <img
        src={artwork.image_url}
        alt=""
        className="w-full h-60 object-contain"
      />

      {/* card content */}
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <div className="font-bold text-sm sm:text-sm md:text-lg lg:text-xl font-bold mb-2">
            {artwork.title}
          </div>
          <p className="font-semibold text-sm mb-2">
            {artwork.date ? `${artwork.date}` : ""}
          </p>

          <p className="text-sm text-gray-700">{artwork.artist}</p>
        </div>
      </div>

      {/* add/remove from exhib buttons */}
      <div className="mt-2">
        {!isExhibitionPage ? (
          isInExhibition ? (
            <button
              disabled
              className="w-full bg-gray-500 text-[12px] text-white py-2 px-2 rounded cursor-not-allowed"
            >
              Already in Exhibition
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                onAddToExhibition(artwork);
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-[12px] text-white py-2 px-2 rounded"
            >
              Add to Exhibition
            </button>
          )
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              onRemoveFromExhibition(artwork);
            }}
            className="w-full bg-red-600 hover:bg-red-700 text-[12px] text-white py-2 px-2 rounded"
          >
            Remove from Exhibition
          </button>
        )}
      </div>
    </Link>
  );
};

export default ArtworkCard;
