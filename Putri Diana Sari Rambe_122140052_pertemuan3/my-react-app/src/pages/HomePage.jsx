import React, { useState } from "react";
import { useBooks } from "../context/BookContext";
import { useNavigate } from "react-router-dom";
import BookList from "../components/BookList";
import BookFilter from "../components/BookFilter";
import BookSearch from "../components/BookSearch";

const HomePage = () => {
  const { books, dispatch } = useBooks();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("semua");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter buku berdasarkan status dan pencarian
  const filteredBooks = books.filter((book) => {
    const bookStatus = book.status || "miliki"; // Jika status tidak ada, set default "miliki"
    const matchStatus = filter === "semua" || bookStatus === filter;
    const matchSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchStatus && matchSearch;
  });

  // Fungsi untuk menghapus buku
  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus buku ini?")) {
      dispatch({ type: "DELETE_BOOK", payload: id });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">My Book Dashboard</h1>
      </header>

      <main className="App-content">
        <div className="App-actions">
          <h2>📚 Daftar Buku Saya</h2>
          <button className="add-button" onClick={() => navigate("/add")}>
            + Tambah Buku
          </button>
        </div>

        <div className="App-controls">
          {/* Menampilkan filter dan pencarian */}
          <BookFilter filter={filter} setFilter={setFilter} />
          <BookSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        {/* Menampilkan daftar buku yang sudah difilter */}
        <BookList books={filteredBooks} onDelete={handleDelete} />
      </main>
    </div>
  );
};

export default HomePage;
