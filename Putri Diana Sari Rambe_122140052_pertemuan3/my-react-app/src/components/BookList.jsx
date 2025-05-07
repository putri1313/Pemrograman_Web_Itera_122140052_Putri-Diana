// src/components/BookList.jsx
import React, { useState } from "react";
import { useBooks } from "../context/BookContext";
import { useNavigate } from "react-router-dom";

const BookList = () => {
  const { books, dispatch } = useBooks();
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState("semua");

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus buku ini?")) {
      dispatch({ type: "DELETE_BOOK", payload: id });
    }
  };

  const filteredBooks = books.filter((book) => {
    if (statusFilter === "semua") return true;
    return book.status === statusFilter;
  });

  return (
    <div>
      <h2>📚 Daftar Buku Saya</h2>

      {/* Dropdown Filter */}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="filterStatus">Filter Status: </label>
        <select
          id="filterStatus"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="semua">Semua</option>
          <option value="miliki">Dimiliki</option>
          <option value="baca">Sedang Dibaca</option>
          <option value="pinjam">Dipinjam</option>
        </select>
      </div>

      {filteredBooks.length === 0 && <p>Tidak ada buku dengan status ini.</p>}
      {filteredBooks.map((book) => (
        <div
          key={book.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            marginBottom: "10px",
            background: "#f9f9f9",
            borderRadius: "8px",
          }}
        >
          <div>
            <strong>{book.title}</strong> <br />
            <small>{book.author}</small> - <em>{book.status}</em>
          </div>
          <div>
            <button onClick={() => navigate(`/edit/${book.id}`)}>Edit</button>
            <button
              onClick={() => handleDelete(book.id)}
              style={{
                marginLeft: "10px",
                color: "white",
                backgroundColor: "red",
                border: "none",
                padding: "5px 10px",
                borderRadius: "4px",
              }}
            >
              Hapus
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
