import React from "react";
import ArtworkCard from "./ArtworkCard";

const ArtworkList = ({
  artworks,
  onAddToExhibition,
  onRemoveFromExhibition,
  exhibitionArtworks = [],
  isExhibitionPage = false,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {artworks.map((artwork) => (
        <ArtworkCard
          key={artwork.id}
          artwork={artwork}
          onAddToExhibition={onAddToExhibition}
          onRemoveFromExhibition={onRemoveFromExhibition}
          isInExhibition={exhibitionArtworks.some(
            (item) => item.id === artwork.id
          )} // check if art is in exhib
          isExhibitionPage={isExhibitionPage} // pass down if on the exhib page
          source={artwork.source}
        />
      ))}
    </div>
  );
};

export default ArtworkList;
