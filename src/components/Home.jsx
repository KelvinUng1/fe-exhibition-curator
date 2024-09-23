import React from 'react';
import ArtworkList from './ArtworkList';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import { Link } from 'react-router-dom';

const Home = ({ artworks, loading, error, onAddToExhibition, exhibitionArtworks }) => {
 
  const featuredArtworks = artworks.slice(0, 3); //get first 3 for now

  return (
    <div className="home">
      {/* Hero */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg)` }}>
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

      {/* Featured Artworks */}
      <section className="my-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Artworks</h2>
        <div className="flex justify-center space-x-4">
          {featuredArtworks.map(artwork => (
            <div key={artwork.id} className="max-w-sm rounded overflow-hidden shadow-lg">
              <img src={artwork.image_url} alt={artwork.title} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl">{artwork.title}</h3>
                <p className="text-gray-600">{artwork.artist}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/browse-art" className="text-blue-500 hover:underline text-lg">View more artworks</Link>
        </div>
      </section>

      {/* Create own exhib */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Create Your Own Exhibition</h2>
        <p className="text-gray-600 mb-6">Choose from a vast collection of famous artworks and curate your personal exhibition.</p>
        <Link to="/browse-art" className="bg-blue-400 text-white py-3 px-6 rounded-md text-lg hover:bg-blue-500 transition">
          Start
        </Link>
      </section>

      {/* Artwork List -maybe remove */}
      <section className="my-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Explore All Artworks</h2>
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        <ArtworkList
          artworks={artworks}
          onAddToExhibition={onAddToExhibition}
          exhibitionArtworks={exhibitionArtworks}
          isExhibitionPage={false}  /*  browseart/exhib logic */
        />
      </section>
    </div>
  );
};

export default Home;