import React from 'react';

const books = [
  { title: 'Master React', pages: 670 },
  { title: 'Deep Dive into Angular 11', pages: 800 },
  { title: 'Mongo Essentials', pages: 450 },
];

const BookDetails = () => {
  return (
    <div>
      <h2>Book Details</h2>
      {books.length > 0 ? (
        books.map((b, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <div style={{ fontWeight: '600' }}>{b.title}</div>
            <div>{b.pages}</div>
          </div>
        ))
      ) : (
        <div>No books to show.</div>
      )}
    </div>
  );
};

export default BookDetails;
