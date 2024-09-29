import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BrowseArt from "./components/BrowseArt";
import Exhibition from "./components/Exhibition";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArtworkDetail from "./components/ArtworkDetail";
import artworks from "./exampleData";

const App = () => {
  const [exhibitionArtworks, setExhibitionArtworks] = useState(() => {
    const savedExhibition = localStorage.getItem("exhibitionArtworks");
    return savedExhibition ? JSON.parse(savedExhibition) : [];
  });

  const [searchKeyword, setSearchKeyword] = useState(""); //  search -  NEED TO UPDATE SEARCH LOGIC

  const addToExhibition = (artwork) => {
    if (!exhibitionArtworks.some((item) => item.id === artwork.id)) {
      setExhibitionArtworks((prev) => [...prev, artwork]);
    }
  };

  const removeFromExhibition = (artwork) => {
    setExhibitionArtworks((prev) =>
      prev.filter((item) => item.id !== artwork.id)
    );
  };

  useEffect(() => {
    localStorage.setItem(
      "exhibitionArtworks",
      JSON.stringify(exhibitionArtworks)
    );
  }, [exhibitionArtworks]);

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header onSearch={handleSearch} />
        {/* main content */}
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  artworks={artworks}
                  onAddToExhibition={addToExhibition}
                  exhibitionArtworks={exhibitionArtworks}
                />
              }
            />
            <Route
              path="/browse-art"
              element={
                <BrowseArt
                  artworks={artworks}
                  searchKeyword={searchKeyword}
                  onAddToExhibition={addToExhibition}
                  exhibitionArtworks={exhibitionArtworks}
                />
              }
            />
            <Route
              path="/exhibition"
              element={
                <Exhibition
                  exhibitionArtworks={exhibitionArtworks}
                  onRemoveFromExhibition={removeFromExhibition}
                />
              }
            />
            <Route path="/artwork/:source/:id" element={<ArtworkDetail />} />
          </Routes>
        </div>
        <Footer /> {/*keep footer at bottom*/}
      </div>
    </Router>
  );
};

export default App;
