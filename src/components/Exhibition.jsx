import React from "react";
import ArtworkList from "./ArtworkList";

const Exhibition = ({ exhibitionArtworks, onRemoveFromExhibition }) => {
  return (
    <div className="exhibition p-6">
      <h1 className="text-4xl font-bold text-center mb-6">My Exhibition</h1>
      <ArtworkList
        artworks={exhibitionArtworks}
        onRemoveFromExhibition={onRemoveFromExhibition}
        exhibitionArtworks={exhibitionArtworks}
        isExhibitionPage={true} /* on exhib page */
      />
    </div>
  );
};

export default Exhibition;