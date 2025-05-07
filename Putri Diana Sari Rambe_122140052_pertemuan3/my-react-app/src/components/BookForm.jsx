// src/components/BookForm.jsx
import React, { useState, useEffect } from "react";
import { useBooks } from "../context/BookContext";
import { useNavigate, useParams } from "react-router-dom";

const BookForm = () => {
  const { dispatch, books } = useBooks();
  const navigate = useNavigate();
  const { id } = useParams();
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    status: "miliki",
  });

  useEffect(() => {
    if (id && books) {
      const book = books.find((b) => b.id === id);
      if (book) {
        setBookData({
          title: book.title,
          author: book.author,
          status: book.status || "miliki",
        });
      }
    }
  }, [id, books]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookData.title || !bookData.author || !bookData.status) {
      alert("Mohon isi semua field termasuk status.");
      return;
    }

    const newBook = { id: id || Date.now().toString(), ...bookData };

    if (id) {
      dispatch({ type: "UPDATE_BOOK", payload: newBook });
    } else {
      dispatch({ type: "ADD_BOOK", payload: newBook });
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={bookData.title}
        onChange={handleChange}
        placeholder="Judul"
        required
      />
      <input
        type="text"
        name="author"
        value={bookData.author}
        onChange={handleChange}
        placeholder="Penulis"
        required
      />
      <label htmlFor="status">Status:</label>
      <select
        id="status"
        name="status"
        value={bookData.status}
        onChange={handleChange}
        required
      >
        <option value="miliki">Dimiliki</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
      <button type="submit">{id ? "Update Buku" : "Tambah Buku"}</button>
    </form>
  );
};

export default BookForm;
