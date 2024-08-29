import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ReadmeGenerator from './ReadmeGenerator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/readme-generator" element={<ReadmeGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;