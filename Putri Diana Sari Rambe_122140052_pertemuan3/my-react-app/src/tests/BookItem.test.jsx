// BookItem.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookItem from '../components/BookItem';
import { BookProvider } from '../context/BookContext';

const sampleBook = {
  id: '1',
  title: 'Contoh Buku',
  author: 'Penulis Hebat',
  status: 'Belum Dibaca'
};

test('renders BookItem without crashing', () => {
  render(
    <BookProvider>
      <MemoryRouter>
        <BookItem book={sampleBook} />
      </MemoryRouter>
    </BookProvider>
  );

  // Pastikan ada teks judul
  expect(screen.getByText(/Contoh Buku/i)).toBeInTheDocument();
});
