import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import Packages from './pages/Packages';
import BookNow from './pages/BookNow';
import PackageDetail from './pages/PackageDetail';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/package/:id" element={<PackageDetail />} />
          <Route path="/book-now" element={<BookNow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
