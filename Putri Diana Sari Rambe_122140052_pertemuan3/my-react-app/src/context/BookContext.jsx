// src/context/BookContext.jsx (atau sesuai path kamu)
import React, { createContext, useContext, useReducer, useEffect } from "react";

const BookContext = createContext();

const initialState = {
  books: JSON.parse(localStorage.getItem("books")) || [],
};

const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case "UPDATE_BOOK":
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
      };
    case "DELETE_BOOK":
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(state.books));
  }, [state.books]);

  return (
    <BookContext.Provider value={{ books: state.books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => useContext(BookContext);
