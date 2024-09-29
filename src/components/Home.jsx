import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = ({ onAddToExhibition, exhibitionArtworks }) => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedArtworks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/artworks/featured"
        );
        // Combine cma + aic
        const combinedArtworks = [
          ...response.data.clevelandMuseumArt,
          ...response.data.artInstituteChicago,
        ];
        setArtworks(combinedArtworks);
        setLoading(false);
      } catch (error) {
        setError("Failed to load featured artworks");
        setLoading(false);
      }
    };

    fetchFeaturedArtworks();
  }, []);

  const featuredArtworks = artworks.slice(0, 6);

  return (
    <div className="home">
      {/* splahs */}
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">
              Discover & Curate Your Favorite Artworks
            </h1>
            <Link
              to="/browse-art"
              className="bg-blue-400 text-white py-3 px-6 rounded-md text-lg hover:bg-blue-500 transition mt-10 inline-block"
            >
              Browse Art
            </Link>
          </div>
        </div>
      </div>

      {/* featured artworks */}
      <section className="my-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Featured Artworks
        </h2>
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {featuredArtworks.map((artwork) => (
              <div
                key={artwork.id}
                className="max-w-sm rounded overflow-hidden shadow-lg"
              >
                <img
                  src={artwork.image_url}
                  alt={artwork.title}
                  className="w-full h-60 object-contain"
                />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">{artwork.title}</h3>
                  <p className="text-gray-600 font-semibold mb-2">
                    {artwork.date}
                  </p>
                  <p className="text-gray-600">{artwork.artist}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-6">
          <Link
            to="/browse-art"
            className="text-blue-500 hover:underline text-lg"
          >
            View more artworks
          </Link>
        </div>
      </section>

      {/* create section */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Create Your Own Exhibition</h2>
        <p className="text-gray-600 mb-6">
          Choose from a vast collection of famous artworks and curate your
          personal exhibition.
        </p>
        <Link
          to="/browse-art"
          className="bg-blue-400 text-white py-3 px-6 rounded-md text-lg hover:bg-blue-500 transition"
        >
          Start
        </Link>
      </section>
    </div>
  );
};

export default Home;
