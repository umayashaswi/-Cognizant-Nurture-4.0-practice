import React from 'react';

const blogs = [
  { heading: 'React Learning', author: 'Stephen Biz', description: 'Welcome to learning React!' },
  { heading: 'Installation', author: 'Schewzdnier', description: 'You can install React from npm.' },
];

const BlogDetails = () => {
  return (
    <div>
      <h2>Blog Details</h2>
      {blogs.map((b, i) => (
        <div key={i} style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 24, fontWeight: '700' }}>{b.heading}</div>
          <div style={{ fontStyle: 'italic' }}>{b.author}</div>
          <div>{b.description}</div>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
