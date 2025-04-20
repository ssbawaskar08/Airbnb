import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListingPage from './Components/ListingPage';
import SelectedListing from './Components/SelectedListing';
import ListingForm from './Components/ListingForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<ListingPage />} />
          <Route path='/listing/new' element={<ListingForm />} />
          <Route path='/listing/:id' element = {< SelectedListing/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
