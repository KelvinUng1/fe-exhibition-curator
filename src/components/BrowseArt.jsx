import React, { useState, useEffect } from "react";
import ArtworkList from "./ArtworkList";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const BrowseArt = ({
  onAddToExhibition,
  exhibitionArtworks,
  searchKeyword,
}) => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/artworks/browse"
        );
        const data = await response.json();

        const combinedArtworks = [
          ...data.artInstituteChicago.map((artwork) => ({
            ...artwork,
            source: "aic",
          })),
          ...data.clevelandMuseumArt.map((artwork) => ({
            ...artwork,
            source: "cma",
          })),
        ];

        setArtworks(combinedArtworks);
      } catch (error) {
        setError("Failed to load artworks");
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, []);

  const filteredArtworks = searchKeyword
    ? artworks.filter(
        (artwork) =>
          artwork.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          artwork.artist.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    : artworks;

  return (
    <div className="browse-art p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Browse Art</h1>

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}

      <ArtworkList
        artworks={filteredArtworks}
        onAddToExhibition={onAddToExhibition}
        exhibitionArtworks={exhibitionArtworks}
        isExhibitionPage={false} //not exhib page
      />
    </div>
  );
};

export default BrowseArt;