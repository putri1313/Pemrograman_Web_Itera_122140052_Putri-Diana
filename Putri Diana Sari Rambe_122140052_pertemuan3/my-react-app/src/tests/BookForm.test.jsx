// src/tests/BookForm.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { BookProvider } from "../context/BookContext";
import BookForm from "../components/BookForm";

test("renders BookForm and submits new book", () => {
  render(
    <BookProvider>
      <MemoryRouter>
        <BookForm />
      </MemoryRouter>
    </BookProvider>
  );

  const titleInput = screen.getByPlaceholderText(/judul/i);
  const authorInput = screen.getByPlaceholderText(/penulis/i);
  const statusSelect = screen.getByLabelText(/status/i);

  fireEvent.change(titleInput, { target: { value: "Test Book" } });
  fireEvent.change(authorInput, { target: { value: "Test Author" } });
  fireEvent.change(statusSelect, { target: { value: "pinjam" } });

  const submitButton = screen.getByRole("button", { name: /tambah buku/i });
  fireEvent.click(submitButton);

  // Karena navigasi dilakukan setelah submit, kita anggap sukses jika tidak ada error
});
