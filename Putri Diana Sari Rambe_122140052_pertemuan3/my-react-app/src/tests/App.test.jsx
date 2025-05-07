// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditBookPage from "./pages/EditBookPage";
import { BookProvider } from "./context/BookContext";

const App = () => {
  return (
    <BookProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/edit/:id" element={<EditBookPage />} />
        </Routes>
      </Router>
    </BookProvider>
  );
};

export default App;
