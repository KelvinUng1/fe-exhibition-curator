import React from 'react';
import ArtworkList from './ArtworkList';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const BrowseArt = ({ artworks, loading, error, onAddToExhibition, exhibitionArtworks, searchKeyword }) => {
  
  const filteredArtworks = searchKeyword
    ? artworks.filter(artwork =>
        artwork.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        artwork.artist.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    : artworks;

  const totalResults = filteredArtworks.length; 

  return (
    <div className="browse-art p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Browse Art</h1>

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}

      
      {searchKeyword && (
        <div className="text-gray-700 text-lg mb-4">
          Showing {Math.min(filteredArtworks.length, 20)} of {totalResults} results for "{searchKeyword}"
        </div>
      )}

      <ArtworkList
        artworks={filteredArtworks}
        onAddToExhibition={onAddToExhibition}
        exhibitionArtworks={exhibitionArtworks}
        isExhibitionPage={false}  // not exhib page
      />
    </div>
  );
};

export default BrowseArt;