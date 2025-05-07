// src/pages/EditBookPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import BookForm from "../components/BookForm";

const EditBookPage = () => {
  const { id } = useParams();

  return (
    <div className="App">
      <h2>Edit Buku</h2>
      <BookForm bookId={id} />
    </div>
  );
};

export default EditBookPage;
