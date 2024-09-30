import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const ArtworkDetail = () => {
  const { id, source } = useParams();
  const navigate = useNavigate();

  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // collapsible sections state
  const [openSection, setOpenSection] = useState(null);
  //sub sections
  const [infoSubSection, setInfoSubSection] = useState(null);

  // fetch
  useEffect(() => {
    const fetchArtworkDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://be-exhibition-curator.onrender.com/api/artworks/${source}/${id}`
        );
        const data = await response.json();
        setArtwork(data);
      } catch (error) {
        setError("Failed to load artwork details");
      } finally {
        setLoading(false);
      }
    };
    fetchArtworkDetails();
  }, [id, source]); // dependancy - id/source

  // toggle main section
  const toggleMainSection = (section) => {
    setOpenSection((prevSection) => (prevSection === section ? null : section));
  };

  // toggle sub-section
  const toggleSubSection = (section) => {
    setInfoSubSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!artwork) return <div>No artwork found</div>;

  // sanitize
  const renderDescription = () => {
    const description =
      artwork.short_description ||
      artwork.description ||
      "No description available";
    const sanitizedDescription = DOMPurify.sanitize(description);
    return { __html: sanitizedDescription };
  };

  const renderCatalogueEntry = () => {
    const catalogueEntry =
      artwork.catalogue_entry || "No catalogue entry available";
    const sanitizedCatalogueEntry = DOMPurify.sanitize(catalogueEntry);
    return { __html: sanitizedCatalogueEntry };
  };

  return (
    <div className="container mx-auto p-6">
      {/* back button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        ← Back
      </button>

      {/* main layout: image and info */}
      <div className="flex flex-col md:flex-row">
        {/* image */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={artwork.image_url || "Image Not Available"}
            alt={artwork.title || "Unknown Title"}
            className="max-w-full h-auto object-cover border border-gray-300 shadow-md rounded-lg"
          />
        </div>

        {/* artwork info */}
        <div className="md:w-1/2 md:ml-8">
          <h1 className="text-3xl font-bold mb-4">
            {artwork.title || "Untitled"}
          </h1>
          <p className="font-semibold text-base text-gray-700 mb-4">
            {artwork.date || "Unknown Date"}
          </p>
          <p className="text-base text-gray-700 mb-4">
            {artwork.artist || "Unknown Artist"}
          </p>

          {/* collapsible Section: caption */}
          <button
            className="mb-4 w-full bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg shadow-sm flex justify-between items-center"
            onClick={() => toggleMainSection("caption")}
          >
            Caption <span>{openSection === "caption" ? "▲" : "▼"}</span>
          </button>
          {openSection === "caption" && (
            <div
              className="bg-gray-50 p-4 border-l-4 border-blue-500 rounded-lg shadow-inner mt-2"
              dangerouslySetInnerHTML={renderDescription()} // Render sanitized HTML content
            />
          )}

          {/* collapsible section: artwork information */}
          <button
            className="mb-4 w-full bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg shadow-sm flex justify-between items-center"
            onClick={() => toggleMainSection("info")}
          >
            Artwork Information{" "}
            <span>{openSection === "info" ? "▲" : "▼"}</span>
          </button>
          {openSection === "info" && (
            <div className="bg-gray-50 p-4 border-l-4 border-blue-500 rounded-lg shadow-inner mt-2">
              {/* sub-section: details */}
              <button
                className="text-lg font-bold flex justify-between items-center w-full bg-gray-100 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-200"
                onClick={() => toggleSubSection("details")}
              >
                Details <span>{infoSubSection === "details" ? "▲" : "▼"}</span>
              </button>
              {infoSubSection === "details" && (
                <div className="p-4 bg-white border-l-4 border-blue-300 rounded-lg shadow-inner mt-2">
                  <p>
                    <strong>Artist:</strong>{" "}
                    {artwork.artist || "Unknown Artist"}
                  </p>
                  <p>
                    <strong>Medium:</strong>{" "}
                    {artwork.medium || "Unknown Medium"}
                  </p>
                  <p>
                    <strong>Date:</strong> {artwork.date || "Unknown Date"}
                  </p>
                </div>
              )}

              {/* sub-section: catalogue entry */}
              <button
                className="text-lg font-bold flex justify-between items-center w-full bg-gray-100 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-200 mt-4"
                onClick={() => toggleSubSection("catalogue")}
              >
                Catalogue Entry{" "}
                <span>{infoSubSection === "catalogue" ? "▲" : "▼"}</span>
              </button>
              {infoSubSection === "catalogue" && (
                <div
                  className="p-4 bg-white border-l-4 border-blue-300 rounded-lg shadow-inner mt-2"
                  dangerouslySetInnerHTML={renderCatalogueEntry()}
                />
              )}
            </div>
          )}

          {/* artwork location - just hardcode for now. */}
          <div className="bg-white p-4 rounded-lg shadow-md mt-4">
            <h2 className="font-bold">Artwork on display at:</h2>
            <p>{artwork.museum}</p>
            <p>{artwork.location || "Unknown location"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;
