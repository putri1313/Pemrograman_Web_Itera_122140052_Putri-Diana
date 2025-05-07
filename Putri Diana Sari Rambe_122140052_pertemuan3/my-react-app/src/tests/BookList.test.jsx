import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import BookForm from "../components/BookForm";

// Mock useNavigate dari react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

test("should submit form and navigate", () => {
  const mockNavigate = jest.fn();
  // Pasang mock pada useNavigate
  jest.spyOn(require("react-router-dom"), "useNavigate").mockReturnValue(mockNavigate);

  render(
    <Router>
      <BookForm />
    </Router>
  );

  // Mengisi form
  const titleInput = screen.getByLabelText(/Book Title/i);
  const authorInput = screen.getByLabelText(/Author/i);
  const submitButton = screen.getByText(/Submit/i);

  fireEvent.change(titleInput, { target: { value: "New Book" } });
  fireEvent.change(authorInput, { target: { value: "New Author" } });
  fireEvent.click(submitButton);

  // Memeriksa apakah mockNavigate dipanggil setelah submit
  expect(mockNavigate).toHaveBeenCalledWith("/books"); // Gantilah dengan route yang sesuai
});
