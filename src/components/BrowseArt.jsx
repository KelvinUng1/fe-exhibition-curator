import React, { useState, useEffect } from "react";
import ArtworkList from "./ArtworkList";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";
import { useSearchParams, useNavigate } from "react-router-dom";

const BrowseArt = ({ onAddToExhibition, exhibitionArtworks }) => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit] = useState(9);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchKeyword = searchParams.get("query") || "";
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const [page, setPage] = useState(currentPage);
  const [totalPages, setTotalPages] = useState(10);

  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/api/artworks";

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${BASE_URL}/browse?page=${page}&limit=${limit}&search=${searchKeyword}`
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
        setTotalPages(10);
      } catch (error) {
        setError("Failed to load artworks");
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page, searchKeyword]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      setSearchParams({ query: searchKeyword, page: newPage });
    }
  };

  const renderPageButtons = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, page - 2);
    const endPage = Math.min(totalPages, page + 2);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 mx-1 ${
            i === page ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
          } rounded`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="browse-art p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Browse Art</h1>

      {searchKeyword && (
        <p className="text-xl text-center mb-4">
          Results for <strong>"{searchKeyword}"</strong>
        </p>
      )}

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}

      <ArtworkList
        artworks={artworks}
        onAddToExhibition={onAddToExhibition}
        exhibitionArtworks={exhibitionArtworks}
        isExhibitionPage={false}
      />

      {/* pagination controls */}
      <div className="pagination-controls flex justify-center items-center mt-6">
        <button
          onClick={() => handlePageChange(page - 1)}
          className={`px-3 py-1 mx-1 bg-gray-200 rounded ${
            page === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={page === 1}
        >
          Previous
        </button>

        {renderPageButtons()}

        <button
          onClick={() => handlePageChange(page + 1)}
          className={`px-3 py-1 mx-1 bg-gray-200 rounded ${
            page === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BrowseArt;
