import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Exhibition from './components/Exhibition';
import BrowseArt from './components/BrowseArt';
import ErrorMessage from './components/ErrorMessage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exhibition" element={<Exhibition />} />
        <Route path="/browse" element={<BrowseArt />} />
        <Route path="*" element={<ErrorMessage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
