import React, { useState } from "react";
import { useBooksContext } from "../context/BookContext";
import BookList from "../components/BookList";
import FilterBar from "../components/FilterBar";

const BookListPage = () => {
  const { books } = useBooksContext();
  const [filter, setFilter] = useState("Semua");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchesStatus = filter === "Semua" || book.status === filter;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div>
      <h1>Daftar Buku</h1>
      <FilterBar
        filter={filter}
        onFilterChange={setFilter}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <BookList books={filteredBooks} />
    </div>
  );
};

export default BookListPage;
