import React from 'react';
import ArtworkCard from './ArtworkCard';

const ArtworkList = ({ artworks, onAddToExhibition, onRemoveFromExhibition, exhibitionArtworks = [], isExhibitionPage = false }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {artworks.map((artwork) => (
        <ArtworkCard
          key={artwork.id}
          artwork={artwork}
          onAddToExhibition={onAddToExhibition}
          onRemoveFromExhibition={onRemoveFromExhibition}
          isInExhibition={exhibitionArtworks.some(item => item.id === artwork.id)}  // Check if art is in exhib
          isExhibitionPage={isExhibitionPage}  // Pass down if on the exhib page
        />
      ))}
    </div>
  );
};

export default ArtworkList;