import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import EditBookPage from './pages/EditBookPage';

function App() {
  return (
    <BookProvider>
      <Router>
        <div className="App">
          <h1>Book Dashboard Putri</h1>
          <p>Selamat datang di aplikasi Manajemen Buku Putri!</p>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddBookPage />} />
            <Route path="/edit/:id" element={<EditBookPage />} />
          </Routes>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;
