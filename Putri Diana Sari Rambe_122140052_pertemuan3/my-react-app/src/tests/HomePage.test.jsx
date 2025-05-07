// src/tests/HomePage.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { BookProvider } from "../context/BookContext";
import HomePage from "../pages/HomePage";

// Dummy halaman tujuan navigasi untuk testing
const AddPage = () => <div>Halaman Tambah Buku</div>;

test("renders HomePage without crashing", () => {
  render(
    <BookProvider>
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    </BookProvider>
  );

  expect(screen.getByText(/daftar buku saya/i)).toBeInTheDocument();
  expect(screen.getByText(/\+ tambah buku/i)).toBeInTheDocument();
});

test("navigates to /add when 'Tambah Buku' button is clicked", () => {
  render(
    <BookProvider>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </MemoryRouter>
    </BookProvider>
  );

  const addButton = screen.getByText(/\+ tambah buku/i);
  fireEvent.click(addButton);

  expect(screen.getByText(/halaman tambah buku/i)).toBeInTheDocument();
});
