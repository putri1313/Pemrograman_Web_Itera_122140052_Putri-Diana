import React from "react";
import { useNavigate } from "react-router-dom";
import { useBooks } from "../context/BookContext";
import BookForm from "../components/BookForm";
import { v4 as uuidv4 } from "uuid";

const AddBookPage = () => {
  const navigate = useNavigate();
  const { dispatch } = useBooks();

  const handleAddBook = (newBook) => {
    const bookWithId = { ...newBook, id: uuidv4() };
    dispatch({ type: "ADD_BOOK", payload: bookWithId });
    navigate("/");
  };

  return (
    <div>
      <h2>Tambah Buku</h2>
      <BookForm
        initialData={{ title: "", author: "", status: "" }}
        onSubmit={handleAddBook}
      />
    </div>
  );
};

export default AddBookPage;
