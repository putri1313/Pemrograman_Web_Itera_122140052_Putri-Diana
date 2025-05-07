import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useBooks } from "../context/BookContext";

const BookItem = ({ book }) => {
  const navigate = useNavigate();
  const { dispatch } = useBooks(); // Mengambil dispatch dari context

  const handleEdit = () => {
    // Arahkan ke halaman edit buku berdasarkan id
    navigate(`/edit/${book.id}`);
  };

  const handleDelete = () => {
    // Konfirmasi penghapusan buku
    if (window.confirm("Yakin ingin menghapus buku ini?")) {
      // Kirim aksi DELETE_BOOK untuk menghapus buku dari state
      dispatch({ type: "DELETE_BOOK", payload: book.id });
    }
  };

  return (
    <div className="book-item" style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <h3>{book.title}</h3>
      <p><strong>Penulis:</strong> {book.author}</p>
      <p><strong>Kategori:</strong> {book.category}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete} style={{ marginLeft: "0.5rem", color: "red" }}>Hapus</button>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired, // pastikan 'category' juga diberikan di objek buku
  }).isRequired
};

export default BookItem;
