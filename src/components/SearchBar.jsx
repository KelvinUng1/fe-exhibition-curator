import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(keyword);

    if (keyword.trim()) {
      navigate(`/browse-art?query=${keyword}`);
    } else {
      navigate("/browse-art");
    }
  };

  const handleClear = () => {
    setKeyword(""); // clear
    onSearch(""); // reset -- cant reset if empty atm need to update this
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center w-full max-w-lg"
    >
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search for artworks..."
        className="py-2 pl-4 pr-10 rounded-md border border-gray-300 w-full"
        style={{ width: "250px" }}
      />

      {keyword && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}

      {/* search icon butt */}
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </button>
    </form>
  );
};

export default SearchBar;
